import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataCustomer } from '../interface/dataCustomer';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'share-input-customer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-customer.component.html',
  styleUrl: './input-customer.component.scss'
})
export class InputCustomerComponent {
  formRegister: FormGroup;

  constructor(
    private router: Router,
    private customerService: CustomerServiceService
  ) {
    this.formRegister = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      noHp: new FormControl('', Validators.required),
      isRo: new FormControl(false),
      income: new FormControl(0, Validators.required)
    });
  }

  submissionOnClick() {
    if (this.formRegister.valid) {
      const customer: DataCustomer = {
        ...this.formRegister.value,
        jatuhTempo: new Date(),
        registeredSince: new Date()
      };
      this.customerService.addCustomer(customer);
      this.router.navigate(['']); // go back to table
    }
  }

  goToHomePage() {
    this.router.navigate(['']);
  }
}
