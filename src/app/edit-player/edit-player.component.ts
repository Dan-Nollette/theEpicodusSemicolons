import { Component, Input, OnInit } from '@angular/core';
import { TeammateService } from '../teammate.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [TeammateService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedTeammate;

  constructor(private teammateService: TeammateService) { }

  ngOnInit() {
  }

  beginUpdatingTeammate(teammateToUpdate){
    this.teammateService.updateTeammate(teammateToUpdate);
  }

  beginDeletingTeammate(teammateToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.teammateService.deleteTeammate(teammateToDelete);
    }
  }

}
