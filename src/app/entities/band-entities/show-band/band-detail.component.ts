import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Band } from 'app/entities/band-entities/band';
import { BandEditComponent } from 'app/entities/band-entities/edit-band/band-edit.component';
import { BandsService } from 'app/entities/band-entities/band-services/bands.service';

@Component({
    inputs: ['band'],
    selector: 'my-band-detail',
    templateUrl: 'band-detail.component.html'
})

export class BandDetailComponent {
    public band: Band;
    public currentBand: Band;

    constructor(
        private bandsService: BandsService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.route.params.switchMap((params: Band) => this.bandsService.getBand(+params['id'])).subscribe(band => this.band = band);
    }
    goBack(): void {
    this.location.back();
    }
    onSelect(band: Band): void { this.currentBand = band; }
}
