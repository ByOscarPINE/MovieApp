import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSearchbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ToolbarComponent } from "../components/toolbar/toolbar.component";
import { SeriesService } from '../services/series.service';
import { Serie } from '../intefaces';
import { SerieCardComponent } from "../components/serie-card/serie-card.component";
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  standalone: true,
  styleUrls: ['tab2.page.scss'],
  imports: [IonSearchbar, IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, ToolbarComponent, SerieCardComponent]
})
export class Tab2Page {
     
  private _supaservice = inject(SupabaseService)

  constructor() {
    this.getFavorites();
  }

  async getFavorites(){
    const res = await this._supaservice.getFavorites();
    console.log(res)
  }

}
