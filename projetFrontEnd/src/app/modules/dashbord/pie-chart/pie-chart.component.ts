import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { StatistiqueService } from '../statistique.service';
// export var single = [
//   {
//     "name": "Germany",
//     "value": 8940000
//   },
//   {
//     "name": "USA",
//     "value": 5000000
//   },
//   {
//     "name": "France",
//     "value": 7200000
//   } ,
//   {
//     "name": "USAZ",
//     "value": 5009000
//   },
//   {
//     "name": "sss",
//     "value": 72030000
//   } 
// ];
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  single!:any[];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'right';

  colorScheme: Color  ={
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FF5370', '#2ed8b6','#4099ff','#FFB64D','#f677ff']
  };

  constructor(private statistiqueService: StatistiqueService) { }

  ngOnInit(): void {

    this.setDataPieChart();
  }

  setDataPieChart(){
    this.statistiqueService.statistiquedocument().subscribe(data  =>{
      this.single =  data;
    })
  }

}