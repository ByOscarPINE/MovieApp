import { Component, OnInit, Input } from '@angular/core';
import { IonTitle, IonToolbar, IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, ]
})
export class ToolbarComponent  implements OnInit {
@Input() title!: string;

  constructor() { }

  ngOnInit() {}

}
