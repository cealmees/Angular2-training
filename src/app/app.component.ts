import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Band } from './band';
import { BandsService } from './bands.service';

@Component({
  providers: [BandsService],
  selector: 'app-root',
  template: `
  <nav-buttons></nav-buttons>
    <h1>Music</h1>
    <router-outlet></router-outlet>
  `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music bands';
}
