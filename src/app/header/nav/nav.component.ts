import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MenuItem} from 'primeng/api';
import { Observable, pipe } from 'rxjs';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { ProductserviceService } from 'src/app/_services/productservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  searchProduct: string = "";
  items: MenuItem[] = [];
  currentUser$: Observable<User> | undefined;
  loggedIn: boolean = false;

  constructor(public accountService: AccountService, 
                private router: Router,
                private toastr: ToastrService,
                private productService: ProductserviceService) { 
    }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;

    this.currentUser$.subscribe(pipe((u:any)=>{
        if(u?.username!==undefined)
            this.loggedIn = true;
        else
            console.log(u);
    }))

        this.items = [
            {
                label:'Category',
                icon:'pi pi-fw pi-sitemap',
                items:[
                    {
                        label:'Edit',
                        icon:'pi pi-fw pi-pencil',
                        items:[
                        {
                            label:'Save',
                            icon:'pi pi-fw pi-calendar-plus',
                            routerLink: '/'
                        },
                        {
                            label:'Delete',
                            icon:'pi pi-fw pi-calendar-minus'
                        },

                        ]
                    },
                    {
                        label:'Archieve',
                        icon:'pi pi-fw pi-calendar-times',
                        items:[
                        {
                            label:'Remove',
                            icon:'pi pi-fw pi-calendar-minus'
                        }
                        ]
                    }
                ]
            },
          {
              label:'Language',
              icon:'pi pi-fw pi-book',
              items:[
                  {
                      label:'English',
                      icon:'pi pi-fw pi-id-card'
                  },
                  {
                      label:'Hindi',
                      icon:'pi pi-fw pi-id-card'
                  }
              ]
          }
      ];

  

  } 
  
  logout(){
    this.accountService.logout();
    this.loggedIn = false;
  }

  searchIt(){
      console.log(this.searchProduct);
      this.productService.Products$ = this.productService.search(this.searchProduct);

      this.productService.updateSelectedProduct({
          id: undefined,
          name: undefined,
          description: undefined,
          price: undefined,
          imageURL: undefined,
          quantity: undefined,
          category: undefined
      })

      this.productService.isProductsEmpty$ = this.productService.Products$.pipe(
          map((products) => (products.length==0?true:false))
      );

        this.router.navigateByUrl('/products');
        this.searchProduct = "";

  }

}
