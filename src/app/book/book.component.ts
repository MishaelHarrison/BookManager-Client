import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book?: Book;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getInfo() {
    this.router.navigate(['book'], { queryParams: { id: this.book?.id! } });
  }
}
