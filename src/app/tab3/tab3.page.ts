import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ToolbarComponent } from "../components/toolbar/toolbar.component";
import { SupabaseService } from '../services/supabase.service';
import { SerieCardComponent } from "../components/serie-card/serie-card.component";
import { SeriesService } from '../services/series.service';
import { Serie } from '../intefaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, ToolbarComponent, SerieCardComponent],
})
export class Tab3Page {
  

    private _serieS = inject(SeriesService)
  
    series : Serie[] = [];
  
    constructor() {}
  
    buscarSerie(e: any){
      console.log(e.detail.value)
      this._serieS.buscarSerie(e.detail.value).subscribe(res => {
        this.series = res.results;
      })
     }
  
  // private _supaservice = inject(SupabaseService)

  // constructor() {
  //   this.getFavorites();
  // }

  // async getFavorites(){
  //   const res = await this._supaservice.getFavorites();
  //   console.log(res)
  // }
}
