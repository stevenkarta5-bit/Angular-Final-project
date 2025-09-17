import { Component } from '@angular/core';
import { DataCustomer } from '../interface/dataCustomer';
import { dataStatic } from '../data';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputCustomerComponent } from '../input-customer/input-customer.component';

@Component({
  selector: 'shared-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    InputCustomerComponent
],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  recieverDataFromInput: DataCustomer[] = [
    ...dataStatic
  ];

  handleInput(event: DataCustomer) {
    this.recieverDataFromInput.push(event);
    // console.log(this.recieverDataFromInput)
  }

}
