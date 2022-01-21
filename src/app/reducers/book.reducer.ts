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
    return [
      ...state.slice(0, action.payload),
      ...state.slice(action.payload + 1),
    ];
  })
);

export function BookReducer(state: Array<Book> | undefined, action: Action) {
  return reducer(state, action);
}
