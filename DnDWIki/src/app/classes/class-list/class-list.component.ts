import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  constructor(private service: ClassService) { }
  classList: any;

  ngOnInit(): void {
    this.service.ReturnClassList().subscribe(value => (this.classList = value));
    console.log(this.classList)
  }

}
