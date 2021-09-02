import {IMAGE_URL} from "../../../Components/services/Config";
import React from "react";

import './PersonDetailCard.css'

export default function PersonDetailCard({value}) {
    return (
        <div className={'person_detail_card_wrapper'}>
            <div className={'image_side'}>
                <img src={`${IMAGE_URL}w400${value.profile_path}`} alt=""/>
            </div>
            <div className={'person_description'}>
                <h2>{value.name}</h2>
                <div className={'personal_info'}>
                    <p><b>Known for:</b> {value.known_for_department}</p>
                    <p><b>Popularity:</b> {value.popularity}</p>
                    <p><b>Birthday:</b> {value.birthday}</p>
                    <p><b>Place of birth:</b> {value.place_of_birth}</p>

                    { value.biography && <h4>Biography</h4> &&
                        <p className={'biography'}> {value.biography}</p>}

                </div>
            </div>

        </div>
)
}

//adult: false
// also_known_as: (3) ["有村架純", "ありむら かすみ", "아리무라 카스미"]
// biography: "Kasumi Arimura (有村 架純 Arimura Kasumi, born February 13, 1993) is a Japanese actress.She is known for playing the young Haruko Amano in Amachan (2013), and the lead role in Strobe Edge (2015) and Flying Colors (2015).\n\nDescription above from the Wikipedia article Kasumi Arimura, licensed under CC-BY-SA, full list of contributors on Wikipedia."
// birthday: "1993-02-13"
// deathday: null
// gender: 1
// homepage: "http://www.flamme.co.jp/KasumiArimura"
// id: 1039305
// imdb_id: "nm4134328"
// known_for_department: "Acting"
// name: "Kasumi Arimura"
// place_of_birth: "Itami, Hyogo Prefecture, Japan"
// popularity: 62.305
// profile_path: "/irMWWtJQu3kWEOB9JUflKBuhh8H.jpg"