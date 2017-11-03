import { Injectable } from '@angular/core';
import { Teammate } from './teammate.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TeammateService {
  teammates: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.teammates = database.list('teammates');
  }

  getTeammates(){
    return this.teammates;
  }

  addTeammate(newTeammate: Teammate) {
    this.teammates.push(newTeammate);
  }

  getTeammateById(teammateId: string){
    return this.database.object('teammates/' + teammateId);
  }

  updateTeammate(localUpdatedTeammate){
    var teammateEntryInFirebase = this.getTeammateById(localUpdatedTeammate.$key);
    teammateEntryInFirebase.update({name: localUpdatedTeammate.name,
                                position: localUpdatedTeammate.position,
                                playStyle: localUpdatedTeammate.playStyle});
  }

  deleteTeammate(localTeammateToDelete){
    var teammateEntryInFirebase = this.getTeammateById(localTeammateToDelete.$key);
    teammateEntryInFirebase.remove();
  }

}
