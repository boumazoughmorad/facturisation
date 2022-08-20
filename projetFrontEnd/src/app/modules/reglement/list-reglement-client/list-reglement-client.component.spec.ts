import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReglementClientComponent } from './list-reglement-client.component';

describe('ListReglementClientComponent', () => {
  let component: ListReglementClientComponent;
  let fixture: ComponentFixture<ListReglementClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReglementClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReglementClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
