import { Component } from '@angular/core';
import { BandsService } from 'app/entities/band-entities/band-services/bands.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Band } from 'app/entities/band-entities/band';

@Component({
    selector: 'new-band',
    template: `
        <div>
            <label>Id: </label>
            <div><input #id placeholder="id"></div>
            <label>Image: </label>
            <div><input #image placeholder="image"></div>
            <label>Name: </label>
            <div><input #name (blur)="addHero(newHero.value)" name.value='' (keyup)="0" placeholder="name"></div>
            <label>Genre: </label>
            <div><input #genre placeholder="genre"></div>
            <label>Members: </label>
            <div><input #members placeholder="members"></div>
            <label>Albums: </label>
            <div><input #albums placeholder="albums"></div>
                        <p>tu nombre es: {{name.value}}</p>

            <button (click)="saveBand(name.value)">Save</button>
        </div>      
        `
})

export class NewBandComponent {
  band: Band;
  public selectedBand: Band;

  constructor(        private router: Router,
private service: BandsService,
  private _fb: FormBuilder) {
  }
  saveBand(id: string, image: string, name: string, genre: string, albums: string): void {
      var newBand: Band;
      newBand.name = name;

      console.log(newBand);
    this.service.newBand(newBand);
  }
}