import {Switch, Route} from "react-router-dom";
import MoviesPopular from "../../pages/popular/MoviesPopular";
import Home from "../../pages/home/Home";
import MovieDetails from "../movie-details/MovieDetails";
import NewPlaying from "../../pages/now-playing/NewPlaying";
import Upcoming from "../../pages/upcoming/Upcoming";
import PopularPeople from "../../pages/people/PopularPeople";
import PersonDetail from "../../pages/people/person-detail/PersonDetail";

export default function Routes() {
    return (
        <div style={{width: '100%'}}>
         <Switch>
             <Route exact path={'/'} component={Home}/>
             <Route path={'/popular'} component={MoviesPopular}/>
             <Route path={'/now-playing'} component={NewPlaying}/>
             <Route path={'/upcoming'} component={Upcoming}/>
             <Route path = {'/top-rated'} component={Upcoming}/>
             <Route path={'/movie-details/:movieId'} component={MovieDetails}/>
             <Route path={'/popular-people'} component={PopularPeople}/>
             <Route path={'/person-details/:personId'} component={PersonDetail}/>
         </Switch>
        </div>
)
}
