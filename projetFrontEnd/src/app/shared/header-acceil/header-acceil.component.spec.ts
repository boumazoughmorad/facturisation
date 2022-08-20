import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAcceilComponent } from './header-acceil.component';

describe('HeaderAcceilComponent', () => {
  let component: HeaderAcceilComponent;
  let fixture: ComponentFixture<HeaderAcceilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAcceilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAcceilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
