import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocumentComponent } from './show-document.component';

describe('ShowDocumentComponent', () => {
  let component: ShowDocumentComponent;
  let fixture: ComponentFixture<ShowDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
