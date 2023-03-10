import logo from '../../img/logo.jpg'
import styles from './Header.module.css'

import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'

import { setType } from '../../actions/type'
import { setWord } from '../../actions/word'
import { setResultList } from '../../actions/resultList'
import { setSearchCheck } from '../../actions/searchCheck'
import { setInfoText } from '../../actions/infoText'
import { setLoading } from '../../actions/loading'


function Header() {
    const type = useSelector(state => state.type)
    const word = useSelector(state => state.word)
    const searchCheck = useSelector(state => state.searchCheck)
    const dispatch = useDispatch()

    return (
        <header className={clsx("container-fluid", styles.header)}>
            <nav className="navbar navbar-dark navbar-expand-lg d-flex flex-column" style={{ backgroundColor: "white !important" }}>
                <img src={logo} className="rounded mx-auto d-block" style={{ height: "100px", width: '200px' }} alt="" />
                <div className="container-fluid justify-content-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link id="spell_like" className={clsx('nav-link', styles.tag, { 'active': type === 'dong am' })} aria-current="page" to="/DongAm" onClick={() => {
                                    if (word) {
                                        dispatch(setInfoText(''))
                                        dispatch(setResultList([]))
                                    }
                                    dispatch(setType('dong am'))
                                    dispatch(setSearchCheck(!searchCheck))
                                }}>??????ng ??m</Link>
                            </li>
                            <li className='nav-item'>
                                <Link id="mean_like" className={clsx('nav-link', styles.tag, { 'active': type === 'dong nghia' })} to="/DongNghia" onClick={() => {
                                    if (word) {
                                        dispatch(setInfoText(''))
                                        dispatch(setResultList([]))
                                    }
                                    dispatch(setType('dong nghia'))
                                    dispatch(setSearchCheck(!searchCheck))
                                }}>??????ng nghi??a</Link>
                            </li>
                            <li className='nav-item'>
                                <Link id='antonyms' className={clsx('nav-link', styles.tag, { 'active': type === 'trai nghia' })} to="/TraiNghia" onClick={() => {
                                    if (word) {
                                        dispatch(setInfoText(''))
                                        dispatch(setResultList([]))
                                    }
                                    dispatch(setType('trai nghia'))
                                    dispatch(setSearchCheck(!searchCheck))
                                }}>Tra??i nghi??a</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header