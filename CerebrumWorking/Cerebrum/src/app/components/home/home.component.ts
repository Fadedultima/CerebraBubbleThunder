import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public af: AngularFire,
    public flashMessage: FlashMessagesService,
    public router: Router

  ) { }

  ngOnInit() {
  }

  login(){
    this.af.auth.login();
    this.flashMessage.show('You have successfully logged in', {cssClass: 'alert-success', timeout: 5000})
  }

}
