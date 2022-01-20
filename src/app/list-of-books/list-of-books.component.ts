import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../Book';

@Component({
  selector: 'app-list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.css'],
})
export class ListOfBooksComponent implements OnInit {
  @Input() books?: Book[];

  constructor() {}
  ngOnInit(): void {}
}
