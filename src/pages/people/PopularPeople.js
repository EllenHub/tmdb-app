import React, {useEffect, useState} from "react";
import { IMAGE_URL} from "../../Components/services/config";
import PeopleList from "./people-list/PeopleList";
import {endpointPeople, endpointPeopleCurrentPage} from "../../Components/services/endpoints";


export default function PopularPeople() {

    let [person, setPerson] = useState([])
    let [currentPage, setCurrentPage] = useState(0)

    useEffect( () => {
        fetchMoreMovies(endpointPeople)
}, [])
    const fetchMoreMovies = (path) => {
        fetch(path)
            .then(response =>response.json())
            .then(response =>{
                setPerson(response.results)
                setCurrentPage(response.page)
            })
    }
    const handleButton = () => {
        fetchMoreMovies(endpointPeopleCurrentPage + `${currentPage+1}`)
    }
    return (
        <div className={'movies_wrapper'}>
            <br/>
            <h1>Popular People</h1>
            <div className={'wrapper'}>
                {
              person.map(item =><PeopleList key={item.id}
                   image={`${IMAGE_URL}w200${item.profile_path}`}
                    name ={item.name} personId = {item.id}/>
                )}
            </div>
            <div className={'load_more__button'}>
                <button onClick = {handleButton}> Load more </button>
            </div>
        </div>
)
}
