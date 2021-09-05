import { Component } from '@angular/core';
import { MenuItem, MENU_ITEMS } from '../../../pages-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export default class SidebarComponent {
  logo: string = '';
  title: string = 'Admin';
  menus: MenuItem[] = MENU_ITEMS;
}
