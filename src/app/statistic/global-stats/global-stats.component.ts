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

  displayedColumns: string[] = ['Type', 'totalNumber', 'absentNumber'];
  ELEMENT_DATA = [
    { Type: 'Roman', totalNumber: 1.0079, absentNumber: 'H' },
    { Type: 'Journale', totalNumber: 4.0026, absentNumber: 'He' },
    { Type: 'Conte', totalNumber: 6.941, absentNumber: 'Li' },
    { Type: 'Bande dessinée', totalNumber: 9.0122, absentNumber: 'Be' },
    { Type: 'Biographie', totalNumber: 10.811, absentNumber: 'B' },
    { Type: 'Magasine', totalNumber: 12.0107, absentNumber: 'C' },

  ];
  dataSource = this.ELEMENT_DATA; // nescessaire

  constructor() {
    //
  }

  onChange(value) {
    this.barChartLabels = [value];
    this.month = value;
  }
}
