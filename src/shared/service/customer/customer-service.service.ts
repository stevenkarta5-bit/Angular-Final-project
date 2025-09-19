import { Injectable } from '@angular/core';
import { dataStatic } from '../../data';
import { DataCustomer } from '../../interface/dataCustomer';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  
  private customers: DataCustomer[] = [];

  constructor(
    private apiService: ApiService
  ) { 
    this.apiService.getData().subscribe({
    next: (data: DataCustomer[]) => {
      this.customers = data;
    },
    error: (err) => {
      console.error('Error fetching customers:', err);
    }
  }); }

  getCustomers(): DataCustomer[] {
    return this.customers;
  }

  addCustomer(customer: DataCustomer) {
    this.customers.push(customer);
  }
}
