import { Route, Routes } from 'react-router-dom'
import styles from './Container.module.css'
import DongAm from '../tags/DongAm'
import DongNghia from '../tags/DongNghia'
import TraiNghia from '../tags/TraiNghia'
import { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../../App'

function Container() {

    const context = useContext(Context)
    const loadingIcon = useRef()
    const loadingText = useRef()
    const infoText = useRef()
    const result_list = useRef()

    const homeClickEffect = () => {

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

    // set element khi component mounted
    useEffect(() => {
        context.setLoadingIcon(loadingIcon.current)
        context.setLoadingText(loadingText.current)
        context.setInfoText(infoText.current)
    }, [])

    // useEffect(() => context.setWord(word))

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
                        context.infoText.innerHTML = 'Type any existing word and press enter to get meaning, example, synonyms, etc.'
                        context.setResultList([])
                        document.getElementById('search_input').focus()
                    }}

                    >close</span>
                </div>
                <div className={styles.search_button}>
                    <button type="button" className="btn btn-primary" onClick={() => {
                        if(context.word){homeClickEffect()}
                    }}>
                        <i className="fas fa-search"></i>
                        Search
                    </button>
                </div>
                <div className={styles.loading}>
                    <div id={styles.loading_icon} ref={loadingIcon}></div>
                    <div id={styles.loading_text} ref={loadingText}></div>
                </div>
                <p ref={infoText}>Type any existing word and press enter to get meaning, example, synonyms, etc.</p>
                <ol ref={result_list}>
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
 