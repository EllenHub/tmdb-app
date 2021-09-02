import React, {useEffect, useState} from "react";
import {API_KEY, API_URL, IMAGE_URL} from "../../Components/services/Config";
import PeopleList from "./people-list/PeopleList";


export default function PopularPeople() {

    let [person, setPerson] = useState([])
    let [currentPage, setCurrentPage] = useState(0)

    useEffect( () => {
        let endpoint = `${API_URL}person/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetchMoreMovies(endpoint)

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
        let endpoint = `${API_URL}person/popular?api_key=${API_KEY}&language=en-US&page=${currentPage+1}`
        fetchMoreMovies(endpoint)
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
