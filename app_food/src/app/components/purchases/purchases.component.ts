import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent  implements OnInit {
  @Input() purchase: any;
  constructor() { }

  ngOnInit() {}

  getCuisine(cuisine){
    return cuisine.join(', ');
  }
}
