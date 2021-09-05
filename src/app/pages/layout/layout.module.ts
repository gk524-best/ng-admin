import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

import {
  MenuComponent,
  MenuItemComponent,
} from './components/menu/menu.component';
import HeaderComponent from './components/header/header.component';
import SidebarComponent from './components/sidebar/sidebar.component';
import FooterComponent from './components/Footer/footer.component';
import BasicLayoutComponent from './basicLayout/basic-layout.component';

const COMPONENTS = [
  MenuComponent,
  MenuItemComponent,
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  BasicLayoutComponent,
];

const MODULES = [
  CommonModule,
  NzMenuModule,
  NzIconModule,
  RouterModule,
  NzButtonModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
