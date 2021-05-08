import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any= {};
  currentUser$ : Observable<User> | undefined;

  constructor(private http: HttpClient, 
              private accountService: AccountService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    if(this.model?.username===undefined && this.model?.password===undefined)
      this.toastr.error("Username & Password Required");
    else if(this.model?.username===undefined){
      this.toastr.error("Username required");
    }
    else if(this.model?.password===undefined){
      this.toastr.error("Password Required");
    }
    else{
      this.accountService.login(this.model).subscribe((response:any)=>{
        if(response){
          this.toastr.success('Login Successfull')
          this.router.navigateByUrl('/');
        }
        else{
          this.toastr.error('Incorrect Username or Password');
        }
    });
  }
  }

}


