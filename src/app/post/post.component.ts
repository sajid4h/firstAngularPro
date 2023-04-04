import { Component } from '@angular/core';
import { PostService } from '../myServices/post.service';
import { post } from '../dataType';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  allpostlist: post[] = [];
  constructor(private apiServices: PostService) {}

  ngOnInit() {
    this.getPostList();
  }

  getPostList() {
    this.apiServices.getallpost().subscribe((data) => {
      this.allpostlist = data;
    });
  }
}
