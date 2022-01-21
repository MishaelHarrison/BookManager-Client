import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BookReducer } from './reducers/book.reducer';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { GetAllComponent } from './routes/get-all/get-all.component';
import { MainPageComponent } from './routes/main-page/main-page.component';
import { BookExtComponent } from './book-ext/book-ext.component';
import { SearchComponent } from './routes/search/search.component';
import { AddBookComponent } from './routes/add-book/add-book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { UpdateBookComponent } from './routes/update-book/update-book.component';
import { ShelfComponent } from './routes/shelf/shelf.component';

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
    ShelfComponent,
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      book: BookReducer,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
