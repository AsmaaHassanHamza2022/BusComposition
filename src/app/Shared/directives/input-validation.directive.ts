import { Directive, ElementRef, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputValidation]',
  standalone:true,
})
export class InputValidationDirective {
  @Input('appInputValidation') validationType!: string;

  constructor(private el: ElementRef, private control: NgControl) {}

  validate() {
    const value = this.control.value;
    switch (this.validationType) {
      case 'required':
        if (!value) {
          this.el.nativeElement.setCustomValidity('This field is required.');
        }
        break;
      case 'customRegex':
        const regexPattern = new RegExp(this.el.nativeElement.getAttribute('regex-pattern'));
        if (value && !regexPattern.test(value)) {
          this.el.nativeElement.setCustomValidity('Invalid input.');
        }
        break;
      default:
        this.el.nativeElement.setCustomValidity('');
        break;
    }
  }
}
