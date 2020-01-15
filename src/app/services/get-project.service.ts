import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';

@Injectable({
  providedIn: 'root'
})
export class GetProjectService {
  private serverPath:string=AppConst.serverPath;

  constructor(private http:Http) { }

  getProject(id:number) {
  	let url = this.serverPath+"/project/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}
