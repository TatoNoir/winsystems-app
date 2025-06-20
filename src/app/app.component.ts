import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const lang = navigator.language.startsWith('es') ? 'es' : 'en';
    translate.setDefaultLang('en');
    translate.use(lang);
  }
}
