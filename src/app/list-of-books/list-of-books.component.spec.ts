import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBooksComponent } from './list-of-books.component';

describe('ListOfBooksComponent', () => {
  let component: ListOfBooksComponent;
  let fixture: ComponentFixture<ListOfBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
