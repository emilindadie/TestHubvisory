import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/ngrx/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICast } from 'src/app/models/cast.model.i';
import { IMovie } from 'src/app/models/movie.models.i';
import { randomMovieSelector$, randomActorSelector$, currentGameScoreSelector$ } from 'src/app/ngrx/app.selectors';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  rondomMovie$: Observable<IMovie>;
  rondomMovie: IMovie;

  rondomActor$: Observable<ICast>;
  rondomActor: ICast;
  currentGameScore$: Observable<number>;



  constructor(private store$: Store<IAppState>) { }

  ngOnInit() {
    this.store$.dispatch({ type: 'LOAD_MOVIES' });
    this.rondomMovie$ = this.store$.pipe(select(randomMovieSelector$), filter(movie => !!movie), tap((movie) => this.rondomMovie = movie));
    this.rondomActor$ = this.store$.pipe(select(randomActorSelector$), filter(actor => !!actor), tap((actor) => this.rondomActor = actor));
    this.currentGameScore$ = this.store$.pipe(select(currentGameScoreSelector$));
  }


  answer(value: boolean) {
    this.store$.dispatch({ type: 'CHECK_ANSWER', payload: { answer: { cast: this.rondomActor, movie_id: this.rondomMovie.id, value } } });
  }

}
