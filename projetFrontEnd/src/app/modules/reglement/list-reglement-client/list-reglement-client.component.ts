import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client/client.service';
import { DocumentService } from '../../Document/document.service';
import { UserAuthService } from '../../user/user-auth.service';
import { UserService } from '../../user/user.service';
import { ReglementService } from '../reglement.service';
// import { Chart } from 'chart.js';
@Component({
  selector: 'app-list-reglement-client',
  templateUrl: './list-reglement-client.component.html',
  styleUrls: ['./list-reglement-client.component.css']
})
export class ListReglementClientComponent implements OnInit {
  chart: any;
  reglements:any;
firstName!:string ; 
clients:any;
idUser:any;
documents:any;
bay:any;
totalreste=2;
totalAvance=2;
  constructor(private reglementservice:ReglementService,private clientservice:ClientService,private userAuthService:UserAuthService,private documentservice:DocumentService ) { }

  ngOnInit(): void {
  this.idUser=this.userAuthService.getUserid();
this.documentservice.getInfodocuments().subscribe(res=>{
  this.documents=res;
})

this.documentservice.getBayBy().subscribe(rresultat=>{
  this.bay=rresultat;
})
this.reglementservice.get_sum_Bay_byID_user(this.idUser).subscribe(r=>{
  this.totalAvance=r;

})
this.reglementservice.get_sum_rest_byID_user(this.idUser).subscribe(r=>{
  this.totalreste=r;

})
    this.reglementservice.getreg_byID_user(this.idUser).subscribe(res=>{
     
      
      this.reglements=res;

    
    })
    this.clientservice.getclients().subscribe(res=>{
      this.clients=res;
    })
    // this.chart= new Chart('canvas', {
    //   type: 'doughnut',
    //   data: {
    //     labels: ['reste','Avance'],
    //     datasets: [
    //       { 
    //         data: [this.totalreste,this.totalAvance],
    //         // data: [55,45],
  
    //         backgroundColor: ['rgba(255, 0, 0, 1)','rgba(255, 0, 0, 0.1)'],
    //         fill: false
    //       },
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       // display: false
    //     },
    //     tooltips:{
    //       // enabled:false
    //     }
    //   }
    // });
  
  //   const myChart = new Chart("myChart", {
  //     type: 'bar',
  //     data: {
  //         labels: this.label,
  //         datasets: [{
  //             label: 'nomber produit',
  //             data: this.count_produit,
  //             backgroundColor: 'rgba(255, 99, 132, 0.2)',
          
  //             borderColor:'rgba(255, 159, 64, 1)',
          
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         scales: {
            
             
          
  //         }
  //     }
  // });
    }
 
    supprimer(id:any){
      this.reglementservice.supprimerReglement(id).subscribe(res=>{
        console.log(res);
        
      })
    }
}
