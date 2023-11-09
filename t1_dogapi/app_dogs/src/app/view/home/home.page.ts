import { Component, OnInit } from '@angular/core';
import { DogApiService } from 'src/app/services/dogapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  searchTerm: string = '';
  breeds: any[] = [];
  filteredBreeds: any[] = [];

  constructor(private dogApi: DogApiService) {}

  ngOnInit() {
    this.dogApi.getAll().subscribe((data) => {
      this.breeds = data;
      this.filteredBreeds = data;
    });
  }
  

  search() {
    this.filteredBreeds = this.breeds.filter((breed) =>
      breed.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
