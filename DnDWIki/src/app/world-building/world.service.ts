import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(private http: HttpClient) { }
  private apiUri = "https://www.dnd5eapi.co/api/languages";
  private monsterUri = "https://www.dnd5eapi.co/api/monsters";

  ReturnLanguageDetails(name: string) {
    return this.http.get(`${this.apiUri}/${name}`);
  }

  ReturnLanguageList() {
    console.log('called return language list method')
    return this.http.get(`${this.apiUri}`)
  }

  ReturnMonsterList() {
    return this.http.get(`${this.monsterUri}`)
  }

  ReturnMonsterDetails(name: string) {
    return this.http.get(`${this.monsterUri}/${name}`)
  }
}
