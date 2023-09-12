import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit{
  constructor(private _auth: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const paramValue = this.route.snapshot.params['token'];
    const user = localStorage.getItem('user')!;
    const Puser = JSON.parse(user);
    console.log(Puser);
    this._auth.confirmEmail(paramValue, Puser.email, Puser.password)
        .subscribe((item: any) => {
          localStorage.setItem('verify', 'true')
          this.router.navigate(['register'])
        })
  }

}
