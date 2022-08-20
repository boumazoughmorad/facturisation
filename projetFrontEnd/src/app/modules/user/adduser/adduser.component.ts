
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client } from 'src/app/entities/client';
import { Facture } from 'src/app/entities/facture';
import { Reglement } from 'src/app/entities/reglement';
import { User } from 'src/app/entities/user';
import { ProposerComponent } from 'src/app/shared/proposer/proposer.component';
import { ClientService } from '../../client/client.service';
import { DocumentService } from '../../Document/document.service';
import { AddproduitComponent } from '../../produit/addproduit/addproduit.component';
import { ProduitService } from '../../produit/produit.service';
import { UserAuthService } from '../user-auth.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {
  userName:any;
  userPassword:any;
  stayLogged :boolean = false ;
  isCorrect:boolean = true;
  etat:boolean = true;
  isEmpty:boolean = true;
  id_client:any;
  static file:File;
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
  id_Doc:any;
  id_Reg:any;
  id_prod:any;
  id_Gat:any;
  constructor(private Userserv:UserService,private userService:UserService,private userAuthService:UserAuthService,private router:Router,private proServer:ProduitService,private clientServer:ClientService,private docServer:DocumentService,private prodserver:ProduitService) {
  
   }

  ngOnInit(): void {
    
    this.n=ProposerComponent.n;
   
    setInterval(()=>{
      this.nom_socieite=User.nom_socieite;
     
      
      this.email=User.email;
      this.ICE_user=User.ICE_user;
      this.TF=User.TF;
      this.CNSS=User.CNSS;
      this.TP=User.TP;
      this.capitale=User.capitale;
      this.TEL1=User.TEL1;
      this.TEL2=User.TEL2;
      this.FIX=User.FIX;
      this.sit_web=User.sit_web;
      this.Adresse=User.Adresse;
     
    
      this.log_user=User.image_path;},100)
  }
  valeur_img(event:any){
  AdduserComponent.file=event.target.files[0];
    
    const formData=new FormData();
    formData.append('image_societé',AdduserComponent.file,AdduserComponent.file.name);


   this.Userserv.upload(formData).subscribe(res=>{
    console.log(res);
    
    this.Userserv.getimg().subscribe(re=>{
   
      
      User.image_path=re.image_societé;
    
    
      
    });
       
    
     
});

   }
 
   valeur_nom_s(event:any){
    
      User.nom_socieite= event.target.value;
     
     
     }
     valeur_email(event:any){
    
      User.email= event.target.value;
     
     
     }
     valeur_pass(event:any){
    
      User.password= event.target.value;
     
     
     }
     valeur_ice(event:any){
    
      User.ICE_user= event.target.value;
     
     
     }
     valeur_tf(event:any){
    
      User.TF= event.target.value;
     
     
     }
     valeur_cnss(event:any){
    
      User.CNSS= event.target.value;
     
     
     }
     valeur_tp(event:any){
    
      User.TP= event.target.value;
     
     
     }
     valeur_capitale(event:any){
    
      User.capitale= event.target.value;
     
     
     }
     valeur_tel1(event:any){
    
      User.TEL1= event.target.value;
     
     
     }
     valeur_tel2(event:any){
    
      User.TEL2= event.target.value;
     
     
     }
     valeur_fix(event:any){
    
      User.FIX= event.target.value;
     
     
     }
     valeur_sit(event:any){
    
      User.sit_web= event.target.value;
     
     
     }
     valeur_add(event:any){
    
      User.Adresse= event.target.value;
     
     
     }
     crees(){
       ///////////////User///////////////////////////
      ProposerComponent.n=0;
      const formData=new FormData();
      if(AdduserComponent.file!=null){
      formData.append('image_path',AdduserComponent.file,User.image_path);}
      formData.append('email',User.email);
      formData.append('password',User.password);
      formData.append('nom_socieite',User.nom_socieite);
      formData.append('ICE_user',User.ICE_user);
      formData.append('TF',User.TF);
      formData.append('CNSS',User.CNSS);
      formData.append('TP',User.TP);
      formData.append('capitale',User.capitale);
      formData.append('TEL1',User.TEL1);
      formData.append('TEL2',User.TEL2);
      formData.append('FIX',User.FIX);
      formData.append('sit_web',User.sit_web);
      formData.append('Adresse',User.Adresse);
      this.Userserv.addUser(formData).subscribe(res=>{
        this.id_user=res.id;
     
                 /////////////
                
                 const formDataLiRol=new FormData();
                 formDataLiRol.append('id_role',"2");
                 formDataLiRol.append('id_user',this.id_user);
               
                this.Userserv.addLingRol(formDataLiRol).subscribe(res=>{
                 
                 
                });
                ////////////////////////
        
      //  });
        ///////////////Client///////////////////////////
        if(client.ICE!=null || client.Nom_client!=null || client.Nom_client!=null || client.Adresse_client!=null || client.Nom_client!=null){
        const formDatacl=new FormData();
      formDatacl.append('ICE',client.ICE);
      formDatacl.append('Nom_client',client.Nom_client);
      formDatacl.append('Adresse_client',client.Adresse_client);
      formDatacl.append('tele_client',client.Nom_client);
      formDatacl.append('id_user',this.id_user);
     this.clientServer.addclient(formDatacl).subscribe(res=>{
        ///////////////Document///////////////////////////
       this.id_client=res.id;
       if(Facture.Nom_document!=null || Facture.date_document!=null || Facture.date_échéance!=null){
     const formDatado=new FormData();
    
     formDatado.append('id_client',this.id_client);
     formDatado.append('Nom_document',Facture.Nom_document);
     formDatado.append('Type_document',Facture.Type_document);
     formDatado.append('date_document',Facture.date_document);
     formDatado.append('date_echeance',Facture.date_échéance);
     formDatado.append('id_user',this.id_user);
    this.docServer.addDocument(formDatado).subscribe(res=>{
   this.id_Doc=res.id;
           ///////////////Reglement///////////////////////////
if( Reglement.Type_payée!=null || Reglement.prix_payée!=null || Reglement.prix_reste!=null || Reglement.reference_reg!=null){
     const formDataRe=new FormData();
    
     formDataRe.append('Type_payee',Reglement.Type_payée);
     formDataRe.append('prix_payee',Reglement.prix_payée);
     formDataRe.append('prix_reste',Reglement.prix_reste);
     formDataRe.append('reference_reg',Reglement.reference_reg);
     formDataRe.append('id_user',this.id_user);
    this.docServer.addreglemnt(formDataRe).subscribe(res=>{
      ///////////////////////////////////////
        this.id_Reg=res.id;
      if(this.id_Doc!=null && this.id_Reg!=null){
      const formDataBay=new FormData();
    
      formDataBay.append('id_document',this.id_Doc);
      formDataBay.append('id_reglement',this.id_Reg);
    
     this.docServer.addBayDocument(formDataBay).subscribe(res=>{
 
       
      });
    }
      ///////////////////////////////////////
      
     });
    }
     });
    }
     });
    
    }

  
  
 
 for (let index = 0; index < AddproduitComponent.produits.length; index++) {
    ///////////////Gategorier///////////////////////////
    if(AddproduitComponent.produits[index].id_categories!=""){
      const formDataProd=new FormData();
 
    formDataProd.append('id_categorier',AddproduitComponent.produits[index].id_categories);
    formDataProd.append('Nom_produit',AddproduitComponent.produits[index].Nom_produit);
    formDataProd.append('reference',AddproduitComponent.produits[index].reference);
    formDataProd.append('prix_unitaire_TTC',AddproduitComponent.produits[index].prix_unitaire_TTC.toString());
    formDataProd.append('Taux_TVA',AddproduitComponent.produits[index].Taux_TVA.toString());
    formDataProd.append('id_user',this.id_user);
   this.prodserver.addProd(formDataProd).subscribe(res=>{
    this.id_prod=res.id;
       ///////////LigneDocument////////////////////////
       const formDataLignDoc=new FormData();
      
       formDataLignDoc.append('id_document',this.id_Doc);
       formDataLignDoc.append('id_produit',this.id_prod);
       formDataLignDoc.append('Qte',AddproduitComponent.produits[index].quantity.toString());
       formDataLignDoc.append('PU_HT',AddproduitComponent.produits[index].PU_HT.toString());
       formDataLignDoc.append('Taux_TVA',AddproduitComponent.produits[index].Taux_TVA.toString());
      this.docServer.addLingDocument(formDataLignDoc).subscribe(res=>{
       this.id_prod=res.id;
       
      });
   });

    }else{
    const formDataGat=new FormData();
    formDataGat.append('Nom_categorie',AddproduitComponent.produits[index].Nom_categorier.toString());
    formDataGat.append('id_user',this.id_user);
  
   this.prodserver.addGat(formDataGat).subscribe(res=>{
    this.id_Gat=res.id;
      ///////////Produit////////////////////////
    const formDataProd=new FormData();
 
    formDataProd.append('id_categorier',this.id_Gat);
    formDataProd.append('Nom_produit',AddproduitComponent.produits[index].Nom_produit);
    formDataProd.append('reference',AddproduitComponent.produits[index].reference);
    formDataProd.append('prix_unitaire_TTC',AddproduitComponent.produits[index].prix_unitaire_TTC.toString());
    formDataProd.append('Taux_TVA',AddproduitComponent.produits[index].Taux_TVA.toString());
    formDataProd.append('id_user',this.id_user);
   this.prodserver.addProd(formDataProd).subscribe(res=>{
    this.id_prod=res.id;
       ///////////LigneDocument////////////////////////
       const formDataLignDoc=new FormData();
      
       formDataLignDoc.append('id_document',this.id_Doc);
       formDataLignDoc.append('id_produit',this.id_prod);
       formDataLignDoc.append('Qte',AddproduitComponent.produits[index].quantity.toString());
       formDataLignDoc.append('PU_HT',AddproduitComponent.produits[index].PU_HT.toString());
       formDataLignDoc.append('Taux_TVA',AddproduitComponent.produits[index].Taux_TVA.toString());
      this.docServer.addLingDocument(formDataLignDoc).subscribe(res=>{
       this.id_prod=res.id;
       
      });
   });
  
    


   });}

  
 
    
 }

 
 this.onSubmit(res.email,User.password); 
        
    }
      );
   
     }
    
    

  onSubmit(email:any,password:any){
 
   
    
    this.isCorrect =true;
    this.etat = true;
    this.isEmpty = true;

 
      console.log("login");
      const formDatalogin=new FormData();
      
      formDatalogin.append('email',email);
      formDatalogin.append('password',password);
      this.userService.login(formDatalogin).subscribe((response :any)=>{

        this.userService.getinfobyiduser(response.idUser).subscribe(res=>{
    
          
          this.userAuthService.setRoles(res[0].Role);
        })
    
          this.userAuthService.setRoles(response.role);
          this.userAuthService.setPermissions(response.idUser);
          this.userAuthService.setToken(response.token);
          this.userAuthService.setUserid(response.idUser);
          this.userAuthService.setUserName(response.Username);
          this.SetTokenStayLogged();
          const data={
            'AUTH':true
          }
      this.userService.updateUser(response.idUser,data);
        this.router.navigateByUrl('/welcome/user/count');
      
        
    }
    // ,error =>{
      //   if(error.status == 0){
      //     this.router.navigateByUrl('/error500');
      //   }
      //   if(error.status == 401){
      //     this.isCorrect = false;
      //   }
      // }
      );
  
    
   

  }

  SetTokenStayLogged(){
    if(this.stayLogged == false){
      localStorage.setItem('stay','0');
    }
  }
 


}


