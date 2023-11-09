import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OmdbapiService, SearchType } from 'src/app/services/omdbapi.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  result! : Observable<any>;
  searchTerms : string = '';
  type : SearchType = SearchType.all;

  constructor(private omdbapi : OmdbapiService) { }

  ngOnInit() {
  }

  search(){
    this.result = this.omdbapi.getAll(this.searchTerms, this.type).pipe(map(results => results['Search']))
  }

}
