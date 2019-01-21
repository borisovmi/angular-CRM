import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html', 
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  @Input()
  isLoggedIn: boolean;

  @Input()
  userEmail: string;

  constructor(
    private _as: AuthService
  ) {}

  ngOnInit() {
    
  }

  onLoggedOut(e) {
    e.preventDefault();
    this._as.logout();
    window.location.reload();
  }

}
