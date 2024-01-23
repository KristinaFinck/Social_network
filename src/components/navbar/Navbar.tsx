import React from 'react';
import s from './Navbar.module.css';

export const Navbar = () => {

    return (
    <nav className= {s.nav}>
        <div className={s.item}>
            <a href = '/profile'>Profile</a>
        </div>
        <div className={s.item}>
            <a href = '/dialogs'>Messages</a>
        </div>
        <div className={s.item}>
            <a href = '/news/News'>News</a>
        </div>
        <div className={s.item}>
            <a href='/music/Music'>Music</a>
        </div>
        <div className={s.item}>
            <a href = '/settings/Settings'>Settings</a>
        </div>
    </nav>
    )
}