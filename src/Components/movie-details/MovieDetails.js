import {useEffect, useState} from "react";
import {API_KEY, API_URL, IMAGE_URL} from "../services/Config";

import './MovieDetails.css'
import MovieDetailCard from "../movie-details-card/MovieDetailCard";

export default function MovieDetails(props) {
    console.log(props);
let {match:{params:{movieId}}} = props
    
let [movie,setMovie] =useState({})
    useEffect(() => {

        fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(response =>response.json())
            .then(response => { console.log(response)
                setMovie({...response}
                )
            })

    }, [movieId])

    return (
        <div className={'details_wrapper'}>
                <MovieDetailCard movie = {movie}/>
            </div>
            ) }