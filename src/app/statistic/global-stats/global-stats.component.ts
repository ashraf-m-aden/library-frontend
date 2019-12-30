import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-global-stats',
  templateUrl: './global-stats.component.html',
  styleUrls: ['./global-stats.component.scss']
})
export class GlobalStatsComponent {
  month;
  year;
  week;
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels = [this.month];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    { data: [65], label: 'Roman' },
    { data: [28], label: 'Conte' },
    { data: [65], label: 'Biographie' },
    { data: [28], label: 'Journal' },
    { data: [65], label: 'Magasine' },
    { data: [28], label: 'Bande dessinée' }
  ];
  constructor() {
    //
  }

  onChange(value) {
    this.barChartLabels = [value];
    this.month = value;
  }
}
