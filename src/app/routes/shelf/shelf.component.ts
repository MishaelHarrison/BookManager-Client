import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/Book';
import { RemoveBook } from '../../actions/book.actions';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css'],
})
export class ShelfComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books = this.store.select('book');
  }

  ngOnInit(): void {}

  delete(i: number) {
    this.store.dispatch(RemoveBook({ payload: i }));
  }
}
