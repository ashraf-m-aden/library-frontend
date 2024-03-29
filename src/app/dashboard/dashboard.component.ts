import { BooksService } from 'src/app/services/books.service';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, ElementRef, AfterViewInit, Directive, HostListener } from '@angular/core';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
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

  clientNumber = 0;
  bookNumber = 0;
  borrowBookNumber = 0;
  userName;
  isAuth;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  constructor(private elementRef: ElementRef, private router: Router, private auth: AuthService,
    private client: ClientsService, private book: BooksService) {
    Object.assign(this, { this: this.multi });
    this.userName = localStorage.getItem('username');
    this.book.getBooks().subscribe(async (data: any) => {
      this.bookNumber = data.length;
      let borrowBook = await data.filter(book => {
        return book.disponible === 0;
      });
      this.borrowBookNumber = borrowBook.length;
    });
    this.client.getClients().subscribe(async (data: any) => {
      this.clientNumber = data.length;
    });
    this.auth.isAuth.subscribe(data => {
      this.isAuth = data;
    })
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
