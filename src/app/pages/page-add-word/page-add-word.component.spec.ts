import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddWordComponent } from './page-add-word.component';

describe('PageAddWordComponent', () => {
  let component: PageAddWordComponent;
  let fixture: ComponentFixture<PageAddWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
