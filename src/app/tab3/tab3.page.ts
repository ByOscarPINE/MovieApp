import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ToolbarComponent } from "../components/toolbar/toolbar.component";
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, ToolbarComponent],
})
export class Tab3Page {
  private _supaservice = inject(SupabaseService)

  constructor() {
    this.getFavorites();
  }

  async getFavorites(){
    const res = await this._supaservice.getFavorites();
    console.log(res)
  }
}
