import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { VotingComponent } from './components/voting/voting.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ResultsComponent } from './components/results/results.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePollComponent,
    VotingComponent,
    MainHeaderComponent,
    ResultsComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
