import { IMovie } from '../models/movie.models.i';
import { ICast } from '../models/cast.model.i';

export interface IAppState {
    movies: IMovie[];
    actors: ICast[];
    hasSuccessLoadMovies: boolean;
    hasSuccessLoadActors: boolean;
    currentGameScore: number;
    highScore: number;
}