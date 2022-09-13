import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }
  private classListApiUri = "https://www.dnd5eapi.co/api/classes";

  ReturnClassList() {
    return this.http.get(this.classListApiUri);
  }

  ReturnClassDetails(name: string) {
    return this.http.get(`${this.classListApiUri}/${name}`);
  }

  ReturnClassLevelInfo(name: string) {
    return this.http.get(`${this.classListApiUri}/${name}/levels`);
  }

  ReturnSpellList(name: string) {
    return this.http.get(`${this.classListApiUri}/${name}/spells`);
  }
}
