import React, {useEffect, useState} from "react";
import {API_KEY, API_URL, IMAGE_URL} from "../../Components/services/config";
import MovieList from "../../Components/movie-list/MovieList";
import {endpointPopular, endpointPopularCurrentPage} from "../../Components/services/endpoints";

export default function Home() {

    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchMoviesPath(endpointPopular)
    }, [])

    const fetchMoviesPath = (path) => {
        fetch(path)
            .then(response =>response.json())
            .then(response =>{
                setMovies(response.results)
                setCurrentPage(response.page)
            })
    }
    const handleButton = () => {
        fetchMoviesPath(endpointPopularCurrentPage + `${currentPage + 1}`)
    }

    const handleOnSubmit =(e) => {
    e.preventDefault()
        if (searchTerm) {
            fetch(`${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage}` + searchTerm)
                .then(response => response.json())
                .then(response =>
                    setMovies(response.results))
            setSearchTerm("")
        }
    }

    const handleOnChange= (e) => {
    setSearchTerm(e.target.value)
    }
    return (
            <div className={'main'}>
                <div className='inner_content'>
                    <div className={'inner_wrapper'}>
                        <div className={'title'}>
                            <h2>Welcome.</h2>
                            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>
                        <div className={'search_box'}>
                            <form onSubmit={handleOnSubmit}>
                                <input className={'search'}
                                       type="search"
                                       placeholder="Search..."
                                       value={searchTerm}
                                       onChange={handleOnChange}/>
                                <input className={'search_submit'}
                                       type="submit"
                                       value='Submit'/>
                            </form>
                        </div>
                    </div>
                    <div className={'movies_wrapper_home'}>
                        <h3> What's Popular</h3>
                        <div className={'wrapper'}>{
                            movies.map(item =><MovieList key={item.id} image ={`${IMAGE_URL}w200${item.poster_path}`}
                                                         name ={item.title} movieId = {item.id}/>
                            )}
                        </div>
                        <br/>
                        <div className={'load_more__button'}>
                            <button onClick = {handleButton}> Load more </button>
                        </div>
                    </div>
                </div>
            </div>


)
}



