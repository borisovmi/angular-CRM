import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { Title } from '@angular/platform-browser';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

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
    private _customersService: CustomersService,
    private _ar: ActivatedRoute,
    private _title: Title
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Company CRM | Customer Details');
    this.pageHeader = 'Customer Details';
    this.pageIcon = 'fas fa-user';
    this.id = this._ar.snapshot.params['id'];
    this._customersService.getCustomer(this.id).subscribe(customer => this.customer = customer);
  }

}
