import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserAuthComponent } from './header-user-auth.component';

describe('HeaderUserAuthComponent', () => {
  let component: HeaderUserAuthComponent;
  let fixture: ComponentFixture<HeaderUserAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUserAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUserAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
