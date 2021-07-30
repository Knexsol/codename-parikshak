import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  isSidebarOpened = false
  navs = [
    { title: 'Home', path: '/' },
    { title: 'Create Exam', path: '/create-exam' },
    { title: 'Link 3', path: '/link-3' },
    { title: 'Link 4', path: '/link-4' },
    { title: 'Link 5', path: '/link-5' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
