import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-sayian-four',
  templateUrl: './super-sayian-four.component.html',
  styleUrls: ['./super-sayian-four.component.css']
})
export class SuperSayianFourComponent implements OnInit {
  @Input () myPower;
  constructor() { }

  ngOnInit() {
  }

}
