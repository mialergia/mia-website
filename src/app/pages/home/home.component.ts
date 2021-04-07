import {Component, OnInit} from '@angular/core';
import {TITLE, MENU, IMAGES} from 'src/app/types/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public title = TITLE;
  public menu = MENU;
  public images: string[];
  public numVisible = 3;

  constructor() {}

  ngOnInit(): void {
    this.images = IMAGES;
    if (window.innerWidth < 480) {
      this.numVisible = 1;
    } else if (window.innerWidth < 767) {
      this.numVisible = 2;
    }
  }
}
