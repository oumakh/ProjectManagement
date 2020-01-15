import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginService } from './services/login.service';
import { AddProjectService } from './services/add-project.service';
import { GetProjectListService } from './services/get-project-list.service';
import { GetProjectService } from './services/get-project.service';
import { EditProjectService } from './services/edit-project.service';
import { RemoveProjectService } from './services/remove-project.service';
import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(), 
            AppRoutingModule,
            BrowserAnimationsModule,
            HttpModule
          ],
  providers: [
    StatusBar,
    LoginService ,
    AddProjectService,
    GetProjectListService,
    GetProjectService,
    EditProjectService,
    RemoveProjectService,
    UserService,
    TaskService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
