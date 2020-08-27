import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';

import { MovieService } from '../services/movie.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from './app.state';
import { IBaseAction } from './base.action';
import { IAppAction } from './app.action';
import { IMovieCreditsResponse } from '../models/movie-credit.response.model';
import { ICast } from '../models/cast.model.i';

@Injectable()
export class AppEffects {
    constructor(
        private store$: Store<IAppState>,
        private actions$: Actions,
        private movieService: MovieService,
    ) { }

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('LOAD_MOVIES'),
        mergeMap(() => this.movieService.loadPopularMovies()
            .pipe(
                map(response => response && response.results ? ({ type: 'SUCCESSFULLY_LOAD_MOVIES', payload: { movies: response.results } }) :
                    ({ type: 'FAILED_LOAD_MOVIES' })),
                catchError(() => of(({ type: 'FAILED_LOAD_MOVIES' }))),
            )))
    );

    loadActors$ = createEffect(() => this.actions$.pipe(
        ofType('SUCCESSFULLY_LOAD_MOVIES'),
        mergeMap((data: IBaseAction<IAppAction>) => {
            console.log('hhhrrr');
            return forkJoin(data.payload.movies.map(movie => this.movieService.loadCredits(movie.id).pipe(map(res => res))))
        }))
        .pipe(
            map(response => response && response.length ? ({ type: 'SUCCESSFULLY_LOAD_ACTORS', payload: { actors: this.contructArrayAction(response) } }) :
                ({ type: 'FAILED_LOAD_ACTORS' })),
            catchError(() => of(({ type: 'FAILED_LOAD_ACTORS' }))),
        )
    );



    contructArrayAction(array: IMovieCreditsResponse[]) {
        const arr: ICast[] = [];
        array.map(data => arr.push(...data.cast));
        return arr;
    }
}
