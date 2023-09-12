import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {containsUppercase} from "../auth.regex";
import {AuthService} from "../../../core/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{
  form: FormGroup;
  isPasswordVisible: boolean = false;
  isPasswordVisibleSecond: boolean = false;
  type: string = 'password';
  typeSecond: string = 'password';
  constructor(private fb: FormBuilder, private _auth: AuthService, private route: ActivatedRoute, private router: Router) {
  }
  showHide(number: any) {
    if (number === 1) {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.isPasswordVisible ? this.type = 'text' : this.type = 'password';
    } else {
      this.isPasswordVisibleSecond = !this.isPasswordVisibleSecond;
      this.isPasswordVisibleSecond ? this.typeSecond = 'text' : this.typeSecond = 'password';
    }
  }
  ngOnInit() {
    this.form = this.fb.group({
      password: ['',  [containsUppercase(), Validators.minLength(8), Validators.maxLength(64)]],
      confirmPassword: ['', [containsUppercase(), Validators.minLength(8), Validators.maxLength(64)]]
    })
  }

  resetPassword() {
    const paramValue = this.route.snapshot.params['token']
    this._auth.resetPassword(paramValue, this.form.get('password')!.value, this.form.get('confirmPassword')!.value)
        .subscribe((item: any) => {
          console.log(item);
          sessionStorage.setItem('authToken', item.token);
          this.router.navigate(['/login'])
        })
  }
}
