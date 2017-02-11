import { Component } from '@angular/core';
import { BandsService } from 'app/entities/band-entities/band-services/bands.service';


import { Band } from 'app/entities/band-entities/band';

@Component({
    inputs: ['band'],
    selector: 'my-band-edit',
    templateUrl: 'band-edit.component.html'
})

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
