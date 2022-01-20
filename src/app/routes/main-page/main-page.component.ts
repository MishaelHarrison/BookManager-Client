import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  searchParam: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  search() {
    if (this.searchParam)
      this.router.navigate(['querry'], {
        queryParams: { title: this.searchParam },
      });
  }
}
