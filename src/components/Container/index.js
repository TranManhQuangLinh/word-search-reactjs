import { Route, Routes } from 'react-router-dom'
import styles from './Container.module.css'
import DongAm from '../tags/DongAm'
import DongNghia from '../tags/DongNghia'
import TraiNghia from '../tags/TraiNghia'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setType } from '../../actions/type'
import { setWord } from '../../actions/word'
import { setResultList } from '../../actions/resultList'
import { setSearchCheck } from '../../actions/searchCheck'
import { setInfoText } from '../../actions/infoText'
import { setLoading } from '../../actions/loading'


function Container() {

    const type = useSelector(state => state.type)
    const word = useSelector(state => state.word)
    const loading = useSelector(state => state.loading)
    const infoText = useSelector(state => state.infoText)
    const searchCheck = useSelector(state => state.searchCheck)

    console.log('infoText', infoText);

    const dispatch = useDispatch()

    const result_list = useRef()

    const homeClickEffect = () => {
        window.scrollTo(0, 0)

        dispatch(setResultList([]))

        dispatch(setSearchCheck(!searchCheck))

        switch (type) {
            case 'dong am':
                document.getElementById('spell_like').click()
                break;
            case 'trai nghia':
                document.getElementById('antonyms').click()
                break;
            default:
                document.getElementById('mean_like').click()
                break;
        }

    }

    return (
        <>
            <div className="container">
                <div className={styles.search}>
                    <input id='search_input' value={word} type="text" placeholder="Search a word" required spellCheck="false" onChange={e => dispatch(setWord(e.target.value))}
                        onKeyUp={e => {
                            if (e.key === "Enter" && word) {
                                console.log('Enter');

                                homeClickEffect()
                            }
                        }}
                    />
                    <i className="fas fa-search"></i>
                    <span className="material-icons" onClick={() => {
                        dispatch(setWord(''))
                        dispatch(setInfoText('Type any existing word and press enter to get meaning, example, synonyms, etc.'))
                        dispatch(setResultList([]))
                        document.getElementById('search_input').focus()
                    }}

                    >close</span>
                </div>
                
                <button type="button" className={`btn btn-primary ${styles.search_button}`} onClick={() => {
                    if (word) { homeClickEffect() }
                }}>
                    Search
                </button>

                <p style={{ marginTop: '20px' }}>{infoText}</p>

                {loading && (<div className={styles.loading}>
                    <div id={styles.loading_icon}></div>
                    <div id={styles.loading_text}>Loading...</div>
                </div>) }

                <ol ref={result_list} className={styles.result_list}>
                    <Routes>
                        <Route path='/' element={<></>} />
                        <Route path='/DongAm' element={<DongAm styles={styles} />} />
                        <Route path='/DongNghia' element={<DongNghia styles={styles} />} />
                        <Route path='/TraiNghia' element={<TraiNghia styles={styles} />} />
                    </Routes>
                </ol>

            </div>
        </>
    )
}

export default Container
