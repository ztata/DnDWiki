import { Component, OnInit } from '@angular/core';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-rule-sections',
  templateUrl: './rule-sections.component.html',
  styleUrls: ['./rule-sections.component.css']
})
export class RuleSectionsComponent implements OnInit {

  constructor(private service: RuleService) { }

  ruleList: any;

  ngOnInit(): void {
    this.service.ReturnRules().subscribe(data => {
      this.ruleList = data
      console.log(this.ruleList)
    })
  }

}
