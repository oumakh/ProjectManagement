import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {GetProjectService} from '../../services/get-project.service';
import {Project} from '../../models/project';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.page.html',
  styleUrls: ['./view-project.page.scss'],
})
export class ViewProjectPage implements OnInit {

  private project:Project = new Project();
  private projectId: number;

  constructor(private getProjectService:GetProjectService,
	  private route:ActivatedRoute, private router:Router) { }
	  
  onSelect(project:Project) {
		this.router.navigate(['/edit-project', this.project.id]);
	  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
  		this.projectId = Number.parseInt(params['id']);
  	});

  	this.getProjectService.getProject(this.projectId).subscribe(
  		res => {
  			this.project = res.json();
  		},
  		error => {
  			console.log(error);
  		}
  	);
  }

}
