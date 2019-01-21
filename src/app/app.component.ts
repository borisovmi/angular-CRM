import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean = false;
  userEmail: string;

  constructor(
    private _as: AuthService
  ) {}

  ngOnInit(): void {

    this._as.getAuth().subscribe( auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.userEmail = auth.email;
      }
    })

  }
}
