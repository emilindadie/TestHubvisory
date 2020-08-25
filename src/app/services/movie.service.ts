import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPopularMovieResponse } from '../models/popular-movies.response';
import { environment } from './../../environments/environment';

@Injectable()
export class MovieService {
    constructor(private http: HttpClient) { }

    loadPopularMovies(): Observable<IPopularMovieResponse> {
        return this.http.get<IPopularMovieResponse>(`${environment.apiBaseUrl}/movie/popular`);
    }
}