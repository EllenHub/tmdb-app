import React, {useEffect, useState} from "react";
import {API_KEY, IMAGE_URL} from "../../Components/services/config";
import MovieList from "../../Components/movie-list/MovieList";
import {endpointNowPlaying, endpointNowPlayingCurrentPage} from "../../Components/services/endpoints";

export default function NowPlaying() {
    const [nowPlaying, setNowPlaying] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

useEffect(() => {
    fetchMoviesPath(endpointNowPlaying)
}, [])
const fetchMoviesPath = (path) => {
        fetch(path)
            .then(response => response.json())
            .then((response) => {
                setNowPlaying(response.results)
                setCurrentPage(response.page)
            })
}
    const handleButton = () => {
    fetchMoviesPath(endpointNowPlayingCurrentPage +`${currentPage + 1}`)
    }
    return (
        <div className={'movies_wrapper'}>
            <h1> Now Playing</h1>
            <div className={'wrapper'}>{
                nowPlaying.map(item =><MovieList key={item.id} image ={`${IMAGE_URL}w200${item.poster_path}`}
                                                 name ={item.title} movieId = {item.id}/>)}
            </div>
            <div className={'load_more__button'}>
                <button onClick = {handleButton}> Load more </button>
            </div>
        </div>
)
}
