import { IMovie } from '../models/movie.models.i';
import { ICast } from '../models/cast.model.i';

export interface IAppAction {
    movies: IMovie[];
    actors: ICast[];
    answer: IAnswerAction;
    highScore: number;
}


export interface IAnswerAction {
    cast: ICast;
    movie_id: number;
    value: boolean;
}