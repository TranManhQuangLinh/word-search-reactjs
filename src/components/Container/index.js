import { Route, Routes } from 'react-router-dom'
import styles from './Container.module.css'
import DongAm from '../tags/DongAm'
import DongNghia from '../tags/DongNghia'
import TraiNghia from '../tags/TraiNghia'
import { useContext, useRef } from 'react'
import { Context } from '../../App'

function Container() {

    const context = useContext(Context)
    const result_list = useRef()

    const homeClickEffect = () => {
        window.scrollTo(0, 0)

        context.setResultList([])

        context.setSearchCheck(!context.searchCheck)

        switch (context.type) {
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
                    <input id='search_input' value={context.word} type="text" placeholder="Search a word" required spellCheck="false" onChange={e => context.setWord(e.target.value)}
                        onKeyUp={e => {
                            if (e.key === "Enter" && context.word) {
                                console.log('Enter');

                                homeClickEffect()
                            }
                        }}
                    />
                    <i className="fas fa-search"></i>
                    <span className="material-icons" onClick={() => {
                        context.setWord('')
                        context.setInfoText('Type any existing word and press enter to get meaning, example, synonyms, etc.')
                        context.setResultList([])
                        document.getElementById('search_input').focus()
                    }}

                    >close</span>
                </div>
                
                <button type="button" className={`btn btn-primary ${styles.search_button}`} onClick={() => {
                    if (context.word) { homeClickEffect() }
                }}>
                    Search
                </button>

                <p style={{ marginTop: '20px' }}>{context.infoText}</p>

                {context.loading && (<div className={styles.loading}>
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
