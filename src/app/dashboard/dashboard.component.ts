import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  private map;
  multi = [
    {
      name: 'Roman',
      series: [
        {
          name: 'JAN',
          value: 5
        },
        {
          name: 'FEV',
          value: 34
        },
        {
          name: 'MARS',
          value: 12
        }
      ]
    },

    {
      name: 'Bande dessinée',
      series: [
        {
          name: 'JAN',
          value: 16
        },
        {
          name: 'FEV',
          value: 24
        },
        {
          name: 'MARS',
          value: 35
        }
      ]
    },
    {
      name: 'Policier',
      series: [
        {
          name: 'JAN',
          value: 6
        },
        {
          name: 'FEV',
          value: 18
        },
        {
          name: 'MARS',
          value: 11
        }
      ]
    },
    {
      name: 'Journal',
      series: [
        {
          name: 'JAN',
          value: 2
        },
        {
          name: 'FEV',
          value: 7
        },
        {
          name: 'MARS',
          value: 3
        }
      ]
    }
  ];
  view: any[] = [700, 300];


  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mois';
  yAxisLabel = 'Nombres';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { this: this.multi });
  }
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [11.644394, 43.120824],
      zoom: 9
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    L.marker([11.56, 43.10]).addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
