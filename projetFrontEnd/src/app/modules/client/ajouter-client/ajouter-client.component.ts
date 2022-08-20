import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { client } from 'src/app/entities/client';
import { UserAuthService } from '../../user/user-auth.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {
  idUser:any;
  constructor(private userAuthService:UserAuthService,private clientservice: ClientService,private router:Router) { }

  ngOnInit(): void {
    this.idUser=this.idUser=this.userAuthService.getUserid();
    console.log(this.idUser);
  }
  valeurNom(event :any){
  client.Nom_client=event.target.value;
  }
  valeurice(event :any){
    client.ICE=event.target.value;
  }
  valeurAdd(event :any){
    client.Adresse_client=event.target.value;
  }
  valeurtele(event :any){
    client.tele_client=event.target.value;
  }
  inpAuter(event :any){
    client.inAuter=event.target.value;
  }
  valeurAuter(event :any){
    client.valAuter=event.target.value;
  }
  ajouter(){
    const formDatacl=new FormData();
    formDatacl.append('ICE',client.ICE);
    formDatacl.append('Nom_client',client.Nom_client);
    formDatacl.append('Adresse_client',client.Adresse_client);
    formDatacl.append('tele_client',client.tele_client);
    formDatacl.append('id_user',this.idUser);
   this.clientservice.addclient(formDatacl).subscribe(res=>{
    console.log(res);
    // /
    this.router.navigateByUrl('/welcome/infoclient/list_client');
   })
  }
}
