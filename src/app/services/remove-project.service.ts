import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
import {Project} from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class RemoveProjectService {

  private serverPath:string=AppConst.serverPath;

  constructor(private http: Http) { }

  sendProject(projectId:number) {
    let url = this.serverPath+"/project/remove";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, projectId, {headers: headers});
  }
}
