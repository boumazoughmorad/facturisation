import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreglemntComponent } from './addreglemnt.component';

describe('AddreglemntComponent', () => {
  let component: AddreglemntComponent;
  let fixture: ComponentFixture<AddreglemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreglemntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddreglemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
