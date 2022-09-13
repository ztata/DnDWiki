import { Component, OnInit } from '@angular/core';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-general-rules',
  templateUrl: './general-rules.component.html',
  styleUrls: ['./general-rules.component.css']
})
export class GeneralRulesComponent implements OnInit {

  constructor(private service: RuleService) { }

  unsortedList: any;
  sortedList: any[] = [
    { id: 'a', features: [] },
    { id: 'b', features: [] },
    { id: 'c', features: [] },
    { id: 'd', features: [] },
    { id: 'f', features: [] },
    { id: 'm', features: [] },
    { id: 'o', features: [] },
    { id: 'p', features: [] },
    { id: 'r', features: [] },
    { id: 's', features: [] },
    { id: 't', features: [] },
    { id: 'u', features: [] },
    { id: 'w', features: [] },
  ];

  ngOnInit(): void {
    this.service.ReturnGeneralRules().subscribe(data => {
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

  PopulateList(inputList) {
    for (let i = 0; i < inputList?.length; i++) {
      this.service.ReturnGeneralRuleDetails(inputList[i]).subscribe(data => { inputList[i] = data });
    };
    return inputList;
  }
}
