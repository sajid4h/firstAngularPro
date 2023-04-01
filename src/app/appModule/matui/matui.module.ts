import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
const material=[ MatToolbarModule,MatCardModule,MatIconModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
   
  ],
  exports:[
    material
  ]
})
export class MatuiModule { }
