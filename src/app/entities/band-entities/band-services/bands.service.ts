import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Band } from 'app/entities/band-entities/band';
import { BANDS } from 'app/bandsDB';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class BandsService {

    private bandsURL = 'https://raw.githubusercontent.com/cealmees/Angular2-training/master/src/app/BANDS.json';

    constructor (private http: Http) {}

    private extractData(res: Response) {
       const body = res.json();
       console.log(body);
       return body;
    }
     private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    getBands(): Observable<Band[]> {
        return this.http.get(this.bandsURL)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    getBand(id: number): Observable<Band> {
        return this.getBands().map(bands => bands.find(band => band.id === id));
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
    newBand(band: Band) {
        BANDS.push(band);
        console.log(BANDS);
    }
    private clone(object: any) {
        return JSON.parse(JSON.stringify(object));
    }
}
