import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private _http = inject(HttpClient);
  private api_key = environment.api_key;
  private base_url = environment.base_url;

  constructor() { }

  getPopularSeries() {
    return this._http.get('https://api.themoviedb.org/3/tv/popular?api_key=6a3a3bd38a906c10b52484f3a00f9af6');
  }
}
