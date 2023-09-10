import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
    isSend: boolean = false;
    resetPass() {
        this.isSend = true;
    }

    activeFirst() {
        this.isSend = false;
    }
}
