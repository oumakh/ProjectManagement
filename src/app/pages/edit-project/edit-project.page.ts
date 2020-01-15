import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetProjectService } from '../../services/get-project.service';
import { AddProjectService } from '../../services/add-project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.page.html',
  styleUrls: ['./edit-project.page.scss'],
})
export class EditProjectPage implements OnInit {

  private projectId: number;
  private project: Project = new Project();
  private projectUpdated: boolean;

  constructor( private addProjectService: AddProjectService,
  	           private getProjectService: GetProjectService,
  	           private route: ActivatedRoute,
               private router: Router) { }
               
  onSubmit() {
    this.addProjectService.sendProject(this.project).subscribe(
      data => {
        this.projectUpdated=true;
      },
      error => console.log(error)
      );
    }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
  		this.projectId = Number.parseInt(params['id']);
  	});

  	this.getProjectService.getProject(this.projectId).subscribe(
  		res => {
  			this.project = res.json();
  		}, 
  		error => console.log(error)
  	)
  }

}
