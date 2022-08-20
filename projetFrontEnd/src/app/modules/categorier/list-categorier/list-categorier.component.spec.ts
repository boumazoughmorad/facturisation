import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategorierComponent } from './list-categorier.component';

describe('ListCategorierComponent', () => {
  let component: ListCategorierComponent;
  let fixture: ComponentFixture<ListCategorierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategorierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategorierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
