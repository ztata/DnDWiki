import { Component, OnInit } from '@angular/core';
import { WorldService } from '../world.service';

@Component({
  selector: 'app-monsters-list',
  templateUrl: './monsters-list.component.html',
  styleUrls: ['./monsters-list.component.css']
})
export class MonstersListComponent implements OnInit {

  constructor(private service: WorldService) { }
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

  ngOnInit(): void {
    this.service.ReturnMonsterList().subscribe(data => {
      this.unsortedList = data
      console.log(this.unsortedList)
      for (let i = 0; i < this.sortedList.length; i++) {
        let firstLetter: string = this.sortedList[i].id;

        this.unsortedList.results.forEach(element => {
          if (element.index.startsWith(firstLetter)) {
            this.sortedList[i].features.push(element)
          }

        });
      }
      console.log(this.sortedList)
    })
  }
}
