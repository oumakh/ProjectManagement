import { Component } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Project} from '../../models/project';
import {GetProjectListService } from '../../services/get-project-list.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AddProjectService} from '../../services/add-project.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  private selectedProject : Project;
	private checked: boolean;
	private projectList: Project[];
	private allChecked: boolean;
  private removeProjectList: Project[] = new Array();

  private loggedIn = false;

  constructor(private loginService: LoginService, private router: Router, 
    private getProjectListService: GetProjectListService, public dialog:MatDialog,
    private addProjectService: AddProjectService) {
    }

  onSelect(project:Project) {
      this.selectedProject=project;
      this.router.navigate(['/view-project', this.selectedProject.id]);
    }

  onAddTask(project:Project) {
      this.selectedProject=project;
      this.router.navigate(['/add-task', this.selectedProject.id]);
    }

  openDialog(project:Project) {
      let dialogRef = this.dialog.open(DialogResultExampleDialog);
      dialogRef.afterClosed().subscribe(
        result => {
          console.log(result);
          if(result=="yes") {
            this.addProjectService.sendProjectId(project.id).subscribe(
              res => {
                console.log(res);
                this.getProjectList();
              }, 
              err => {
                console.log(err);
              }
            );
          }
        }
      );
    }
    updateRemoveProjectList(checked:boolean, project:Project) {
      if(checked) {
        this.removeProjectList.push(project);
      } else {
        this.removeProjectList.splice(this.removeProjectList.indexOf(project), 1);
      }
    }
  
    updateSelected(checked: boolean) {
      if(checked) {
        this.allChecked = true;
        this.removeProjectList=this.projectList.slice();
      } else {
        this.allChecked=false;
        this.removeProjectList=[];
      }
    }
  
    removeSelectedProjects() {
      let dialogRef = this.dialog.open(DialogResultExampleDialog);
      dialogRef.afterClosed().subscribe(
        result => {
          console.log(result);
          if(result=="yes") {
            for (let project of this.removeProjectList) {
              this.addProjectService.sendProjectId(project.id).subscribe(
                res => {
  
                }, 
                err => {
                }
                );
            }
            location.reload();
          }
        }
        ); 
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
    

  logout() {
    this.loginService.logout().subscribe(
      res => {
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate(['/']);
  }


  ngOnInit() {
    this.getProjectList();
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

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) {}
}

