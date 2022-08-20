import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvecOrNonHeaderComponent } from './avec-or-non-header.component';

describe('AvecOrNonHeaderComponent', () => {
  let component: AvecOrNonHeaderComponent;
  let fixture: ComponentFixture<AvecOrNonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvecOrNonHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvecOrNonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
