import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { CustomersComponent } from './components/customers/customers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'customers', pathMatch: 'full'}, 
  /*pathMtach - coditional for regex that looks for matches in routes. it says that only a full match suits */
  {path: 'login', component: LoginComponent },
  {path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]},
  {path: 'customer/new', component: NewCustomerComponent, canActivate: [AuthGuard]},
  {path: 'customer/:id', component: CustomerDetailsComponent, canActivate: [AuthGuard]},
  {path: 'customer/:id/edit', component: EditCustomerComponent, canActivate: [AuthGuard]},
  {path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}, /*'**' - undefined page, page not found*/
];

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
