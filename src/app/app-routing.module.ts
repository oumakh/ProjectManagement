import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-new-project',
    loadChildren: () => import('./pages/add-new-project/add-new-project.module').then( m => m.AddNewProjectPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'view-project/:id',
    loadChildren: () => import('./pages/view-project/view-project.module').then( m => m.ViewProjectPageModule)
  },
  {
    path: 'edit-project/:id',
    loadChildren: () => import('./pages/edit-project/edit-project.module').then( m => m.EditProjectPageModule)
  },
  {
    path: 'new-account',
    loadChildren: () => import('./pages/new-account/new-account.module').then( m => m.NewAccountPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'add-task/:id',
    loadChildren: () => import('./pages/add-task/add-task.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./pages/add-task/add-task.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'task-list',
    loadChildren: () => import('./pages/task-list/task-list.module').then( m => m.TaskListPageModule)
  },
  {
    path: 'view-task/:id',
    loadChildren: () => import('./pages/view-task/view-task.module').then( m => m.ViewTaskPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
