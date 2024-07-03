import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from './models/coments';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  private  apiUrl:string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http:HttpClient) { }

  getflitracomentporgarfield():Observable<Comments[]>{
    return this.http.get<Comments[]>(this.apiUrl)

  }


}
