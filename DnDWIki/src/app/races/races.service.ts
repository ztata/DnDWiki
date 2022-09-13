import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private http: HttpClient) { }
  private raceListApiUri = "https://www.dnd5eapi.co/api/races";
  private subraceUri = "https://www.dnd5eapi.co/api/subraces";

  ReturnRaceList() {
    return this.http.get(this.raceListApiUri);
  }

  ReturnRaceDetails(name: string) {
    return this.http.get(`${this.raceListApiUri}/${name}`);
  }

  ReturnSubraceDetails(name: string) {
    return this.http.get(`${this.subraceUri}/${name}`)
  }


}
