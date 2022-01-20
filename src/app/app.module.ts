import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { GetAllComponent } from './routes/get-all/get-all.component';
import { MainPageComponent } from './routes/main-page/main-page.component';
import { BookExtComponent } from './book-ext/book-ext.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './routes/search/search.component';
import { AddBookComponent } from './routes/add-book/add-book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { UpdateBookComponent } from './routes/update-book/update-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ListOfBooksComponent,
    GetAllComponent,
    MainPageComponent,
    BookExtComponent,
    SearchComponent,
    AddBookComponent,
    BookFormComponent,
    UpdateBookComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
