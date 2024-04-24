import { Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { UserLoginComponent } from './User/User-Login/user-login/user-login.component';
import { UserRegisterComponent } from './User/User-Register/user-register/user-register.component';

export const myroutes: Routes = [
    {path:'', component: PropertyListComponent},
    {path:'rent-property', component: PropertyListComponent },
    {path:'add-property', component: AddPropertyComponent },
    {path:'detail-property/:id', component: PropertyDetailsComponent },
    {path:'user-login', component:  UserLoginComponent},
    {path:'user-register', component: UserRegisterComponent },
    {path:'**', component: PropertyListComponent}
];
