
import React from "react";
import './MovieDetailCard.css'
import {IMAGE_URL} from "../../Components/services/Config";
export default function MovieDetailCard({movie}) {
    return (
        <div className={'detail_card_wrapper'} style={{backgroundImage: `${IMAGE_URL}w1500_and_h700${movie.backdrop_path}`}}>
            <div className={'image_side'}>
                <img src={`${IMAGE_URL}w400${movie.poster_path}`} alt=""/>
            </div>
            <div className={'description_side'}>
                <div className={'description_header'}>
                    <h1 >{movie.title}</h1>
                    <br/>
                    <p>{movie.release_date}({movie.original_language}) &#8226;
                        genres  &#8226; {movie.runtime}min</p>
                </div>
                <div className={'description_info'}>
                    <br/>
                    <h3><i>{movie.tagline}</i></h3>
                    <br/>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <br/>

                    <h4> Avarage vote:  {movie.vote_average}</h4>
                </div>
                <div> </div>
            </div>


        </div>
)
}
