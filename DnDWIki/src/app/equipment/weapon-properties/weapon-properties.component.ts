import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-weapon-properties',
  templateUrl: './weapon-properties.component.html',
  styleUrls: ['./weapon-properties.component.css']
})
export class WeaponPropertiesComponent implements OnInit {

  constructor(private service: EquipmentService) { }

  propertyList = [
    {index: "ammunition", name: "", desc: []},
    {index: "finesse", name: "", desc: []},
    {index: "heavy", name: "", desc: []},
    {index: "light", name: "", desc: []},
    {index: "loading", name: "", desc: []},
    {index: "monk", name: "", desc: []},
    {index: "reach", name: "", desc: []},
    {index: "special", name: "", desc: []},
    {index: "thrown", name: "", desc: []},
    {index: "two-handed", name: "", desc: []},
    {index: "versatile", name: "", desc: []},
  ]

  ngOnInit(): void {
    this.PopulateList(this.propertyList)
  }

  PopulateList(inputList: any[]) {
    for (let i = 0; i < inputList.length; i++) {
      this.service.ReturnWeaponPropertyDetails(inputList[i].index).subscribe(data => {inputList[i] = data});
    }
    console.log(inputList)
    return inputList;
  } 

}
