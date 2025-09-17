import { Routes } from '@angular/router';
import { InputCustomerComponent } from '../shared/input-customer/input-customer.component';
import { TableComponent } from '../shared/table/table.component';

export const routes: Routes = [
    {
        path:'register-new-user',
        component: InputCustomerComponent
    },
    {
        path:'',
        component: TableComponent
    }
];
