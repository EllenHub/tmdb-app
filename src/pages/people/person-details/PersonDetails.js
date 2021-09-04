import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../../../Components/services/config";

import PersonDetailsCard from "../person-details-card/PersonDetailsCard";
import './PersonDetails.css'

export default function PersonDetails(props) {
    console.log(props);
    let {match:{params:{personId}}} = props

    let [personDetail, setPersonDetail] = useState({})

    useEffect(() => {
        fetch(`${API_URL}person/${personId}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setPersonDetail({...response})
        })
    }, [personId])
    return (
        <div className={'person_detail_wrapper'}>
            <PersonDetailsCard value={personDetail}/>
        </div>
)
}


// https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US