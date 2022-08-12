import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }
  private classListApiUri = "https://www.dnd5eapi.co/api/classes";
  


  //return list of classes
  ReturnClassList(){
    return this.http.get(this.classListApiUri);
  }

 //returns single class details
 ReturnClassDetails(name: string){
  return this.http.get(`${this.classListApiUri}/${name}`);
 }

 ReturnClassLevelInfo(name: string){
  return this.http.get(`${this.classListApiUri}/${name}/levels`);
 }

 ReturnSpellList(name:string){
  return this.http.get(`${this.classListApiUri}/${name}/spells`);
 }
}
