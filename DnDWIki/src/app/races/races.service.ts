import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private http: HttpClient) { }
  private raceListApiUri = "https://www.dnd5eapi.co/api/races";
  


  //return list of classes
  ReturnRaceList(){
    return this.http.get(this.raceListApiUri);
  }

 //returns single class details
 ReturnRaceDetails(name: string){
  return this.http.get(`${this.raceListApiUri}/${name}`);
 }
}
