import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { EquipmentService } from '../equipment.service';


@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit {

  constructor(private service: EquipmentService, private route: ActivatedRoute) { }
  unsortedList: any;
  sortedList: any[] = [
    { id: 'a', features: [] },
    { id: 'b', features: [] },
    { id: 'c', features: [] },
    { id: 'd', features: [] },
    { id: 'e', features: [] },
    { id: 'f', features: [] },
    { id: 'g', features: [] },
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
    { id: 'x', features: [] },
    { id: 'y', features: [] },
    { id: 'z', features: [] }
  ];

  displayMessage = false;
  message = "Sorry, it does not look like we have any items in this category. Check the enchanted items section to see all equipment with magical properties.";

  name: any;
  category: any;

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name");
    this.service.ReturnSingleEquipmentCategory(this.name).subscribe(data => { this.category = data })
    this.service.ReturnSingleEquipmentCategory(this.name).subscribe(data => {
      this.unsortedList = data
      for (let i = 0; i < this.sortedList.length; i++) {
        let firstLetter: string = this.sortedList[i].id;

        this.unsortedList.equipment.forEach(element => {
          if (element.index.startsWith(firstLetter) && element.url.includes("magic") === false) {
            this.sortedList[i].features.push(element)
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
      this.service.ReturnItemDetails(inputList[i].url).subscribe(data => { inputList[i] = data });
    };
    return inputList;
  }

}
