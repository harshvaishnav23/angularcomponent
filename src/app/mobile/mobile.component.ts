import { Component, OnInit } from '@angular/core';
import { ImobileProduct } from '../models/posts';
import { mobileProducts } from '../const/product';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  mobileArray : Array<ImobileProduct> = [];
  constructor() { }

  ngOnInit(): void {
    this.mobileArray = mobileProducts;
  }

}
