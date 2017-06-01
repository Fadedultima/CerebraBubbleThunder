import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-cerebras',
  templateUrl: './cerebras.component.html',
  styleUrls: ['./cerebras.component.css']
})
export class CerebrasComponent implements OnInit {
  cerebras: any;
  search: any;
  count: any;



  constructor(private firebaseService:FirebaseService) { 
    this.firebaseService.getCerebras().subscribe(cerebras => {
      this.cerebras = cerebras;
      console.log(cerebras);
      this.count = cerebras.length;
    });
  }

  ngOnInit() {
    
  }

  likeThing(id){
    // document.getElementById(id).style.color = "green";
    this.firebaseService.af.auth.take(1).subscribe(
        (auth) => {
          var userid = auth.google.uid;
          this.firebaseService.checkIfLiked(userid, id);
        }
      );
  }

  searchCerebras(){
    this.firebaseService.getCerebrasByTitle(this.search.toLowerCase()).subscribe(cerebras => {
      this.cerebras = cerebras;
    });
  }

}
