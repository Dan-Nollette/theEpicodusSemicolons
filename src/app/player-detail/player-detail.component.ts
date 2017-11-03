import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Teammate } from '../teammate.model';
import { TeammateService } from '../teammate.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [TeammateService]
})
export class PlayerDetailComponent implements OnInit {
  teammateId: string;
  teammateToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private teammateService: TeammateService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.teammateId = urlParameters['id'];
   });
   this.teammateToDisplay = this.teammateService.getTeammateById(this.teammateId);
  }

}
