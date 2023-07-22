import { combineReducers } from 'redux';
import { answersReducer } from './answersReducer';

export const rootReducer = combineReducers({
  answers: answersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
