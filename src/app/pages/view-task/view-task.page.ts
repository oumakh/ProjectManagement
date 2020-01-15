import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../../services/task.service';
import {Task} from '../../models/task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.page.html',
  styleUrls: ['./view-task.page.scss'],
})
export class ViewTaskPage implements OnInit {
  private task = {
    name: null,
    project: {
      title: null
    }
  }
  private taskId: number;

  constructor(private taskService:TaskService,
	  private route:ActivatedRoute, private router:Router) { }

  
    ngOnInit() {
      this.route.params.forEach((params: Params) => {
        this.taskId = Number.parseInt(params['id']);
      });
      
      this.taskService.getTask(this.taskId).subscribe(
        res => {
          this.task = res.json();
          console.log(this.task, ' bb');
        },
        error => {
          console.log(error);
        }
      );
    }

}
