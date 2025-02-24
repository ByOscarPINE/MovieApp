import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonCardSubtitle, IonGrid, IonText, IonLabel, IonCol, IonRow, IonList, IonItem, IonIcon, IonListHeader } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';
import { SerieDetail } from 'src/app/intefaces';
import { addIcons } from 'ionicons';
import { manOutline, pinOutline } from 'ionicons/icons';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.page.html',
  styleUrls: ['./serie-detail.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonIcon, IonItem, IonList, IonRow, IonCol, IonLabel, IonText, IonGrid, IonCardSubtitle, IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SerieDetailPage implements OnInit {

  private _activeRoute = inject(ActivatedRoute)
  private _serviesS = inject(SeriesService)
  miSerie!: SerieDetail;
  constructor() {
    addIcons({
      manOutline,
      pinOutline
    })
    this._activeRoute.params.subscribe(params => {
      // console.log(params['id'])
      this.getS(params['id'])
    })
   }

   getS(id: string){
    this._serviesS.getSerie(parseInt(id)).subscribe(serie => {
      console.log(serie);
      this.miSerie = serie;
    })
   }

  ngOnInit() {
  }

}
