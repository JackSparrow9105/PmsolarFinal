import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { FundingDepartmentComponent } from './funding-department/funding-department.component';

export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fundingDepartment', component: FundingDepartmentComponent },
  { path: '**', component: HomeComponent },

];
