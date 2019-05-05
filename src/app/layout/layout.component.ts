import { Component, OnInit } from '@angular/core';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
