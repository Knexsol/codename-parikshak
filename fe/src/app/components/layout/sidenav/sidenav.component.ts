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
    { title: 'Home', path: '/', matIcon: 'home' },
    // { title: 'Create Exam', path: '/create-exam' },
    { title: 'Exams', path: '/exams-gallery', matIcon: 'fact_check' },
    { title: 'Organizations', path: '/create-org', matIcon: 'school' },
    { title: 'My Dashboard', path: '/link-5', matIcon: 'dashboard' },
    { title: 'Sign In', path: '/sign-in', matIcon: 'people_alt' },
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
