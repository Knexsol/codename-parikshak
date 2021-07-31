import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  signInObj = { email: '', pswd: '' }
  signUpObj = { email: '', pswd: '', rpswd: '', fullname: '' }


  constructor() { }

  ngOnInit(): void {
  }

  handleSignin (ev: Event, el: NgForm) {
    ev.preventDefault()
    console.log(el)
    // console.log(this.signInObj)
  }

  handleSignup (ev: Event, el: NgForm) {
    ev.preventDefault()
    console.log(el)
  }

}
