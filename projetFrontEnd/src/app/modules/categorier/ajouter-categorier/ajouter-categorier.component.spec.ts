import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCategorierComponent } from './ajouter-categorier.component';

describe('AjouterCategorierComponent', () => {
  let component: AjouterCategorierComponent;
  let fixture: ComponentFixture<AjouterCategorierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCategorierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCategorierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
