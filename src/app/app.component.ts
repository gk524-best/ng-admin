import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages/pages-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-admin';
  menus = MENU_ITEMS;

  ngOnInit() {
    console.log(this.menus);
  }
}
