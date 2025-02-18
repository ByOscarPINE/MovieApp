import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonButton, IonIcon, IonCardContent, IonGrid, IonRow, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { SerieCardComponent } from "../components/serie-card/serie-card.component";
import { SeriesService } from '../services/series.service';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import { ToolbarComponent } from "../components/toolbar/toolbar.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonCard, IonRow, IonGrid, IonCardContent, IonIcon, IonButton, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, SerieCardComponent, ToolbarComponent],
})
export class Tab1Page {

  private _seriesService = inject(SeriesService);
  constructor() {
    addIcons({ heart});

    this._seriesService.getPopularSeries()
    .subscribe(res => {
      console.log(res);
    })

  }

}
