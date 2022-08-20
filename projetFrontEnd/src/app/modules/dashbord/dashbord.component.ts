import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../user/user-auth.service';
import { StatistiqueService } from './statistique.service';
export interface DataCouted{
  bonHonoraire: number;
  categorie: number;
  produit: number;
  bonAchat: number;
  facture: number;
  client: number;
  fournisseur: number;
  reglementFournisseur: number;
  reglementClient: number;
}
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  dataCounted: DataCouted  = {
    bonHonoraire: 0,
    categorie: 0,
    produit: 0,
    bonAchat: 0,
    facture: 0,
    client: 0,
    fournisseur: 0,
    reglementFournisseur: 0,
    reglementClient: 0
  };

  count_catego:any;
  count_client:any;
  count_produit:any;
  count_fourn:any;
  count_doc:any;
  Role:any;
  constructor(private statistiqueService:StatistiqueService,private userAuthservice:UserAuthService,private router :Router) {
  }
  ngOnInit(): void {

    this.setNumbersOfAll();
this.Role=this.userAuthservice.getRoles();
if(this.Role!='admin'){
this.router.navigateByUrl('/error404')
}
  }

  setNumbersOfAll(){
    this.statistiqueService.count_ALLcategories().subscribe(data =>{
      this.count_catego = data;
    })
    this.statistiqueService.count_ALLClient().subscribe(data =>{
      this.count_client = data;
    })
    this.statistiqueService.count_ALLproduit().subscribe(data =>{
      this.count_produit = data;
    })
    this.statistiqueService.count_ALLFournisseur().subscribe(data =>{
      this.count_fourn = data;
    })
    this.statistiqueService.count_ALLdocument().subscribe(data =>{
      this.count_doc = data;
    })
  }


}
