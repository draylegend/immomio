import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { RouterEffects } from './router.effects';

describe('RouterEffects', () => {
  let actions$: Observable<Actions>;
  let effects: RouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RouterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
