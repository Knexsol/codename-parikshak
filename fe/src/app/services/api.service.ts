import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { RestService } from './rest.service'
import { getAPIRoot, API_URLS } from '../constants/urls'
import { TSigninPost, TSignupPost } from '../types/api.types'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env: string = ''

  constructor(private _rest: RestService) {
    this.env = environment.env
  }

  async signup (userData: TSignupPost ) {
    const url = getAPIRoot(this.env) + API_URLS.SIGNUP
    const res = await this._rest.post(url, userData)
    // console.log('Inside ApiService::signup', res)
    return res
  }

  async signin (userData: TSigninPost ) {
    const url = getAPIRoot(this.env) + API_URLS.SIGNIN
    const res = await this._rest.post(url, userData)
    // console.log('Inside ApiService::signup', res)
    return res
  }
  
}
