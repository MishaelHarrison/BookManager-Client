import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../Book';
import * as BookActions from '../actions/book.actions';

const reducer = createReducer(
  new Array<Book>(),
  on(BookActions.AddBook, (state, action) => {
    if (state.filter((x) => x.title === action.payload.title).length === 0)
      return [...state, action.payload];
    return state;
  }),
  on(BookActions.RemoveBook, (state, action) => {
    let i = state.findIndex((x) => x.title.valueOf() === action.payload);
    return [...state.slice(0, i), ...state.slice(i + 1)];
  })
);

export function BookReducer(state: Array<Book> | undefined, action: Action) {
  return reducer(state, action);
}
