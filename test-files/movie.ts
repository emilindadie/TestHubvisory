import { IPopularMovieResponse } from '../src/app/models/popular-movies.response.model';
import { IMovieCreditsResponse } from 'src/app/models/movie-credit.response.model';
import { IMovie } from 'src/app/models/movie.models.i';
import { ICast } from 'src/app/models/cast.model.i';

export const mockPopularMoviesResponse: IPopularMovieResponse = {
    page: 1,
    results: [
        {
            popularity: 237.38,
            vote_count: 727,
            video: false,
            poster_path: "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg",
            id: 605116,
            adult: false,
            backdrop_path: "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
            original_language: "en",
            original_title: "Project Power",
            genre_ids: [
                28,
                80,
                878
            ],
            title: "Project Power",
            vote_average: 6.8,
            overview: "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
            release_date: "2020-08-14"
        }
    ],
    total_pages: 1,
    total_results: 1
};


export const mockRandomMovie: IMovie = {
    popularity: 237.38,
    vote_count: 727,
    video: false,
    poster_path: "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg",
    id: 605116,
    adult: false,
    backdrop_path: "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
    original_language: "en",
    original_title: "Project Power",
    genre_ids: [
        28,
        80,
        878
    ],
    title: "Project Power",
    vote_average: 6.8,
    overview: "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
    release_date: "2020-08-14"
};



export const mockRandomActor: ICast = {
    cast_id: 8,
    character: 'Art',
    credit_id: '5cec34a1c3a3685a161f83f7',
    gender: 2,
    id: 134,
    name: 'Jamie Foxx',
    order: 0,
    profile_path: '/hPwCMEq6jLAidsXAX5BfoYgIfg2.jpg'
};

export const mockMovieCreditsResponse: IMovieCreditsResponse = {
    id: 23333,
    cast: [
        {
            cast_id: 8,
            character: 'Art',
            credit_id: '5cec34a1c3a3685a161f83f7',
            gender: 2,
            id: 134,
            name: 'Jamie Foxx',
            order: 0,
            profile_path: '/hPwCMEq6jLAidsXAX5BfoYgIfg2.jpg'
        },
        {
            cast_id: 7,
            character: 'Frank',
            credit_id: '5cec34999251416983b94b26',
            gender: 2,
            id: 24045,
            name: 'Joseph Gordon-Levitt',
            order: 1,
            profile_path: '/dhv9f3AaozOjpvjAwVzOWlmmT2V.jpg'
        },
    ],
    crew: [
        {
            credit_id: '5f3648966bdec30032c61b68',
            department: 'Art',
            gender: 1,
            id: 8220,
            job: 'Production Design',
            name: 'Naomi Shohan',
            profile_path: '/xnAfpEQhv2FitBb1giZYcvUImrV.jpg'
        },
        {
            credit_id: '5ec67083d2147c0022b90e7b',
            department: 'Production',
            gender: 2,
            id: 561,
            job: 'Casting',
            name: 'John Papsidera',
            profile_path: '/egwEVyrAmdWhtuLqE5fcThZf41E.jpg'
        },
    ]
};


