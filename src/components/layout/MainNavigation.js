import { Link } from 'react-router-dom';
import React from 'react'
import cssClasses from './MainNavigation.module.css'
function MainNavigation() {
    return (
        <header className={cssClasses.header}>
            <div className={cssClasses.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'> All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetups'> New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/faviourite'> Faviourite</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation