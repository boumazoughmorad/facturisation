import { Component, OnInit } from '@angular/core';
import { CategorierService } from '../categorier.service';
// import { Chart } from 'chart.js';
import { ProduitService } from '../../produit/produit.service';
import { UserAuthService } from '../../user/user-auth.service';
import { UserService } from '../../user/user.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import autoTable from 'jspdf-autotable';
// import autoTab
// import jsPDF from 'jspdf';
import jsPDF from 'jspdf';

// import * as CanvasJS from '../../../CanvasJSjs.min';
@Component({
  selector: 'app-list-categorier',
  templateUrl: './list-categorier.component.html',
  styleUrls: ['./list-categorier.component.css']
})
export class ListCategorierComponent implements OnInit {
  multi!: any[];
 
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'les produits';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Nomber de produit';
  legendTitle: string = 'nom des produits';
  roundDomains: boolean = true;
  noBarWhenZero : boolean = false;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FF5370', '#2ed8b6', '#ff0000'],
  };

categories:any;
idUser:any;
Role:any;
  clientservice: any;
  constructor(private categorieserves:CategorierService,private userAuthService:UserAuthService,private userservice:UserService) { }

  ngOnInit(): void {
    this.idUser=this.userAuthService.getUserid();
    this.Role= this.userAuthService.getRoles();

if(this.Role=="admin"){
  this.categorieserves.getcategories().subscribe(res=>{
    this.categories=res;
  })
  this.categorieserves.statiquecategories().subscribe(res=>{
      
      
    this.multi=res;


  })
}
else{

  this.categorieserves.statiquecategoriesByID(this.idUser).subscribe(res=>{
      
      
    this.multi=res;


  })
}
 }
 annulersupp(id:any){

 }
 delet(id:any){

 }
 print(){
  const doc=new jsPDF;
  const userNom=this.userAuthService.getUserName();

 
  var img = new Image();
  img.src = "assets/img/itic.jpg";
  doc.addImage(img, 10, 10, img.naturalWidth, img.naturalHeight);

  doc.addImage(img, 60, 100, img.naturalWidth, img.naturalHeight);
  let date= new Date(); 
  
  autoTable(doc, {
    body: [
      [
        {
          content: 'ITIC SOLUTION:'
         
          +'\nN°3, Immeuble Karoum, Cité Azmani, Ouled Teima, Maroc'
          +'\nContact@itic-solution.com'
          +'\n+212808575886'
          +'\n+212622853711'
          +'\n212631472947',
          styles: {
            halign: 'left'
          }
        },
    
        {
          content: 'date d\'imprimer :'+ date.getFullYear()+' /'+date.getUTCMonth()+'/'+ date.getMonth()
          +'\nNom user : '+userNom,
          
       
          styles: {
            halign: 'right'
          }
        }
      ],
    ],
    theme: 'plain'
  });
  autoTable(doc,{
    body: [
      [
  {
    content: 'List categories :'+'\n',            
    styles: {
      halign: 'center',
      textColor:'red',
      fontSize : 12,
    }
  },
]
],
theme: 'plain'
})
  autoTable(doc,{
   
    html:'#my_table'
  });
  doc.save('table.pdf');
}
imprimerfour(id:any){
  this.categorieserves.fincategorie(id).subscribe(res=>{
 
    const categorize=res;
  
  

    const doc=new jsPDF;
    const userNom=this.userAuthService.getUserName();
  
   
    var img = new Image();
    img.src = "assets/img/itic.jpg";
    doc.addImage(img, 10, 10, img.naturalWidth, img.naturalHeight);

    doc.addImage(img, 60, 100, img.naturalWidth, img.naturalHeight);
    let date= new Date(); 
    
    autoTable(doc, {
      body: [
        [
          {
            content: 'ITIC SOLUTION:'
           
            +'\nN°3, Immeuble Karoum, Cité Azmani, Ouled Teima, Maroc'
            +'\nContact@itic-solution.com'
            +'\n+212808575886'
            +'\n+212622853711'
            +'\n212631472947',
            styles: {
              halign: 'left'
            }
          },
      
          {
            content: 'date d\'imprimer :'+ date.getFullYear()+' /'+date.getUTCMonth()+'/'+ date.getMonth()
            +'\nNom user : '+userNom,
            
         
            styles: {
              halign: 'right'
            }
          }
        ],
      ],
      theme: 'plain'
    });
    autoTable(doc,{
      body: [
        [
    {
      content: 'categorie :'+'\n'+categorize.Nom_categorie,            
      styles: {
        halign: 'center',
        textColor:'red',
        fontSize : 12,
      }
    },
  ]
],
theme: 'plain'
})
  
    if(categorize.Nom_categorie!='undefined'){
    autoTable(doc,{
     
      body:[
        ['nom de categorier: ',categorize.Nom_categorie],
        
      ],
  
    });}
    


    doc.save('gategorie '+categorize.Nom_client+'.pdf');
  })
}
}
