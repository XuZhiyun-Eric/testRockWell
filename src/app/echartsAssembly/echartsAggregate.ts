// 柱状图
export class Histogram {
  histogramGraph(tooltip: any, grid: any, xAxis: any, yAxis: any, series: any) { // 柱状图数据
    const GRAPH = {
      tooltip: tooltip,
      grid: grid,
      xAxis: xAxis,
      yAxis: yAxis,
      series: series
    };

    return GRAPH;
  }
}

// 饼图
export class Pie {
  pieGraph(tooltip: any, legend: any, series: any) {
    const GRAPH = {
      tooltip: tooltip,
      legend: legend,
      series: series
    };

    return GRAPH;
  }
}

// 仪表盘
export class Dashboard {
  dashboardGraph(series: any) {
    const GRAPH = {
      series: series
    }

    return GRAPH;
  }
}