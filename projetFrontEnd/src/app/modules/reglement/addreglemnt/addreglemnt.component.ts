import { Component, OnInit } from '@angular/core';
import { Reglement } from 'src/app/entities/reglement';
import { UserAuthService } from '../../user/user-auth.service';
import { ReglementService } from '../reglement.service';

@Component({
  selector: 'app-addreglemnt',
  templateUrl: './addreglemnt.component.html',
  styleUrls: ['./addreglemnt.component.css']
})
export class AddreglemntComponent implements OnInit {
  reglements:any;
  idUser:any;
  constructor(private userAuthService:UserAuthService,private reglementservice:ReglementService) { }



  ngOnInit(): void {
    this.idUser=this.idUser=this.userAuthService.getUserid();

 
  }
 
  valeurprix_payee(event :any){
    Reglement.prix_payée=event.target.value;
    }
    valeurprix_reste(event :any){
      Reglement.prix_reste=event.target.value;
    }
    valeurType_payee(event :any){
      Reglement.Type_payée=event.target.value;
    }
    valeurreference_reg(event :any){
      Reglement.reference_reg=event.target.value;
    }
   
}
