import { Component, OnInit } from '@angular/core';
import { Teammate }  from '../teammate.model';
import { Router } from '@angular/router';
import { TeammateService } from '../teammate.service';
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
  providers: [TeammateService]
})
export class TeamRosterComponent implements OnInit {
  teammates: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private teammateService: TeammateService)) { }

  ngOnInit()
    this.teammates = this.teammateService.getTeammates();
  }

}
