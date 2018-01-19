import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-super-sayian-two',
  templateUrl: './super-sayian-two.component.html',
  styleUrls: ['./super-sayian-two.component.css']
})
export class SuperSayianTwoComponent implements OnInit {
  @Input () myPower;
  constructor() { }

  ngOnInit() {
  }

}
