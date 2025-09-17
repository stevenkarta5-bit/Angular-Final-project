import { Component } from '@angular/core';
import { DataCustomer } from '../../../../shared/interface/dataCustomer';
import { TableComponent } from '../../../../shared/table/table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  recieverDataFromInput: DataCustomer[] = [];

  handleInput(customer: DataCustomer) {
    this.recieverDataFromInput.push(customer);
  }
}
