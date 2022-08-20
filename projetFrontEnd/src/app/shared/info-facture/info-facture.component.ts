import { Component, OnInit } from '@angular/core';
import { DocumentModule } from 'src/app/modules/Document/document.module';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
@Component({
  selector: 'app-info-facture',
  templateUrl: './info-facture.component.html',
  styleUrls: ['./info-facture.component.css']
})
export class InfoFactureComponent implements OnInit {
  type:any;
  constructor() { }

  ngOnInit(): void {
    if(WelcomePageComponent.type==1){
     this.type=1;
    }
    if(WelcomePageComponent.type==2){
      this.type=2;
     }
     console.log(this.type);
     
  }

}
