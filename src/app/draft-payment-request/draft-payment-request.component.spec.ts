import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftPaymentRequestComponent } from './draft-payment-request.component';

describe('DraftPaymentRequestComponent', () => {
  let component: DraftPaymentRequestComponent;
  let fixture: ComponentFixture<DraftPaymentRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftPaymentRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftPaymentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
