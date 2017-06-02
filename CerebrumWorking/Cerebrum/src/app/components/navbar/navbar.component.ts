import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public af:AngularFire,
    public flashMessage:FlashMessagesService,
    public router: Router
    ) { }

  ngOnInit() {
	  this.af.auth.subscribe(user => {
		  if(user){
			 this.router.navigate(['/cerebras']);
		  }else{
			  this.router.navigate(['/']);
		  }
	  });
  }


  logout(){
    this.af.auth.logout();
    this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 3000})
    this.router.navigate(['/']);
  }

}
