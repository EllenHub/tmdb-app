import {useState} from "react";
import { Rating } from '@material-ui/lab';



export default function StarRating() {

    const [rating, setRating] =useState(3)



    return (
        <div className={'rating_compon'}>
            <Rating
                name="size-small"
                size="small"
                value={rating}
                onChange={(e, value) => {
                    setRating(value);
                }}
            />
        </div>
)
}
