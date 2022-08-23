import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-damage-types',
  templateUrl: './damage-types.component.html',
  styleUrls: ['./damage-types.component.css']
})
export class DamageTypesComponent implements OnInit {

  constructor(private service: RuleService, private route: ActivatedRoute) { }

  damageList: any;
  currentType: any;

  ngOnInit(): void {
    this.currentType = this.route.snapshot.paramMap.get("name");
    this.service.ReturnDamageList().subscribe(data => {
      this.damageList = data
      this.PopulateList(this.damageList.results)
      console.log(this.damageList)
    })
  }

  PopulateList(inputList: any[]) {
    for (let i = 0; i < inputList.length; i++) {
      this.service.ReturnDamageDetails(inputList[i].index).subscribe(data => { 
        inputList[i] = data 
        if(inputList[i].index === this.currentType){
          inputList[i].open = true;
        }
        else{
          inputList[i].open = false;
        }
      });
    }
    return inputList;
  }

}
