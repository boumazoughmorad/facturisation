import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorierService } from '../categorier.service';

@Component({
  selector: 'app-ajouter-categorier',
  templateUrl: './ajouter-categorier.component.html',
  styleUrls: ['./ajouter-categorier.component.css']
})
export class AjouterCategorierComponent implements OnInit {
Nom_categorie:any;
  constructor(private categoesservice:CategorierService,private router:Router) { }

  ngOnInit(): void {
  }
  valeurcategories(event:any){
 this.Nom_categorie=event.target.value;
  }
  ajouter(){
    console.log(this.Nom_categorie);
    const formDatacategories=new FormData();
    formDatacategories.append('Nom_categorie',this.Nom_categorie);
this.categoesservice.ajouter_categoier(formDatacategories).subscribe(res=>{
  this.router.navigateByUrl('/welcome/info_categorier/list');
  
})
  }
}
