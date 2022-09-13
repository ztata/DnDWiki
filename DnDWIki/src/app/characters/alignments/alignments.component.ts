import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-alignments',
  templateUrl: './alignments.component.html',
  styleUrls: ['./alignments.component.css']
})
export class AlignmentsComponent implements OnInit {

  constructor(private service: CharacterService) { }

  alignments = [
    { name: '', index: 'chaotic-evil', desc: '' },
    { name: '', index: 'chaotic-good', desc: '' },
    { name: '', index: 'chaotic-neutral', desc: '' },
    { name: '', index: 'lawful-evil', desc: '' },
    { name: '', index: 'lawful-good', desc: '' },
    { name: '', index: 'lawful-neutral', desc: '' },
    { name: '', index: 'neutral', desc: '' },
    { name: '', index: 'neutral-evil', desc: '' },
    { name: '', index: 'neutral-good', desc: '' },
  ];

  ngOnInit(): void {
    this.PopulateList(this.alignments);
  }

  PopulateList(inputList: any[]) {
    for (let i = 0; i < inputList.length; i++) {
      this.service.ReturnAlignmentDetails(inputList[i].index).subscribe(data => { inputList[i] = data });
    }
    return inputList;
  }

}
