import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user_displayName: string;
  user_email: string;
  isLoggedIn: Boolean;
  user_image: any;

  constructor(public authService: FirebaseService, public firebaseService:FirebaseService) { 

    this.authService.af.auth.subscribe(
      (auth) => {
        if(auth == null){
          this.user_displayName = '';
          this.user_email = '';
          this.isLoggedIn = false;
        }
        else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_image = auth.google.photoURL;
          this.user_email = auth.google.email;
        }
      }
    );
  }

  ngOnInit() {
    
  }

}
