import { Router } from '@angular/router';
import { Component, AfterViewInit, HostListener, Directive, ElementRef } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map;
  data = [
    { id: 1456, name: 'Obock', number: 23, lat: 11.96, long: 43.29 },
    { id: 1432, name: 'Khor Angar', number: 13, lat: 12.38, long: 43.35 }
  ];
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.voir();
  // }
  constructor(private el: ElementRef, private route: Router) { }

  async ngAfterViewInit() {
    await this.initMap();
  }
  listener(): void {
    this.el.nativeElement.querySelector('.btn').addEventListener('click', (e) => {
      // console.log(e.target.id);
      this.voir();
  });
  }
  removeListener(): void {
    this.el.nativeElement.querySelector('.btn').removeEventListener('click', () => {
      console.log('item-clicked');
    });
  }
  voir(): void {
    this.route.navigateByUrl('/dashboard');
  }
  private initMap(): void {
    const cdcIcon = L.icon({
      iconUrl: '../../assets/img/location.png',
      iconSize: [15, 20], // size of the icon
      iconAnchor: [10, 20], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -16] // point from which the popup should open relative to the iconAnchor
    });
    this.map = L.map('map', {
      center: [11.644394, 43.120824],
      zoom: 8
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.data.forEach(cdc => {
      const c = L.marker([cdc.lat, cdc.long],{ icon: cdcIcon }).addTo(this.map)
        .bindPopup(
          // tslint:disable-next-line:max-line-length
          '<div class="card"><ul class="list-group"><li class="list-group-item">Nom: ' + cdc.name + '</li><li class="list-group-item">Nombre d\'abonnées: 54</li><li class="list-group-item">Directeur: Mr Mohamed Mohamed </li><li class="list-group-item"> Numero: X789456789 </li></ul></div><button id="' + cdc.id + '" class="btn-group btn btn-outline-success">Voir le CDC</button>'
      );
    });
    this.map.on('popupopen', (e) => { this.listener(); });
    this.map.on('popupclose', (e) => { this.removeListener(); });

  }
}
