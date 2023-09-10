import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart,NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
}) 
export class AppComponent implements OnInit {
  public isGame: boolean = false;
  public loader: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.checkRoute();
    this.loaderNone();
    AOS.init();
  }

  checkRoute(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.loader = true;
          this.loaderNone();
          // @ts-ignore
          if (this.route._routerState.snapshot.url === '/games') {
            this.isGame = true;
          } else {
            this.isGame = false;
             // @ts-ignore
          }
      }
    });
  }

  loaderNone(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1200);
  }

}
