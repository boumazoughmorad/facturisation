import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReglemntComponent } from './ajouter-reglemnt.component';

describe('AjouterReglemntComponent', () => {
  let component: AjouterReglemntComponent;
  let fixture: ComponentFixture<AjouterReglemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterReglemntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterReglemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
