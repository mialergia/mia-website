import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MENU} from 'src/app/types/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public menu = MENU;
  public openMenu = false;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  openUrl = (url: string) => {
    window.open(url, '_blank');
  };
}
