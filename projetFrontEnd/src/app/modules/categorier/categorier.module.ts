import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorierRoutingModule } from './categorier-routing.module';
import { ListCategorierComponent } from './list-categorier/list-categorier.component';
import { AjouterCategorierComponent } from './ajouter-categorier/ajouter-categorier.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from 'src/app/material.module';

// import * as CanvasJSAngularChart from 'src/assets/canvasjs.angular.component';
// var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
@NgModule({
  declarations: [
    ListCategorierComponent,
    AjouterCategorierComponent,
   
  ],
  imports: [
    CommonModule,
    CategorierRoutingModule,
    MaterialModule,
    NgxChartsModule
  ]
})
export class CategorierModule { }
