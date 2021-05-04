import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShoppersPoint';

  constructor(private http: HttpClient, private accountService: AccountService){

  }

  ngOnInit(){
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: any = {'username':localStorage.getItem('user')?.toString()};
    console.log('logging user from local storage in app component')
    console.log(user);
    this.accountService.setCurrentUser(user);
  }

}
