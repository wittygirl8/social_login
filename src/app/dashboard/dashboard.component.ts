import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userDetails: any;
  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    let storage;
    if(localStorage.getItem('google_auth'))
      storage = localStorage.getItem('google_auth');
    else
      storage = localStorage.getItem('facebook_auth')

    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      this.signOut();
    }
  }

  signOut(): void {
    localStorage.removeItem('google_auth');
    localStorage.removeItem('facebook_auth');
    sessionStorage.clear()
    this.router.navigateByUrl('/login').then();
  }

}
