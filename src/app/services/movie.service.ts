import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPopularMovieResponse } from '../models/popular-movies.response.model';
import { environment } from './../../environments/environment';
import { IMovieCreditsResponse } from '../models/movie-credit.response.model';

@Injectable()
export class MovieService {
    constructor(private http: HttpClient) { }

    loadPopularMovies(): Observable<IPopularMovieResponse> {
        return this.http.get<IPopularMovieResponse>(`${environment.apiBaseUrl}/movie/popular`);
    }

    loadCredits(movieId: number): Observable<IMovieCreditsResponse> {
        return this.http.get<IMovieCreditsResponse>(`${environment.apiBaseUrl}/movie/${movieId}/credits`);
    }
}