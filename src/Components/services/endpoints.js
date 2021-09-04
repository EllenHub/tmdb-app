import {API_KEY, API_URL} from "./config";

export const endpointPopular= `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const  endpointPopularCurrentPage = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=`

export const endpointNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
export const endpointNowPlayingCurrentPage = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=`

export const endpointPeople = `${API_URL}person/popular?api_key=${API_KEY}&language=en-US&page=1`
export const endpointPeopleCurrentPage = `${API_URL}person/popular?api_key=${API_KEY}&language=en-US&page=`

export const endpointTopRated = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const endpoinTopRatedCurrentPage = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=`

export const endpointUpcoming =`${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
export const endpointUpcomingCurrentPage =`${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=`