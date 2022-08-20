import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../user/user-auth.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
Role:any;
  constructor(private userAuthservice:UserAuthService,private router:Router) { }

  ngOnInit(): void {
    this.Role=this.userAuthservice.getRoles();
if(this.Role!='admin'){
this.router.navigateByUrl('/error404')
}
  }
  
}
