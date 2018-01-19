import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-super-sayian',
  templateUrl: './super-sayian.component.html',
  styleUrls: ['./super-sayian.component.css']
})
export class SuperSayianComponent implements OnInit {
  @Input () myPower;
  constructor() { }

  ngOnInit() {
  }

}
