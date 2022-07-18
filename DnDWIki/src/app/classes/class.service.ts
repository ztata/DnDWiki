import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
