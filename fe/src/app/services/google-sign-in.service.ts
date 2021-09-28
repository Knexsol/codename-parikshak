import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleSignInService {
  GoogleAuth: any

  initComplete = false

  constructor() { }

  initLoad () {
    if(!this.initComplete) {
      // @ts-ignore
      if(typeof(gapi) !== 'undefined') {
        this._initGapi()
        this.initComplete = true
      }
      else {
        setTimeout(() => {
          this.initLoad()
        }, 1000)
      }
    }
    
  }

  isSignedIn = ():boolean => this.GoogleAuth.isSignedIn.get()

  signIn
  signOut = () => this.GoogleAuth.signOut()

  _initGapi() {
    // @ts-ignore
    gapi.load('auth2', () => {
      /* Ready. Make a call to gapi.auth2.init or some other API */
      // @ts-ignore
      this.GoogleAuth = gapi.auth2.init({
        client_id: '823183251448-2h0kt0h3druin14f3fmpav8qkscs1o46.apps.googleusercontent.com'
      })

      console.log(this.GoogleAuth)
    });
  }
}
