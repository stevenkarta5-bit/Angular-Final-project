import { Component, OnInit } from '@angular/core';
import { DataCustomer } from '../interface/dataCustomer';
import { dataStatic } from '../data';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputCustomerComponent } from '../input-customer/input-customer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'shared-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterLink
    // InputCustomerComponent
],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{

  recieverDataFromInput: DataCustomer[] = [];

  constructor(
    private router : Router,
    private customerService: CustomerServiceService)
    {}

  ngOnInit() {
    this.recieverDataFromInput = this.customerService.getCustomers();
  }

  goToDetail(name?: string){
    this.router.navigate(['detail-customer', name]);
  }
}
