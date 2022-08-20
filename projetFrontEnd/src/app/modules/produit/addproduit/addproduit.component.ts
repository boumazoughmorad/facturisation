import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/entities/produit';
import { categorier } from 'src/app/entities/categories';

import { CategorierService } from '../../categorier/categorier.service';
import { UserAuthService } from '../../user/user-auth.service';
import { ProduitService } from '../produit.service';
import { Facture } from 'src/app/entities/facture';


class Prod{
id_categories: string="";
   Nom_categorier:string="";
   Nom_produit:string="";
   reference :string="";
   prix_unitaire_TTC :number=0;
   id_user:number=0;
   quantity:number=0;
   PU_HT:number=0;
   Taux_TVA:number=0;
}
// 
@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  type_document:any;
 p=new Prod();
  public static produits =new  Array<Prod>;
  // index=0;
  static index=0;
  // static produits: any;
  
  idUser:any;
auther:boolean=false;
  categories:any;
 auter=0;
  produitss:any;
  produit:any;
  Role:any;
  constructor(private router:Router,private userAuthService:UserAuthService,private categorieservice:CategorierService,private produitservice:ProduitService) { }

  ngOnInit(): void {
    this.type_document=Facture.Type_document;
    this.idUser=this.idUser=this.userAuthService.getUserid();
    this.Role=this.userAuthService.getRoles();
    if(this.Role!="admin"){
      this.categorieservice.fincategorieByIDuser(this.idUser).subscribe(res=>{
        this.categories=res;
      })
  }else{
    this.categorieservice.getcategories().subscribe(res=>{
      this.categories=res;
    })
    }
this.produitservice.get_produit(this.idUser).subscribe(res=>{
  this.produitss=res;

  
})

  }
val(event:any){
if(event.target.value=='auther'){
  this.auther=true;
}
else{

    this.produitservice.getproduitById(event.target.value).subscribe(res=>{
    
    
      
      this.produit=res;
    
      this.p.Nom_produit=res.Nom_produit;
      this.p.reference=res.reference;
      this.p.Taux_TVA=res.Taux_TVA;
      this.p.prix_unitaire_TTC=res.prix_unitaire_TTC;
      

         })}
    
    }

  valeurNom_produit(event:any){

    this.p.Nom_produit=event.target.value;
  
  }
  valeurNom_Catego(event:any){
  
    this.p.Nom_categorier=event.target.value;
  
  }
 valeurNom_ref(event:any){
  
      Produit.reference=event.target.value; 
      this.p.reference=event.target.value; 

    
    }
valeurNom_TTC(event:any){
  
        Produit.prix_unitaire_TTC=event.target.value; 
        this.p.prix_unitaire_TTC=event.target.value; 

      
      }
valeurNom_TVA(event:any){
  
          Produit.Taux_TVA=event.target.value;
          this.p.Taux_TVA=event.target.value;

        
        }
  valeurNom_HT(event:any){
  
            Produit.PU_HT=event.target.value; 
            this.p.PU_HT=event.target.value; 

          
          }
valeurNom_qte(event:any){
  
 Produit.quantity=event.target.value; 
 this.p.quantity=event.target.value; 



}


valid(){ 

 
  
  const h=this.p;
  
  AddproduitComponent.produits.push(h);
  
// this.router.navigateByUrl('/welcome/add/infoProduit');
// http://localhost:4200/welcome/add/infoProduit

}

valeur(event:any){
  const l=event.target.value; 
if(l=="auther"){
this.auter=1;
}
else{
  this.p.id_categories=event.target.value;
  this.categorieservice.fincategorie(event.target.value).subscribe(res=>{
    this.p.Nom_categorier=res.Nom_categorie;
  })  
}
}
}
