import { IAppState } from "./app.state";
import { IBaseAction } from './base.action';
import { IAppAction } from './app.action';

const initialState: IAppState = {
    actors: [],
    movies: [],
    hasSuccessLoadActors: null,
    hasSuccessLoadMovies: null,
    currentGameScore: 0,
    highScore: 0,
}

export function AppReducer(state: IAppState = initialState, action: IBaseAction<IAppAction>): IAppState {
    switch (action.type) {

        case 'LOAD_HIGH_SCORE':
            return {
                ...state,
                highScore: action.payload.highScore
            };

        case 'SUCCESSFULLY_LOAD_MOVIES':
            return {
                ...state,
                currentGameScore: 0,
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

        case 'GOOD_ANSWER':
            return {
                ...state,
                currentGameScore: state.currentGameScore + 1
            };

        case 'BAD_ANSWER':
            return {
                ...state,
            };

        default:
            return state;
    }
}