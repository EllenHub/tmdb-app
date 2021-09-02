import {useEffect, useState} from "react";
import React from "react";
import {API_URL,API_KEY,IMAGE_URL} from "../../Components/services/Config";
import MovieList from "../../Components/movie-list/MovieList";


export default function TopRated() {
    const [moviesTop, setMoviesTop] = useState([])
    const [currentPage, setCurrentPage] =useState(0)
    useEffect(() => {
        let endpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
            fetchMoreMovies(endpoint)
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
        let endpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=${currentPage+1}`
        fetchMoreMovies(endpoint)
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
