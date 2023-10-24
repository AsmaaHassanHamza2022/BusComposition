import { Component } from '@angular/core';
import { LanguageService } from './core/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BusComposition';
  constructor(private languageLang:LanguageService) {
    this.languageLang.changeLanguage('ar');
  }
}
