import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IPopularMovieResponse } from '../models/popular-movies.response.model';
import { environment } from './../../environments/environment';
import { IMovieCredirResponse } from '../models/movie-credit.response.model';

@Injectable()
export class MovieService {
    constructor(private http: HttpClient) { }

    loadPopularMovies(): Observable<IPopularMovieResponse> {
        return this.http.get<IPopularMovieResponse>(`${environment.apiBaseUrl}/movie/popular`);
    }

    loadCredits(movieId: number): Observable<IMovieCredirResponse> {
        return null;
    }
}