import { Component, OnInit } from '@angular/core';
import { currentGameScoreSelector$ } from 'src/app/ngrx/app.selectors';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  totalGameScore$: Observable<number>;

  constructor(private store$: Store<IAppState>) { }

  ngOnInit() {
    this.totalGameScore$ = this.store$.pipe(select(currentGameScoreSelector$));
  }

}
