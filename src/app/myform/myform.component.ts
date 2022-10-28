import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  model: Order = new Order("", 0, new Date(), "");

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model)
  }

}
