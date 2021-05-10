import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import {map} from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private toastr: ToastrService, private translate: TranslateService) {  
  }

  canActivate(): Observable<boolean> {
    
    return this.accountService.currentUser$.pipe(
      map(
        (u: any) => {
          if (u?.username === undefined) {
            this.toastr.error(this.translate.instant('toastrmessages.loginrequired'));
            return false;
          }

          else
            return true;
        }
      )
    );

  }
  
}
