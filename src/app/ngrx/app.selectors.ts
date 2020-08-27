import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState } from './app.state';




export const getAppFeatureState = createFeatureSelector<IAppState>(
    'app',
);

export const randomMovieSelector$ = createSelector(
    getAppFeatureState,
    (state: IAppState) => state.movies[Math.floor(Math.random() * state.movies.length)]
);

export const randomActorSelector$ = createSelector(
    getAppFeatureState,
    (state: IAppState) => state.actors[Math.floor(Math.random() * state.actors.length)]
);