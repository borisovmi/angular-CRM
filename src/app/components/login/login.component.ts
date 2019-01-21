import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private _as: AuthService,
    private _fms: FlashMessagesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._as.getAuth().subscribe(auth=>{
      if(auth) this._router.navigate(['']);
    })
  }

  onSubmit({ value, valid }: {value: any, valid: boolean}): void {
    if (valid) {
      this._as.login(value.email, value.password)
        .then(res => {
          this._fms.show('You re now looged in', {
            cssClass: environment.fmsClass,
            timeOut: 3000
          });
          this._router.navigate(['/']);
        })
        .catch(err => {
          this._fms.show(err.message, {
            cssClass: environment.fmsClassDanger,
            timeOut: 3000
          });
        });
    }
  }

}
