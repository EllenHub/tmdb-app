import { useState} from "react";
import { Rating } from '@material-ui/lab';




export default function StarRating() {


    const [rating, setRating] =useState(3)


    const onStarClick= (rate) => {

        setRating(rate)

    }

// const movieRating = (movieId, rating) => {
//     return (`https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${API_KEY}`,{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//       },
//       body: JSON.stringify({
//         "value": rating
//       })
//     })
//   }
    //
    // useEffect(() => {
    //     rateMovies()
    // }, []);
return (
    <div className={'rating_compon'}>
        {  <Rating
            name="size-small"
            size="small"
            value={rating}
            onChange={(e, newValue) => {
                console.log(e)
                console.log(newValue)
                onStarClick(newValue)
            }}
        />}
        </div>

)
}
