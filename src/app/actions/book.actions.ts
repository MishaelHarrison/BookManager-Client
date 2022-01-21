import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { Book } from '../Book';

export const AddBook = createAction('[BOOK] Add', props<{ payload: Book }>());
export const RemoveBook = createAction(
  '[BOOK] Remove',
  props<{ payload: string }>()
);
