import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {
  level:number;
  power:Array<number>=[];
  constructor() { }
  
  onclick(){
    this.power.push(this.level)
    console.log(this.power)
  }
  
}
