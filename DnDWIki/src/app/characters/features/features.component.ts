import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(private service: CharacterService) { }
  unsortedList: any;
  sortedList: any[] = [
    { id: 'a', features: [] },
    { id: 'b', features: [] },
    { id: 'c', features: [] },
    { id: 'd', features: [] },
    { id: 'e', features: [] },
    { id: 'f', features: [] },
    { id: 'h', features: [] },
    { id: 'i', features: [] },
    { id: 'j', features: [] },
    { id: 'k', features: [] },
    { id: 'l', features: [] },
    { id: 'm', features: [] },
    { id: 'n', features: [] },
    { id: 'o', features: [] },
    { id: 'p', features: [] },
    { id: 'q', features: [] },
    { id: 'r', features: [] },
    { id: 's', features: [] },
    { id: 't', features: [] },
    { id: 'u', features: [] },
    { id: 'v', features: [] },
    { id: 'w', features: [] },
  ];


  ngOnInit(): void {
    this.service.ReturnFeaturesList().subscribe(data => {
      this.unsortedList = data
      for (let i = 0; i < this.sortedList.length; i++) {
        let firstLetter: string = this.sortedList[i].id;

        this.unsortedList.results.forEach(element => {
          if (element.index.startsWith(firstLetter)) {
            this.sortedList[i].features.push(element.index)
          }

        });
      }
      this.sortedList.forEach(element => {
        this.PopulateList(element.features)
      })
    })
  }

  PopulateList(inputList: any[]) {
    for (let i = 0; i < inputList?.length; i++) {
      this.service.ReturnFeatureDetails(inputList[i]).subscribe(data => { inputList[i] = data });
    };
    return inputList;
  }
}