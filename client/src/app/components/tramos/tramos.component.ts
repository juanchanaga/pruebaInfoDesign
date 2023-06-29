import {Component, HostBinding} from '@angular/core';
import {GraphicsService} from "../../services/graphics.service";
import {Fecha} from "../../models/Graphics";

@Component({
  selector: 'app-tramos',
  templateUrl: './tramos.component.html',
  styleUrls: ['./tramos.component.css']
})
export class TramosComponent {

  @HostBinding('class') clases = 'row';

  fechas: Fecha = {
    fInicial: "",
    fFinal: ""
  }

  constructor(private graphicsService: GraphicsService) {
  }

  getTramos() {
    this.graphicsService.getTramos(this.fechas)
      .subscribe({
          next: (response) => {
            console.log(response)
          },
          error: (e) => console.error(e)
        }
      )
  }

}
