import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from './movie.service';

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
        const response: any = service.loadPopularMovies();
        expect(response.results).toBeTruthy();
    });
});