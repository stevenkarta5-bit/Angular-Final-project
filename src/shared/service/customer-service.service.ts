import { Injectable } from '@angular/core';
import { dataStatic } from '../data';
import { DataCustomer } from '../interface/dataCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private customers: DataCustomer[] = [...dataStatic];

  getCustomers(): DataCustomer[] {
    return this.customers;
  }

  addCustomer(customer: DataCustomer) {
    this.customers.push(customer);
  }
}
