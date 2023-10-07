import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DashboardService } from './dashboard.service';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  orderData: any = [];
  labels: any = [];
  datasets: any = [];
  isLoading: boolean = true;
  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: '订单' }
    ],
  };
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  ngAfterViewInit(): void {
    console.log(111)
    this.isLoading = true;
    this.dashboardSvc.fetch().subscribe((data:any) => {
      console.log(222)
      this.orderData = data;
      console.log(this.orderData, 'this.orderData')
      this.orderData.forEach((item: any) => {
        this.labels.push(item.orderName);
        this.datasets.push(item.orderProducts.length)
      });
      this.barChartData.labels = this.labels;
      this.barChartData.datasets[0].data = this.datasets;
      this.chart?.update();
      console.log(this.barChartData, 'this.barChartData')
    });
    console.log(333)
    this.isLoading = false;
    // this.orderData = [
    //   {
    //     "orderName": "e",
    //     "orderProducts": [
    //       {
    //         "price": "666",
    //         "productId": "234",
    //         "quantity": 1
    //       }
    //     ]
    //   },
    //   {
    //     "orderName": "e",
    //     "orderProducts": [
    //       {
    //         "price": "666",
    //         "productId": "12213",
    //         "quantity": 1
    //       }
    //     ]
    //   },
    //   {
    //     "orderName": "hagah",
    //     "orderProducts": [
    //       {
    //         "price": "666",
    //         "productId": "12213",
    //         "quantity": 1
    //       }
    //     ]
    //   }
    // ]
    // this.orderData.forEach((item: any) => {
    //   this.labels.push(item.orderName);
    //   this.datasets.push(item.orderProducts.length)
    // });
    // this.barChartData.labels = this.labels;
    // this.barChartData.datasets[0].data = this.datasets;
    // console.log(this.barChartData, 'this.barChartData')
    
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {}

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {}

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private dashboardSvc: DashboardService, private breakpointObserver: BreakpointObserver) {}
}
