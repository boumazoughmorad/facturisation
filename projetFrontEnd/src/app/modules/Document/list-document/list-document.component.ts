import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'src/app/entities/client';
import { Facture } from 'src/app/entities/facture';
import { Produit } from 'src/app/entities/produit';
import { Reglement } from 'src/app/entities/reglement';
import { User } from 'src/app/entities/user';
import { WelcomePageComponent } from 'src/app/shared/welcome-page/welcome-page.component';
import { ClientService } from '../../client/client.service';
import { AddproduitComponent } from '../../produit/addproduit/addproduit.component';
import { ReglementService } from '../../reglement/reglement.service';
import { UserAuthService } from '../../user/user-auth.service';
import { UserService } from '../../user/user.service';
import { DocumentService } from '../document.service';
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
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {
documents:any;
idUser:any;
type:any;
type_doc:any;
Role:any;
  constructor(private route:ActivatedRoute,private reglementservice:ReglementService,private clientservice:ClientService,private documentserver:DocumentService,private userAuthService:UserAuthService,private userservice:UserService,private router:Router) { 
  
  }

  ngOnInit(): void {
    // this.documents=this.documentserver.getInfodocuments();
    this.Role=this.userAuthService.getRoles();
    this.idUser=this.userAuthService.getUserid();

 this.documentserver.getInfodocuments().subscribe(res=>{

     this.documents=res;
    })

   this.type = this.route.snapshot.params['id'];
   console.log(this.type);
   if(this.type=='facture'){
    Facture.Type_document='facture';
    this.type_doc='facture';
   }
   if(this.type=='bon_achat'){
    Facture.Type_document='bon_achat';

    this.type_doc='bon_achat';
   }
   if(this.type=='demande_prix'){
    Facture.Type_document='demande_prix';

    this.type_doc='demande_prix';
   }
   
   if(this.type=='Devis'){
    Facture.Type_document='devise';
    this.type_doc='devise';  
   }
   if(this.type=='Bon_commandes'){
    Facture.Type_document='bon_commande';

    this.type_doc='bon_commande';  
   }
   if(this.type=='Bon_livraison'){
    Facture.Type_document='bon_livraison';
    this.type_doc='bon_livraison';  
   }
   if(this.type=='Avoir'){
    Facture.Type_document='avoire';

    this.type_doc='avoire';  
   }
  }

  supprimerdocument(id:any){
    this.documentserver.supprimerByid(id).subscribe(res=>{

      
    })
  }
  imprimer(id:any){
this.documentserver.getInfodocumentById(id).subscribe(res=>{
WelcomePageComponent.type=res.forme;

  Facture.Nom_document=res.Nom_document;
  Facture.Type_document=res.Type_document;
  Facture.date_document=res.date_document;
  Facture.date_échéance=res.date_echeance;
  this.userservice.getUserbyId(res.id_user).subscribe(res=>{
    if(res.Adresse!='undefined'){
      User.Adresse=res.Adresse;

    }
    if(res.CNSS!='undefined'){
      User.CNSS=res.CNSS;


    }
    if(res.FIX!='undefined'){
      User.FIX=res.FIX;



    }
    if(res.ICE_user!='undefined'){
      User.ICE_user=res.ICE_user;



    }
    if(res.TEL1!='undefined'){
      User.TEL1=res.TEL1;



    }
    if(res.TEL2!='undefined'){
      User.TEL2=res.TEL2;



    }
    if(res.TF!='undefined'){
      User.TF=res.TF;



    }
    if(res.TP!='undefined'){
      User.TP=res.TP;



    }
    if(res.capitale!='undefined'){
      User.capitale=res.capitale;



    }
    if(res.email!='undefined'){
      User.email=res.email;
    

    }
    if(res.image_path!=null){
      User.image_path=res.image_path;

    }
    if(res.nom_socieite!='undefined'){
    User.nom_socieite=res.nom_socieite;
      
    }
    if(res.sit_web!='undefined'){
      User.sit_web=res.sit_web;
    
    }
  })
  this.clientservice.getclientById(res.id_client).subscribe(re=>{
    client.Adresse_client=re.Adresse_client;
    client.ICE=re.ICE;
    client.Nom_client=re.Nom_client;
    client.tele_client=re.tele_client;
  })
  this.documentserver.getlproduitsByidocument(res.id).subscribe(re=>{

   let p=new Prod();
  let  produits =new  Array<Prod>;
   
  for(let i=0;i<re.length;i++){
    let pu:number=0;
  // pu=re[i].prix_unitaire_TTC;
 p.prix_unitaire_TTC=parseInt(re[i].prix_unitaire_TTC.toString());
 p.Nom_produit=re[i].Nom_produit;
 p.reference=re[i].reference;
 p.Taux_TVA=parseInt(re[i].Taux_TVA.toString());
 p.id_categories=re[i].id_categories;
 console.log(p.prix_unitaire_TTC+'        '+p.Taux_TVA+'   '+p.Nom_produit);
 
  // AddproduitComponent.produits[i].Nom_categorier=element.;
  // AddproduitComponent.produits[i].Nom_categorier=element.;
  // AddproduitComponent.produits[i].Nom_categorier=element.;

AddproduitComponent.produits.push(p);

    
  }
  
  })
  this.documentserver.getBayBy().subscribe(re=>{

    for(let r of re)
    {
      if(r.id_document==id)
      {
        this.reglementservice.getRegById(r.id_reglement).subscribe(l=>{
          Reglement.Type_payée=l.Type_payee;
          Reglement.prix_payée=l.prix_payee;
          Reglement.prix_reste=l.prix_reste;
          Reglement.reference_reg=l.reference_reg;
        })
      }
    }
  })
})

this.router.navigateByUrl('/welcome/imprimer');
  }
ajouter(){
  this.userservice.getUserbyId(this.idUser).subscribe(res=>{
    if(res.Adresse!='undefined'){
      User.Adresse=res.Adresse;

    }
    if(res.CNSS!='undefined'){
      User.CNSS=res.CNSS;


    }
    if(res.FIX!='undefined'){
      User.FIX=res.FIX;



    }
    if(res.ICE_user!='undefined'){
      User.ICE_user=res.ICE_user;



    }
    if(res.TEL1!='undefined'){
      User.TEL1=res.TEL1;



    }
    if(res.TEL2!='undefined'){
      User.TEL2=res.TEL2;



    }
    if(res.TF!='undefined'){
      User.TF=res.TF;



    }
    if(res.TP!='undefined'){
      User.TP=res.TP;



    }
    if(res.capitale!='undefined'){
      User.capitale=res.capitale;



    }
    if(res.email!='undefined'){
      User.email=res.email;
    

    }
    if(res.image_path!=null){
      User.image_path=res.image_path;

    }
    if(res.nom_socieite!='undefined'){
    User.nom_socieite=res.nom_socieite;
      
    }
    if(res.sit_web!='undefined'){
      User.sit_web=res.sit_web;
    
    }
  })
}
}
