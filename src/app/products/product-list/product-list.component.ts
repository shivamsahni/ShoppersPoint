import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/_services/productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(public productService: ProductserviceService,
              public route: ActivatedRoute
              ){

                this.route.queryParams//.filter((params:any) => params.category)
                                      .subscribe(
                                        (queryString: Params) =>{
                                
                                          if(queryString['category']){
                                            this.productService.searchByCategory2(queryString['category']);
                                          }
                                          else if(queryString['name_like']){
                                            this.productService.search2(queryString['name_like']);
                                          }
                                          else{
                                            this.productService.search2("");
                                          }
                                
                                        }
                                      )


   }

  ngOnInit(): void {
  }

}
