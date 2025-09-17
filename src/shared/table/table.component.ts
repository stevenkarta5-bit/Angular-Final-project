import { Component } from '@angular/core';
import { DataCustomer } from '../interface/dataCustomer';
import { dataStatic } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  recieverDataFromInput: DataCustomer[] = [
    ...dataStatic
  ];

}
