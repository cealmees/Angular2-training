import { Component } from '@angular/core';

import { Band } from './band';

@Component({
    inputs: ['band'],
    selector: 'my-band-detail',
    template: `
        <div *ngIf="band">
            <img src="{{band.image}}" style="width:304px;height:228px;"/>
            <h2>{{band.name}}</h2>
            <div><label>Genre: </label>{{band.genre}}</div>
            <div><label>Members: </label>{{band.members}}</div>
            <div><label>Albums: </label>{{band.albums}}</div>
            <div>
                <h3>Edit</h3>
                <label>Name: </label>
                <div><input [(ngModel)]="band.name" placeholder="name"></div>
            </div>
        </div>
    `
})

export class BandDetailComponent {
    public band: Band;
}
