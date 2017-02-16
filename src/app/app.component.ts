import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Band } from 'app/entities/band-entities/band';
import { BandsService } from 'app/entities/band-entities/band-services/bands.service';
import { HomeComponent } from 'app/entities/login/home/index';

@Component({
  providers: [BandsService],
  selector: 'app-root',
  template: `
  <nav-buttons></nav-buttons>
    <router-outlet></router-outlet>
  `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music bands';
}
