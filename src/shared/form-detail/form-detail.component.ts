import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { InputCustomerComponent } from '../input-customer/input-customer.component';

@Component({
  selector: 'app-form-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-detail.component.html',
  styleUrl: './form-detail.component.scss'
})
export class FormDetailComponent {
  constructor(
    private router : Router
  ){

    }
  goToHomePage(){
    this.router.navigate(['']);
  }
}
