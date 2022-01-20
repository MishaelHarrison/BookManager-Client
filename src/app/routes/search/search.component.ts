import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/Book';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  books: Book[] = [];

  constructor(private service: ServerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service
      .querryBooks(this.route.snapshot.queryParamMap.get('title')!)
      .subscribe((x) => (this.books = x));
  }
}
