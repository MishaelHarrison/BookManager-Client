import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookExtComponent } from './book-ext.component';

describe('BookExtComponent', () => {
  let component: BookExtComponent;
  let fixture: ComponentFixture<BookExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookExtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
