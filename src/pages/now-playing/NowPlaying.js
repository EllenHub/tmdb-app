import React, {useEffect, useState} from "react";
import {API_KEY, IMAGE_URL} from "../../Components/services/Config";
import MovieList from "../../Components/movie-list/MovieList";

export default function NowPlaying() {
    const [newPlaying, setNewPlaying] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    fetchMoreMovie (endpoint)
}, [])

const fetchMoreMovie = (path) => {
        fetch(path)
            .then(response => response.json())
            .then((response) => {
                setNewPlaying(response.results)
                setCurrentPage(response.page)

            })

}
    const handleButton = () => {
    let endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`
    fetchMoreMovie(endpoint)
    }
    return (
        <div className={'movies_wrapper'}>
            <h1> Now Playing</h1>
            <div className={'wrapper'}>{
                newPlaying.map(item =><MovieList key={item.id} image ={`${IMAGE_URL}w200${item.poster_path}`}
                                                 name ={item.title} movieId = {item.id}/>)}
            </div>
            <div className={'load_more__button'}>
                <button onClick = {handleButton}> Load more </button>
            </div>

        </div>
)
}
