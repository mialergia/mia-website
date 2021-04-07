import {Component, OnInit} from '@angular/core';
import {MENU} from 'src/app/types/constants';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  public menu = MENU;

  constructor() {}

  ngOnInit(): void {}
}
