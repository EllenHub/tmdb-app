import {useState} from "react";

export default function NavSearch() {

    const[iconToggle, setIconToggle] = useState(false)

    const icons = !iconToggle?<i className="fas fa-search"></i>:<i className="fas fa-times"></i>;


    return (
        <div className={'search_icon'}>
            <div onClick={() => setIconToggle(!iconToggle)} >{icons}</div>
            {iconToggle && <div className={'searchInput'}>

                <input  className={'search'} type="text"
                        placeholder="Search for a movie, tv-show... " />

            </div>}
        </div>
)
}
