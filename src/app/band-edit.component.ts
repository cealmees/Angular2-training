import { Component } from '@angular/core';
import { BandsService } from './bands.service';


import { Band } from './band';

@Component({
    inputs: ['band'],
    selector: 'my-band-edit',
    template: `
        <div *ngIf="band">
            <div>
                <h3>Edit</h3>
                <label>Image: </label>
                <div><input [(ngModel)]="band.image" placeholder="image"></div>
                <label>Name: </label>
                <div><input [(ngModel)]="band.name" placeholder="name"></div>
                <label>Genre: </label>
                <div><input [(ngModel)]="band.genre" placeholder="genre"></div>
                <label>Members: </label>
                <div><input [(ngModel)]="band.members" placeholder="members"></div>
                <label>Albums: </label>
                <div><input [(ngModel)]="band.albums" placeholder="albums"></div>
            </div>
            <button type="button" (click)="onSelect(band)" >Save</button>
        </div>
    `
})

// export class BandEditComponent {
//     public band: Band;
//     public editedBandProperties: Band;
//     onSelect(band: Band): void { this.editedBandProperties = band; }

// }
export class BandEditComponent {
  public band: Band;
  public selectedBand: Band;

  constructor(private service: BandsService) {}
  onSelect(b: Band): void { this.selectedBand = b; this.editBand(); }
  editBand(): void {
      console.log(this.selectedBand);
    this.service.editBand(this.selectedBand);
  }
}
