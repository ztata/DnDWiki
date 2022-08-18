import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpellService } from '../spell.service';


@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  constructor(private service: SpellService, private route: ActivatedRoute) { }
  unsortedList: any;
  sortedList: any[] = [
    { id: 'a', features: [], open: false },
    { id: 'b', features: [] , open: false},
    { id: 'c', features: [] , open: false},
    { id: 'd', features: [] , open: false},
    { id: 'e', features: [] , open: false},
    { id: 'f', features: [] , open: false},
    { id: 'g', features: [] , open: false},
    { id: 'h', features: [] , open: false},
    { id: 'i', features: [] , open: false},
    { id: 'j', features: [] , open: false},
    { id: 'k', features: [] , open: false},
    { id: 'l', features: [] , open: false},
    { id: 'm', features: [] , open: false},
    { id: 'n', features: [] , open: false},
    //{ id: 'o', features: [] },
    { id: 'p', features: [] , open: false},
    //{ id: 'q', features: [] },
    { id: 'r', features: [] , open: false},
    { id: 's', features: [] , open: false},
    { id: 't', features: [] , open: false},
    { id: 'u', features: [] , open: false},
    { id: 'v', features: [] , open: false},
    { id: 'w', features: [] , open: false},
    //{ id: 'x', features: [] },
    //{ id: 'y', features: [] },
    { id: 'z', features: [] , open: false}
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
    this.service.ReturnSpellList().subscribe(data => {
      this.unsortedList = data
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
      this.service.ReturnSpellDetails(inputList[i]).subscribe(data => 
        {
          inputList[i] = data
          if(inputList[i].index === name){
            console.log("activated if statement")
            inputList[i].open = true;
          }
          else{
            console.log("activated else statement")
            inputList[i].open = false;
          }
        });
    };
    return inputList;
}

}
