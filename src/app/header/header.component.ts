import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoginPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkIfLoginPage();
      }
    });
    this.checkIfLoginPage();
  }

  checkIfLoginPage() {
    const currentRoute = this.router.url;
    this.isLoginPage = currentRoute === '/';
  }

  navigateToLandingPage() {
    const currentRoute = this.router.url;
    if (currentRoute !== '/') {
      this.router.navigateByUrl('/');
    }
  }
}
