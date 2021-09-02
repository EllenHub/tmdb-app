import './Header.css'

import NavMenu from "./nav-menu/NavMenu";
import NavSearch from "./nav-search/NavSearch";

import logo from '../../images/logo.svg';
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";


export default function Header() {
    return (
        <div className="header">
            <div className="header_wrapper">
                <div className="header_left">
                    <div className="logo"><a href="/"><img src={logo} alt="logo"/></a></div>
                    <NavMenu/>
                </div>
                <div className="header_right">

                   <ThemeSwitcher/>
                    <NavSearch/>
                </div>
            </div>
        </div>
)
}
