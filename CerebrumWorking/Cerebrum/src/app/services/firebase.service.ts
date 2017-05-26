import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  cerebras: FirebaseListObservable<any[]>;
  cerebra: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) { 
    this.folder = 'cerebras';
  }

  getCerebras(){
    this.cerebras = this.af.database.list('/cerebras') as FirebaseListObservable<Cerebra[]>
    return this.cerebras;

  }

  getCerebraDetails(id){
    this.cerebra = this.af.database.object('/cerebras/'+id) as FirebaseObjectObservable<Cerebra>
    return this.cerebra;
  }

  addCerebra(cerebra){
    //create root ref
    
    return this.cerebras.push(cerebra);
    
  }

}

//create interface
interface Cerebra{
  $key?: string;
  cerebraCreator?: string;
  cerebraDescription?: string;
  cerebraId?: number;
  cerebraName?: string;
  cerebraTags?: string;
  cerebraLikes?: number;
  cerebraTasks?: string;

}
