import { Component, OnInit } from '@angular/core';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-damage-types',
  templateUrl: './damage-types.component.html',
  styleUrls: ['./damage-types.component.css']
})
export class DamageTypesComponent implements OnInit {

  constructor(private service: RuleService) { }

  damageList: any;

  ngOnInit(): void {
    this.service.ReturnDamageList().subscribe(data => {
      this.damageList = data
      this.PopulateList(this.damageList.results)
      console.log(this.damageList)
    })
  }

  PopulateList(inputList: any[]) {
    for (let i = 0; i < inputList.length; i++) {
      this.service.ReturnDamageDetails(inputList[i].index).subscribe(data => { inputList[i] = data });
    }
    return inputList;
  }

}
