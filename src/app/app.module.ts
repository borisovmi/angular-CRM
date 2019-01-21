import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CleanNamePipe } from './pipes/clean-name.pipe';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    CustomersComponent,
    PageNotFoundComponent,
    ContactsComponent,
    CleanNamePipe,
    PageHeaderComponent,
    NewCustomerComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
