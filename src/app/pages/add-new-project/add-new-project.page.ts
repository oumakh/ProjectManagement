import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import{AddProjectService} from '../../services/add-project.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.page.html',
  styleUrls: ['./add-new-project.page.scss'],
})
export class AddNewProjectPage implements OnInit {

  private newProject: Project = new Project();
  private projectAdded: boolean;	

  constructor(private router: Router, private addProjectService: AddProjectService) { }

  onSubmit() {
    this.addProjectService.sendProject(this.newProject).subscribe(
      res => {
        this.projectAdded = true;
        this.newProject = new Project();
        this.newProject.active = true;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.projectAdded= false;
    this.newProject.active = true;
  }

}
