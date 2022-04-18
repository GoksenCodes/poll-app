import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IOptionObject } from 'src/app/models/option-object.model';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  barChartOptions: ChartOptions = {
    responsive: true
  }
  barChartLabels: string[];
  barChartType: ChartType = 'bar'
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [];

  @Input() results: IOptionObject[] = [];

  constructor(
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    //update bar-chart values when input changes
    this.barChartLabels = changes.results.currentValue.map(r => r.value)
    const data = changes.results.currentValue.map(r => r.count)
    this.barChartData = [{ data: data, label: 'Voting Results' }]
  }
}
