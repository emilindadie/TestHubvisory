import { ICast } from './cast.model.i';
import { ICrew } from './crew.model.i';

export interface IMovieCreditsResponse {
    id: number,
    cast: ICast[],
    crew: ICrew[],
}