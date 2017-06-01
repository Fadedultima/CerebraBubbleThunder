import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cerebra',
  templateUrl: './cerebra.component.html',
  styleUrls: ['./cerebra.component.css']
})
export class CerebraComponent implements OnInit {
  id: any;
  cerebra: any;
  imageUrl: any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    //observable so you need to subscribe
    this.firebaseService.getCerebraDetails(this.id).subscribe(cerebra => {
      this.cerebra = cerebra;
      console.log(cerebra);
    });
  }

  onDeleteClick(){
    this.firebaseService.deleteCerebra(this.id);

    this.router.navigate(['/cerebras']);
  }

}
