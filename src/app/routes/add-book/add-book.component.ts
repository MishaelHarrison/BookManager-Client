import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Book';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  book: Book = {
    author: '',
    title: '',
  };

  constructor(private service: ServerService, private router: Router) {}

  ngOnInit(): void {}

  send(book: Book) {
    book.id = undefined;
    this.service.addBook(book).subscribe(() => this.router.navigate(['']));
  }
}
