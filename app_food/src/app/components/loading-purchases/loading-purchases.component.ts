import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-purchases',
  templateUrl: './loading-purchases.component.html',
  styleUrls: ['./loading-purchases.component.scss'],
})
export class LoadingPurchasesComponent  implements OnInit {
  dummy = Array(2);
  constructor() { }

  ngOnInit() {}

}
