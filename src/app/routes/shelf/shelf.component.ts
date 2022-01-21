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
    this.books = new Observable<Book[]>((o) => {
      this.store.select('book').subscribe((x) => {
        let list = [...x];
        list.sort((first, second) =>
          first.title.localeCompare(second.title.valueOf())
        );
        o.next(list);
      });
    });
  }

  ngOnInit(): void {}

  delete(title: string) {
    this.store.dispatch(RemoveBook({ payload: title }));
  }
}
