import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SuperSayianComponent } from './power/super-sayian/super-sayian.component';
import { SuperSayianTwoComponent } from './power/super-sayian-two/super-sayian-two.component';
import { SuperSayianThreeComponent } from './power/super-sayian-three/super-sayian-three.component';
import { SuperSayianFourComponent } from './power/super-sayian-four/super-sayian-four.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSayianComponent,
    SuperSayianTwoComponent,
    SuperSayianThreeComponent,
    SuperSayianFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
