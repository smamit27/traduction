import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls : ['app.component.css']
})

export class AppComponent {
  selected = 'en';
  IsVisible = false;
  user = {
    'firstname': undefined,
    'lastname': undefined,
    'dob': undefined
  };
  contactList = [];
  constructor(public translate: TranslateService) {
      translate.addLangs(['en', 'fr','gr']);
      translate.setDefaultLang('en');
    }
    switchLanguage( language ) {
      this.translate.use(language);
    }
    contactListDetails (user) {
      debugger;
      this.contactList.push(user);
      this.IsVisible = true;
    }

}

