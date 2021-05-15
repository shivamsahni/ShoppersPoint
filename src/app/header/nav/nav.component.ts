import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuItem } from 'primeng/api';
import { Observable, pipe } from 'rxjs';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { ProductserviceService } from 'src/app/_services/productservice.service';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/_services/cart.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { keyframes } from '@angular/animations';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
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
        public cartService: CartService,
        private translate: TranslateService) {
            translate.setDefaultLang('en');
    }

    ngOnInit() {

        this.currentUser$ = this.accountService.currentUser$;

        this.currentUser$.subscribe(pipe((u: any) => {
            if (u?.username !== undefined)
                this.loggedIn = true;
        }))

        this.items = 
        [
            {
                label: 'Category',
                icon: 'pi pi-fw pi-sitemap',
                items:[
                    {
                        label: 'Electronics',
                        icon: 'pi pi-fw pi-desktop',
                        items: [
                            {
                                label: 'Mobile',
                                icon: 'pi pi-fw pi-mobile',
                                items: [
                                    {
                                        label: 'Touch Mobile',
                                        icon: 'pi pi-fw pi-tablet',
                                        routerLink: '/products',
                                        queryParams: {category:'touch mobile'}

                                    },
                                    {
                                        label: 'Keypad Mobile',
                                        icon: 'pi pi-fw pi-mobile',
                                        routerLink: '/products',
                                        queryParams: {category:'keypad mobile'}
                                    },
        
                                ]
                            },
                            {
                                label: 'Home Appliances',
                                icon: 'pi pi-fw pi-home',
                                items: [
                                    {
                                        label: 'Kitchen',
                                        icon: 'pi pi-fw pi-globe',
                                        items: [
                                            {
                                                label: 'Mixer Grinder',
                                                icon: 'pi pi-fw pi-circle-off',
                                                routerLink: '/products',
                                                queryParams: {category:'mixer grinder'}
                                            },
                                            {
                                                label: 'Blender',
                                                icon: 'pi pi-fw pi-circle-off',
                                                routerLink: '/products',
                                                queryParams: {category:'blender'}
                                            },
                                            {
                                                label: 'Microwave',
                                                icon: 'pi pi-fw pi-circle-off',
                                                routerLink: '/products',
                                                queryParams: {category:'microwave'}
                                            }
                                        ]
                                    },
                                    {
                                        label: 'General',
                                        icon: 'pi pi-fw pi-shield',
                                        items: [
                                            {
                                                label: 'Refrigerator',
                                                icon: 'pi pi-fw pi-circle-off',
                                                routerLink: '/products',
                                                queryParams: {category:'refrigerator'}
                                            },
                                            {
                                                label: 'TV',
                                                icon: 'pi pi-fw pi-desktop',
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
                        icon: 'pi pi-fw pi-sun',
                        items: [
                            {
                                label: 'Pasta & noodles',
                                icon: 'pi pi-fw pi-star-o',
                                routerLink: '/products',
                                queryParams: {category:'pasta and noodles'}
                            },
                            {
                                label: 'Snacks',
                                icon: 'pi pi-fw pi-heart',
                                routerLink: '/products',
                                queryParams: {category:'snacks'}
                            }
                        ]
                    },
                    {
                        label: 'Clothes',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Topwear',
                                icon: 'pi pi-fw pi-user',
                                routerLink: '/products',
                                queryParams: {category:'topwear'}
                            },
                            {
                                label: 'Bottomwear',
                                icon: 'pi pi-fw pi-user',
                                routerLink: '/products',
                                queryParams: {category:'bottomwear'}
                            }
                        ]
                    },
                    {
                        label: 'Footwear',
                        icon: 'pi pi-fw pi-pause',
                        items: [
                            {
                                label: 'Shoes',
                                icon: 'pi pi-fw pi-circle-off',
                                routerLink: '/products',
                                queryParams: {category:'shoes'}
                            },
                            {
                                label: 'Slippers',
                                icon: 'pi pi-fw pi-circle-off',
                                routerLink: '/products',
                                queryParams: {category:'slippers'}
                            },
                            {
                                label: 'FlipFlops',
                                icon: 'pi pi-fw pi-circle-off',
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
                    command: ()=>{
                        this.useLanguage('en');
                    }
                },
                {
                    label: 'Hindi',
                    icon: 'pi pi-fw pi-id-card',
                    command: ()=>{
                        this.useLanguage('hi');
                    }
                }
            ]
        },
        {
            label: 'All Products',
            icon: 'pi pi-fw pi-star-o',
            routerLink: '/products'
        }
    ]        

        this.translate.onLangChange.subscribe(
            (translate: LangChangeEvent) => {

               this.items= [
                {
                    label: translate.translations.header['category'],
                    icon: 'pi pi-fw pi-sitemap',
                    items:[
                        {
                            label: translate.translations.header['electronics'],
                            icon: 'pi pi-fw pi-desktop',
                            items: [
                                {
                                    label: translate.translations.header['mobile'],
                                    icon: 'pi pi-fw pi-mobile',
                                    items: [
                                        {
                                            label: translate.translations.header['touch'],
                                            icon: 'pi pi-fw pi-tablet',
                                            routerLink: '/products',
                                            queryParams: {category:'touch mobile'}
    
                                        },
                                        {
                                            label: translate.translations.header['keypad'],
                                            icon: 'pi pi-fw pi-mobile',
                                            routerLink: '/products',
                                            queryParams: {category:'keypad mobile'}
                                        },
            
                                    ]
                                },
                                {
                                    label: translate.translations.header['home_appliances'],
                                    icon: 'pi pi-fw pi-home',
                                    items: [
                                        {
                                            label: translate.translations.header['kitchen'],
                                            icon: 'pi pi-fw pi-globe',
                                            items: [
                                                {
                                                    label: translate.translations.header['mixer'],
                                                    icon: 'pi pi-fw pi-circle-off',
                                                    routerLink: '/products',
                                                    queryParams: {category:'mixer grinder'}
                                                },
                                                {
                                                    label: translate.translations.header['blender'],
                                                    icon: 'pi pi-fw pi-circle-off',
                                                    routerLink: '/products',
                                                    queryParams: {category:'blender'}
                                                },
                                                {
                                                    label: translate.translations.header['microwave'],
                                                    icon: 'pi pi-fw pi-circle-off',
                                                    routerLink: '/products',
                                                    queryParams: {category:'microwave'}
                                                }
                                            ]
                                        },
                                        {
                                            label: 'general',
                                            icon: 'pi pi-fw pi-shield',
                                            items: [
                                                {
                                                    label: translate.translations.header['refrigerator'],
                                                    icon: 'pi pi-fw pi-circle-off',
                                                    routerLink: '/products',
                                                    queryParams: {category:'refrigerator'}
                                                },
                                                {
                                                    label: translate.translations.header['tv'],
                                                    icon: 'pi pi-fw pi-desktop',
                                                    routerLink: '/products',
                                                    queryParams: {category:'tv'}
                                                }
            
                                            ]
                                        },
     
                                    ],
                                }]
    
    
    
                        },                                   
                        {
                            label: translate.translations.header['grocery'],
                            icon: 'pi pi-fw pi-sun',
                            items: [
                                {
                                    label: translate.translations.header['pastanoodles'],
                                    icon: 'pi pi-fw pi-star-o',
                                    routerLink: '/products',
                                    queryParams: {category:'pasta and noodles'}
                                },
                                {
                                    label: translate.translations.header['snacks'],
                                    icon: 'pi pi-fw pi-heart',
                                    routerLink: '/products',
                                    queryParams: {category:'snacks'}
                                }
                            ]
                        },
                        {
                            label: translate.translations.header['clothes'],
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    label: translate.translations.header['topwear'],
                                    icon: 'pi pi-fw pi-user',
                                    routerLink: '/products',
                                    queryParams: {category:'topwear'}
                                },
                                {
                                    label: translate.translations.header['bottomwear'],
                                    icon: 'pi pi-fw pi-user',
                                    routerLink: '/products',
                                    queryParams: {category:'bottomwear'}
                                }
                            ]
                        },
                        {
                            label: translate.translations.header['footwear'],
                            icon: 'pi pi-fw pi-pause',
                            items: [
                                {
                                    label: translate.translations.header['shoes'],
                                    icon: 'pi pi-fw pi-circle-off',
                                    routerLink: '/products',
                                    queryParams: {category:'shoes'}
                                },
                                {
                                    label: translate.translations.header['slippers'],
                                    icon: 'pi pi-fw pi-circle-off',
                                    routerLink: '/products',
                                    queryParams: {category:'slippers'}
                                },
                                {
                                    label: translate.translations.header['flipflops'],
                                    icon: 'pi pi-fw pi-circle-off',
                                    routerLink: '/products',
                                    queryParams: {category:'flipflops'}
                                }
                            ]
                        }
                    ]
                },
            {
                label: translate.translations.header['language'],
                icon: 'pi pi-fw pi-book',
                items: [
                    {
                        label: translate.translations.header['language1'],
                        icon: 'pi pi-fw pi-id-card',
                        command: ()=>{
                            this.useLanguage('en');
                        }
                    },
                    {
                        label: translate.translations.header['language2'],
                        icon: 'pi pi-fw pi-id-card',
                        command: ()=>{
                            this.useLanguage('hi');
                        }
                    }
                ]
            },
            {
                label: translate.translations.header['all_products'],
                icon: 'pi pi-fw pi-star-o',
                routerLink: '/products'
            }]
            });
    }

    logout() {
        this.accountService.logout();
        this.cartService.resetCart();
        this.loggedIn = false;
    }

    searchIt() {

        if(this.searchProduct.length===0)
            this.router.navigateByUrl('/products');
        else
            this.router.navigate(['/products'], {queryParams:{name_like: this.searchProduct}})

        this.searchProduct = "";
    }    

    useLanguage(lang: string): void{
        this.translate.use(lang);
    }

}

