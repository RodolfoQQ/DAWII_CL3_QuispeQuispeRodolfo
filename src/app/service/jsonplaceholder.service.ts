import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  private  apiUrl:string = 'https://jsonplaceholder.typicode.com/comments';

  constructor() { }
}
