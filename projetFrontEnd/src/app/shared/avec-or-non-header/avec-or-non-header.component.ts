import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/entities/facture';

@Component({
  selector: 'app-avec-or-non-header',
  templateUrl: './avec-or-non-header.component.html',
  styleUrls: ['./avec-or-non-header.component.css']
})
export class AvecOrNonHeaderComponent implements OnInit {
  type_document:any;
  constructor() { }

  ngOnInit(): void {
    this.type_document=Facture.Type_document;
  }

}
