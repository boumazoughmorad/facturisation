import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFactureComponent } from './type-facture.component';

describe('TypeFactureComponent', () => {
  let component: TypeFactureComponent;
  let fixture: ComponentFixture<TypeFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
