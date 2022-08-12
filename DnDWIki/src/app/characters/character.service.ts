import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITraits } from '../Interfaces/ITraits';
import { ITraitsCollection } from '../Interfaces/ITraitsCollection';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  private traitsUri = "https://www.dnd5eapi.co/api/traits";
  private alignmentUri = "https://www.dnd5eapi.co/api/alignments";
  private skillUri = "https://www.dnd5eapi.co/api/skills";

  ReturnTraitsList(){
    return this.http.get(`${this.traitsUri}`);
  }

  ReturnTraitsDetails(name: string){
    return this.http.get(`${this.traitsUri}/${name}`);
  }

  ReturnAlignmentDetails(name: string){
    return this.http.get(`${this.alignmentUri}/${name}`);
  }

  ReturnSkillDetails(name:string){
    return this.http.get(`${this.skillUri}/${name}`);
  }
}
