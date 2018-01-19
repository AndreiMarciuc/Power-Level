import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-super-sayian-three',
  templateUrl: './super-sayian-three.component.html',
  styleUrls: ['./super-sayian-three.component.css']
})
export class SuperSayianThreeComponent implements OnInit {
  @Input () myPower;
  constructor() { }

  ngOnInit() {
  }

}
