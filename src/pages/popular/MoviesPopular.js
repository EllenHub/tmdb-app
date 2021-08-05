import {useEffect, useState} from "react";
import React from "react";
import {API_URL,API_KEY,IMAGE_URL} from "../../Components/services/Config";
import Card from "../../Components/card/Card";


import './MoviesPopular.css'
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
        <div className={'popular_movies_wrapper'}>
            <h1> Popular Movies</h1>
            <div className={'wrapper'}>{
                popularMovies.map(item =><Card key={item.id} image ={`${IMAGE_URL}w200${item.poster_path}`}
                   name ={item.title} movieId = {item.id}/>
                )
            }</div>
        </div>
)
}
