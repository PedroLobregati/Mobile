import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogApiService } from 'src/app/services/dogapi.service';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.page.html',
  styleUrls: ['./breed-details.page.scss'],
})
export class BreedDetailsPage implements OnInit {

  breed: any;
  imageUrl: any;

  constructor(
    private route: ActivatedRoute,
    private dogApiService: DogApiService
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const breedId = params['id'];
      this.breed = await this.dogApiService.getById(breedId).toPromise();
      this.imageUrl = await this.dogApiService.getImageUrlById(breedId).toPromise();
    });
  }
  

}
