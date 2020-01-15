import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {AppConst} from '../../constants/app-const';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
})
export class NewAccountPage implements OnInit {
  private serverPath = AppConst.serverPath;
  private loginError:boolean = false;
  private loggedIn = false;
  private credential = {'username':'', 'password':''};

  private emailSent: boolean =false;
  private usernameExists:boolean;
  private emailExists:boolean;
  private username:string;
  private email:string;

  private emailNotExists: boolean =false;
  private forgetPasswordEmailSent: boolean;
  private recoverEmail:string;  

  constructor(private loginService: LoginService,private userService: UserService, private router: Router) { }

  onNewAccount() {
    this.usernameExists = false;
    this.emailExists = false;
    this.emailSent = false;

    this.userService.newUser(this.username, this.email).subscribe(
      res => {
        console.log(res);
        this.emailSent = true;
      }, 
      error => {
        console.log(error.text());
        let errorMessage = error.text();
        if(errorMessage==="usernameExists") this.usernameExists=true;
        if(errorMessage==="emailExists") this.emailExists=true;
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
      }
    );
  }

}
