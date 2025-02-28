import { Component, OnInit, Input, inject } from '@angular/core';
import { IonTitle, IonToolbar, IonHeader, IonContent, IonSearchbar, IonButtons, IonBackButton } from "@ionic/angular/standalone";
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonSearchbar, IonContent, IonHeader, IonToolbar, IonTitle, ]
})
export class ToolbarComponent  implements OnInit {
@Input() title!: string;
@Input() state!: boolean;
private _serieS = inject(SeriesService)

  constructor() {
   }

  ngOnInit() {}

}
