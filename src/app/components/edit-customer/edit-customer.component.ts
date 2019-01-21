import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { Title } from '@angular/platform-browser';
import { CustomersService } from '../../services/customers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  pageHeader: string;
  pageIcon: string;
  id: string;
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  };

  constructor(
    // dependency injections
    private _customersService: CustomersService,
    private _router: Router,
    private _ar: ActivatedRoute,
    private _title: Title,
    private _fms: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Company CRM | Edit Customer Form');
    this.pageHeader = 'Edit Customer Form';
    this.pageIcon = 'fas fa-user';
    this.id = this._ar.snapshot.params['id'];
    this._customersService.getCustomer(this.id).subscribe(customer => this.customer = customer);
  }

  onSubmit({ value, valid }: { value: Customer, valid: boolean}): void {

    if (valid) {
      value.id = this.id;
      this._customersService.updateCustomer(value);
      this._fms.show('Customer is updated', {
        cssClass: environment.fmsClass,
        timeOut: 3000
      });
      this._router.navigate(['/customers']);

    }

  }

}
