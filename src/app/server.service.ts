import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './Book';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  api: string = environment.api;

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.sortBooks(this.http.get<Book[]>(this.api));
  }
  getBook(id: number) {
    return this.http.get<Book>(this.api + `/${id}`);
  }
  querryBooks(param: string): Observable<Book[]> {
    return this.sortBooks(this.http.get<Book[]>(this.api + `/${param}`));
  }
  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(this.api + `/${id}`);
  }
  addBook(book: Book): Observable<void> {
    return this.http.post<void>(this.api, book);
  }
  updateBook(book: Book): Observable<void> {
    return this.http.put<void>(this.api, book);
  }

  private sortBooks(req: Observable<Book[]>): Observable<Book[]> {
    return new Observable<Book[]>((o) => {
      req.subscribe((x) => {
        x.sort((first, second) =>
          first.title.localeCompare(second.title.valueOf())
        );
        o.next(x);
      });
    });
  }
}
