import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { categorier } from 'src/app/entities/categories';
import { client } from 'src/app/entities/client';
import { Facture } from 'src/app/entities/facture';
import { Reglement } from 'src/app/entities/reglement';
import { User } from 'src/app/entities/user';
import { AddproduitComponent } from 'src/app/modules/produit/addproduit/addproduit.component';
import { UserAuthService } from 'src/app/modules/user/user-auth.service';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-header-user-auth',
  templateUrl: './header-user-auth.component.html',
  styleUrls: ['./header-user-auth.component.css']
})
export class HeaderUserAuthComponent implements OnInit {
  constructor(private userserver:UserService,private userAuthService:  UserAuthService,private httpClient:HttpClient,private router:Router) { }
user:any;
idUser:any;

url="http://127.0.0.1:8000/storage/";
  ngOnInit(): void {
this.idUser=this.userAuthService.getUserid();

   this.userserver.getUserbyId(this.idUser).subscribe( data =>{
    this.user=data;
  });
 
 
   
  }


  logOut(){
    const data={
      'AUTH':false
    }
this.userserver.updateUser(this.idUser,data).subscribe(res=>{

  
});
    this.userAuthService.clear();
    this.router.navigateByUrl('/infouser/login');
    Facture.Nom_document='';
    Facture.Type_document='';
    Facture.date_document='';
    Facture.date_échéance='';
    Facture.id_client='';
    Facture.id_user='';
    User.Adresse='';
    User.CNSS='';
    User.FIX='';
    User.ICE_user='';
    User.TEL1='';
    User.TEL2='';
    User.TF='';
    User.TP='';
    User.capitale='';
    User.email='';
    User.image_path='';
    User.nom_socieite='';
    User.password='';
    User.sit_web='';
    categorier.Nom_categorie='';
    categorier.id='';
    client.Adresse_client='';
    client.ICE='';
    client.Nom_client='';
    client.id_user='';
    client.inAuter='';
    client.tele_client='';
    client.valAuter='';
    Reglement.Type_payée='';
    Reglement.id_user='';
    Reglement.prix_payée='';
    Reglement.prix_reste='';
    Reglement.reference_reg='';
  
  }

}
