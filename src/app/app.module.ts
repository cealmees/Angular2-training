import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BandDetailComponent } from 'app/entities/band-entities/show-band/band-detail.component';
import { BandEditComponent } from 'app/entities/band-entities/edit-band/band-edit.component';
import { MaterialModule } from '@angular/material';
import { BandsComponent } from 'app/entities/band-entities/show-bands/bands.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing, appRoutingProviders } from './app.routing';
import { NavButtons } from 'app/entities/Navigation/navButtons.component';
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
