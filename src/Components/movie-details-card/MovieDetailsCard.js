
import React from "react";
import './MovieDetailsCard.css'
import {IMAGE_URL} from "../services/config";


export default function MovieDetailsCard({movie}) {
    return (
        <div className={'detail_card_wrapper'} style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`

        }}>
            <div className={'details_wrapper__bg'}>
                <div className={'image_side'}>
                    <img src={`${IMAGE_URL}w400${movie.poster_path}`} alt=" poster of movie"/>
                </div>
                <div className={'description_side'}>
                    <div className={'description_header'}>
                        <h1>{movie.title}</h1>
                        <br/>
                        <p>{movie.release_date}({movie.original_language}) &#8226; 
                            {movie.genres && movie.genres.map(val => <span style={{ margin: '3px'}}> <i>{val.name}</i></span>)} &#8226; {movie.runtime}min</p>
                    </div>
                    <div className={'description_info'}>
                        <br/>
                        <h3><i>{movie.tagline}</i></h3>
                        <br/>
                        <h2>Overview</h2>
                        <p>{movie.overview}</p>
                        <br/>

                        <h4> Average vote: {movie.vote_average}</h4>
                    </div>
                </div>
            </div>


        </div>
)
}
