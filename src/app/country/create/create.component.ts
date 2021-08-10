import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'country-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  states: string[] = [
    'Asia', 'Africa', 'Europe', ' Australia', 'North America', 'South America', 'Antarctica'

  ];
  
  constructor() { }

  ngOnInit(): void {
   
  }

  

}
