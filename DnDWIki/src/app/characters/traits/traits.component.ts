import { Component, OnInit } from '@angular/core';
import { ITraits } from 'src/app/Interfaces/ITraits';
import { ITraitsCollection } from 'src/app/Interfaces/ITraitsCollection';
import { WorldService } from 'src/app/world-building/world.service';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.css']
})
export class TraitsComponent implements OnInit {

  constructor(private service: CharacterService) { }
  traitsCollection: any;
  


  ngOnInit(): void {
    this.service.ReturnTraitsList().subscribe(data => {this.traitsCollection = data});
  }




}
