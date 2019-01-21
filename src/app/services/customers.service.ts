import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customersCollection: AngularFirestoreCollection<Customer>;
  customerDoc: AngularFirestoreDocument<Customer>;
  customers: Observable<Customer[]>;
  customer: Observable<Customer>;

  constructor(private afs: AngularFirestore) {
    this.customersCollection = this.afs.collection('customers', ref => ref.orderBy('lastName', 'asc'));
  }

  getCustomers(): Observable<Customer[]> {
    this.customers = this.customersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Customer;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
    return this.customers;
  }

  addCustomer(customer: Customer) {
    this.customersCollection.add(customer);
  }

  getCustomer(id: string): Observable<Customer> {
    this.customerDoc = this.afs.doc<Customer>(`customers/${id}`);
    this.customer = this.customerDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Customer;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.customer;
  }

  updateCustomer(customer: Customer) {
    this.customerDoc = this.afs.doc(`customers/${customer.id}`);
    this.customerDoc.update(customer);
  }

  deleteCustomer(customerId) {
    this.customerDoc = this.afs.doc(`customers/${customerId}`);
    this.customerDoc.delete();
  }

}
