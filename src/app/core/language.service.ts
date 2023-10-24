import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translateService:TranslateService) { }

  changeLanguage(lang:string='en'){
    this.translateService.use(lang);
    if(lang === 'ar'){
      document.getElementsByTagName('html')[0].dir='rtl';
    }


  }
}
