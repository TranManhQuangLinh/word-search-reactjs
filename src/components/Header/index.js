import logo from '../../img/logo.jpg'
import clsx from 'clsx'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../../App'


function Header() {
    const context = useContext(Context)

    return (
        <header className={clsx("container-fluid", styles.header)}>
            <nav className="navbar navbar-expand-lg bg-light d-flex flex-column" style={{ backgroundColor: "white !important" }}>
                <img src={logo} className="rounded mx-auto d-block" style={{ height: "100px", width: '200px' }} alt="" />
                <div className="container-fluid">
                    <span className="navbar-brand" href="#">Tìm từ:</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link id="spell_like" className={clsx('nav-link', { 'active': context.type === 'dong am' })} aria-current="page" to="/DongAm" onClick={() => {
                                    if(context.word){context.infoText.innerHTML = ""}
                                    context.setType('dong am')
                                    context.setSearchCheck(!context.searchCheck)
                                }}>Đồng âm</Link>
                            </li>
                            <li className='nav-item'>
                                <Link id="mean_like" className={clsx('nav-link', { 'active': context.type === 'dong nghia' })} to="/DongNghia" onClick={() => {
                                    if(context.word){context.infoText.innerHTML = ""}
                                    context.setType('dong nghia')
                                    context.setSearchCheck(!context.searchCheck)
                                }}>Đồng nghĩa</Link>
                            </li>
                            <li id="antonyms" className='nav-item'>
                                <Link id='antonyms' className={clsx('nav-link', { 'active': context.type === 'trai nghia' })} to="/TraiNghia" onClick={() => {
                                    if(context.word){context.infoText.innerHTML = ""}
                                    context.setType('trai nghia')
                                    context.setSearchCheck(!context.searchCheck)
                                }}>Trái nghĩa</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header