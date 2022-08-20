import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { UserAuthService } from '../../user/user-auth.service';
import { UserService } from '../../user/user.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
clients:any;
firstName!:string ; 
idUser:any;
Role:any;
// masterSelected:boolean;
// checklist:any;
// checkedList:any;
  constructor(private clientservice:ClientService,private router:Router,private userAuthService:UserAuthService,private userservice:UserService) { 
  //   this.masterSelected = false;
  //   this.checklist = [
  //     {id:1,value:'Elenor Anderson',isSelected:false},
  //     {id:2,value:'Caden Kunze',isSelected:true},
  //     {id:3,value:'Ms. Hortense Zulauf',isSelected:true},
  //     {id:4,value:'Grady Reichert',isSelected:false},
  //     {id:5,value:'Dejon Olson',isSelected:false},
  //     {id:6,value:'Jamir Pfannerstill',isSelected:false},
  //     {id:7,value:'Aracely Renner DVM',isSelected:false},
  //     {id:8,value:'Genoveva Luettgen',isSelected:false}
  //   ];
  //   this.getCheckedItemList();
  }

  ngOnInit(): void {
this.idUser=this.userAuthService.getUserid();
this.Role=this.userAuthService.getRoles();


if(this.Role=="admin"){
  
this.clientservice.getclients().subscribe(res=>{
this.clients=res;


})}
else{
  this.clientservice.getclientsByIDuser(this.idUser).subscribe(res=>{
    this.clients=res;
  })
}


 
  }

  delet(id:any){
 
    
   this.clientservice.deletclient(id).subscribe(res=>{
    console.log(res);
    // this.router.navigateByUrl('/welcome/infoclient/list_client');
    this.router.navigateByUrl('/welcome');
    
   })
    
  }
  // // The master checkbox will check/ uncheck all items
  // checkUncheckAll() {
  //   for (var i = 0; i < this.checklist.length; i++) {
  //     this.checklist[i].isSelected = this.masterSelected;
  //   }
  //   this.getCheckedItemList();
  // }
  // // Get List of Checked Items
  // getCheckedItemList(){
  //   // this.checkedList = [];
  //   for (var i = 0; i < this.clients.length; i++) {
  //     if(this.checklist[i].isSelected)
  //     this.checkedList.push(this.checklist[i]);
  //   }
  //   this.checkedList = JSON.stringify(this.checkedList);
  // }
  //   // Check All Checkbox Checked
  //   isAllSelected() {
  //     this.masterSelected = this.checklist.every(function(item:any) {
  //         return item.isSelected == true;
  //       })

    //     this.getCheckedItemList();
  //   }
      // <qr-code [value]="'https://itic-solution.com/'"></qr-code>
  item = [{
    'name': 'Agatha Harkness',
    'played by': 'Kathryn Hahn',
    'Fictional universe': 'Marvel Universe',
    'Creator': 'Stan Lee'
  }]

  qrInfo = JSON.stringify(this.item);
  print(){
 
   
    
    
    const userNom=this.userAuthService.getUserName();
      
    const doc=new jsPDF;
    var img = new Image();
    img.src = "assets/img/itic.jpg";
    // doc.addImage(img, 10, 10, img.naturalWidth, img.naturalHeight);

    doc.addImage(img, 60, 100, img.naturalWidth, img.naturalHeight);
    // let date: Date = Date.now();
    let date= new Date(); 
    
    autoTable(doc, {
      body: [
        [
          {
            content: 'ITIC SOLUTION: '
           
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
      content: 'Liste des Clients:',            
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
    doc.save('listClients.pdf');
  }
  imprimerfour(id:any){

    this.clientservice.getclientById(id).subscribe(res=>{
   
      const client=res;
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
        content: 'Les information sur :'+'\n'+client.Nom_client,            
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
     
   
  
      if(client.Nom_client!='undefined'){
      autoTable(doc,{
       
        body:[
          ['nom de client: ',client.Nom_client],
          
        ],
    
      });}
      if(client.Adresse_client!='undefined'){
      autoTable(doc,{
        styles:{
          fillColor:[255, 255, 255]
        },
        body:[
          ['Adresse de client : ',client.Adresse_client],
          
        ],
      });}
      if(client.ICE!='undefined'){

      autoTable(doc,{
        styles:{
          fillColor:[255, 255, 255]
        },
        body:[
          ['ICE : ',client.ICE],
          
        ],
      });}
      if(client.tele_client!='undefined'){

      autoTable(doc,{
        styles:{
          fillColor:[255, 255, 255]
        },
        body:[
          ['TEL : ',client.tele_client],
          
        ],
      });}
      this.userservice.getUserbyId(client.id_user).subscribe(re=>{
        // if(re.nom_socieite!='undefined'){
          autoTable(doc,{
            styles:{
              fillColor:[255, 255, 255]
            },
            body:[
              ['Fournisseur : ',re.nom_socieite],
              
            ],
          }
          );
        // }
      })
     
 
 
      // autoTable(doc,{
      //   styles:{
      //     fillColor:[255, 255, 255]
      //   },
      //   body:[
      //     ['date creer compte : ',client.created_at],
          
      //   ],
      // });
      doc.save('client '+client.Nom_client+'.pdf');
    })
  }
}
