import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../Book';
import { ServerService } from '../server.service';

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
    private router: Router
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
}
