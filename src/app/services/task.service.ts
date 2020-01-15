import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private serverPath:string=AppConst.serverPath;

  constructor(private http: Http) { }

  sendTask(task:Task) {
    let url = this.serverPath+"/task/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(task), {headers: headers});
  }

  getTaskList() {
  	let url = this.serverPath+"/task/taskList";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

  getTask(id:number) {
  	let url = this.serverPath+"/task/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

}
