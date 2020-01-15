import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';



import { IonicModule } from '@ionic/angular';

import { ViewProjectPageRoutingModule } from './view-project-routing.module';

import { ViewProjectPage } from './view-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatButtonModule,
    MatToolbarModule,
    ViewProjectPageRoutingModule
  ],
  declarations: [ViewProjectPage]
})
export class ViewProjectPageModule {}
