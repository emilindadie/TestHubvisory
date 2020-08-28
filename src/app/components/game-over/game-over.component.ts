import { Component, OnInit } from '@angular/core';
import { currentGameScoreSelector$ } from 'src/app/ngrx/app.selectors';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import { Observable } from 'rxjs';
import { CookiesService } from 'src/app/services/cookie.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  totalGameScore$: Observable<number>;

  constructor(private store$: Store<IAppState>, private cookiesService: CookiesService, private router: Router) { }

  ngOnInit() {
    this.totalGameScore$ = this.store$.pipe(select(currentGameScoreSelector$), tap((currentGameScore) => {
      const lastHighScore = this.cookiesService.get('highScore') ? JSON.parse(this.cookiesService.get('highScore')) : 0
      if (lastHighScore < currentGameScore) {
        this.cookiesService.set('highScore', JSON.stringify(currentGameScore));
      }
    }));
  }

  retry() {
    this.router.navigate(['/quiz'])
  }

}
