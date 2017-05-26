import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cerebra',
  templateUrl: './add-cerebra.component.html',
  styleUrls: ['./add-cerebra.component.css']
})
export class AddCerebraComponent implements OnInit {
  cerebraName: any;
  cerebraDescription: any;
  cerebraTasks: any;
  cerebraTags: any;


  constructor(
    private firebaseService:FirebaseService,
    private router:Router

  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let cerebra = {
      cerebraName: this.cerebraName,
      cerebraDescription: this.cerebraDescription,
      cerebraTasks: this.cerebraTasks,
      cerebraTags: this.cerebraTags,
    }
    this.firebaseService.addCerebra(cerebra);
    this.router.navigate(['/cerebras']);
    console.log("onaddsubmit pressed");
  }

}
