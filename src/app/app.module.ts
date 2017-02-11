import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BandDetailComponent } from './band-detail.component';
import { BandEditComponent } from './band-edit.component';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BandsComponent } from './bands.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing, appRoutingProviders } from './app.routing';
import { NavButtons } from './navButtons.component';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NewBandComponent } from './newBand.component';




@NgModule({
  declarations: [
    AppComponent,
    BandDetailComponent,
    NavButtons,
    NewBandComponent,
    BandEditComponent,
    BandsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    TabsModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    MaterialModule.forRoot(),
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
