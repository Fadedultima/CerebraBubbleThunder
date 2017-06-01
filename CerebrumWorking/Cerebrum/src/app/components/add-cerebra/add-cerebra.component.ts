import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cerebra',
  templateUrl: './add-cerebra.component.html',
  styleUrls: ['./add-cerebra.component.css'],
})
export class AddCerebraComponent implements OnInit {
  cerebraName: any;
  cerebraDescription: any;
  cerebraTasks: any = [{name: ''}, {name: ''}, {name: ''}];
  cerebraTags: any;
  cerebraCreator: string;
  //taskArray: string[] = ['', '', ''];

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    public authService:FirebaseService

  ) {
    this.authService.af.auth.subscribe(
      (auth) => {
    this.cerebraCreator = auth.google.displayName;
      }
    );
   }

  ngOnInit() {
  }

  onAddSubmit(){
	  //set cerebraTasks to the list of tasks obtained from input boxes
    let cerebra = {
      cerebraName: this.cerebraName,
      cerebraDescription: this.cerebraDescription,
      cerebraTasks: this.cerebraTasks,
      cerebraTags: this.cerebraTags,
      cerebraCreator: this.cerebraCreator
    }
    this.firebaseService.addCerebra(cerebra);
    this.router.navigate(['/cerebras']);
  }
	
	addTask(event){
		console.log("testing");
		this.cerebraTasks.push({name: ""});
	}

}
