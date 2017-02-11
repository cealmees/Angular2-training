import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nav-buttons',
  template: `
    <tabset type="pills">
        <button type="button" routerLink="/">Home</button>
        <button type="button" routerLink="/catalog">Bands Catalog</button>
        <button type="button" routerLink="/newBand">New Band</button>
    </tabset> 
  `
})
export class NavButtons {
    constructor(
     private route: ActivatedRoute,
     private router: Router
    ) {}
    // redirectTo() {
    //     this.router.navigate(['/catalog']);
    // }
  }
