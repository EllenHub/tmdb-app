import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header_wrapper">
                <div className="header_left">
                    <div className="logo"><a href=""><img src="/src/images/img.png" alt="logo"/></a></div>
                    <ul className="header_nav">
                        <li><a href="#">Movie</a>
                            <div className="animation_container">
                                <ul className= "animation_container_nav">
                                <li><a href="#">Popular</a></li>
                                <li><a href="#">Now Playing</a></li>
                                <li><a href="#">Upcoming</a></li>
                                <li><a href="#">Top Rated</a></li>

                            </ul>

                            </div>
                        </li>
                        <li><a href="#">TV Shows</a></li>
                        <li><a href="#">People</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                </div>
                <div className="header_right">
                    <div><i className="fas fa-search"></i></div>
                </div>
            </div>
        </div>
)
}
