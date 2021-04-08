import {Component, OnInit} from '@angular/core';
import {MENU, DOCTORS_TEAM, BIOLOGY_TEAM, ENGINEER_TEAM, TEAM_TITLE} from 'src/app/types/constants';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  public menu = MENU;
  public doctorsTeam = DOCTORS_TEAM;
  public biologyTeam = BIOLOGY_TEAM;
  public engineerTeam = ENGINEER_TEAM;
  public title = TEAM_TITLE;

  constructor() {}

  ngOnInit(): void {}
}
