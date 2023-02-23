import logo from '../../img/logo.jpg'
import clsx from 'clsx'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../App'


function Header() {
    const context = useContext(Context)

    return (
        <header className={clsx("container-fluid", styles.header)}>
            <nav className="navbar navbar-expand-lg d-flex flex-column" style={{ backgroundColor: "white !important" }}>
                <img src={logo} className="rounded mx-auto d-block" style={{ height: "100px", width: '200px' }} alt="" />
                <div className="container-fluid">
                    
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link id="spell_like" className={clsx('nav-link', styles.tag, { 'active': context.type === 'dong am' })} aria-current="page" to="/DongAm" onClick={() => {
                                    if(context.word){context.setInfoText('')}
                                    context.setType('dong am')
                                    context.setSearchCheck(!context.searchCheck)
                                }}>Đồng âm</Link>
                            </li>
                            <li className='nav-item'>
                                <Link id="mean_like" className={clsx('nav-link', styles.tag, { 'active': context.type === 'dong nghia' })} to="/DongNghia" onClick={() => {
                                    if(context.word){context.setInfoText('')}
                                    context.setType('dong nghia')
                                    context.setSearchCheck(!context.searchCheck)
                                }}>Đồng nghĩa</Link>
                            </li>
                            <li className='nav-item'>
                                <Link id='antonyms' className={clsx('nav-link', styles.tag, { 'active': context.type === 'trai nghia' })} to="/TraiNghia" onClick={() => {
                                    if(context.word){context.setInfoText('')}
                                    context.setType('trai nghia')
                                    context.setSearchCheck(!context.searchCheck)
                                }}>Trái nghĩa</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header