import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { of } from 'rxjs';
import { mockPopularMoviesResponse } from 'test-files/movie';

describe('MovieService', () => {
    let service: MovieService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MovieService],
        });
        service = TestBed.get(MovieService);
    });

    it('should be initialized', () => {
        expect(service).toBeTruthy();
    });

    it('should load popular movie', async () => {
        spyOn(service, 'loadPopularMovies').and.returnValue(of(mockPopularMoviesResponse));
        service.loadPopularMovies().subscribe(response => expect(response.results.length).toBeTruthy());
    });

    it('should load credit of one movie', async () => {
        service.loadCredits(mockPopularMoviesResponse.results[0].id).subscribe(response => expect(response.cast.length).toBeTruthy());
    });
});