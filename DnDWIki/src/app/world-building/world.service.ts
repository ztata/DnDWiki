import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(private http: HttpClient) { }
  private apiUri = "https://www.dnd5eapi.co/api/languages/";

  ReturnLanguageDetails(name: string){
    return this.http.get(`${this.apiUri}/${name}`);
  }
}
