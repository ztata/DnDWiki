import { Component, OnInit } from '@angular/core';
import { WorldService } from '../world.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor(private service: WorldService) { }

  /* UPDATE THIS SO IT HAS THE SAME PROPS AS THE API RESULT */
  languageList = [
    {name: 'abyssal', type: '', typical_speakers: [], script: ''}, 
    {name: 'celestial', type: '', typical_speakers: [], script: ''}, 
    {name: 'common', type: '', typical_speakers: [], script: ''}, 
    {name: 'deep-speech', type: '', typical_speakers: [], script: ''}, 
    {name: 'draconic', type: '', typical_speakers: [], script: ''}, 
    {name: 'dwarvish', type: '', typical_speakers: [], script: ''}, 
    {name: 'elvish', type: '', typical_speakers: [], script: ''}, 
    {name: 'giant', type: '', typical_speakers: [], script: ''}, 
    {name: 'gnomish', type: '', typical_speakers: [], script: ''}, 
    {name: 'goblin', type: '', typical_speakers: [], script: ''}, 
    {name: 'halfling', type: '', typical_speakers: [], script: ''}, 
    {name: 'infernal', type: '', typical_speakers: [], script: ''}, 
    {name: 'orc', type: '', typical_speakers: [], script: ''}, 
    {name: 'primordial', type: '', typical_speakers: [], script: ''}, 
    {name: 'sylvan', type: '', typical_speakers: [], script: ''}, 
    {name: 'undercommon', type: '', typical_speakers: [], script: ''}]

    ngOnInit(): void {
      this.PopulateList(this.languageList); 
      }
    
      PopulateList(inputList: any[]) {
        for (let i = 0; i < inputList.length; i++) {
          this.service.ReturnLanguageDetails(inputList[i].name).subscribe(data => {inputList[i] = data});
        }
        return inputList;
      } 

  

}
