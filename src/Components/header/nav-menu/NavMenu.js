import React from 'react';
import {Link } from "react-router-dom";

export default function NavMenu() {
    return (

            <ul className="header_nav">
                <li className={'header_nav__item'}><Link to={'/'}>Movies</Link>
                    <ul className="animation_container_nav">
                        <li><Link to={'popular'}>Popular</Link></li>
                        <li><Link to={'now-playing'}>Now Playing</Link></li>
                        <li><Link to={'upcoming'}>Upcoming</Link></li>
                        <li><Link to={'top-rated'}>Top Rated</Link></li>
                    </ul>
                </li>
                <li className={'header_nav__item'}><Link to={'genres'}> Genres</Link>

                </li>
                <li className={'header_nav__item'}><Link to={'popular-people'}>People</Link>
                </li>
            </ul>
)
}
