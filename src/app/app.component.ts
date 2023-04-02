import { PostService } from './myServices/post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstPro';
  public mydate=new Date();

  constructor(private api:PostService){}
 
    
  
}
