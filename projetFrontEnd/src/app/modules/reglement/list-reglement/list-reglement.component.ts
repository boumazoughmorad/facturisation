import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../user/user-auth.service';
import { UserService } from '../../user/user.service';
import { ReglementService } from '../reglement.service';

@Component({
  selector: 'app-list-reglement',
  templateUrl: './list-reglement.component.html',
  styleUrls: ['./list-reglement.component.css']
})
export class ListReglementComponent implements OnInit {
reglements:any;
firstName!:string ; 
users:any;
  constructor(private reglementservice:ReglementService,private userservice:UserService) { }

  ngOnInit(): void {
    this.reglementservice.getAllReglement().subscribe(res=>{
     
      
      this.reglements=res;
    })
    this.userservice.getusers().subscribe(res=>{
      this.users=res;
    })
    }
 
    supprimer(id:any){
      this.reglementservice.supprimerReglement(id).subscribe(res=>{
        console.log(res);
        
      })
    }
}
