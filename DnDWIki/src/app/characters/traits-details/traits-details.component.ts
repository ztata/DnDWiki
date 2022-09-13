import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';


@Component({
  selector: 'app-traits-details',
  templateUrl: './traits-details.component.html',
  styleUrls: ['./traits-details.component.css']
})
export class TraitsDetailsComponent implements OnInit {

  constructor(private service: CharacterService, private route: ActivatedRoute) { }
  traitName: string;
  traitDetails: any;

  ngOnInit(): void {
    this.traitName = this.route.snapshot.paramMap.get("name");
    this.service.ReturnTraitsDetails(this.traitName).subscribe(data => { this.traitDetails = data })
  }

}
