import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class FirebaseService {
  cerebras: FirebaseListObservable<any[]>;
  cerebra: FirebaseObjectObservable<any>;
  user_displayName: string;
  

  constructor(public af: AngularFire) { 
    this.cerebras = this.af.database.list('/cerebras') as FirebaseListObservable<Cerebra[]>
  }

  getCerebras(){
    return this.cerebras;
  }

  getCerebraDetails(id){
    this.cerebra = this.af.database.object('/cerebras/'+id) as FirebaseObjectObservable<Cerebra>
    return this.cerebra;
  }

  addCerebra(cerebra){
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

  addLikeToCerebra(id){
    this.af.database.object('cerebras/' + id + '/cerebraLikes').take(1).subscribe((data) => {
      let newData = data.$value + 1;
      this.af.database.object('cerebras/' + id + '/cerebraLikes').set(newData)
    });
  }

  subtractLikeFromCerebra(id){
    this.af.database.object('cerebras/' + id + '/cerebraLikes').take(1).subscribe((data) => {
      let newData = data.$value - 1;
      this.af.database.object('cerebras/' + id + '/cerebraLikes').set(newData)
    });
  }

  addToLikes(uid, id){
    this.af.database.object('cerebras/' + id + "/cerebraName").take(1).subscribe((data) => {
      console.log(data.$value);
      this.af.database.object('likes/' + uid + "/" + id + "/name").set(data.$value);
    });
  }

  removeFromLikes(uid, id){
    return this.af.database.list('likes/' + uid).remove(id);
  }

  checkIfLiked(uid, id){
    this.af.database.object('likes/' + uid + "/" + id + "/name").take(1).subscribe((data) => {
      if(data.$value !== null){
        this.subtractLikeFromCerebra(id);
        this.removeFromLikes(uid, id);
      } else{
        this.addLikeToCerebra(id);
        this.addToLikes(uid, id);
      }
    });
  }




}

interface Cerebra{
  $key?: string;
  cerebraCreator?: string;
  cerebraDescription?: string;
  cerebraId?: number;
  cerebraName?: string;
  cerebraTags?: string;
  cerebraLikes?: number;
  cerebraTasks?: any[];

}
