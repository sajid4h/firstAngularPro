
import { Component } from '@angular/core';
import { PostService } from '../myServices/post.service';
import { PostDataType } from '../dataType';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  
  alldata: PostDataType[] = [];
constructor(private apiServices:PostService){}
  
  ngOnInit(){
    this.myfun();
  }

  myfun(){
    this.apiServices.getallpost().subscribe((d)=>{
      this.alldata=d;
    })
  }





}
