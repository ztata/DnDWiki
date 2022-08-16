import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WorldService } from '../world.service';


@Component({
  selector: 'app-monsters-details',
  templateUrl: './monsters-details.component.html',
  styleUrls: ['./monsters-details.component.css']
})
export class MonstersDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: WorldService) { }
  name: string;
  monster: any;
  savingThrows: any = [];
  skills: any = [];


  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name");
    this.service.ReturnMonsterDetails(this.name).subscribe(data => {
      this.monster = data
      this.monster.proficiencies.forEach(element => {
        if (element.proficiency.index.startsWith("saving")) {
          let name = element.proficiency.name.substring(13)
          element.proficiency.name = name;
          this.savingThrows.push(element)
        }
        else if (element.proficiency.index.startsWith("skill")) {
          let name = element.proficiency.name.substring(6)
          element.proficiency.name = name;
          this.skills.push(element)
        }
      });
    })
  }
}
