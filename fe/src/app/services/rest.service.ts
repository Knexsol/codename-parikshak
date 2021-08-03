import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  async post (url: string, data: any) {
    let res = await this.http.post(url, data).toPromise()
    // console.log('Inside RestService::post', res)
    return res
  }
}
