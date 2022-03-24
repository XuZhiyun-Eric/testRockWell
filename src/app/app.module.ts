import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EChartsComponent } from './echarts/echarts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EChartsAssemblyComponent } from './echartsAssembly/echartsAssembly.component';

import { ScoringRingChartComponent } from './scoringRingChart/scoringRingChart.component';
import { TempDashboardChartComponent } from './tempDashboard/tempDashboardChart.component';
import { StackChartComponent } from './stackChart/stackChart.component';
import { EchartDemoComponent } from './echartDemo/echartDemo.component';

import { MatButtonModule } from '@angular/material/button'; //组件库引入按钮组件

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EChartsComponent,
    EChartsAssemblyComponent,
    ScoringRingChartComponent,
    TempDashboardChartComponent,
    StackChartComponent,
    EchartDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
