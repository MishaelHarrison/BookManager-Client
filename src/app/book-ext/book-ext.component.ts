import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Book } from '../Book';
import { ServerService } from '../server.service';
import { AddBook } from '../actions/book.actions';

@Component({
  selector: 'app-book-ext',
  templateUrl: './book-ext.component.html',
  styleUrls: ['./book-ext.component.css'],
})
export class BookExtComponent implements OnInit {
  book?: Book;

  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.service
      .getBook(parseInt(this.route.snapshot.queryParamMap.get('id')!))
      .subscribe((x) => (this.book = x));
  }

  delete() {
    this.service
      .deleteBook(this.book?.id!)
      .subscribe(() => this.router.navigate(['']));
  }

  update() {
    this.router.navigate(['update'], { queryParams: { id: this.book?.id } });
  }

  addToShelf() {
    this.store.dispatch(AddBook({ payload: this.book! }));
  }
}
