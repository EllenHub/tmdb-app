import {Link} from "react-router-dom";


export default function PeopleList({name, personId, image}) {

    return (
        <div className={'card_style'}>
            <div>
                <img src={image} alt="picture of popular person"/>
            </div>
            <div> <h3> <Link to ={'person-details/'+ personId}>{name}</Link> </h3>
            </div>
        </div>
)
}
