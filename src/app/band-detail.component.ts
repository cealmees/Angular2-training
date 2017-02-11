import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Band } from './band';
import { BandEditComponent } from './band-edit.component';
import { BandsService } from './bands.service';

@Component({
    inputs: ['band'],
    selector: 'my-band-detail',
    template: `
        <div *ngIf="band">
            <img src="{{band.image}}" style="width:25%;height:25%;"/>
            <h2>{{band.name}}</h2>
            <div><label>Genre: </label>{{band.genre}}</div>
            <div><label>Members: </label>                
            <li *ngFor="let m of band.members">{{m}}</li></div>
            <div><label>Albums: </label>
                <li *ngFor="let a of band.albums">{{a}}</li>
            </div>
            <button type="button" (click)="onSelect(band)" >Edit</button>
            <my-band-edit [band]="currentBand"></my-band-edit>
        </div>
    `
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
