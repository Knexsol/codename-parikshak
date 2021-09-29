import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GoogleSignInService {
    GoogleAuth: any

    initComplete = false

    constructor() { }

    initLoad() {
        return new Promise( (resolve: Function) => {
            if (!this.initComplete) {
                // @ts-ignore
                // if(typeof(gapi) !== 'undefined') {
                this._waitForGapi().then(() => {
                    this._initGapi().then(() => resolve('Google Signin API Ready to Rock...'))
                })
                this.initComplete = true
            }
        } )
    }

    /**
     * Let's wait for the Global 'gapi' to be loaded on windows
     * @returns 
     */
    _waitForGapi() {
        return new Promise((resolve: Function) => {
            // let isGapiAvailable = false
            function resolveIfGapiAvailable() {
                // @ts-ignore
                if (typeof (gapi) !== 'undefined') {
                    resolve()
                }
                else {
                    setTimeout(() => {
                        resolveIfGapiAvailable()
                    }, 1000)
                }
            }
            resolveIfGapiAvailable()
        })
    }

    isSignedIn = (): boolean => this.GoogleAuth.isSignedIn.get()


    signOut = () => this.GoogleAuth.signOut()

    /**
     * Initialize gapi with 'auth2'
     * @returns 
     */
    _initGapi() {
        return new Promise( (resolve:Function) => {
            // @ts-ignore
            gapi.load('auth2', () => {
                /* Ready. Make a call to gapi.auth2.init or some other API */
                // @ts-ignore
                this.GoogleAuth = gapi.auth2.init({
                    client_id: '823183251448-2h0kt0h3druin14f3fmpav8qkscs1o46.apps.googleusercontent.com'
                })
                resolve('gapi load auth2 -- complete')
                console.log(this.GoogleAuth)
            });
        } )
        
    }
}
