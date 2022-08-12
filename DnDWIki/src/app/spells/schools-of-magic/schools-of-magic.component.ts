import { Component, OnInit } from '@angular/core';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-schools-of-magic',
  templateUrl: './schools-of-magic.component.html',
  styleUrls: ['./schools-of-magic.component.css']
})
export class SchoolsOfMagicComponent implements OnInit {

  constructor(private service: SpellService) { }

/*   rp = require('request-promise');
 */
  uri = "https://www.dnd5eapi.co/api/magic-schools";

  schoolList = [
    {name: 'abjuration'}, 
    {name: 'conjuration'}, 
    {name: 'divination'}, 
    {name: 'enchantment'}, 
    {name: 'evocation'}, 
    {name: 'illusion'}, 
    {name: 'necromancy'}, 
    {name: 'transmutation'}]

    populatedList: any;


    //I THINK WE NEED TO USE A PROMISE HERE TO LOOP THROUGH THE SCHOOL ARRAY AND ADD A NEW DESC PROPERTY TO EACH ITEM


  ngOnInit(): void {
/*     this.populatedList = this.processUsers(this.schoolList);
 */  }

/*   MakeApiCall(name){
    return this.rp({
      url : `${URL}/${name}`,
      method : 'GET',
      json : true
  })
  }

  async processUsers(list){
    let result;
    let promises = [];
    for(let i = 0; i < list.length; i++){
        promises.push(this.MakeApiCall(list[i].name));
    }
    result = await Promise.all(promises);
    for(let i = 0; i < list.length; i++){
        list[i]['result'] = result[i];
    }
    return list;
} */

/* async function processUsers(){
  let result;
  for(let i = 0; i < user_list.length; i++){
      result = await make_api_call(user_list[i].Id);
      user_list[i]['result'] = result;
  }
  return user_list;
} */

 

}
