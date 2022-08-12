import { Component, OnInit } from '@angular/core';
import { SpellService } from '../spell.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-spell-details',
  templateUrl: './spell-details.component.html',
  styleUrls: ['./spell-details.component.css']
})
export class SpellDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: SpellService) { }
  currentSpell: any;
  spellDetails: any;

  ngOnInit(): void {
    this.currentSpell = this.route.snapshot.paramMap.get("name");
    this.service.ReturnSpellDetails(this.currentSpell).subscribe(
      data => (this.spellDetails = data)
    );
  }
}
