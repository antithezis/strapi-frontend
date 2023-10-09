import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  data = [1, 2, 3, 4]
  showChart = false

  private chartService = inject(DashboardService)

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.chartService.getDataCharts().subscribe({
      next: (value) => {
        this.data = value.data[0].attributes.data.data
        this.showChart = true
      }
    })

  }


  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: this.data,
      },
    ],
  };
}
