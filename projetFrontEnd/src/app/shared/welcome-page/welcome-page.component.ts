import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/modules/user/user-auth.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
static type=0;
idUser:any;
  constructor(private userAuthService:UserAuthService) { }

  ngOnInit(): void {
 this.idUser=this.userAuthService.getUserid();

 
  }
  fun1(){
    WelcomePageComponent.type=1;
  }
  fun2(){
    WelcomePageComponent.type=2;
  }
 
}
