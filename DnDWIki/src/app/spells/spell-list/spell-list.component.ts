import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpellService } from '../spell.service';


@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  constructor(private service: SpellService, private router: Router) { }
  spellList: any;

  ngOnInit(): void {
    this.service.ReturnSpellList().subscribe(value => (this.spellList = value));
  }

}
