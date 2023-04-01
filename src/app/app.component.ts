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
  a:any;
  constructor(private api:PostService){}
  ngOnInit(){
    this.api.getallpost().subscribe(d=>{
      this.a=d
      console.log('---------------------------')
      console.log(this.a)
      console.log('---------------------------')
    })
    
  }
}
