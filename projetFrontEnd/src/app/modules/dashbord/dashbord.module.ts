import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { GroupedVerticalBarChartComponent } from './grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from 'src/app/material.module';
import { DashbordComponent } from './dashbord.component';
import { LineChart2Component } from './line-chart2/line-chart2.component';
@NgModule({
  declarations: [
    DoughnutChartComponent,
    GroupedVerticalBarChartComponent,
    LineChartComponent,
    PieChartComponent,
   DashbordComponent,
   LineChart2Component
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,

    MaterialModule,
    NgxChartsModule
  ]
})
export class DashbordModule { }
