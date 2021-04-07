import {Component, OnInit} from '@angular/core';
import {MENU} from 'src/app/types/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public menu = MENU;
  public openMenu = false;

  constructor() {}

  ngOnInit(): void {}

  openUrl = (url: string) => {
    window.open(url, '_blank');
  };
}
