import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private http: HttpClient) { }
  private spellListApiUri = "https://www.dnd5eapi.co/api/spells";
  private schoolOfMagicUri = "https://www.dnd5eapi.co/api/magic-schools/";

  ReturnSpellList() {
    return this.http.get(this.spellListApiUri);
  }

  ReturnSpellDetails(name: string) {
    return this.http.get(`${this.spellListApiUri}/${name}`);
  }

  ReturnSchoolOfMagic(name: string) {
    return this.http.get<any>(`${this.schoolOfMagicUri}/${name}`)
  }
}
