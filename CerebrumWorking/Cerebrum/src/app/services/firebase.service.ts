import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  cerebras: FirebaseListObservable<any[]>;
  cerebra: FirebaseObjectObservable<any>;
  folder: any;

  constructor(public af: AngularFire) { 
    this.cerebras = this.af.database.list('/cerebras') as FirebaseListObservable<Cerebra[]>
    this.folder = 'cerebras';
  }

  getCerebras(){
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

  updateCerebra(id, cerebra){
    return this.cerebras.update(id, cerebra);
  }

  deleteCerebra(id){
    return this.cerebras.remove(id);
  }

  getCerebrasByTitle(cerebraName: any): Observable<Cerebra[]> {
    return this.af.database.list('cerebras').map(_cerebras => _cerebras.filter(cerebra => cerebra.cerebraName.toLowerCase().indexOf(cerebraName) !== -1));
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
