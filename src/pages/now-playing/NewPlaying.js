import React, {useEffect, useState} from "react";
import {API_KEY, IMAGE_URL} from "../../Components/services/Config";
import MovieList from "../../Components/movie-list/MovieList";

export default function NewPlaying() {
    const [newPlaying, setNewPlaying] = useState([])
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then((response) => {
            setNewPlaying(response.results)
            console.log(response)
        })
}, [])
    return (
        <div className={'popular_movies_wrapper'}>
            <h1> Popular Movies</h1>
            <div className={'wrapper'}>{
                newPlaying.map(item =><MovieList key={item.id} image ={`${IMAGE_URL}w200${item.poster_path}`}
                                                 name ={item.title} movieId = {item.id}/>)}
            </div>
        </div>
)
}
