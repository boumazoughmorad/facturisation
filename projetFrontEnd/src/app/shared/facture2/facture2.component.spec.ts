import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Facture2Component } from './facture2.component';

describe('Facture2Component', () => {
  let component: Facture2Component;
  let fixture: ComponentFixture<Facture2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Facture2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Facture2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
