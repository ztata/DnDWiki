import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldService } from '../world.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor(private service: WorldService, private route: ActivatedRoute) { }

  languageList = [];
  currentLanguage: string;
  unsortedList: any;

  ngOnInit(): void {
    this.currentLanguage = this.route.snapshot.paramMap.get("name");
    this.service.ReturnLanguageList().subscribe(data => {
      this.unsortedList = data
      for (let i = 0; i < this.unsortedList.results.length; i++) {
        this.service.ReturnLanguageDetails(this.unsortedList.results[i].index).subscribe(data => {
          this.unsortedList.results[i] = data;
          if (this.unsortedList.results[i].index === this.currentLanguage) {
            this.unsortedList.results[i].open = true;
          }
          else {
            this.unsortedList.results[i].open = false;
          }
        })
      }
    })
  }
}
