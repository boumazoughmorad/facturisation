import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerComponent } from './imprimer.component';

describe('ImprimerComponent', () => {
  let component: ImprimerComponent;
  let fixture: ComponentFixture<ImprimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
