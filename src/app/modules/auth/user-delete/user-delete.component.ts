import { Component } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent {
  val: string = '';
  constructor(private _auth: AuthService) {
  }


  delete() {
    this._auth.deleteUser(this.val)
        .subscribe((item: any) => {
          prompt('deleted')
        })
  }
}
