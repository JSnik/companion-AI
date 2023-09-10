import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
        <div class="loader">
          <div class="shield"></div>
          <div class="cooking-moment">
            <!-- <img style="position: absolute;width:100px;height:95px;filter: brightness(0) invert(1);" src="/assets/img/loader-logo.png" alt=""> -->
          </div>
        </div>
  `,
})

export class loaderComponent {

}