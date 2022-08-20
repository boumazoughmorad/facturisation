import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from 'src/app/entities/facture';
import { UserAuthService } from 'src/app/modules/user/user-auth.service';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-sidebar-user-auth',
  templateUrl: './sidebar-user-auth.component.html',
  styleUrls: ['./sidebar-user-auth.component.css']
})
export class SidebarUserAuthComponent implements OnInit {

  constructor(private userserver:UserService,private userAuthService:  UserAuthService,private router:Router) { }
  user:any;
  idUser:any;
  Role:any;
  static type_docment:string;
url="http://127.0.0.1:8000/storage/";
    ngOnInit(): void {
  this.idUser=this.userAuthService.getUserid();
  this.userserver.getinfobyiduser(this.idUser).subscribe(r=>{
    this.Role=r[0].Role;
  })
     this.userserver.getUserbyId(this.idUser).subscribe( data =>{
      this.user=data;
    });
   
   
     
  }

bon_achat(){
Facture.Type_document="bon_achat";  
}
bon_commandes(){

Facture.Type_document="bon_commande";  
}
devis(){ 
Facture.Type_document="devise";  
}
 bon_livraison(){
Facture.Type_document="bon_livraison";  
}
avoire(){
Facture.Type_document="avoire";  
}
facture(){
Facture.Type_document="facture";  
}
demande_prix(){
Facture.Type_document="demande_prix";  

}

}
