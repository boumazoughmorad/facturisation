import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUserAuthComponent } from './sidebar-user-auth.component';

describe('SidebarUserAuthComponent', () => {
  let component: SidebarUserAuthComponent;
  let fixture: ComponentFixture<SidebarUserAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarUserAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarUserAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
