import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {AppConst} from '../../constants/app-const';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
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

  onForgetPassword() {
    this.forgetPasswordEmailSent = false;
    this.emailNotExists = false;

    this.userService.retrievePassword(this.recoverEmail).subscribe(
      res => {
        console.log(res);
        this.forgetPasswordEmailSent = true;
      },
      error => {
        console.log(error.text());
        let errorMessage = error.text();
        if(errorMessage==="Email not found") this.emailNotExists=true;
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
