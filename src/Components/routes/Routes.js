import {Switch, Route} from "react-router-dom";
import MoviesPopular from "../../pages/popular/MoviesPopular";
import Home from "../../pages/home/Home";
import MovieDetails from "../../pages/movie-details/MovieDetails";

export default function Routes() {
    return (
        <div style={{width: '100%'}}>
         <Switch>
             <Route exact path={'/'} component={Home}/>
             <Route path={'/popular'} component={MoviesPopular}/>
             <Route path={'/movie-details/:movieId'}component={MovieDetails}/>
         </Switch>
        </div>
)
}
