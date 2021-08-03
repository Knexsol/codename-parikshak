import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../services/api.service'
import { TSigninPost, TSignupPost } from '../../../types/api.types'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  signInObj = { email: '', pswd: '' }
  signUpObj = { email: '', pswd: '', rpswd: '', fullname: '' }


  constructor(private _api: ApiService) { }

  ngOnInit(): void {
  }

  async handleSignin (ev: Event, el: NgForm) {
    ev.preventDefault()
    console.log(el.form.value)
    // console.log(this.signInObj)

    const { email, pswd } = el.form.value

    // TODO VALIDATIONS
    const userData = { email, pswd } as TSigninPost

    const res = await this._api.signin(userData) as any

    if(res.status) {
      alert(res.msg)
    }
    else {
      alert("Couldn't get a response back from the server...")
    }
  }


  async handleSignup (ev: Event, el: NgForm) {
    ev.preventDefault()
    console.log(el.form.value)
    const { fullname, email, pswd, rpswd } = el.form.value

    // TODO VALIDATIONS
    const userData = { fullname, email, pswd } as TSignupPost

    const res = await this._api.signup(userData) as any

    if(res.status) {
      alert(res.msg)
    }
    else {
      alert("Couldn't get a response back from the server...")
    }
  }


}
