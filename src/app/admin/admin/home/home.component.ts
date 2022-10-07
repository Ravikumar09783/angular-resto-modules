import { Component, OnInit } from '@angular/core';
import CartData from 'src/app/enum/variables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  cartData=CartData;

  ngOnInit(): void {
    console.log("auto", CartData)
  }

}
