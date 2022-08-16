import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-standard-items',
  templateUrl: './standard-items.component.html',
  styleUrls: ['./standard-items.component.css']
})
export class StandardItemsComponent implements OnInit {

  constructor(private service: EquipmentService) { }
  
  categoryList: any;

  ngOnInit(): void {
    this.service.ReturnEquipmentCategoryList().subscribe(data => {this.categoryList = data})

  }

}
