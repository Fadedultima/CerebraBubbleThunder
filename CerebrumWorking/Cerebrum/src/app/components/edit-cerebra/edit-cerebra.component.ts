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


  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
