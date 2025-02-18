import { HttpClient } from '@angular/common/http';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, home, starOutline, search } from 'ionicons/icons';
import { SerieCardComponent } from '../components/serie-card/serie-card.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, SerieCardComponent],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  // private _apictrl = inject(HttpClient);


  // async apiCtrl() {
  //   const url = 'https://api.themoviedb.org/3/tv/popular';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTNhM2JkMzhhOTA2YzEwYjUyNDg0ZjNhMDBmOWFmNiIsIm5iZiI6MTczOTQ1Mjk5NC4wOTUsInN1YiI6IjY3YWRmMjQyODExZmMyZGI4N2QwYzE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPq-4HTGNpX1ajY8AnC_DfIEam_-zHqATVzMNL88ylY'
  //     }
  //   };
  //   fetch(url, options)
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // }

  constructor() {
    addIcons({ triangle, ellipse, square, home,starOutline, search });
  }
}
