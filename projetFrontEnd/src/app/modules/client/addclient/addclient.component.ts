import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/entities/client';
import { UserAuthService } from '../../user/user-auth.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
idUser:any;
clients:any;
client:any;
auther:boolean=false;
  constructor(private userAuthService:UserAuthService,private clientserveice:ClientService) { }

  ngOnInit(): void {
  
    this.idUser=this.idUser=this.userAuthService.getUserid();
    this.clientserveice.getclientsByIDuser(this.idUser).subscribe(res=>{
      this.clients=res;
  
      
    })
  }
  valeur(event:any){
  if(event.target.value=='auther'){
    this.auther=true;
  }
    else{
    this.clientserveice.getclientById(event.target.value).subscribe(res=>{
  
      
      this.client=res;
  
      client.Nom_client=res.Nom_client;
         })}
    
  }

 
  valeurNom(event :any){
    // const pattern = /[0-9\+\-\ ]/;
    // let inputChar = String.fromCharCode(event.charCode);
    //   console.log(pattern.test(event.target.value));
      
    // if (event.keyCode != 8 && !pattern.test(event.target.value)) {
    //   event.preventDefault();
    // }
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
}
