import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { UserService } from '../../user/user.service';
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
  selector: 'app-line-chart2',
  templateUrl: './line-chart2.component.html',
  styleUrls: ['./line-chart2.component.css']
})
export class LineChart2Component implements OnInit {

  multi!: any[];
 
  res:any;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  noBarWhenZero : boolean = false;
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = 'nombre de user';
  timeline: boolean = true;
  legendTitle: string = '';
  legendPosition: LegendPosition = LegendPosition.Right;


  roundDomains: boolean = true;


  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [ '#2ed8b6', '#ff0000'],
  };

  constructor(private userservice:UserService,private router:Router) {
  }

  ngOnInit(): void {

    this.setDataLineChart();

  }

  setDataLineChart(){
this.userservice.NemberUserAuth().subscribe(res=>{
  // this.multi =  res;
  this.res=res;
  console.log(res[0].name);
  
  this.multi=[
    {
      "name":"Nember user auth",
      "value":res[0].name,
    }
  ]
} 
// ,
// error =>{
//     this.router.navigateByUrl('/error404');
 
   
    

// }
);


  

  
    

  }


}
