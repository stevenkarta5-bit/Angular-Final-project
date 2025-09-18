import { Routes } from '@angular/router';
import { InputCustomerComponent } from '../shared/input-customer/input-customer.component';
import { TableComponent } from '../shared/table/table.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FormDetailComponent } from './pages/form-detail/form-detail/form-detail.component';

export const routes: Routes = [
    {
        path:'register-new-user',
        component: InputCustomerComponent
    },
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'detail-customer/:name',
        component: FormDetailComponent
    }
];
