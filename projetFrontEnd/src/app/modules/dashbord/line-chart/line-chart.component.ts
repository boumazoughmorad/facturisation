import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  multi!: any[];
  // =[
  //   { name: "Mobiles", value: 105000 },
  //   { name: "Laptop", value: 55000 },
  //   { name: "AC", value: 15000 },
  //   { name: "Headset", value: 150000 },
  //   { name: "Fridge", value: 20000 }
  // ];
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
  xAxisLabel: string = 'categoier';
  yAxisLabel: string = 'nombre de produit';
  timeline: boolean = true;
  legendTitle: string = 'les anneés';
  legendPosition: LegendPosition = LegendPosition.Right;


  roundDomains: boolean = true;

  // colorScheme: Color  ={
  //   name: 'myScheme',
  //   selectable: true,
  //   group: ScaleType.Ordinal,
  //   domain: [ '#FF5370', '#2ed8b6']
  // };
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FF5370', '#2ed8b6', '#ff0000'],
  };

  constructor(private statistiqueService: StatistiqueService,private router:Router) {
  }

  ngOnInit(): void {
    // this.multi =[
    //   { name: "Mobiles", value: 105000 },
    //   { name: "Laptop", value: 55000 },
    //   { name: "AC", value: 15000 },
    //   { name: "Headset", value: 150000 },
    //   { name: "Fridge", value: 20000 }
    
    // ];
    // Object.assign(this, { multi })

    this.setDataLineChart();

  }

  setDataLineChart(){

    this.statistiqueService.statistiquecategories3annees().subscribe(data  =>{
      this.multi =  data;
    },
    error =>{
        this.router.navigateByUrl('/error404');
     
       
        
   
    });
  
    

  }


  

}


