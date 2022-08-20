import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { GroupedVerticalBarChartComponent } from './grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';

const routes: Routes =[
  {
    
    path:'',
    component:DashbordComponent,
    // component:GroupedVerticalBarChartComponent,

    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)
 
  ],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
