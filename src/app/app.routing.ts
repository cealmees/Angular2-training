import { Routes, RouterModule } from '@angular/router';
import { BandDetailComponent } from './band-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: 'band/:id', component: BandDetailComponent }
];

export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);
