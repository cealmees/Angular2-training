import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Band } from './Band';
import { BandsService } from './bands.service';

@Component({
//   moduleId: module.id,
  selector: 'my-bands',
  template: `
        <ul class="items">
            <li *ngFor="let b of bands"
                [class.selected] = "b === selectedBand"
                (click)="onSelect(b)">
                <span class="badge">{{b.id}}</span> {{b.name}}
            </li>
        </ul>
  `
})

export class BandsComponent implements OnInit {
    bands: Band[];
    selectedBand: Band;

    constructor(
        private router: Router,
        private bandsService: BandsService
    ) {}
    getBands(): void {
        this.bandsService.getBands().then(bands => this.bands = bands);
    }
    ngOnInit(): void {
        this.getBands();
    }
    onSelect(band: Band): void { this.selectedBand = band; this.router.navigate(['/band/' + this.selectedBand.id]);  }

}
