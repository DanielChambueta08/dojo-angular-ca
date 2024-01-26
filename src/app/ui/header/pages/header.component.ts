import { Component, OnInit } from '@angular/core';
import { HeaderSandbox } from '../header.sandbox';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public headerSandbox: HeaderSandbox) {}

  ngOnInit(): void {
    this.headerSandbox.checkoutAccount();
  }

  logIn() {
    this.headerSandbox.logIn();
  }

  logOut(){
    this.headerSandbox.logOut();
  }

}