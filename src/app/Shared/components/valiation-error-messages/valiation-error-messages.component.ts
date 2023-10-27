import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';
import { ValidationMessagesKeys } from '../../utilities/validationMessages.config';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-valiation-error-messages',
  templateUrl: './valiation-error-messages.component.html',
  styleUrls: ['./valiation-error-messages.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class ValiationErrorMessagesComponent {
  errorMsgList: any = [];
  @Input() controlName!: AbstractControl | AbstractControlDirective;

  constructor(private translationService: TranslateService) {}

  // errorMessage:any = {
  //     'required'  : (params:any)  => `This field is required`,
  //     'maxlength' : (params:any)  => `Maximum ${params.requiredLength} characters are allowed`,
  //     'minlength' : (params:any)  => `Minimum ${params.requiredLength} characters are required`,
  //     'pattern'   : (params:any)  => `Invalid format`,
  //     'min'       : (params:any)  => `Minimum amount should be ₹ ${params.min}`,
  //     'max'       : (params:any)  => `Maximum amount should be ₹ ${params.min}`,
  //     'whitespace': (params:any)   => `White spaces are not allowed`
  // };

  get listErrors() {
    if (!this.controlName) return [];
    if (this.controlName.errors) {
      this.errorMsgList = [];
      Object.keys(this.controlName.errors).map((error: string) => {
        const messageObject:{en:string,ar:string} = ((ValidationMessagesKeys) as any )[error](
          this.controlName.errors ? this.controlName.errors[error] :''
        );
        const errorMessage = this.translationService.currentLang == 'ar' ? messageObject.ar : messageObject.en;
        this.controlName.touched || this.controlName.dirty
          ? this.errorMsgList.push(errorMessage)
          : '';
      });
      return this.errorMsgList;
    } else {
      return [];
    }
  }
}
