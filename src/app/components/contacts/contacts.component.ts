import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
import { environment } from '../../../environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Array<Contact> = [];
  contactsOrigin: Array<Contact> = [];
  baseUrl: string;
  searchName: string = '';
  pageHeader: string;
  pageIcon: string;
  searchFieldClasses: any;

  constructor(
    private _title: Title,
    private _contactsService: ContactsService
    ) { }

  ngOnInit(): void {
    this.searchFieldClasses = {
      'form-control': true,
      'form-control-lg': false
    }
    this._title.setTitle('Company CRM | Contacts');
    this.pageHeader = 'Contact';
    this.pageIcon = 'fas fa-envelope';
    this.baseUrl = environment.baseUrl;
    this._contactsService.getContacts().subscribe((contacts: Array<Contact>) => {
      this.contactsOrigin = this.contacts = _.sortBy(contacts, ['name']);
    });
  }

  onSearchFocus() {
    this.searchFieldClasses['form-control-lg'] = !this.searchFieldClasses['form-control-lg'];
  }

  onSearchName(): void {
    let searchName = this.searchName.trim().toLowerCase();
    if (searchName.length > 0) {
      this.contacts = this.contactsOrigin.filter( contact => {
        let name = contact.name.toLowerCase();
        return _.includes(name, searchName);
      });
    } else {
      this.contacts = this.contactsOrigin;
    }    
  }


}
