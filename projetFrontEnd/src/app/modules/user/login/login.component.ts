import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
error:any;
  userName:any;
  userPassword:any;
  stayLogged :boolean = false ;
  isCorrect:boolean = true;
  etat:boolean = true;
  isEmpty:boolean = true;
  constructor(private userService: UserService,
    private userAuthService:  UserAuthService,
    private router: Router,private userservice:UserService) { }

  ngOnInit(): void {
    
  }
  
  valeur_user(event:any){
this.userName= event.target.value;
  }
 valeur_pass(event:any){
this.userPassword= event.target.value;
  }
  onSubmit(){
 
    
    this.isCorrect =true;
    this.etat = true;
    this.isEmpty = true;

    if(  !this.userName || !this.userPassword ||  this.userName == "" || this.userPassword == ""){
      this.isEmpty = false;
      this.error='email ou password est null';
    }
    else{
      const formDatalogin=new FormData();
      
      formDatalogin.append('email',this.userName);
      formDatalogin.append('password',this.userPassword);
      this.userService.login(formDatalogin).subscribe((response :any)=>{

        this.userService.getinfobyiduser(response.idUser).subscribe(res=>{
    
        if(res[0].Role=="fournisure"){
     
        
          
        User.Adresse=res[0].Adresse;
        User.CNSS=res[0].CNSS;
        User.FIX=res[0].FIX;
        User.ICE_user=res[0].ICE_user;
        User.TEL1=res[0].TEL1;
        User.TEL2=res[0].TEL2;
        User.TF=res[0].TF;
        User.TP=res[0].TP;
        User.capitale=res[0].capitale;
        User.email=res[0].email;
        User.image_path=res[0].image_path;
        User.nom_socieite=res[0].nom_socieite;
        User.sit_web=res[0].sit_web;
        }
          
          this.userAuthService.setRoles(res[0].Role);
        })
    
          
          this.userAuthService.setPermissions(response.idUser);
          this.userAuthService.setToken(response.token);
          this.userAuthService.setUserid(response.idUser);
          this.userAuthService.setUserName(response.Username);
          this.SetTokenStayLogged();
   
          
          const data={
            'AUTH':true
          }
      this.userservice.updateUser(response.idUser,data).subscribe(res=>{
        console.log(res);
        
      });
        this.router.navigate(['welcome/user/count']);
        
      },
      error =>{
        if(error.status == 422){
          // this.router.navigateByUrl('/error500');
          this.error=error.error.message
         
          
        }
        if(error.status == 401){
          this.isCorrect = false;
        }
      });
    }
    
   

  }

  SetTokenStayLogged(){
    if(this.stayLogged == false){
      localStorage.setItem('stay','0');
    }
  }

  

}
