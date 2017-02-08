import { Component } from '@angular/core';

import { Band } from './band';
import { BandEditComponent } from './band-edit.component';

@Component({
    inputs: ['band'],
    selector: 'my-band-detail',
    template: `
        <div *ngIf="band">
            <img src="{{band.image}}" style="width:304px;height:228px;"/>
            <h2>{{band.name}}</h2>
            <div><label>Genre: </label>{{band.genre}}</div>
            <div><label>Members: </label> {{band.members}}</div>
            <div><label>Albums: </label> {{band.albums}}</div>
            <button type="button" (click)="onSelect(band)" >Edit</button>
            <my-band-edit [band]="currentBand"></my-band-edit>
        </div>
    `
})

export class BandDetailComponent {
    public band: Band;
    public currentBand: Band;
    onSelect(band: Band): void { this.currentBand = band; }
}
