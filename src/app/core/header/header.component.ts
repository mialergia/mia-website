import {Component, OnInit} from '@angular/core';
import {menu} from 'src/app/types/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public menu = menu;
  public openMenu = false;

  constructor() {}

  ngOnInit(): void {}

  openUrl = (url: string) => {
    window.open(url, '_blank');
  };
}
