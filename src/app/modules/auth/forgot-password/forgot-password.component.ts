import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit{
    form: FormGroup;
    constructor(private fb: FormBuilder, private _auth: AuthService) {
    }
    isSend: boolean = false;
    resetPass() {
        this._auth.resetPass(this.form.get('email')!.value)
            .subscribe((item: any) => {
                console.log(item)
                this.isSend = true;
            })
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        })
    }

    activeFirst() {
        this.isSend = false;
    }
}
