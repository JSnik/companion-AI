import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowHidePassword]'
})
export class ShowHidePasswordDirective {
  private inputType: string = 'password'; // Initial input type is 'password'
  private isPasswordVisible: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    // Toggle the password visibility
    this.isPasswordVisible = !this.isPasswordVisible;
    // Set the input type based on the visibility state
    this.inputType = this.isPasswordVisible ? 'text' : 'password';
    // Update the input element's type attribute
    this.renderer.setAttribute(this.el.nativeElement, 'type', this.inputType);
  }
}
