import { Component, OnInit } from '@angular/core';
import { TeammateService } from'../teammate.service';
import { Teammate } from  '../teammate.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TeammateService]
})

export class AdminComponent implements OnInit {

  constructor(private teammateService: TeammateService) { }

  ngOnInit() {
  }

  submitForm(name: string, position: string, playStyle: string) {
    var newTeammate: Teammate = new Teammate(name, position, playStyle);
    this.teammateService.addTeammate(newTeammate);
  }
}
