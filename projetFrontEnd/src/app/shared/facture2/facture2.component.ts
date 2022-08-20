
import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/entities/client';
import { Facture } from 'src/app/entities/facture';
import { Produit } from 'src/app/entities/produit';
import { Reglement } from 'src/app/entities/reglement';
import { User } from 'src/app/entities/user';
import { AddproduitComponent } from 'src/app/modules/produit/addproduit/addproduit.component';

@Component({
  selector: 'app-facture2',
  templateUrl: './facture2.component.html',
  styleUrls: ['./facture2.component.css']
})
export class Facture2Component implements OnInit {
  numFac:any;
  date_ech:any;
  date_f:any;
  ice_client:any;
  add_client:any;
  nom_client:any;
  tele_client:any;
  inAuter:any;
  valAuter:any;
  nom_produit:any;
  Taux_TVA:any;
  prix_unitaire_TTC:any;
  reference:any;
  quantity:any;
  PU_HT:any;
  log_user:any;
  totalTTC=0;
  nom_socieite : any;
  email: any;
  
  ICE_user: any;
  TF : any;
  CNSS: any;
  type_document:any;
  TP : any;
  capitale : any;
  TEL1 : any;
  TEL2 : any;
  FIX : any;
  sit_web : any;
  Adresse : any;
  Type_payee:any;
  prix_payee:any;
  reference_reg:any;
  prix_reste:any;
  totalHt:any=0;
  date = new Date();
  reglement = this.date.toDateString();
  // reglement = this.date.;

  totaltva:any=0;
  p=AddproduitComponent.produits;
  
    constructor() {
     
     }
  
    ngOnInit(): void {
this.type_document=Facture.Type_document;

  setInterval(()=>{
  
  this.Type_payee=Reglement.Type_payée;
  this.prix_payee=Reglement.prix_payée;
  this.prix_reste=Reglement.prix_reste;
  this.reference_reg=Reglement.reference_reg;
    this.numFac=Facture.Nom_document;
    this.date_ech=Facture.date_échéance;
    this.date_f=Facture.date_document;
    this.ice_client=client.ICE;
    this.add_client=client.Adresse_client;
    this.nom_client=client.Nom_client;
    this.tele_client=client.tele_client;
    this.inAuter=client.inAuter;
    this.valAuter=client.valAuter;
    this.nom_produit=Produit.Nom_produit;
    this.Taux_TVA=Produit.Taux_TVA;
    this.prix_unitaire_TTC=Produit.prix_unitaire_TTC;
    this.reference=Produit.reference;
    this.quantity=Produit.quantity;
    this.PU_HT=Produit.PU_HT;
    this.log_user=User.image_path;
    this.nom_socieite=User.nom_socieite;
    this.email=User.email;
    this.ICE_user=User.ICE_user;
    this.TF=User.TF;
    this.CNSS=User.CNSS;
    this.TP=User.TP;
    this.capitale=User.capitale;
    this.TEL1=User.TEL1;
    this.TEL2=User.TEL2;
    this.FIX=User.FIX;
    this.sit_web=User.sit_web;
    this.Adresse=User.Adresse;
  
  },100)
  // for (let index = 0; index < this.p.length; index++) {
  //   this.totalHt += this.p[index].quantity*this.p[index].PU_HT;
  //    this.totaltva+=this.p[index].Taux_TVA;
  //   }
  for ( let index = 0; index < this.p.length; index++) {
    this.totalHt = Number(this.p[index].quantity)*Number(this.p[index].PU_HT)+Number(this.totalHt);
     this.totaltva=Number(this.p[index].Taux_TVA)*Number(this.p[index].quantity)*Number(this.p[index].PU_HT)+Number(this.totaltva);
    //  this.totalTTC=Number(this.p[index].prix_unitaire_TTC)+Number(this.totalTTC);
    }
  //  this.totaltva=this.totaltva/index;
  this.totalTTC=Number(this.totalHt)*Number(this.totaltva);
    }
  
    
}
