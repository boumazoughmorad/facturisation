import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  log_user!: File;
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
  password:any;
  idfour:any;
  constructor(private Userserv:UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.idfour=this.route.snapshot.params['id'];
  }
valeurAdresse(event:any){
this.Adresse=event.target.value;
}
valeursite_web(event:any){
  this.sit_web=event.target.value;
}
 valeurcapitale(event:any){
  this.capitale=event.target.value;
}
valeurTF(event:any){
  this.TF=event.target.value;
}
valeurTP(event:any){
  this.TP=event.target.value;
}
valeurCNSS(event:any){
  this.CNSS=event.target.value;

}
 valeurFix(event:any){

  this.FIX=event.target.value;  
          }
valeurtele2(event:any){

  this.TEL2=event.target.value;     
          }
          valeurtele1(event:any){
            this.TEL1=event.target.value;
           
          }
          valeurice(event:any) {
            this.ICE_user=event.target.value;
           
          }
          valeur_image(event:any){
            this.log_user=event.target.files[0];
           
          }
          valeur_pass(event:any){
            this.password=event.target.value;
           
          }
        valeur_email(event:any){
          this.email=event.target.value;
        }
        valeurNom_fournisseur(event:any){
          this.nom_socieite=event.target.value;
        
          
        
        }
        update(){
          const formData=new FormData();
          if(this.log_user!=null){
          formData.append('image_path',this.log_user,this.log_user.name);}
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
          console.log(formData);
          
          this.Userserv.updateUser(this.idfour,formData).subscribe(res=>{
            this.router.navigateByUrl('/welcome/user/list_user');
            
        });
        }
}
