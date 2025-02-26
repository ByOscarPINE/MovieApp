import { Component, OnInit, Input, inject } from '@angular/core';
import { IonTitle, IonToolbar, IonHeader, IonContent, IonSearchbar } from "@ionic/angular/standalone";
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [IonSearchbar, IonContent, IonHeader, IonToolbar, IonTitle, ]
})
export class ToolbarComponent  implements OnInit {
@Input() title!: string;

private _serieS = inject(SeriesService)

  constructor() {
   }

  ngOnInit() {}

}
