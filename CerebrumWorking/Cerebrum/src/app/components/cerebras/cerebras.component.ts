import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

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
    this.firebaseService.addLikeToCerebra(id);
  }

  searchCerebras(){
    this.firebaseService.getCerebrasByTitle(this.search.toLowerCase()).subscribe(cerebras => {
      this.cerebras = cerebras;
    });
  }

}
