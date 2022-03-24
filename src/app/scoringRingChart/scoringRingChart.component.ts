import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { ScoringRing } from '../utils/echartsAggregate';
declare const echarts: any;

@Component({
  selector: 'e-scoring-ring',
  templateUrl: './scoringRingChart.component.html',
  styleUrls: ['./scoringRingChart.component.less']
})
export class ScoringRingChartComponent implements OnInit {
  @Input() scoringRingData: any;
  @ViewChild('scoringRingView', { static: true }) scoringRingView: any;

  scoringRing: any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.scoringRing = new ScoringRing();

    this.scoringRingConfig();
  }

  scoringRingConfig() {
    const { series } = this.scoringRingData;

    echarts.init(this.scoringRingView.nativeElement).setOption(this.scoringRing.scoringRingGraph(series));
  }

}
