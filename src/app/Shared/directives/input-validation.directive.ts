import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  NgControl,
  Validator,
} from '@angular/forms';
import {
  ValidationMessagesKeys,
  validationError,
} from '../utilities/validationMessages.config';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[appInputValidation]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InputValidationDirective,
      multi: true,
    },
  ],
})
export class InputValidationDirective {
  control: AbstractControl = new FormControl();
  // @Input('appInputValidation') validationType!: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private translateService: TranslateService
  ) {}

  validate(control: AbstractControl) {
    this.control = control;
    const container = document.createElement('div');
      this.errorsKeys.forEach((error) => {
       const child = document.createElement('small');
        child.textContent = this.errorMessage(error);
        container.appendChild(child);
        this.renderer.appendChild(this.el.nativeElement, container);
      });
    
  }

  public get errorsKeys(): Array<any> {
    if (this.control?.errors)
      return Object.keys(this.control?.errors).map((key) => {
        return {
          error: key,
          value: this.control?.errors ? this.control?.errors[key] : null,
        };
      });
    return [];
  }

  public errorMessage(errorKey: { error: string; value: any }) {
    let validationErrorMessage: { ar: string; en: string };
    if (errorKey && errorKey.error) {
      switch (errorKey.error) {
        case validationError.minlength:
          validationErrorMessage = ValidationMessagesKeys[errorKey.error](
            errorKey.value.requiredLength
          );
          break;
        case validationError.maxlength:
          validationErrorMessage = ValidationMessagesKeys[errorKey.error](
            errorKey.value.requiredLength
          );
          break;

        case validationError.min:
          validationErrorMessage = ValidationMessagesKeys[errorKey.error](
            errorKey.value.min
          );
          break;

        case validationError.max:
          validationErrorMessage = ValidationMessagesKeys[errorKey.error](
            errorKey.value.max
          );
          break;

        default:
          validationErrorMessage = (ValidationMessagesKeys as any)[
            errorKey.error
          ];
          break;
      }
      return this.translateService.currentLang == 'en'
        ? validationErrorMessage.en
        : validationErrorMessage.ar;
    }
    return '';
  }
}
