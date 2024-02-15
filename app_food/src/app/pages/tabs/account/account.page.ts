import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  purchases: any[] = [];
  isLoading: boolean = false;
  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(()=>{
      this.purchases = [
        {
          name: "Dom Henrique",
          city:"Guarapuava, Paraná",
          price: "60.00",
          data: "Fevereiro, 15 de 2024",
          delivered: true,
          requests:[
            'Pizza 2x',
            'Burguer 2x'
          ]
        },
        {
          name: "Pigalle",
          city:"Guarapuava, Paraná",
          price: "35.00",
          data: "Janeiro, 25 de 2024",
          delivered: false,
          requests:[
            'Burguer 1x',
            'Refrigerante 2x'
          ]
        }
      ],
      this.isLoading = false;
    }, 2000)
    
  }

  

}
