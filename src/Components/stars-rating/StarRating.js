import { useState} from "react";
import './StarRating.css'

//
//
//
// export default function StarRating({rating,setRating, movieId}) {
//     const onStarClick= (rate) => {
//         setRating(rate)}

// return (
//     <div className={'rating_compon'}>
//         {  <Rating
//             name="size-small"
//             size="small"
//             value={rating}
//             onChange={(e, newValue) => {
//                 console.log(movieId);
//                 console.log(newValue)
//                 onStarClick(newValue)
//             }}
//         />}
//         </div>
// )
// }
const Star = ({ marked, starId }) => {
    return (
        <span data-star-id={starId} className="star" role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
    );
};

 export const StarRating = ({ value }) => {
    const [rating, setRating] = useState(parseInt(value) || 0);
    const [selection, setSelection] = useState(0);

    const hoverOver = event => {
        let val = 0;
        if (event && event.target && event.target.getAttribute('data-star-id'))
            val = event.target.getAttribute('data-star-id');
        setSelection(val);
    };
    return (
        <div className={'rating_compon'}
            onMouseOut={() => hoverOver(null)}
            onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
            onMouseOver={hoverOver}
        >
            {Array.from({ length: 5 }, (v, i) => (
                <Star
                    starId={i + 1}
                    key={`star_${i + 1}`}
                    marked={selection ? selection >= i + 1 : rating >= i + 1}
                />
            ))}
        </div>
    );
};