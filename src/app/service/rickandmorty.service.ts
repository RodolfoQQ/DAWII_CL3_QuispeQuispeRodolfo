import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from './models/Character';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  private  apiUrl:string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  humanosporespecie(): Observable<Character[]> {
    return this.http.get<{ results: Character[] }>(this.apiUrl).pipe(
      map(response => response.results.filter(character => character.species === 'Human'))
    );
  }
}
