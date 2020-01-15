import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  private selectedTask : Task;
	private checked: boolean;
	private taskList: Task[];
	private allChecked: boolean;
  private removeTaskList: Task[] = new Array();

  private loggedIn = false;

  constructor(private loginService: LoginService,private router: Router, 
    public dialog:MatDialog,
    private taskService: TaskService) { }

    onSelect(task:Task) {
      this.selectedTask=task;
      this.router.navigate(['/view-task', this.selectedTask.id]);
    }

    getTaskList() {
      this.taskService.getTaskList().subscribe(
        res => {
          console.log(res.json());
          this.taskList=res.json();
        }, 
        error => {
          console.log(error);
        }
      );
    }
  
  ngOnInit() {
    this.getTaskList();
    this.loginService.checkSession().subscribe(
      res => { //succesful response
        this.loggedIn=true;
      },
      error => { //unsuccesful response
        this.loggedIn=false;
      }
    );
  }

}
