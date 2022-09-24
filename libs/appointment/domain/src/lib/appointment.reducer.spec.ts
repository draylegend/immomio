import { Action } from '@ngrx/store';
import { feature, initialState } from './appointment.reducer';

describe('Appointment Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;
      const result = feature.reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
