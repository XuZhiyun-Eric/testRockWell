import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { Stack } from '../utils/echartsAggregate';
declare const echarts: any;

@Component({
  selector: 'e-stack',
  templateUrl: './stackChart.component.html',
  styleUrls: ['./stackChart.component.less']
})
export class StackChartComponent implements OnInit {
  @Input() stackData: any;
  @ViewChild('stackView', { static: true }) stackView: any;

  stack: any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.stack = new Stack();

    this.stackConfig();
  }

  stackConfig() {
    const { tooltip, legend, grid, xAxis, yAxis, series } = this.stackData;

    echarts.init(this.stackView.nativeElement).setOption(this.stack.stackGraph(tooltip, legend, grid, xAxis, yAxis, series));
  }

}
