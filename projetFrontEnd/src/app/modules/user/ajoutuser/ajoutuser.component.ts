import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../role/role.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ajoutuser',
  templateUrl: './ajoutuser.component.html',
  styleUrls: ['./ajoutuser.component.css']
})
export class AjoutuserComponent implements OnInit {
 
 error:any;
  log_user!:any;
  n:any;
  nom_socieite!: string;
  email!: string;
  ICE_user!: string;
  TF!: string;
  CNSS!: string;
  TP!: string;
  capitale!: string;
  TEL1!: string;
  TEL2!: string;
  FIX!: string;
  sit_web!: string;
  Adresse!: string;
  id_user: any;
  id_Role:any;
  

  password:any;
  image_path:any;
  file:any;
  Role:any;
  constructor(private Roleservice : RoleService,private router:Router,private Userserv:UserService) {
  
   }

  ngOnInit(): void {
    
    this.Roleservice.voirrole().subscribe(res=>{
this.Role=res;

    })
   
  
  }
  valeur_img(event:any){
  this.file=event.target.files[0];
    


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
     valeur_Role(event:any){
      this.id_Role= event.target.value;
console.log(this.id_Role);

     }
     ajouter(){
      const auth='0';
      if(this.id_Role!=null || this.file!=null){
      const formData=new FormData();
      if(this.file!=null){
      formData.append('image_path',this.file,this.image_path);}
      formData.append('email',this.email);
      formData.append('password',this.password);
      formData.append('nom_socieite',this.nom_socieite);
      formData.append('ICE_user',this.ICE_user);
      formData.append('TF',this.TF);
      formData.append('CNSS',this.CNSS);
      formData.append('TP',this.TP);
      formData.append('capitale',this.capitale);
      formData.append('TEL1',this.TEL1);
      formData.append('TEL2',this.TEL2);
      formData.append('FIX',this.FIX);
      formData.append('sit_web',this.sit_web);
      formData.append('Adresse',this.Adresse);
      this.Userserv.addUser(formData).subscribe(res=>{
        this.id_user=res.id;
        const data={
          'AUTH':false
        }
    this.Userserv.updateUser(this.id_user,data).subscribe(res=>{

      
    });
        const formDataLiRol=new FormData();
        formDataLiRol.append('id_role',this.id_Role);
        formDataLiRol.append('id_user',this.id_user);
      
       this.Userserv.addLingRol(formDataLiRol).subscribe(res=>{
        
        this.router.navigateByUrl('welcome/user/list_user')
       });
      })
     }
     else{
      this.error='Remplir les information';
    }
    }
     
  }


