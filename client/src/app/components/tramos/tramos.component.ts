import {Component, HostBinding, Inject, NgZone, PLATFORM_ID} from '@angular/core';
import {GraphicsService} from "../../services/graphics.service";
import {Fecha, Tramos} from "../../models/Graphics";

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

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

  constructor(private graphicsService: GraphicsService, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  drawChart1(data: Tramos[]) {

    let root = am5.Root.new("chartdiv1");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );

    let xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    })

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "Linea",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
      location: 1
    })

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));

    function makeSeries(name: any, fieldName: any) {
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "Linea"
      }));

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0
      });

      series.data.setAll(data);
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true
          })
        });
      });

      legend.data.push(series);
    }

    makeSeries("Consumo Comercial", "consumo_comercial");
    makeSeries("Consumo Industrial", "consumo_industrial");
    makeSeries("Consumo Residencial", "consumo_residencial");

    chart.appear(1000, 100);
  }

  drawChart2(data: Tramos[]) {

    let root = am5.Root.new("chartdiv2");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );

    let xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    })

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "Linea",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
      location: 1
    })

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));

    function makeSeries(name: any, fieldName: any) {
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "Linea"
      }));

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0
      });

      series.data.setAll(data);
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true
          })
        });
      });

      legend.data.push(series);
    }

    makeSeries("Costo Comercial", "costo_comercial");
    makeSeries("Costo Industrial", "costo_industrial");
    makeSeries("Costo Residencial", "costo_residencial");

    chart.appear(1000, 100);
  }

  drawChart3(data: Tramos[]) {
    let root = am5.Root.new("chartdiv3");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );

    let xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    })

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "Linea",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
      location: 1
    })

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));

    function makeSeries(name: any, fieldName: any) {
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "Linea"
      }));

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0
      });

      series.data.setAll(data);
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true
          })
        });
      });

      legend.data.push(series);
    }

    makeSeries("Pérdida Comercial", "perdidas_comercial");
    makeSeries("Pérdida Industrial", "perdidas_industrial");
    makeSeries("Pérdida Residencial", "perdidas_residencial");

    chart.appear(1000, 100);
  }

  getTramos() {
    this.graphicsService.getTramos(this.fechas)
      .subscribe({
          next: (response: Tramos[] | Object) => {
            this.drawChart1(response as any);
            this.drawChart2(response as any);
            this.drawChart3(response as any);
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
