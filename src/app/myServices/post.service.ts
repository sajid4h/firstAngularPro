import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { post } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getallpost():Observable<post[]>{
    return this.http.get<post[]>('https://jsonplaceholder.typicode.com/posts')
   
  }

}
