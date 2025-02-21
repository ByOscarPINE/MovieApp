import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.page.html',
  styleUrls: ['./serie-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SerieDetailPage implements OnInit {

  private _activeRoute = inject(ActivatedRoute)
  private _serviesS = inject(SeriesService)

  constructor() {
    this._activeRoute.params.subscribe(params => {
      // console.log(params['id'])
      this.getS(params['id'])
    })
   }

   getS(id: string){
    this._serviesS.getSerie(parseInt(id)).subscribe(serie => {
      console.log(serie);
    })
   }

  ngOnInit() {
  }

}
