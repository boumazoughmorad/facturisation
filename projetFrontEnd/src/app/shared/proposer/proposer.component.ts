import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposer',
  templateUrl: './proposer.component.html',
  styleUrls: ['./proposer.component.css']
})
export class ProposerComponent implements OnInit {
static n=0;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
ok(){
  ProposerComponent.n=1;
  this.router.navigate(['/infouser']);
}
}
