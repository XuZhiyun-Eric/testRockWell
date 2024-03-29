import { Component, OnInit, ViewChild } from '@angular/core';
import { GRAPH2 } from './echartsAggregate';
import { HttpClient } from "@angular/common/http"
declare const echarts: any;

@Component({
  selector: 'e-charts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.less']
})
export class EChartsComponent implements OnInit {

  lineData: any = [200,300,400,500,600,700,800];
  
  @ViewChild('echartsTest1', { static: true }) echartsTest1: any;
  @ViewChild('echartsTest2', { static: true }) echartsTest2: any;
  @ViewChild('echartsTest3', { static: true }) echartsTest3: any;
  @ViewChild('echartsTest4', { static: true }) echartsTest4: any;


  GRAPH1:any = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: this.lineData,
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

  GRAPH4:any =  {
    series: [
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        splitNumber: 10,
        itemStyle: {
          color: '#FFAB91'
        },
        progress: {
          show: true,
          width: 30
        },
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 30
          }
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: '#999'
          }
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: '#999'
          }
        },
        axisLabel: {
          distance: -20,
          color: '#999',
          fontSize: 20
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 60,
          fontWeight: 'bolder',
          formatter: '{value} °C',
          color: 'auto'
        },
        data: [
          {
            value: 52,
            name: '老八'
          }
        ]
      },
      // {
      //   type: 'gauge',
      //   center: ['50%', '60%'],
      //   startAngle: 200,
      //   endAngle: -20,
      //   min: 0,
      //   max: 60,
      //   itemStyle: {
      //     color: '#FD7347'
      //   },
      //   progress: {
      //     show: true,
      //     width: 8
      //   },
      //   pointer: {
      //     show: false
      //   },
      //   axisLine: {
      //     show: false
      //   },
      //   axisTick: {
      //     show: false
      //   },
      //   splitLine: {
      //     show: false
      //   },
      //   axisLabel: {
      //     show: false
      //   },
      //   detail: {
      //     show: false
      //   },
      //   data: [
      //     {
      //       value: 20
      //     }
      //   ]
      // }
    ]
  }

  testHttpData: any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    echarts.init(this.echartsTest2.nativeElement).setOption(GRAPH2);
    echarts.init(this.echartsTest3.nativeElement).setOption(this.GRAPH3);
    echarts.init(this.echartsTest4.nativeElement).setOption(this.GRAPH4);

    this.http.get("https://www.baidu.com/").subscribe(res=>{ this.testHttpData = res })
    console.log(this.testHttpData);
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
