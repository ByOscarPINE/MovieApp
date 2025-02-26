import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSearchbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ToolbarComponent } from "../components/toolbar/toolbar.component";
import { SeriesService } from '../services/series.service';
import { Serie } from '../intefaces';
import { SerieCardComponent } from "../components/serie-card/serie-card.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  standalone: true,
  styleUrls: ['tab2.page.scss'],
  imports: [IonSearchbar, IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, ToolbarComponent, SerieCardComponent]
})
export class Tab2Page {

  private _serieS = inject(SeriesService)

  series : Serie[] = [];

  constructor() {}

  buscarSerie(e: any){
    console.log(e.detail.value)
    this._serieS.buscarSerie(e.detail.value).subscribe(res => {
      this.series = res.results;
    })
   }

}
