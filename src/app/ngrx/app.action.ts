import { IMovie } from '../models/movie.models.i';
import { ICast } from '../models/cast.model.i';

export interface IAppAction {
    movies: IMovie[];
    actors: ICast[];
}