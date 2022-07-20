import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateWordComponent } from './page-update-word.component';

describe('PageUpdateWordComponent', () => {
  let component: PageUpdateWordComponent;
  let fixture: ComponentFixture<PageUpdateWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdateWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUpdateWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
