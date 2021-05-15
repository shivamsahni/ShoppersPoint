import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../_models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private SERVER_URL = environment.backendURL;

  constructor(private http: HttpClient) {}

  private selectedProduct = new BehaviorSubject<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    imageURL: "",
    quantity: 0,
    category: ""
  });

  private selectedProducts = new BehaviorSubject<Product[]>([]);

  Product$ = this.selectedProduct.asObservable();
  Products$ = this.selectedProducts.asObservable();

  isProductEmpty$: Observable<boolean> | undefined;

  isProductsEmpty$: Observable<boolean> | undefined;

  search(q: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.SERVER_URL + '/products?name_like=' + q
    );
  }

  search2(q: string){
    this.Products$ =  this.http.get<Product[]>(
      this.SERVER_URL + '/products?name_like=' + q
    );
  }  

  searchByCategory(category: string):Observable<Product[]>{
    return this.http.get<Product[]>(
      this.SERVER_URL+'/products?category_like=' + category
    )
  }

  searchByCategory2(category: string){
    this.Products$ =  this.http.get<Product[]>(
      this.SERVER_URL+'/products?category_like=' + category
    )
  }

  updateSelectedProduct(product: Product) {
    this.selectedProduct.next(product);
  }

  updateSelectedProducts(products: Product[]) {
    this.selectedProducts.next(products);
  }

  getProductById(id: string){
    return this.http.get<Product>(
      this.SERVER_URL + '/products/' + id
    )
  }

}
