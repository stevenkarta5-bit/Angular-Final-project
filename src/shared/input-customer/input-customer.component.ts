import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataCustomer } from '../interface/dataCustomer';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'share-input-customer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-customer.component.html',
  styleUrl: './input-customer.component.scss'
})
export class InputCustomerComponent {
  formRegister : FormGroup

  constructor(
    private router : Router
  ){
    this.formRegister = new FormGroup({
      name: new FormControl<string>('', { validators: Validators.required }),
      address: new FormControl<string>('', { validators: Validators.required }),
      status: new FormControl<string>('', { validators: Validators.required }),
      email: new FormControl<string>('', { validators: [Validators.required, Validators.email] }),
      noHp: new FormControl<string>('', { validators: Validators.required }),
      isRo: new FormControl<boolean>(false),
      income: new FormControl<number | null>(null, { validators: Validators.required }),
      jatuhTempo: new FormControl<Date | null>(null, { validators: Validators.required }),
      registeredSince: new FormControl<Date | null>(null, { validators: Validators.required }),
    });

  }

  @Output() clickEvent = new EventEmitter<DataCustomer>();
  submissionOnClick() {
  if (this.formRegister.valid) {
    this.clickEvent.emit({ ...this.formRegister.value });
    this.formRegister.reset(); // clear form after submission
  }
  }

  goToHomePage(){
    this.router.navigate(['']);
  }

}
