import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DogApiService{
    url = 'http://api.thedogapi.com/'
    apiKey = 'live_RSR7gxKvanbSj9cXl05BJlSnk4CLMOvawWYgXYkvcPLX4nfGw4AWc0CSv1JkLbih';

    constructor(private http: HttpClient){}

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}v1/breeds`).pipe(
          map((data: any[]) => data)
        );
      }

    getById(id: any): Observable<any> {
        return this.http.get<any[]>(`${this.url}v1/breeds/${id}`).pipe(
    map((data: any) => data)
  );
}

    getImageUrlById(breedId: any): Observable<string> {
    const apiUrl = `${this.url}v1/images/search?breed_id=${breedId}&limit=1&api_key=${this.apiKey}`;
    return this.http.get<any[]>(apiUrl).pipe(
      map((data: any[]) => {
        if (data.length > 0) {
          return data[0].url;
        } else {
          return null; 
        }
      })
    );
  }

}