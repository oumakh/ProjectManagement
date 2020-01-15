import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { Task } from '../../models/task';
import{TaskService} from '../../services/task.service';
import {GetProjectListService } from '../../services/get-project-list.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  private newTask: Task = new Task();
  private taskAdded: boolean;	
  private projectList: Project[];
  private projectForTask: Project;

  constructor(private router: Router, private taskService: TaskService,
    private getProjectListService: GetProjectListService) { }

  onSubmit() {
    this.newTask.project = this.projectForTask;
    this.taskService.sendTask(this.newTask).subscribe(
      res => {
        this.taskAdded = true;
        this.newTask = new Task();
      },
      error => {
        console.log(error);
      }
    )
  }

  updateSelectedValue (event){
    this.projectForTask = event.target.value;
  }

  getProjectList() {
    this.getProjectListService.getProjectList().subscribe(
      res => {
        console.log(res.json());
        this.projectList=res.json();
      }, 
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getProjectList();
    this.taskAdded= false;
  }


}
