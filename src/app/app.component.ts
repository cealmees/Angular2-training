import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Band } from './band';
import { BandDetailComponent } from './band-detail.component';
import { BandsService } from './bands.service';
import { BandsComponent } from './bands.component';

@Component({
  providers: [BandsService],
  selector: 'app-root',
  template: `
    <h1>Music</h1>
        <my-bands></my-bands>
  `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music bands';
}
