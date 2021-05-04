import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  // private SERVER_URL = 'http://localhost:3000/api/';
  private SERVER_URL = '/api/';

  constructor(private http: HttpClient) {}

  private selectedProduct = new BehaviorSubject<Product>({
    id: undefined,
    name: undefined,
    description: undefined,
    price: undefined,
    imageURL: undefined,
    quantity: undefined,
    category: undefined
  });

  private selectedProducts = new BehaviorSubject<Product[]>([]);

  Product$ = this.selectedProduct.asObservable();
  Products$ = this.selectedProducts.asObservable();

  isProductEmpty$: Observable<boolean> | undefined;

  isProductsEmpty$: Observable<boolean> | undefined;

  search(q: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.SERVER_URL + 'products?name_like=' + q
    );
  }

  updateSelectedProduct(product: Product) {
    this.selectedProduct.next(product);
  }

  updateSelectedProducts(products: Product[]) {
    this.selectedProducts.next(products);
  }
}
