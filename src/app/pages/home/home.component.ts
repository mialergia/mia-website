import {Component, OnInit} from '@angular/core';
import {Title, menu} from 'src/app/types/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public title = Title;
  public menu = menu;

  constructor() {}

  ngOnInit(): void {}
}
