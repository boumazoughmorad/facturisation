import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { UserAuthService } from '../../user/user-auth.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-liste-roles',
  templateUrl: './liste-roles.component.html',
  styleUrls: ['./liste-roles.component.css']
})
export class ListeRolesComponent implements OnInit {
roles:any;

data={
  'Role':'',
}
  constructor(private roleservice:RoleService,private userAuthService:UserAuthService,private router:Router) { }

  ngOnInit(): void {
    this.roleservice.voirtousrole().subscribe(res=>{
this.roles=res;
    })
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
      content: 'List Roles :'+'\n',            
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
  annulersupp(id:any){
    this.roleservice.updateDELETErole(id).subscribe(res=>{
      
      
      })
  }
  delet(id:any){
    this.roleservice.supprimerrole(id).subscribe(res=>{
      this.router.navigateByUrl('/welcome');
      
    })
  }
  imprimerfour(id:any){
    this.roleservice.getRoleById(id).subscribe(res=>{
   
      const role=res;
    
    
  
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
        content: 'Role :'+'\n'+role.Role,            
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
    
      if(role.Role!='undefined'){
      autoTable(doc,{
       
        body:[
          ['nom de Role: ',role.Role],
          
        ],
    
      });}
      
  
  
      doc.save('Role '+role.Role+'.pdf');
    })
  }
  valeurNom_Role(event:any){
    this.data.Role=event.target.value; 
  }
  close(){
    this.data.Role='';
  }
  save(){
this.roleservice.ajouterrole(this.data).subscribe(res=>{

})
  }
}
