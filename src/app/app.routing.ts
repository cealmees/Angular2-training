import { Routes, RouterModule } from '@angular/router';
import { BandDetailComponent } from 'app/entities/band-entities/show-band/band-detail.component';
import { BandsComponent } from 'app/entities/band-entities/show-bands/bands.component';
import { NewBandComponent } from './newBand.component';

import { HomeComponent } from 'app/entities/login/home/index';
import { LoginComponent } from 'app/entities/login/login/index';
import { RegisterComponent } from 'app/entities/login/register/index';
import { AuthGuard } from 'app/entities/login/guards/index';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: 'band/:id', component: BandDetailComponent , canActivate: [AuthGuard] },
    { path: 'catalog', component: BandsComponent, canActivate: [AuthGuard]  },
    { path: 'newBand', component: NewBandComponent, canActivate: [AuthGuard]  },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);
