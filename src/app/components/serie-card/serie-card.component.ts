import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCol, IonRow, IonGrid, IonCardContent, IonCard]
})
export class SerieCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
