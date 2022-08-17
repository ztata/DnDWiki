import { Component, OnInit } from '@angular/core';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  constructor(private service: RuleService) { }

  conditionList: any;

  ngOnInit(): void {
    this.service.ReturnConditionList().subscribe(data => {
      this.conditionList = data
      this.PopulateList(this.conditionList.results)
    })
  }

  PopulateList(inputList: any[]) {
    for (let i = 0; i < inputList.length; i++) {
      this.service.ReturnConditionDetail(inputList[i].index).subscribe(data => { inputList[i] = data });
    }
    return inputList;
  }

}
