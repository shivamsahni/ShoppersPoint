import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { TranslateService } from  '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShoppersPoint';

  constructor(private http: HttpClient, private accountService: AccountService,public translate:  TranslateService){
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(){
    this.setCurrentUser();
  }

  setCurrentUser(){
    const u:any = localStorage.getItem('user')?.toString();
    let user: User ={'username': 'dummy'};
    if(u===undefined){
      user = {'username': ""};
    }
    else
    { user = {'username': u};}
    
    this.accountService.setCurrentUser(user);
  }

}
