import {useEffect, useState} from "react";
import React from "react";
import {API_URL,API_KEY,IMAGE_URL} from "../../Components/services/Config";
import MovieList from "../../Components/movie-list/MovieList";


export default function Upcoming() {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    useEffect(() => {
        let endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        fetchMoreMovies(endpoint)
    }, [])
    const fetchMoreMovies = (path) => {
        fetch(path)
            .then(response =>response.json())
            .then(response =>{
                setMovies(response.results)
                setCurrentPage(response.page)
            })
    }
    const handleButton = () => {
        let endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`
        fetchMoreMovies(endpoint)
    }

    return (
        <div className={'movies_wrapper'}>
            <h1> Upcoming movies </h1>
            <div className={'wrapper'}>{
                movies.map(item =><MovieList key={item.id} image ={`${IMAGE_URL}w200${item.poster_path}`}
                                             name ={item.title} movieId = {item.id}/>
                )
            }</div>
            <div className={'load_more__button'}>
                <button onClick = {handleButton}> Load more </button>
            </div>
        </div>
    )
}
