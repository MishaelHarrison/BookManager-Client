import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookExtComponent } from './book-ext/book-ext.component';
import { AddBookComponent } from './routes/add-book/add-book.component';
import { GetAllComponent } from './routes/get-all/get-all.component';
import { MainPageComponent } from './routes/main-page/main-page.component';
import { SearchComponent } from './routes/search/search.component';
import { UpdateBookComponent } from './routes/update-book/update-book.component';

const routes: Routes = [
  { path: 'display', component: GetAllComponent },
  { path: 'book', component: BookExtComponent },
  { path: '', component: MainPageComponent },
  { path: 'querry', component: SearchComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'update', component: UpdateBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
