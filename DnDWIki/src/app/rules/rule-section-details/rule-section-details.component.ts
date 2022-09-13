import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-rule-section-details',
  templateUrl: './rule-section-details.component.html',
  styleUrls: ['./rule-section-details.component.css']
})
export class RuleSectionDetailsComponent implements OnInit {

  constructor(private service: RuleService, private route: ActivatedRoute) { }
  ruleSection: any;
  section: any;
  subsections = [];

  ngOnInit(): void {
    this.ruleSection = this.route.snapshot.paramMap.get("name");
    this.service.ReturnRulesDetails(this.ruleSection).subscribe(
      data => {
        this.section = data
        this.section.subsections.forEach(element => {
          let item = {};
          this.service.ReturnGeneralRuleDetails(element.index).subscribe(
            result => {
              item = result
              this.subsections.push(item)
            }
          )
        })
      }
    )
  }
}
