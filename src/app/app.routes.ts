import { Routes } from '@angular/router';
import { InputCustomerComponent } from '../shared/input-customer/input-customer.component';
import { TableComponent } from '../shared/table/table.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FormDetailComponent } from './pages/form-detail/form-detail/form-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path:'register-new-user',
        component: InputCustomerComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'detail-customer/:name',
        component: FormDetailComponent
    },
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'**',
        component:NotfoundComponent
    }
];
