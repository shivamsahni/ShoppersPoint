import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuItem } from 'primeng/api';
import { Observable, pipe } from 'rxjs';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { ProductserviceService } from 'src/app/_services/productservice.service';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/_services/cart.service';

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
    cartSize: string="0";

    constructor(public accountService: AccountService,
        private router: Router,
        private toastr: ToastrService,
        private productService: ProductserviceService,
        public cartService: CartService) {
    }

    ngOnInit() {
        this.currentUser$ = this.accountService.currentUser$;

        this.currentUser$.subscribe(pipe((u: any) => {
            if (u?.username !== undefined)
                this.loggedIn = true;
            else
                console.log(u);
        }))

        this.items = [
            {
                label: 'Category',
                icon: 'pi pi-fw pi-sitemap',
                items:[
                    {
                        label: 'Electronics',
                        icon: 'pi pi-fw pi-sitemap',
                        items: [
                            {
                                label: 'Mobile',
                                icon: 'pi pi-fw pi-pencil',
                                items: [
                                    {
                                        label: 'Touch Mobile',
                                        icon: 'pi pi-fw pi-calendar-plus',
                                        routerLink: '/products',
                                        queryParams: {category:'touch mobile'}

                                    },
                                    {
                                        label: 'Keypad Mobile',
                                        icon: 'pi pi-fw pi-calendar-minus',
                                        routerLink: '/products',
                                        queryParams: {category:'keypad mobile'}
                                    },
        
                                ]
                            },
                            {
                                label: 'Home Appliances',
                                icon: 'pi pi-fw pi-calendar-times',
                                items: [
                                    {
                                        label: 'Kitchen',
                                        icon: 'pi pi-fw pi-id-card',
                                        items: [
                                            {
                                                label: 'Mixer Grinder',
                                                icon: 'pi pi-fw pi-id-card',
                                                routerLink: '/products',
                                                queryParams: {category:'mixer grinder'}
                                            },
                                            {
                                                label: 'Blender',
                                                icon: 'pi pi-fw pi-id-card',
                                                routerLink: '/products',
                                                queryParams: {category:'blender'}
                                            },
                                            {
                                                label: 'Microwave',
                                                icon: 'pi pi-fw pi-id-card',
                                                routerLink: '/products',
                                                queryParams: {category:'microwave'}
                                            }
                                        ]
                                    },
                                    {
                                        label: 'General',
                                        icon: 'pi pi-fw pi-id-card',
                                        items: [
                                            {
                                                label: 'Refrigerator',
                                                icon: 'pi pi-fw pi-id-card',
                                                routerLink: '/products',
                                                queryParams: {category:'refrigerator'}
                                            },
                                            {
                                                label: 'TV',
                                                icon: 'pi pi-fw pi-id-card',
                                                routerLink: '/products',
                                                queryParams: {category:'tv'}
                                            }
        
                                        ]
                                    },
 
                                ],
                            }]



                    },                                   
                    {
                        label: 'Grocery',
                        icon: 'pi pi-fw pi-book',
                        items: [
                            {
                                label: 'Pasta & noodles',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: '/products',
                                queryParams: {category:'pasta and noodles'}
                            },
                            {
                                label: 'Snacks',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: '/products',
                                queryParams: {category:'snacks'}
                            }
                        ]
                    },
                    {
                        label: 'Clothes',
                        icon: 'pi pi-fw pi-book',
                        items: [
                            {
                                label: 'Topwear',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: '/products',
                                queryParams: {category:'topwear'}
                            },
                            {
                                label: 'Bottomwear',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: '/products',
                                queryParams: {category:'bottomwear'}
                            }
                        ]
                    },
                    {
                        label: 'Footwear',
                        icon: 'pi pi-fw pi-book',
                        items: [
                            {
                                label: 'Shoes',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: '/products',
                                queryParams: {category:'shoes'}
                            },
                            {
                                label: 'Slippers',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: '/products',
                                queryParams: {category:'slippers'}
                            },
                            {
                                label: 'FlipFlops',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: '/products',
                                queryParams: {category:'flipflops'}
                            }
                        ]
                    }
                ]
            },
        {
            label: 'Language',
            icon: 'pi pi-fw pi-book',
            items: [
                {
                    label: 'English',
                    icon: 'pi pi-fw pi-id-card',
                    routerLink: '/'
                },
                {
                    label: 'Hindi',
                    icon: 'pi pi-fw pi-id-card',
                    routerLink: '/'
                }
            ]
        },
        {
            label: 'All Products',
            icon: 'pi pi-fw pi-book',
            routerLink: '/products'
        }]
    }

    logout() {
        this.accountService.logout();
        this.loggedIn = false;
    }

    searchIt() {

        if(this.searchProduct.length===0)
            this.router.navigateByUrl('/products');
        else
            this.router.navigate(['/products'], {queryParams:{name_like: this.searchProduct}})

        this.searchProduct = "";
    }

}

