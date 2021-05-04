import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "/api/";
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any){
    console.log(model);
    let url="";
    url = "/api/users?username=";
    url+=model.username?.toLowerCase();
    url+="&password=";
    url+=model.password;
    console.log(url);

    return this.http.get(url)
        .pipe(map((response: any)=>{
        const user = response?.[0];
        if(user){
          console.log('yes user exists...');
          console.log(user);
          localStorage.setItem('user', user.username);
          let cuser :User= {'username': user.username};
          this.currentUserSource.next(cuser);
        }
        return user;
    })
    )
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(undefined);
  }

}
