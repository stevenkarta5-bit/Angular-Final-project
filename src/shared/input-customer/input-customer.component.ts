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
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      noHp: new FormControl('', Validators.required),
      isRo: new FormControl(false, Validators.required),
      income: new FormControl('', Validators.required)
    });
  }

  @Output() clickEvent = new EventEmitter<DataCustomer>();
  submissionOnClick(){
    // this.clickEvent.emit({...this.creditur});
    // console.log('event')
    this.clickEvent.emit({...this.formRegister.value});
  }

  goToHomePage(){
    this.router.navigate(['home']);
  }

}
