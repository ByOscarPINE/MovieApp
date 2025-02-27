import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Result, SerieDetail } from '../intefaces';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private _http = inject(HttpClient);
  private api_key = environment.api_key;
  private base_url = environment.base_url;

  constructor() { }

  getPopularSeries() {
    console.log(`${this.base_url}/tv/top_rated?api_key=${this.api_key}`);
    
    return this._http.get<Result>(`${this.base_url}/tv/top_rated?api_key=${this.api_key}&language=es-ES`);
  }

  getSerie(id : number) {

    console.log(`${this.base_url}/tv/${id}?api_key=${this.api_key}`);
    
    return this._http.get<SerieDetail>(`${this.base_url}/tv/${id}?api_key=${this.api_key}&language=es-ES`);
  }

  buscarSerie(query:string){
    return this._http.get<Result>(`${this.base_url}/search/tv?query=${query}&api_key=${this.api_key}&include_adult=true`);
  }

  getActors(id: number){
    console.log(`${this.base_url}/tv/${id}/credits?language=en-US`);
    
    return this._http.get<any>(`${this.base_url}/tv/${id}/credits?api_key=${this.api_key}&language=en-US`)
  }
}
