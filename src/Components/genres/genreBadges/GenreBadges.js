import './GenreBadges.css'

import React, {useEffect } from "react";
import { Chip } from "@material-ui/core";
import axios from "axios";
import {API_KEY, API_URL} from "../../services/config";

const GenreBadges = ({genres, setGenres, selectedGenres, setSelectedGenres, currentPage,}) => {
    console.log(genres);
    const fetchGenres = async () => {
        const { data } = await axios.get(
            `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`
        );
        setGenres(data.genres);
    };

    useEffect(() => {
        fetchGenres()
    }, [currentPage]);

    //handle add
    const handleAddGenres = genre => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter(g => g.id !== genre.id));
    };

    //handle add
    const handleRemoveGenres = genre => {
        setSelectedGenres(
            selectedGenres.filter(selected => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
    };

    return (
        <div className={'badges_chip'}>
            {selectedGenres.map(genre => (
                <Chip
                    onDelete={() => handleRemoveGenres(genre)}
                    style={{ backgroundColor: "#adb5bd" }}
                    clickable
                    label={genre.name}
                />
            ))}
            {genres.map(genre => (
                <Chip
                    onClick={() => handleAddGenres(genre)}
                    clickable
                    className={'chip_on_click'}
                    style={{ fontSize: "20px", margin: "5px",backgroundColor: "#b1eded" }}
                    label={genre.name}

                />
            ))}
        </div>
    );
};

export default GenreBadges;