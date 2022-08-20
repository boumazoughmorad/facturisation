import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { UserAuthService } from '../user-auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @ViewChild("myEl") el!: ElementRef;
 userById:any;
LingRole:any;
  users:any;
  firstName:any; 
    constructor(private userservice:UserService,private router:Router,private userAuth:UserAuthService) { }
  
    ngOnInit(): void {

     this.userservice.getusers().subscribe(res=>{
      this.users=res; 
    
     })
//   this.userservice.getLineRol().subscribe(res=>{
//   this.users=res;
// console.log(res);

// })

  
 
    }
    l(){
      const doc=new jsPDF;
      autoTable(doc,{
       
        body:[
          // ['swide','jaban','canada'],
         [ {content:'ITIC SOLUTION',
          styles:{
            fillColor:[255, 255, 255],
            halign:'left',
            textColor:[66, 227, 255],
            lineWidth:18,
            fontSize : 18,
          },
          
        },
        {content:'Liste Fournisseur',
          styles:{
            fillColor:[255, 255, 255],
            halign:'center',
            textColor:'red',
            lineWidth:18,
            fontSize : 18,
          },
          
        },
      
        
      
     
        ],
   
      ], 
   
      });
      doc.save('Fourniseur.pdf');

    }
  
    delet(id:any){
      
     this.userservice.deleteuser(id).subscribe(res=>{
    
      this.router.navigateByUrl('/welcome');
      
      
     })
      
    }
    print(){
      const adminNom=this.userAuth.getUserName();
      
      const doc=new jsPDF;
      var img = new Image();
      img.src = "assets/img/itic.jpg";
      doc.addImage(img, 10, 10, img.naturalWidth, img.naturalHeight);

      doc.addImage(img, 60, 100, img.naturalWidth, img.naturalHeight);
      // let date: Date = Date.now();
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
              +'\nNom admin : '+adminNom,
              
           
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
        content: 'Liste des Fournisseurs:',            
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
;
      // autoTable(doc,{
     
      //   body:[
      //     // ['swide','jaban','canada'],
      //    [ {content:'ITIC SOLUTION'+
      //    '\nContact@itic-solution.com'+
      //    '\nN°3, Immeuble Karoum, Cité Azmani, Ouled Teima, Maroc',
      //     styles:{
      //       // fillColor:[255, 255, 255],
      //       halign:'left',
      //       textColor:[66, 227, 255],
      //       lineWidth:18,
      //       fontSize : 12,
      //     },
          
      //   },
      //   {content:'Liste de Fournisseur ',
      //     styles:{
      //       // fillColor:[255, 255, 255],
      //       halign:'center',
      //       textColor:'red',
      //       lineWidth:18,
      //       fontSize : 18,
      //     },
          
      //   },
      
        
      
     
      //   ],
   
      // ], theme:'plain',
      // styles:{
      //   fillColor:[255, 255, 255]

      // }
   
      // });
      autoTable(doc,{
       
        body:[
          [{content:'\n\n',
          styles:{
            fillColor:[255, 255, 255],
          }}
        ]
        ]
      });
      autoTable(doc,{
       
        html:'#my_table'
      });
      doc.save('ListFournisseur.pdf');
    }
    imprimerfour(id:any){
      
      this.userservice.getUserbyId(id).subscribe(res=>{
        const users=res;
        const doc=new jsPDF;
     
      const adminNom=this.userAuth.getUserName();

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
                +'\nNom admin : '+adminNom,
                
             
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
          content: 'les informations sur client:'+'\n'+users.nom_socieite,            
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
        
      
       
    
        if(users.nom_socieite!='undefined'){
        autoTable(doc,{
         
          body:[
            ['nom : ',users.nom_socieite],
            
          ],
      
        });}
        if(users.email!='undefined'){
        autoTable(doc,{
          styles:{
            fillColor:[255, 255, 255]
          },
          body:[
            ['email : ',users.email],
            
          ],
        });}
        if(users.ICE_user!='undefined'){

        autoTable(doc,{
          styles:{
            fillColor:[255, 255, 255]
          },
          body:[
            ['ICE : ',users.ICE_user],
            
          ],
        });}
        if(users.TF!='undefined'){

        autoTable(doc,{
          styles:{
            fillColor:[255, 255, 255]
          },
          body:[
            ['TF : ',users.TF],
            
          ],
        });}
        if(users.TP!='undefined'){
        autoTable(doc,{
          styles:{
            fillColor:[255, 255, 255]
          },
          body:[
            ['TP : ',users.TP],
            
          ],
        });}
        if(users.capitale!='undefined'){

        autoTable(doc,{
          styles:{
            fillColor:[255, 255, 255]
          },
          body:[
            ['capitale : ',users.capitale],
            
          ],
        });}
        if(users.TEL1!='undefined'){

        autoTable(doc,{
          styles:{
            fillColor:[255, 255, 255]
          },
          body:[
            ['TEL1 : ',users.TEL1],
            
          ],
        });}
        if(users.TEL2!='undefined'){

        autoTable(doc,{
          styles:{
            fillColor:[255, 255, 255]
          },
          body:[
            ['TEL2 : ',users.TEL2],
            
          ],
        });}
        if(users.FIX!='undefined'){

        autoTable(doc,{
          styles:{
            fillColor:[255, 255, 255]
          },
          body:[
            ['FIX : ',users.FIX],
            
          ],
        });}
        if(users.sit_web!='undefined'){

        autoTable(doc,{
          styles:{
            fillColor:[255, 255, 255]
          },
          body:[
            ['sit_web : ',users.sit_web],
            
          ],
        });}
        if(users.Adresse!='undefined'){

        autoTable(doc,{
          styles:{
            fillColor:[255, 255, 255]
          },
          body:[
            ['Adresse : ',users.Adresse],
            
          ],
        });}
        // autoTable(doc,{
        //   styles:{
        //     fillColor:[255, 255, 255]
        //   },
        //   body:[
        //     ['date creer compte : ',users.created_at],
            
        //   ],
        // });
        doc.save('Fourniseur'+users.nom_socieite+'.pdf');
      })
    }
}
