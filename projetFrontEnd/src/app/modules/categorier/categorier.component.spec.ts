import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorierComponent } from './categorier.component';

describe('CategorierComponent', () => {
  let component: CategorierComponent;
  let fixture: ComponentFixture<CategorierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
