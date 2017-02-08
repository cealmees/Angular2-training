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
}
