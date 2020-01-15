import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';

import {Project} from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class EditProjectService {
  private serverPath:string=AppConst.serverPath;

  constructor(private http:Http) { }

  sendProject(project:Project) {
  	let url = this.serverPath+"/project/update";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(project), {headers: headers});
  }
}
