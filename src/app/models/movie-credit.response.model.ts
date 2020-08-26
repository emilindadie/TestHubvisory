import { ICast } from './cast.model.i';
import { ICrew } from './crew.model.i';

export interface IMovieCredirResponse {
    id: number,
    cast: ICast[],
    crew: ICrew[],
}