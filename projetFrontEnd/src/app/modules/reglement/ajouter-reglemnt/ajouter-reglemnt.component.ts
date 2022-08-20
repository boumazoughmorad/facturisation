import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { ReglementService } from '../reglement.service';

@Component({
  selector: 'app-ajouter-reglemnt',
  templateUrl: './ajouter-reglemnt.component.html',
  styleUrls: ['./ajouter-reglemnt.component.css']
})
export class AjouterReglemntComponent implements OnInit {
nomFornisseur:any;
prix_reste:any;
prix_Avance:any;
reference:any;
mode_reglemnt:any;
users:any;
  constructor(private reglementservice:ReglementService,private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userservice.getusers().subscribe(res=>{
this.users=res;
    })
  }
  valeurNomF(event:any){
this.nomFornisseur=event.target.value;
console.log(this.nomFornisseur);

  }
  valeurpR(event:any){
    this.prix_reste=event.target.value;
  }
  valeurpA(event:any){
    this.prix_Avance=event.target.value;
  }
  valeurref(event:any){
    this.reference=event.target.value;
  }
  valeurmod(event:any){
    this.mode_reglemnt=event.target.value;
  }
ajouter(){

  const formData=new FormData();
  formData.append('prix_payée',this.prix_Avance);
  formData.append('prix_reste',this.prix_reste);
  formData.append('Type_payée',this.mode_reglemnt);
  formData.append('reference_reg',this.reference);
  formData.append('id_user',this.nomFornisseur);
  this.reglementservice.addReg(formData).subscribe(res=>{
    this.router.navigateByUrl('/welcome/reglement/listReglement');
  })
}
}
