import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PostDataType } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getallpost():Observable<PostDataType[]>{
    return this.http.get<PostDataType[]>('https://jsonplaceholder.typicode.com/posts')
   
  }

}
