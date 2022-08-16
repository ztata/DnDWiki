import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }

  private magicItemsUri = "https://www.dnd5eapi.co/api/magic-items/";
  private itemCategoriesUri = "https://www.dnd5eapi.co/api/equipment-categories";
  private itemsUri = "https://www.dnd5eapi.co/api/equipment";
  private weaponPropertiesUri = "https://www.dnd5eapi.co/api/weapon-properties";

  ReturnMagicItemsList(){
    return this.http.get(`${this.magicItemsUri}`);
  }

  ReturnMagicItemDetails(name: string){
    return this.http.get(`${this.magicItemsUri}/${name}`);
  }

  ReturnEquipmentCategoryList(){
    return this.http.get(`${this.itemCategoriesUri}`);
  }

  ReturnSingleEquipmentCategory(name: string){
    return this.http.get(`${this.itemCategoriesUri}/${name}`)
  }

  ReturnItemDetails(uri: string){
    return this.http.get(`https://www.dnd5eapi.co${uri}`)
  }

  ReturnWeaponProperties(){
    return this.http.get(`${this.weaponPropertiesUri}`);
  }

  ReturnWeaponPropertyDetails(name: string){
    return this.http.get(`${this.weaponPropertiesUri}/${name}`)
  }
}
