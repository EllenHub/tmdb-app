import {useEffect, useState} from "react";
import React from "react";
import {IMAGE_URL} from "../../Components/services/config";
import MovieList from "../../Components/movie-list/MovieList";
import {endpoinTopRatedCurrentPage, endpointTopRated} from "../../Components/services/endpoints";

export default function TopRated() {
    const [moviesTop, setMoviesTop] = useState([])
    const [currentPage, setCurrentPage] =useState(0)
    useEffect(() => {
            fetchMoreMovies(endpointTopRated)
    }, [])

    const fetchMoreMovies = (path) => {
        fetch(path)
            .then(response =>response.json())
            .then((response) =>{
                setMoviesTop(response.results)
                setCurrentPage(response.page)
            })
    }
    const handleButton = () => {
        fetchMoreMovies(endpoinTopRatedCurrentPage +`${currentPage+1}` )
    }
    return (
        <div className={'movies_wrapper'}>
            <h1> Top Rated Movies</h1>
            <h1> Top Rated Movies</h1>
            <div className={'wrapper'}>{
                moviesTop.map(item =><MovieList key={item.id} image ={`${IMAGE_URL}w200${item.poster_path}`}
                name ={item.title} movieId = {item.id}/>
                )
            }</div>
            <div className={'load_more__button'}>
                <button onClick = {handleButton}> Load more </button>
            </div>
        </div>
    )
}
