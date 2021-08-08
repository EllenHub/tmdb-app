import {useEffect, useState} from "react";
import React from "react";
import {API_URL,API_KEY,IMAGE_URL} from "../../Components/services/Config";
import MovieList from "../../Components/movie-list/MovieList";


export default function TopRated() {
    const [moviesTop, setMoviesTop] = useState([])
    useEffect(() => {
        fetch(`${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response =>response.json())
            .then((response) =>{
                setMoviesTop(response)
                console.log(response);
            })
    }, [])
    return (
        <div className={'movies_wrapper'}>
            <h1> Popular Movies</h1>
            <div className={'wrapper'}>{
                moviesTop.map(item =><MovieList key={item.id} image ={`${IMAGE_URL}w200${item.poster_path}`}
                                                name ={item.title} movieId = {item.id}/>
                )
            }</div>
        </div>
    )
}
