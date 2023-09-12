import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart,NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos'
import {SocialAuthService} from "@abacritt/angularx-social-login";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
}) 
export class AppComponent implements OnInit {
  public isGame: boolean = false;
  public loader: boolean = true;
  public user: any;
  public loggedIn: any;
  constructor(private authService: SocialAuthService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.checkRoute();
    this.loaderNone();
    AOS.init();
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        console.log(11111)
        this.router.navigate(['/home']);
      });
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
