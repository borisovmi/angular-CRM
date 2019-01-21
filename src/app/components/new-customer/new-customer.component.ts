import { Component, OnInit, ɵConsole } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  pageHeader: string;
  pageIcon: string;
  address: string = '';
  notes: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';

  constructor(
    private _title: Title,
    private _customersService: CustomersService,
    private _router: Router,
    private _fms: FlashMessagesService

  ) { }

  ngOnInit() {
    this._title.setTitle('Company CRM | Add customer form');
    this.pageHeader = 'Add Customer Form';
    this.pageIcon = 'fas fa-user-plus';
  }

  onSubmit({ value, valid }: { value: Customer, valid: boolean }): void {
    if ( valid ) {
      this._customersService.addCustomer(value);
      this._fms.show('Customer is saved', {
        cssClass: environment.fmsClass,
        timeOut: 3000
      });
      this._router.navigate(['/customers']);
    }
  }

}
