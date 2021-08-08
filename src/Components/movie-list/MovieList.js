
import './MovieList.css'
import {Link} from "react-router-dom";
import React from "react";
export default function MovieList({name, image, movieId}) {
    return (
            <div className={'card_style'}>
                <div>
                    <Link to = {'movie-details/'+ movieId}><img src={image} alt="title movie"/></Link>
                </div>
                <div className={'description'}>
                    <h3 className={'movie_name'}> <Link to={'movie-details/'+ movieId}>{name}</Link></h3>
                </div>

            </div>

)
}