import { Component } from '@angular/core';
import { Router, ActivatedRoute, CanActivate } from '@angular/router';
import { AuthGuard } from 'app/entities/login/guards/index';


@Component({
  selector: 'nav-buttons',
  template: `
    <tabset type="pills" [hidden]="canActivate()">
        <button type="button" routerLink="/">Home</button>
        <button type="button" routerLink="/catalog">Bands Catalog</button>
        <button type="button" routerLink="/newBand">New Band</button>
    </tabset> 
  `
})
export class NavButtons implements CanActivate {
    constructor(
     private route: ActivatedRoute,
     private router: Router
    ) {}
    canActivate() {        
      if (localStorage.getItem('currentUser') == null) {
            return true;
        } else return false;
  }
}
