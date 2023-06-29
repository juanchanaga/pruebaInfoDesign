import {Component, HostBinding, Inject, PLATFORM_ID} from '@angular/core';
import {Fecha, TramosCliente} from "../../models/Graphics";
import {GraphicsService} from "../../services/graphics.service";
import * as $ from "jquery";

@Component({
  selector: 'app-tramos-cliente',
  templateUrl: './tramos-cliente.component.html',
  styleUrls: ['./tramos-cliente.component.css']
})
export class TramosClienteComponent {

  @HostBinding('class') clases = 'row';

  fechas: Fecha = {
    fInicial: "",
    fFinal: ""
  }

  constructor(private graphicsService: GraphicsService, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  addTableInfo(data: TramosCliente[]) {

    data.forEach((fila, index) => {

      let dataTable;

      if (index % 2 === 0) {
        dataTable = '<tr class="table-active">' +
          '<td>' + fila.Linea + '</td>' +
          '<td>' + fila.Perdidas + '</td>' +
          '<td>' + fila.TipoConsumo + '</td>' +
          '</tr>';
      } else {
        dataTable = '<tr class="table-light">' +
          '<td>' + fila.Linea + '</td>' +
          '<td>' + fila.Perdidas + '</td>' +
          '<td>' + fila.TipoConsumo + '</td>' +
          '</tr>';
      }

      $('#table-body').append(dataTable);
    })
  }

  getTramosCliente() {
    this.graphicsService.getTramosCliente(this.fechas)
      .subscribe({
          next: (response: TramosCliente[] | Object) => {
            // this.drawChart1(response as any);
            // this.drawChart2(response as any);
            // this.drawChart3(response as any);
            console.log(response);
            this.addTableInfo(response as any);
            window.document.getElementById('graficos')?.classList.remove('d-none');
          },
          error: (e) => console.error(e)
        }
      )
  }

  reset() {
    window.location.reload();
  }

}
