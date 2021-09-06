import GenreBadges from "./genreBadges/GenreBadges";
import './Genres.css'
import React, {useEffect, useState} from "react";
import {API_KEY, API_URL, IMAGE_URL} from "../services/config";
import genresIDs from "../services/ganreId";
import axios from "axios";
import MovieList from "../movie-list/MovieList";


 export default function Genres() {
     const [movies, setMovies] = useState([]);
     const [genres, setGenres] = useState([]);
     const [selectedGenres, setSelectedGenres] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);


     const genresIds = genresIDs(selectedGenres);

     const fetchMovies = async() => {
         try {
             const {data} = await axios.get(`${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${currentPage}&with_genres=${genresIds}`);
             setMovies(data.results)
             setCurrentPage(data.pages)
         } catch (error) {
             console.log(error)
         }
     }
     useEffect(() => {
         fetchMovies()
     }, [currentPage, selectedGenres]);

    return (
        <div className={'genres_wrapper'}>
            <div className={'genre_badges'}>
                <h3>Genres</h3>
                <GenreBadges currentPage ={currentPage} genres={genres} setGenres={setGenres}
                    selectedGenres={selectedGenres}
                    setSelectedGenres={setSelectedGenres}
                />
            </div>
            <div className={'movies_display'}>
                <div className={'wrapper'}>
                    {
                    movies.map(item =><MovieList key={item.id} image ={`${IMAGE_URL}w200${item.poster_path}`}
                    name ={item.title} movieId = {item.id}/>
                    )}
                </div>
            </div>
        </div>
)
}
