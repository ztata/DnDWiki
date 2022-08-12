import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListFormat } from 'typescript';
import { SpellService } from '../spell.service';


@Component({
  selector: 'app-schools-of-magic',
  templateUrl: './schools-of-magic.component.html',
  styleUrls: ['./schools-of-magic.component.css']
})
export class SchoolsOfMagicComponent implements OnInit {

  constructor(private service: SpellService, private http: HttpClient) { }



  schoolList = [
    {name: 'abjuration', desc: ''}, 
    {name: 'conjuration', desc: ''}, 
    {name: 'divination', desc: ''}, 
    {name: 'enchantment', desc: ''}, 
    {name: 'evocation', desc: ''}, 
    {name: 'illusion', desc: ''}, 
    {name: 'necromancy', desc: ''}, 
    {name: 'transmutation', desc: ''}]

  ngOnInit(): void {
  this.PopulateList(this.schoolList); 
  }

  PopulateList(inputList: any[]) {
    for (let i = 0; i < inputList.length; i++) {
      this.service.ReturnSchoolOfMagic(inputList[i].name).subscribe(data => {inputList[i] = data});
    }
    return inputList;
  } 



 

}
