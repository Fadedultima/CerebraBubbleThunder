import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-cerebra',
  templateUrl: './edit-cerebra.component.html',
  styleUrls: ['./edit-cerebra.component.css']
})
export class EditCerebraComponent implements OnInit {
  id: any;
  cerebraName: any;
  cerebraDescription: any;
  cerebraTasks: any;
  cerebraTags: any;
  cerebraCreator: any;


  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getCerebraDetails(this.id).subscribe(cerebra => {
      console.log(cerebra);
      this.cerebraName = cerebra.cerebraName;
      this.cerebraDescription = cerebra.cerebraDescription;
      this.cerebraTasks = cerebra.cerebraTasks;
      this.cerebraTags = cerebra.cerebraTags;
      this.cerebraCreator = cerebra.cerebraCreator;
    });
  }

  onEditSubmit(){
    let cerebra = {
      cerebraName: this.cerebraName,
      cerebraDescription: this.cerebraDescription,
      cerebraTasks: this.cerebraTasks,
      cerebraTags: this.cerebraTags,
      cerebraCreator: this.cerebraCreator
    }

    this.firebaseService.updateCerebra(this.id, cerebra);
    this.router.navigate(['/cerebras']);
  }
	
    addTask(event){
		this.cerebraTasks.push({name: ""});
	}
	
	removeTask(event){
		this.cerebraTasks.splice(-1,1);
	}

}
