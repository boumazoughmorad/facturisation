import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  public values: string = '';
  public level: "L" | "M" | "Q" | "H";
  public width: number;

  constructor() {
    this.level = "L";
    this.values = "QR code string value";
    this.width = 200;
  }

  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

  qrData(val: string) {
    this.values = val;
  }

  qrWidth(val: number) {
    this.width = val;
  }

  ngOnInit(): void {
  }

  item = [{
    'name': 'Agatha Harkness',
    'played by': 'Kathryn Hahn',
    'Fictional universe': 'Marvel Universe',
    'Creator': 'Stan Lee'
  }]

  qrInfo = JSON.stringify(this.item);



}
