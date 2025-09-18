import { Component, OnInit } from '@angular/core';
import { DataCustomer } from '../interface/dataCustomer';
import { dataStatic } from '../data';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputCustomerComponent } from '../input-customer/input-customer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerServiceService } from '../service/customer/customer-service.service';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'shared-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    // RouterLink
    // InputCustomerComponent
],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{

  recieverDataFromInput: DataCustomer[] = [];

  constructor(
    private router : Router,
    private customerService: CustomerServiceService,
  ){}

  ngOnInit() {
    this.recieverDataFromInput = this.customerService.getCustomers();
  }

  goToDetail(name?: string){
    this.router.navigate(['detail-customer', name]);
  }

  isNearDueDate(dueDate: Date): boolean {
  const today = new Date();
  const target = new Date(dueDate);

  const diff = target.getTime() - today.getTime();
  const diffDays = diff / (1000 * 60 * 60 * 24);

  return diffDays >= 0 && diffDays <= 3; // 3 hari sebelum jatuh tempo
}

isOverdue(dueDate: Date ): boolean {
  const today = new Date();
  const target = new Date(dueDate);
  return target < today; // sudah lewat
}

}
