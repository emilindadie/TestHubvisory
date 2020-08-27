import { IAppState } from "./app.state";
import { IBaseAction } from './base.action';
import { IAppAction } from './app.action';

const initialState: IAppState = {
    actors: [],
    movies: [],
    hasSuccessLoadActors: null,
    hasSuccessLoadMovies: null
}

export function AppReducer(state: IAppState = initialState, action: IBaseAction<IAppAction>): IAppState {
    switch (action.type) {
        case 'SUCCESSFULLY_LOAD_MOVIES':
            return {
                ...state,
                movies: action.payload.movies,
                hasSuccessLoadMovies: true,
            };
        case 'SUCCESSFULLY_LOAD_ACTORS':
            return {
                ...state,
                actors: [...state.actors, ...action.payload.actors],
                hasSuccessLoadActors: true
            };

        case 'FAILED_LOAD_MOVIES':
            return {
                ...state,
                hasSuccessLoadMovies: false
            };

        case 'FAILED_LOAD_ACTORS':
            return {
                ...state,
                hasSuccessLoadActors: false
            };

        default:
            return state;
    }
}