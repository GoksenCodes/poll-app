import { Component, OnInit, Input } from '@angular/core';
import { IOptionObject } from 'src/app/models/option-object.model';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  barChartOptions: ChartOptions;
  barChartLabels: string[];
  barChartType: ChartType = 'bar'
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [];

  @Input() results: IOptionObject[] = [];

  constructor(
  ) {
    this.barChartOptions = { responsive: true }
  }

  ngOnInit(): void {
    console.log("results", this.results)
    this.barChartData = this.results.map(r => ({ data: [r.count], label: r.value }))
  }
}
