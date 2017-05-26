import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-cerebras',
  templateUrl: './cerebras.component.html',
  styleUrls: ['./cerebras.component.css']
})
export class CerebrasComponent implements OnInit {
  cerebras: any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCerebras().subscribe(cerebras => {
      console.log(cerebras);
      this.cerebras = cerebras;
    });
  }

}
