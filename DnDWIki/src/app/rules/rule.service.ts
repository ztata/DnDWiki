import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor(private http: HttpClient) { }

  private condtionUri = "https://www.dnd5eapi.co/api/conditions";
  private damageUri = "https://www.dnd5eapi.co/api/damage-types";
  private generalRulesUri = "https://www.dnd5eapi.co/api/rule-sections";
  private rulesUri = "https://www.dnd5eapi.co/api/rules";

  ReturnConditionList() {
    return this.http.get(`${this.condtionUri}`)
  }

  ReturnConditionDetail(name: string) {
    return this.http.get(`${this.condtionUri}/${name}`);
  }

  ReturnDamageList() {
    return this.http.get(`${this.damageUri}`)
  }

  ReturnDamageDetails(name: string) {
    return this.http.get(`${this.damageUri}/${name}`)
  }

  ReturnGeneralRules() {
    return this.http.get(`${this.generalRulesUri}`);
  }

  ReturnGeneralRuleDetails(name: string) {
    return this.http.get(`${this.generalRulesUri}/${name}`)
  }

  ReturnRules() {
    return this.http.get(`${this.rulesUri}`);
  }

  ReturnRulesDetails(name: string) {
    return this.http.get(`${this.rulesUri}/${name}`);
  }
}
