import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customer';
import * as _ from 'lodash';
import { FlashMessagesService } from 'angular2-flash-messages';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  pageHeader: string;
  pageIcon: string;
  customers: Customer[];
  customersOrigin: Customer[];
  phone: string = '';

  constructor(
    private title: Title,
    private _customersService: CustomersService,
    private _fms: FlashMessagesService

    ) { }

  ngOnInit(): void {
    this.title.setTitle('Company CRM | Customers');
    this.pageHeader = 'Customers';
    this.pageIcon = 'fas fa-user';
    this.customers = [];
    //console.log(this.customers.length);
    this._customersService.getCustomers().subscribe( customers => this.customersOrigin = this.customers = customers);
  }

  showTools(event): void {
    event.target.children[0].children[0].style.cssText = 'visibility: visible !important';
  }

  hideTools(event): void {
    event.target.children[0].children[0].style.cssText = 'visibility: invisible !important';
  }

  onDeleteCustomer(customerId: string, event): void {
    event.preventDefault();
    if(confirm('Are you sure?')) {
      this._customersService.deleteCustomer(customerId);
      this._fms.show('Customer is deleted', {
        cssClass: environment.fmsClass,
        timeOut: 3000
      });
    } else {
      this._fms.show('Customer is not deleted', {
        cssClass: environment.fmsClass,
        timeOut: 3000
      });
    }
    
  }

  onSearch(field: string): void {
    let fieldValue = this[field].trim().toLowerCase();
    if (fieldValue.length > 0) {
      this.customers = this.customersOrigin.filter( customer => _.includes(customer[field].toLowerCase(), fieldValue));
    } else {
      this.customers = this.customersOrigin;
    }
  }

}
