import {useEffect, useState} from "react";
import React from "react";
import {API_URL,API_KEY,IMAGE_URL} from "../../Components/services/Config";
import MovieList from "../../Components/movie-list/MovieList";


export default function Upcoming() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch(`${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response =>response.json())
            .then(({results}) =>{
                setMovies(results)
                console.log(results);
            })
    }, [])
    return (
        <div className={'movies_wrapper'}>
            <h1> Popular Movies</h1>
            <div className={'wrapper'}>{
                movies.map(item =><MovieList key={item.id} image ={`${IMAGE_URL}w200${item.poster_path}`}
                                             name ={item.title} movieId = {item.id}/>
                )
            }</div>
        </div>
    )
}
