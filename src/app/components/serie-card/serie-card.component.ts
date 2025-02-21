import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { heartOutline } from 'ionicons/icons';
import { Serie } from 'src/app/intefaces';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCol, IonRow, IonGrid, IonCardContent, IonCard]
})
export class SerieCardComponent  implements OnInit {

  @Input({required: true}) serie!: Serie;
  private _router = inject(Router)

  constructor() { 
    addIcons({heartOutline});
  }

  ngOnInit() {}

  goToSerieDetails(id: number) {
    this._router.navigateByUrl(`/serie-detail/${id}`)
  }



}
