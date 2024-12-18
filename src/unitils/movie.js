import { v4 as uuidv4 } from 'uuid';

export function addMovie(dispatch, movie) {
    const newMovie = { ...movie, id: uuidv4() };
    dispatch({ type: 'CREATE_MOVIE', payload: newMovie });
}
