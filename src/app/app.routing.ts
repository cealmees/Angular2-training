import { Routes, RouterModule } from '@angular/router';
import { BandDetailComponent } from 'app/entities/band-entities/show-band/band-detail.component';
import { BandsComponent } from 'app/entities/band-entities/show-bands/bands.component';
import { NewBandComponent } from './newBand.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: 'band/:id', component: BandDetailComponent },
    { path: 'catalog', component: BandsComponent },
    { path: 'newBand', component: NewBandComponent }
];

export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);
