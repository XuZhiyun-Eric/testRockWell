import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { histogramData, pieData, dashboardData } from './mock-data'; // 引入mock-data数据

import { Histogram, Pie, Dashboard } from './echartsAggregate'; //引入echarts组件class
declare const echarts: any;

@Component({
  selector: 'e-charts-assembly',
  templateUrl: './echartsAssembly.component.html',
  styleUrls: ['./echartsAssembly.component.less']
})
export class EChartsAssemblyComponent implements OnInit {
  @ViewChild('histogramView', { static: true }) histogramView: any;
  @ViewChild('pieView', { static: true }) pieView: any;
  @ViewChild('dashboardView', { static: true }) dashboardView: any;
  
  histogram: any;
  pie: any;
  dashboard: any;

  constructor (
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.histogram = new Histogram(); // new柱状图
    this.pie = new Pie(); // new饼图
    this.dashboard = new Dashboard(); // new仪表盘

    this.histogramConfig(); // 柱状图配置方法
    this.pieConfig();
    this.dashboardConfig();
  }

  histogramConfig() { // 柱状图配置方法，配置柱状图各项参数，后期设计从接口获取数据，数据形态需要商讨
    const { tooltip, grid, xAxis, yAxis, series } = histogramData;
    echarts.init(this.histogramView.nativeElement).setOption(this.histogram.histogramGraph(tooltip, grid, xAxis, yAxis, series)); // 最后的柱状图结果添加显示区内
  }

  pieConfig() { // 饼图配置方法
    const { tooltip, legend, series } = pieData;
    echarts.init(this.pieView.nativeElement).setOption(this.pie.pieGraph(tooltip, legend, series));
  }

  dashboardConfig() { // 仪表盘配置方法
    const { series } = dashboardData;
    echarts.init(this.dashboardView.nativeElement).setOption(this.dashboard.dashboardGraph(series));
  }
}
