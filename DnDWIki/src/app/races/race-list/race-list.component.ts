import { Component, OnInit } from '@angular/core';
import { RacesService } from '../races.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css']
})
export class RaceListComponent implements OnInit {

  constructor(private service: RacesService, private router: Router) { }
  raceList: any;

  ngOnInit(): void {
    this.service.ReturnRaceList().subscribe(value => (this.raceList = value));
  }

}
