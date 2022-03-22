import { Component, OnInit, ViewChild } from '@angular/core';
import { GRAPH2 } from './echartsAggregate';
declare const echarts: any;

@Component({
  selector: 'e-charts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.less']
})
export class EChartsComponent implements OnInit {

  @ViewChild('echartsTest1', { static: true }) echartsTest1: any;
  @ViewChild('echartsTest2', { static: true }) echartsTest2: any;
  @ViewChild('echartsTest3', { static: true }) echartsTest3: any;

  GRAPH1:any = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [200,300,400,500,30,600,600],
        type: 'line',
        smooth: true
    }]
  };

  GRAPH3:any =  {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  ngOnInit(): void {
    echarts.init(this.echartsTest2.nativeElement).setOption(GRAPH2);
    echarts.init(this.echartsTest3.nativeElement).setOption(this.GRAPH3);
  }

  chartsClick() {
    console.log('仪表盘点击事件----------');
  }

  buttonClick() {
    console.log('按钮点击事件-----------');
    console.log(this.echartsTest1.nativeElement);
    echarts.init(this.echartsTest1.nativeElement).setOption(this.GRAPH1);
  }
}
