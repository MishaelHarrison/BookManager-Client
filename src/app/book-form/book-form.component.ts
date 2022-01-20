import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  @Input() state?: string;
  @Input() book?: Book;

  @Output() respond: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}

  send() {
    if (this.book && this.book.author) this.respond.emit(this.book);
  }
}
