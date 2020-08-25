import { IMovie } from './movie.models.i';

export interface IPopularMovieResponse {
    page: number,
    total_results: number,
    total_pages: number,
    results: IMovie[];
}