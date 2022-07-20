import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListWordsComponent } from './page-list-words.component';

describe('PageListWordsComponent', () => {
  let component: PageListWordsComponent;
  let fixture: ComponentFixture<PageListWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
