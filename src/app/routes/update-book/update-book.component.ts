import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Book';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  book?: Book;

  constructor(
    private service: ServerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service
      .getBook(parseInt(this.route.snapshot.queryParamMap.get('id')!))
      .subscribe((x) => (this.book = x));
  }

  send(book: Book) {
    this.service.updateBook(book).subscribe(() => this.router.navigate(['']));
  }
}
