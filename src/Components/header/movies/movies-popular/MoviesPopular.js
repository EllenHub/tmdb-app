import {useEffect, useState} from "react";
import React from "react";
import {API_URL,API_KEY} from "../../../services/Config";


export default function MoviesPopular() {
    const [popularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response =>response.json())
            .then(({results}) =>{
                setPopularMovies(results)
                console.log(results);
            })
    }, [])
    return (
        <div>
            {
                popularMovies.map(item => <div>
                    <div style={{
                        background: "white", width: '500px', height: '300px'}}> {item.original_title}</div>
                </div>)
            }
        </div>
)
}
