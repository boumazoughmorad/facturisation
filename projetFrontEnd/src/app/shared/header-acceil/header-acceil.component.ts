import { Component, OnInit } from '@angular/core';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { Facture } from 'src/app/entities/facture';
import { ProposerComponent } from '../proposer/proposer.component';
@Component({
  selector: 'app-header-acceil',
  templateUrl: './header-acceil.component.html',
  styleUrls: ['./header-acceil.component.css']
})
export class HeaderAcceilComponent implements OnInit {
type:any;

  constructor() { }

  ngOnInit(): void {
    this.type=WelcomePageComponent.type;
    console.log(this.type);
  
  }
  compte(){
    ProposerComponent.n=1;
  }
  demende_prix(){
    Facture.Type_document="demande_prix";
   
      // let shand = document.getElementById('demande_prix') ;
      let shand = document.getElementsByClassName('demande_prix') as HTMLCollectionOf<HTMLElement>;
      let shand1 = document.getElementsByClassName('bon_commande') as HTMLCollectionOf<HTMLElement>;
      let shand2 = document.getElementsByClassName('devise') as HTMLCollectionOf<HTMLElement>;
      let shand3 = document.getElementsByClassName('bon_livraison') as HTMLCollectionOf<HTMLElement>;
      let shand4 = document.getElementsByClassName('facture') as HTMLCollectionOf<HTMLElement>;
      let shand5 = document.getElementsByClassName('avoir') as HTMLCollectionOf<HTMLElement>;
    
      shand[0].style.backgroundColor = "red";
      shand1[0].style.backgroundColor = "rgb(106, 106, 255)"

      shand2[0].style.backgroundColor = "rgb(106, 106, 255)"
      shand3[0].style.backgroundColor = "rgb(106, 106, 255)"

      shand4[0].style.backgroundColor = "rgb(106, 106, 255)"
      shand5[0].style.backgroundColor = "rgb(106, 106, 255)"

  
    
  } 
  bon_commande(){
    let shand = document.getElementsByClassName('bon_commande') as HTMLCollectionOf<HTMLElement>;
    let shand1 = document.getElementsByClassName('demande_prix') as HTMLCollectionOf<HTMLElement>;
    let shand2 = document.getElementsByClassName('devise') as HTMLCollectionOf<HTMLElement>;
    let shand3 = document.getElementsByClassName('bon_livraison') as HTMLCollectionOf<HTMLElement>;
    let shand4 = document.getElementsByClassName('facture') as HTMLCollectionOf<HTMLElement>;
    let shand5 = document.getElementsByClassName('avoir') as HTMLCollectionOf<HTMLElement>;
  
    shand[0].style.backgroundColor = "red";
    shand1[0].style.backgroundColor = "rgb(106, 106, 255)"

    shand2[0].style.backgroundColor = "rgb(106, 106, 255)"
    shand3[0].style.backgroundColor = "rgb(106, 106, 255)"

    shand4[0].style.backgroundColor = "rgb(106, 106, 255)"
    shand5[0].style.backgroundColor = "rgb(106, 106, 255)"
 
    Facture.Type_document="bon_commande"
  }
  devise(){
    let shand = document.getElementsByClassName('devise') as HTMLCollectionOf<HTMLElement>;
    let shand2 = document.getElementsByClassName('bon_commande') as HTMLCollectionOf<HTMLElement>;
    let shand1 = document.getElementsByClassName('demande_prix') as HTMLCollectionOf<HTMLElement>;
    let shand3 = document.getElementsByClassName('bon_livraison') as HTMLCollectionOf<HTMLElement>;
    let shand4 = document.getElementsByClassName('facture') as HTMLCollectionOf<HTMLElement>;
    let shand5 = document.getElementsByClassName('avoir') as HTMLCollectionOf<HTMLElement>;
  
    shand[0].style.backgroundColor = "red";
    shand[0].style.color = "black";
    shand1[0].style.backgroundColor = "rgb(106, 106, 255)"

    shand2[0].style.backgroundColor = "rgb(106, 106, 255)"
    shand3[0].style.backgroundColor = "rgb(106, 106, 255)"

    shand4[0].style.backgroundColor = "rgb(106, 106, 255)"
    shand5[0].style.backgroundColor = "rgb(106, 106, 255)"
  
    Facture.Type_document="devise"
  }
  bon_livraison(){
    let shand = document.getElementsByClassName('bon_livraison') as HTMLCollectionOf<HTMLElement>;
    let shand3 = document.getElementsByClassName('bon_commande') as HTMLCollectionOf<HTMLElement>;
    let shand1 = document.getElementsByClassName('demande_prix') as HTMLCollectionOf<HTMLElement>;
    let shand2 = document.getElementsByClassName('devise') as HTMLCollectionOf<HTMLElement>;
    let shand4 = document.getElementsByClassName('facture') as HTMLCollectionOf<HTMLElement>;
    let shand5 = document.getElementsByClassName('avoir') as HTMLCollectionOf<HTMLElement>;
  
    shand[0].style.backgroundColor = "red";
    shand1[0].style.backgroundColor = "rgb(106, 106, 255)"

    shand2[0].style.backgroundColor = "rgb(106, 106, 255)"
    shand3[0].style.backgroundColor = "rgb(106, 106, 255)"

    shand4[0].style.backgroundColor = "rgb(106, 106, 255)"
    shand5[0].style.backgroundColor = "rgb(106, 106, 255)"
  
    Facture.Type_document="bon_livraison"
  }
  facture(){
    let shand = document.getElementsByClassName('facture') as HTMLCollectionOf<HTMLElement>;
    let shand4 = document.getElementsByClassName('bon_commande') as HTMLCollectionOf<HTMLElement>;
    let shand1 = document.getElementsByClassName('demande_prix') as HTMLCollectionOf<HTMLElement>;
    let shand2 = document.getElementsByClassName('devise') as HTMLCollectionOf<HTMLElement>;
    let shand3 = document.getElementsByClassName('bon_livraison') as HTMLCollectionOf<HTMLElement>;
    let shand5 = document.getElementsByClassName('avoir') as HTMLCollectionOf<HTMLElement>;
  
    shand[0].style.backgroundColor = "red";
    shand1[0].style.backgroundColor = "rgb(106, 106, 255)"

    shand2[0].style.backgroundColor = "rgb(106, 106, 255)"
    shand3[0].style.backgroundColor = "rgb(106, 106, 255)"

    shand4[0].style.backgroundColor = "rgb(106, 106, 255)"
    shand5[0].style.backgroundColor = "rgb(106, 106, 255)"
  
    Facture.Type_document="facture"
  }
  avoir(){
    let shand = document.getElementsByClassName('avoir') as HTMLCollectionOf<HTMLElement>;
    let shand5 = document.getElementsByClassName('bon_commande') as HTMLCollectionOf<HTMLElement>;
    let shand1 = document.getElementsByClassName('demande_prix') as HTMLCollectionOf<HTMLElement>;
    let shand2 = document.getElementsByClassName('devise') as HTMLCollectionOf<HTMLElement>;
    let shand3 = document.getElementsByClassName('bon_livraison') as HTMLCollectionOf<HTMLElement>;
    let shand4 = document.getElementsByClassName('facture') as HTMLCollectionOf<HTMLElement>;
  
    shand[0].style.backgroundColor = "red";
    shand1[0].style.backgroundColor = "rgb(106, 106, 255)"

    shand2[0].style.backgroundColor = "rgb(106, 106, 255)"
    shand3[0].style.backgroundColor = "rgb(106, 106, 255)"

    shand4[0].style.backgroundColor = "rgb(106, 106, 255)"
    shand5[0].style.backgroundColor = "rgb(106, 106, 255)"
  
    Facture.Type_document="avoire"
  }

}
