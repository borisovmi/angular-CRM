import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private _http: HttpClient
  ) { }

  getContacts(): any { 
    return this._http.get(`${environment.baseUrl}assets/data/contacts.json`);
  }

}
