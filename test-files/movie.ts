import { IPopularMovieResponse } from 'src/app/models/popular-movies.response';

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

