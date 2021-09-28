import { Component, OnInit } from '@angular/core';
import { GoogleSignInService } from 'src/app/services/google-sign-in.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fe';

  constructor(private _gSignIn: GoogleSignInService) {

  }

  ngOnInit () {
    this._gSignIn.initLoad()
  }
  

}
