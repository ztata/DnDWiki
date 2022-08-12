import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private service: CharacterService) { }

  skills = [
    {index: 'acrobatics', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'animal-handling', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'arcana', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'athletics', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'deception', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'history', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'insight', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'intimidation', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'investigation', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'medicine', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'nature', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'perception', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'performance', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'persuasion', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'religion', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'sleight-of-hand', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'stealth', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
    {index: 'survival', name: '', ability_score: {name: '', url: '', index: ''}, desc: [] },
  ];

  ngOnInit(): void {
    this.PopulateList(this.skills);
  }

  PopulateList(inputList: any[]){
    for(let i = 0; i < inputList.length; i++){
      this.service.ReturnSkillDetails(inputList[i].index).subscribe(data => {inputList[i] = data})
    }
    return inputList;
  }

}
