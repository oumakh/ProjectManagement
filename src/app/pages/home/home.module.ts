import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { HomePage, DialogResultExampleDialog } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NgxDatatableModule
  ],
  declarations: [HomePage, DialogResultExampleDialog ],
  entryComponents: [DialogResultExampleDialog],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomePageModule {}
