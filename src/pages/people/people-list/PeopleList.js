import {Link} from "react-router-dom";

import './PeopleList.css'

export default function PeopleList({name, personId, image}) {

    return (
        <div className={'card_style'}>
            <div>
                <Link to = {'person-details/'+ personId}> <img src={image} alt="picture of popular person"/></Link>
            </div>
            <div className={'person_info'}> <h3 className={'person_name'}> <Link to ={'person-details/'+ personId}>{name}</Link> </h3>
            </div>
        </div>
)
}
