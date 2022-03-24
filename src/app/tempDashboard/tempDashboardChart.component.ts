import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { TempDashboard } from '../utils/echartsAggregate';
declare const echarts: any;

@Component({
  selector: 'e-temp-dashboard',
  templateUrl: './tempDashboardChart.component.html',
  styleUrls: ['./tempDashboardChart.component.less']
})
export class TempDashboardChartComponent implements OnInit {
  @Input() tempDashboardData: any;
  @ViewChild('tempDashboardView', { static: true }) tempDashboardView: any;

  tempDashboard: any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.tempDashboard = new TempDashboard();

    this.tempDashboardConfig();
  }

  tempDashboardConfig() {
    const { series } = this.tempDashboardData;

    echarts.init(this.tempDashboardView.nativeElement).setOption(this.tempDashboard.tempDashboardGraph(series));
  }

}
