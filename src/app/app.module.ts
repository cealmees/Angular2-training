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

import { fakeBackendProvider } from 'app/entities/login/helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AlertComponent } from 'app/entities/login/directives/index';
import { AuthGuard } from 'app/entities/login/guards/index';
import { AlertService, AuthenticationService, UserService } from 'app/entities/login/services/index';
import { HomeComponent } from 'app/entities/login/home/index';
import { LoginComponent } from 'app/entities/login/login/index';
import { RegisterComponent } from 'app/entities/login/register/index';


@NgModule({
  declarations: [
    AppComponent,
    BandDetailComponent,
    NavButtons,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
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
  providers: [
    appRoutingProviders,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
        // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
