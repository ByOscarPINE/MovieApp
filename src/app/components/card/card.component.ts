import { Component, OnInit } from '@angular/core';
import { IonIcon, IonButton, IonCol, IonCard, IonRow, IonGrid, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonGrid, IonRow, IonCard, IonIcon, IonButton, IonCol]
})
export class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
