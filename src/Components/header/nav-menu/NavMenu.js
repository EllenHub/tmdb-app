import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import MoviesPopular from "../movies/movies-popular/MoviesPopular";

export default function NavMenu() {
    return (
        <Router>
            <ul className="header_nav">
                <li className={'header_nav__item'}><Link to={'/'}>Movies</Link>
                    <ul className="animation_container_nav">
                        <li><Link to={'popular'}>Popular</Link></li>
                        <li><Link to={'now-playing'}>Now Playing</Link></li>
                        <li><Link to={'upcoming'}>Upcoming</Link></li>
                        <li><Link to={'top-rated'}>Top Rated</Link></li>
                    </ul>
                </li>
                <li className={'header_nav__item'}><Link to={'tv-shows'}>TV Shows</Link>
                    <ul className="animation_container_nav">
                        <li><Link to={'popular'}>Popular</Link></li>
                        <li><Link to={'airing-today'}>Airing Today</Link></li>
                        <li><Link to={'on-tv'}>On TV</Link></li>
                        <li><Link to={'top-rated'}>Top Rated</Link></li>
                    </ul>
                </li>
                <li className={'header_nav__item'}><Link to={'people'}>People</Link>
                    <ul className="animation_container_nav small">
                        <li><Link to={'popular-people'}>Popular People</Link></li>
                    </ul>
                </li>
                <li className={'header_nav__item'}><Link to={'more'}>More</Link>
                    <ul className="animation_container_nav">
                        <li><Link to={'discussion'}>Discussion</Link></li>
                        <li><Link to={'leaderboard'}>Leaderboard</Link></li>
                        <li><Link to={'support'}>Support</Link></li>
                        <li><Link to={'api'}>API</Link></li>
                    </ul>
                </li>
                <Switch>
                    <Route path={'/popular'}> <MoviesPopular/>
                </Route>
                </Switch>
            </ul>
        </Router>


)
}
