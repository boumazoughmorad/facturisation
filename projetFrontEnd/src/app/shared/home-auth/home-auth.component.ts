import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/modules/user/user-auth.service';

@Component({
  selector: 'app-home-auth',
  templateUrl: './home-auth.component.html',
  styleUrls: ['./home-auth.component.css']
})
export class HomeAuthComponent implements OnInit {
Role:any;
  constructor(private userAuthservice:UserAuthService,private router:Router) { }

  ngOnInit(): void {
    this.Role=this.userAuthservice.getRoles();
    if(this.Role==null){
    // this.router.navigateByUrl('/error404')
    }
  }

}
