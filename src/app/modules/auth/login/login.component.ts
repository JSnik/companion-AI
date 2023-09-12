import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  destroy$: Subject<boolean> = new Subject<boolean>();
  form: FormGroup;
  isPasswordVisible: boolean = false;
  type: string = 'password';


  constructor( private _auth: AuthService,private connection: SocialAuthService, private fb: FormBuilder, private router: Router) {
  }


  ngOnInit() {
    this.initializeForm();
  }


  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  login() {
    const emailValue = this.form.get('email')!.value;
    const passwordValue = this.form.get('password')!.value;
    this._auth.login(emailValue, passwordValue)
        .pipe(takeUntil(this.destroy$))
        .subscribe((item: any) => {
          sessionStorage.setItem('authToken', item.token)
          if (!item['error']) {
            this.router.navigate(['/home']);
          }
        })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  showHide() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.isPasswordVisible ? this.type = 'text' : this.type = 'password';
  }
}
