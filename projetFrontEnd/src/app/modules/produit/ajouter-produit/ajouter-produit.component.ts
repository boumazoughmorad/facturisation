import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgxPrintModule} from 'ngx-print';
import { Produit } from 'src/app/entities/produit';
import { CategorierService } from '../../categorier/categorier.service';
import { UserAuthService } from '../../user/user-auth.service';
import { AddproduitComponent } from '../addproduit/addproduit.component';
import { ProduitService } from '../produit.service';
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
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  p=new Prod();
 
  // index=0;
  static index=0;
  // static produits: any;
  
  idUser:any;
auther:boolean=false;
  categories:any;
 auter=0;
  produitss:any;
  produit:any;
  // constructor() { }

  // ngOnInit(): void {
  // }
 


  
  
    constructor(private router:Router,private userAuthService:UserAuthService,private categorieservice:CategorierService,private produitservice:ProduitService) { }
  
    ngOnInit(): void {
      this.idUser=this.idUser=this.userAuthService.getUserid();
      
      this.categorieservice.getcategories().subscribe(res=>{
        this.categories=res;
        
      })
 
  
    }

  
    valeurNom_produit(event:any){
    
      this.p.Nom_produit=event.target.value;
    
    }
    valeurNom_Catego(event:any){
    
      this.p.Nom_categorier=event.target.value;
    
    }
   valeurNom_ref(event:any){
    
        this.p.reference=event.target.value; 
  
      
      }
  valeurNom_TTC(event:any){
          this.p.prix_unitaire_TTC=event.target.value; 
  
        
        }
  valeurNom_TVA(event:any){
    
            this.p.Taux_TVA=event.target.value;
  
          
          }
    valeurNom_HT(event:any){
    
              this.p.PU_HT=event.target.value; 
  
            
            }
  valeurNom_qte(event:any){
    
   this.p.quantity=event.target.value; 
  
  
  
  }
  

  
  valeur(event:any){
    const l=event.target.value; 

    this.p.id_categories=event.target.value;
    this.categorieservice.fincategorie(event.target.value).subscribe(res=>{
      this.p.Nom_categorier=res.Nom_categorie;
    })  
  
  }
  add(){
   
    const formDataProd=new FormData();
    formDataProd.append('id_categorier',this.p.id_categories);
    formDataProd.append('Nom_produit',this.p.Nom_produit);
    formDataProd.append('reference',this.p.reference);
    formDataProd.append('prix_unitaire_TTC',this.p.prix_unitaire_TTC.toString());
    formDataProd.append('Taux_TVA',this.p.Taux_TVA.toString());
    formDataProd.append('id_user',this.idUser);
   this.produitservice.addProd(formDataProd).subscribe(res=>{
   this.router.navigateByUrl('/welcome/infoProduit/liste');
    
  });
  }
}

