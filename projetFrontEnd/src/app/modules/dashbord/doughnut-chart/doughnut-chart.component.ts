import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  single!: any[];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  legendPosition: string = 'right';
  legendTitle: string = 'mointh';

  colorScheme: Color  ={
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FF5370', '#2ed8b6','#4099ff','#FFB64D','#f677ff']
  };

  constructor(private statistiqueService: StatistiqueService) { }

  ngOnInit(): void {
    // Object.assign(this, { single }),

    this.setDataPieChart();
  }

  setDataPieChart(){
    this.statistiqueService.statistiqueUser4monis().subscribe(data  =>{
      this.single =  data;
          // Object.assign(this.single);

      
    })
  }

}