import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverComponent } from './game-over.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import { currentGameScoreSelector$ } from 'src/app/ngrx/app.selectors';

describe('GameOverComponent', () => {
  let component: GameOverComponent;
  let fixture: ComponentFixture<GameOverComponent>;
  let mockStore: MockStore;

  let mockFinalGameScoreSelector$: MemoizedSelector<IAppState, number>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameOverComponent],
      providers: [
        provideMockStore()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOverComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.get(MockStore);

    mockFinalGameScoreSelector$ = mockStore.overrideSelector(
      currentGameScoreSelector$,
      10
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
