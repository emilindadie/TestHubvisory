import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponent } from './quiz.component';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IAppState } from 'src/app/ngrx/app.state';
import { IMovie } from 'src/app/models/movie.models.i';
import { MemoizedSelector } from '@ngrx/store';
import { ICast } from 'src/app/models/cast.model.i';
import { randomMovieSelector$, randomActorSelector$, currentGameScoreSelector$, highScoreSelector$ } from 'src/app/ngrx/app.selectors';
import { mockRandomMovie, mockRandomActor } from 'test-files/movie';
import { RouterTestingModule } from '@angular/router/testing';
import { CookiesService } from 'src/app/services/cookie.service';
import { CookieService } from 'angular2-cookie';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
  let mockStore: MockStore;

  let mockRandomMovieSelector$: MemoizedSelector<IAppState, IMovie>;
  let mockRandomActorSelector$: MemoizedSelector<IAppState, ICast>;
  let mockCurrentGameScoreSelector$: MemoizedSelector<IAppState, number>;
  let mockHighScoreSelector$: MemoizedSelector<IAppState, number>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [QuizComponent],
      providers: [MovieService, CookiesService, CookieService,
        provideMockStore()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.get(MockStore);

    mockRandomMovieSelector$ = mockStore.overrideSelector(
      randomMovieSelector$,
      mockRandomMovie

    );

    mockRandomActorSelector$ = mockStore.overrideSelector(
      randomActorSelector$,
      mockRandomActor
    );

    mockCurrentGameScoreSelector$ = mockStore.overrideSelector(
      currentGameScoreSelector$,
      10
    );

    mockHighScoreSelector$ = mockStore.overrideSelector(
      highScoreSelector$,
      90
    );


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
