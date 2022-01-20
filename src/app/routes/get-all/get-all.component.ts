import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Book';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css'],
})
export class GetAllComponent implements OnInit {
  books: Book[] = [];

  constructor(private service: ServerService) {}

  ngOnInit(): void {
    this.service.getAllBooks().subscribe((x) => (this.books = x));
  }
}
