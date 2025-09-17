import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomerComponent } from './input-customer.component';

describe('InputCustomerComponent', () => {
  let component: InputCustomerComponent;
  let fixture: ComponentFixture<InputCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
