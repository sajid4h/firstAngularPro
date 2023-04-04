import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

const material=[ MatToolbarModule,MatCardModule,MatIconModule,MatListModule,MatButtonModule]

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
