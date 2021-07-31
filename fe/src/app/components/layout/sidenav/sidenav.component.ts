import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenavdrawer', { static: true }) sidenavdrawer!: MatDrawer;  // static: true if we need to use it in ngOnInit, else false
  isSidebarOpened = false
  navs = [
    { title: 'Home', path: '/', faClass: 'fas fa-home' },
    // { title: 'Create Exam', path: '/create-exam', faClass: 'fas fa-magic' },
    { title: 'Exams', path: '/exams-gallery', faClass: 'far fa-list-alt' },
    { title: 'Organizations', path: '/create-org', faClass: 'fas fa-university' },
    { title: 'My Dashboard', path: '/link-5', faClass: 'fas fa-chart-line' },
    { title: 'Sign In', path: '/sign-in', faClass: 'fas fa-sign-in-alt' },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('Inside ngOnInit')
    console.log(this.sidenavdrawer)
  }

  toggleSidenav (): void {
    this.sidenavdrawer.toggle()
    this.isSidebarOpened = !this.isSidebarOpened
  }

}
