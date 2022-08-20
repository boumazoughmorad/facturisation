import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../../user/user-auth.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
 
  idclient:any;
  data={
    'ICE':"",
    'Nom_client':"",
   'Adresse_client':"",
     'tele_client':"",

  } ;
  // data =new FormGroup({
  //   ICE:new FormControl('',[Validators.required] ),
  //   Nom_client:new FormControl('',[Validators.required] ),
  //   Adresse_client:new FormControl('',[Validators.required] ),
  //   tele_client:new FormControl('',[Validators.required] ),

  // });
  constructor(private clientservice:ClientService,private userAuthService:UserAuthService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idclient = this.route.snapshot.params['id'];
    
  }
  valeurNom_client(event:any){
    this.data.Nom_client=event.target.value;
  }
  valeurice(event:any){
    this.data.ICE=event.target.value;
  }
  valeurAdresse_client(event:any){
    this.data.Adresse_client=event.target.value;
  }
  valeurtele_client(event:any){
    this.data.tele_client=event.target.value;
  }
updateclient(){

  
this.clientservice.updateclient(this.idclient,this.data).subscribe(res=>{

  
})
}
}
