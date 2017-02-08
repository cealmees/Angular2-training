import { Component, OnInit } from '@angular/core';

import { Band } from './band';
import { BandDetailComponent } from './band-detail.component';
import { BandsService } from './bands.service';

@Component({
  providers: [BandsService],
  selector: 'app-root',
  template: `
    <h1>Music</h1>
        <ul class="items">
            <li *ngFor="let b of bands"
                [class.selected] = "b === selectedBand"
                (click)="onSelect(b)">
                <span class="badge">{{b.id}}</span> {{b.name}}
            </li>
        </ul>
        <my-band-detail [band]="selectedBand"></my-band-detail>
  `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public bands: Band[];
  public selectedBand: Band;

  constructor(private service: BandsService) {}

  getBands(): void {
    this.service.getBands().then(b => this.bands = b);
  }
  ngOnInit(): void {
    this.getBands();
  }

  onSelect(b: Band): void { this.selectedBand = b; }
}
