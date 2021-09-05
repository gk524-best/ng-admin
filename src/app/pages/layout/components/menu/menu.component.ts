import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../pages-menu';

@Component({
  selector: '[appMenuItem]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuItemComponent {
  @Input() menuItem!: MenuItem;
}

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu">
      <ul nz-menu [nzMode]="'inline'">
        <ng-container *ngFor="let menu of menus">
          <span appMenuItem [menuItem]="menu" *ngIf="!menu.hidden"></span>
        </ng-container>
      </ul>
    </div>
  `,
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent {
  @Input() menus: MenuItem[] = [];
}
