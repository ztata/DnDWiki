import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private http: HttpClient) { }
  private spellListApiUri = "https://www.dnd5eapi.co/api/spells";
  private schoolOfMagicUri = "https://www.dnd5eapi.co/api/magic-schools/";
  


  //return list of classes
  ReturnSpellList(){
    return this.http.get(this.spellListApiUri);
  }

 //returns single class details
 ReturnSpellDetails(name: string){
  return this.http.get(`${this.spellListApiUri}/${name}`);
 }

 ReturnSchoolOfMagic(name:string){
  return this.http.get(`${this.schoolOfMagicUri}/${name}`);
 }
}
