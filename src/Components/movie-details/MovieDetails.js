import {useEffect, useState} from "react";
import {API_KEY, API_URL, IMAGE_URL} from "../services/config";

import './MovieDetails.css'
import MovieDetailsCard from "../movie-details-card/MovieDetailsCard";

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
                <MovieDetailsCard movie = {movie}/>
            </div>
            ) }