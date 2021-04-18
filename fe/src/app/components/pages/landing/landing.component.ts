import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  visibleCard = ''  // Possible values = 'CREATE_EXAM' 'TAKE_EXAM'

  constructor() { }

  ngOnInit(): void {
  }

}
