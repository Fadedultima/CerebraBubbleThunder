import { Component, OnInit, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-cerebras',
  templateUrl: './cerebras.component.html',
  styleUrls: ['./cerebras.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({}),
        animate(700, keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: .6, offset: 0.7}),
          style({opacity: 1, offset: 1.0})
        ]))
      ]),
    ])
  ],
  host: { '[@fadeIn]': '' }
})
export class CerebrasComponent implements OnInit {
  cerebras: any;
  search: any;
  count: any;
  uid: any;



  constructor(private firebaseService:FirebaseService) { 
    this.firebaseService.getCerebras().subscribe(cerebras => {
      this.cerebras = cerebras;
      this.count = cerebras.length;
    });
  }

  ngOnInit() {
    this.firebaseService.af.auth.subscribe((auth) => { this.uid = auth.google.uid; });
  }

  likeThing(id){
    this.firebaseService.toggleLike(this.uid, id);
  }

  searchCerebras(){
    this.firebaseService.getCerebrasByTitle(this.search.toLowerCase()).subscribe(cerebras => {
      this.cerebras = cerebras;
    });
  }

}
