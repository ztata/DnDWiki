import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  private traitsUri = "https://www.dnd5eapi.co/api/traits";
  private alignmentUri = "https://www.dnd5eapi.co/api/alignments";
  private skillUri = "https://www.dnd5eapi.co/api/skills";
  private featuresUri = "https://www.dnd5eapi.co/api/features";

  ReturnTraitsList() {
    return this.http.get(`${this.traitsUri}`);
  }

  ReturnTraitsDetails(name: string) {
    return this.http.get(`${this.traitsUri}/${name}`);
  }

  ReturnAlignmentDetails(name: string) {
    return this.http.get(`${this.alignmentUri}/${name}`);
  }

  ReturnSkillDetails(name: string) {
    return this.http.get(`${this.skillUri}/${name}`);
  }

  ReturnFeaturesList() {
    console.log('called return features list function')
    return this.http.get(`${this.featuresUri}`);
  }

  ReturnFeatureDetails(name: string) {
    return this.http.get(`${this.featuresUri}/${name}`);
  }
}
