import { Injectable } from '@angular/core';
import {AppConst} from '../constants/app-const';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetProjectListService {
  private serverPath:string=AppConst.serverPath;

  constructor(private http:Http) { }

  getProjectList() {
  	let url = this.serverPath+"/project/projectList";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}
