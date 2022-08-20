import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CategorierService } from '../../categorier/categorier.service';
import { UserAuthService } from '../../user/user-auth.service';
import { UserService } from '../../user/user.service';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  idUser:any;
  produits:any;
  categories:any;
  Role:any
  constructor(private produitservice:ProduitService,private router:Router,private userservice:UserService,private userAuthService:UserAuthService,private categorieservice:CategorierService) { }

  ngOnInit(): void {
    this.idUser=this.userAuthService.getUserid();
    this.Role=this.userAuthService.getRoles();
   
    
    // this.userservice.getinfobyiduser(this.idUser).subscribe(r=>{
    
      
      if(this.Role=='admin'){
       this.produitservice.voirtousproduit().subscribe(l=>{
        this.produits=l;
       })
      }
      else{
      this.produitservice.get_produit(this.idUser).subscribe(k=>{
      this.produits=k;
      })}
    // })

this.categorieservice.getcategories().subscribe(res=>{
  this.categories=res;
})

  }

  annulersupp(id:any){
this.produitservice.updateDELETEproduit(id).subscribe(res=>{


})
  }
  delet(id:any){
    this.produitservice.supprimerproduit(id).subscribe(res=>{
      this.router.navigateByUrl('/welcome');
      
    })
  }
  print(){
  
    const userNom=this.userAuthService.getUserName();
      
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
      content: 'Liste des Produits:',            
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
    doc.save('listProduits.pdf');
  }
  imprimerfour(id:any){

    this.produitservice.getproduitById(id).subscribe(res=>{
   
      const produit=res;
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
        content: 'Les information sur :'+'\n'+produit.Nom_produit,            
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
           // '',
     this.categorieservice.fincategorieByIDuser(produit.id_categorier).subscribe(r=>{
      if(r.Nom_categorie!='undefined'){
        autoTable(doc,{
         
          body:[
            ['nom de Categorie du Produit: ',r.Nom_categorie],
            
          ],
      
        });}
     })
   
  
      if(produit.Nom_produit!='undefined'){
      autoTable(doc,{
       
        body:[
          ['nom de produit: ',produit.Nom_produit],
          
        ],
    
      });}
      
      if(produit.reference!='undefined'){
      autoTable(doc,{
        styles:{
          fillColor:[255, 255, 255]
        },
        body:[
          ['refrence de produit : ',produit.reference],
          
        ],
      });}
   
      if(produit.prix_unitaire_TTC!='undefined'){

      autoTable(doc,{
        styles:{
          fillColor:[255, 255, 255]
        },
        body:[
          ['prix unitaire TTC : ',produit.prix_unitaire_TTC],
          
        ],
      });}
 
      
      
      if(produit.Taux_TVA!='undefined'){

      autoTable(doc,{
        styles:{
          fillColor:[255, 255, 255]
        },
        body:[
          ['Taux TVA : ',produit.Taux_TVA],
          
        ],
      });}

      this.produitservice.getLigneDocumentByIdProduit(produit.id).subscribe(r=>{
        if(r.Qte!='undefined'){

          autoTable(doc,{
            styles:{
              fillColor:[255, 255, 255]
            },
            body:[
              ['Quantity: ',r.Qte],
              
            ],
          });}
          if(r.PU_HT!='undefined'){

            autoTable(doc,{
              styles:{
                fillColor:[255, 255, 255]
              },
              body:[
                ['PU HT : ',r.PU_HT],
                
              ],
            });}
      })
 
     
 
 
      doc.save('produit '+produit.Nom_produit+'.pdf');
    })
  }
}
