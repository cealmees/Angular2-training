import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BandsComponent } from './bands.component';
// //TBA
// import { DashboardComponent } from './dashboard.component';
// import { HeroesComponent } from './heroes.component';
import { BandDetailComponent } from './band-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '',  component: AppComponent },
    { path: 'detail/:id', component: BandDetailComponent },
    { path: 'heroes',     component: BandsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
