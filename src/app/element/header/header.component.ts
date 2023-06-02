import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedLanguage = 'English';

  constructor(private translate: TranslateService) { }

  changeLanguage(language: any) {
    this.translate.use(language.target.value);
  }

}
