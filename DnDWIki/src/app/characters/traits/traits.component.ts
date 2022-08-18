import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute } from '@angular/router';
import { features } from 'process';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.css']
})
export class TraitsComponent implements OnInit {

  constructor(private service: CharacterService, private route: ActivatedRoute) { }
  traitsCollection: any;
  unsortedList: any;
  sortedList: any[] = [
    { id: 'a', features: [] , open: false },
    { id: 'b', features: []  , open: false },
    //{ id: 'c', features: [] },
    { id: 'd', features: []  , open: false },
    { id: 'e', features: []  , open: false },
    { id: 'f', features: []  , open: false },
    { id: 'g', features: []  , open: false },
    { id: 'h', features: []  , open: false },
    { id: 'i', features: []  , open: false },
    //{ id: 'j', features: [] },
    { id: 'k', features: [] , open: false  },
    { id: 'l', features: []  , open: false },
    { id: 'm', features: [] , open: false  },
    { id: 'n', features: []  , open: false },
    //{ id: 'o', features: [] },
    //{ id: 'p', features: [] },
    //{ id: 'q', features: [] },
    { id: 'r', features: []  , open: false },
    { id: 's', features: [] , open: false  },
    { id: 't', features: []  , open: false },
    //{ id: 'u', features: [] },
    //{ id: 'v', features: [] },
    //{ id: 'w', features: [] },
    //{ id: 'x', features: [] },
    //{ id: 'y', features: [] },
    //{ id: 'z', features: [] }
  ];

  panelToOpen: string;
  firstLetterToOpen: any;
  


  ngOnInit(): void {
    this.panelToOpen = this.route.snapshot.paramMap.get("name");
    if(this.panelToOpen != undefined){
      this.firstLetterToOpen = this.panelToOpen.slice(0,1)
    }
    console.log(this.panelToOpen)
    console.log(this.firstLetterToOpen)
this.service.ReturnTraitsList().subscribe(data => {
  this.unsortedList = data
  console.log(this.unsortedList)
  for (let i = 0; i < this.sortedList.length; i++) {
    let firstLetter: string = this.sortedList[i].id;
    if(firstLetter === this.firstLetterToOpen){
      this.sortedList[i].open = true;
    }

    this.unsortedList.results.forEach(element => {
      if (element.index.startsWith(firstLetter)) {
        this.sortedList[i].features.push(element.index)
      }
    });
  }
  this.sortedList.forEach(element => {
    this.PopulateList(element.features, this.panelToOpen)
  })
  
  console.log(this.sortedList)
}) 
}

PopulateList(inputList, name) {
  for (let i = 0; i < inputList?.length; i++) {
    this.service.ReturnTraitsDetails(inputList[i]).subscribe(data => 
      {inputList[i] = data
        if(inputList[i].index === name){
          console.log("activated if statement")
          inputList[i].open = true;
        }
        else{
          console.log("activated else statement")
          inputList[i].open = false;
        }
      }
      );
  };
  return inputList;
}

FindPanelToOpen(inputList, name){
  for(let i = 0; i<inputList.length; i++){
    console.log("called find panel to open")
    if(inputList[i].index === name){
      console.log("activated if statement inside of findpaneltoopen")
      inputList[i].open = true;
    }    
  }
}
}
