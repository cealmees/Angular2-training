import { Injectable } from '@angular/core';

import { Band } from './band';
import { BANDS } from './bandsDB';

@Injectable()
export class BandsService {
    getBands(): Promise<Band[]> {
        return Promise.resolve(BANDS);
    }
    getLaggedBands(): Promise<Band[]> {
        return new Promise<Band[]>(resolve => 
            setTimeout(() => resolve(BANDS), 300)
        );
    }
    editBand(band: Band) {
        const lastBandRecord = BANDS.find(b => b.id === band.id);
        if (lastBandRecord) {
            console.log(lastBandRecord);
            Object.assign(lastBandRecord, band);
            console.log(this.clone(BANDS));
            console.log(BANDS);
        };
    }
    private clone(object: any) {
        return JSON.parse(JSON.stringify(object));
    }
}
