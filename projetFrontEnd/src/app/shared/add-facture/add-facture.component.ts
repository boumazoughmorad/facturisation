import { Component, OnInit } from '@angular/core';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
type=0;
  constructor() { }

  ngOnInit(): void {
    this.type=WelcomePageComponent.type;
  }

}
