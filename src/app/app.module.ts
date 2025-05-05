import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeadsComponent } from './components/leads/leads.component';
import { HeaderComponent } from './constant/header/header.component';
import { SidebarComponent } from './constant/sidebar/sidebar.component';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeadsComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardChartComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
