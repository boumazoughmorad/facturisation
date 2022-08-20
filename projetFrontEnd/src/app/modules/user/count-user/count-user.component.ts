import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-count-user',
  templateUrl: './count-user.component.html',
  styleUrls: ['./count-user.component.css']
})
export class CountUserComponent implements OnInit {

  image_path:any;
  idUser:any;
  ICE_user: any;
  TF: any;
  password: any;
  email: any;
  nom_socieite: any;
  CNSS: any;
  TP: any;
  capitale: any;
  TEL1: any;
  TEL2: any;
  sit_web: any;
  FIX: any;
  Adresse: any;
  info:any;
  constructor(private userserver:UserService,private userAuthService:UserAuthService) {
  
   }

  ngOnInit(): void {
    this.idUser=this.userAuthService.getUserid();

   this.userserver.getUserbyId(this.idUser).subscribe(res=>{
    this.info=res;
   });
  }
  valeur_nom_s(event:any){
    
    this.nom_socieite= event.target.value;
   
   
   }
   valeur_email(event:any){
  
    this.email= event.target.value;
   
   
   }
   valeur_pass(event:any){
  
    this.password= event.target.value;
   
   
   }
   valeur_ice(event:any){
  
    this.ICE_user= event.target.value;
   
   
   }
   valeur_tf(event:any){
  
    this.TF= event.target.value;
   
   
   }
   valeur_cnss(event:any){
  
    this.CNSS= event.target.value;
   
   
   }
   valeur_tp(event:any){
  
    this.TP= event.target.value;
   
   
   }
   valeur_capitale(event:any){
  
    this.capitale= event.target.value;
   
   
   }
   valeur_tel1(event:any){
  
    this.TEL1= event.target.value;
   
   
   }
   valeur_tel2(event:any){
  
    this.TEL2= event.target.value;
   
   
   }
   valeur_fix(event:any){
  
    this.FIX= event.target.value;
   
   
   }
   valeur_sit(event:any){
  
    this.sit_web= event.target.value;
   
   
   }
   valeur_add(event:any){
  
    this.Adresse= event.target.value;
   
   
   }
  updateuser(){
  
    
    const formData=new FormData();
    if(this.image_path!=null){
      formData.append('image_path',this.image_path,this.image_path.name);
    }
    formData.append('nom_socieite',this.nom_socieite);
    formData.append('ICE_user',this.ICE_user);
    formData.append('CNSS',this.CNSS);
    formData.append('Adresse',this.Adresse);
    formData.append('sit_web',this.sit_web);
    formData.append('FIX',this.FIX);
    formData.append('TEL2',this.TEL2);
    formData.append('TEL1',this.TEL1);
    formData.append('email',this.email);
    formData.append('capitale',this.capitale);

    this.userserver.updateUser(this.idUser,formData).subscribe(res=>{
      console.log(res);
      
    })
    
  }
  onFileChange(event:any){
    this.image_path = event.target.files[0];
  
 
  }

}
