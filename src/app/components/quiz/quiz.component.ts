import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/ngrx/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICast } from 'src/app/models/cast.model.i';
import { IMovie } from 'src/app/models/movie.models.i';
import { randomMovieSelector$, randomActorSelector$ } from 'src/app/ngrx/app.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  rondomMovie$: Observable<IMovie>;
  rondomActor$: Observable<ICast>;

  constructor(private store$: Store<IAppState>) { }

  ngOnInit() {
    this.store$.dispatch({ type: 'LOAD_MOVIES' });
    this.rondomMovie$ = this.store$.pipe(select(randomMovieSelector$), filter(movie => !!movie));
    this.rondomActor$ = this.store$.pipe(select(randomActorSelector$), filter(actor => !!actor));
  }

}
