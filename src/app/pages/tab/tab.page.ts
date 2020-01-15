import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {
  private loggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
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
