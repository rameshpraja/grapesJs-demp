import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndPoint } from 'src/app/app.constant';
import { IProduct } from 'src/app/models/admin.interface';
import { RequestServiceBase } from '../request-service-base';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products$: Observable<IProduct[]>;
  productList: IProduct[] = [];

  constructor(private httpBaseService: RequestServiceBase) {
    this.products$ = of([]);
    this.getProducts();
  }

  // For get all products
  public getProducts(from: number = 0, rows: number = 0): Observable<any> {
    let URL;
    if (rows == 0) {
      URL = EndPoint.product + '?from=' + from;
    } else {
      URL = EndPoint.product + '?from=' + from + '&rows=' + rows;
    }
    return this.httpBaseService.httpGet(URL).pipe(
      map((res) => {
        this.productList = res.data;
        return res;
      })
    );
  }

  // For remove product using productId
  public removeProduct(productId: string) {
    return;
  }

  // For get single product using productId
  public getSingleProduct(productId: string) {
    return this.productList.find((product) => product.id === productId);
  }

  // For add product
  public addProduct(product: IProduct) {
    return this.httpBaseService.httpPost(EndPoint.product, product);
  }

  // For update product using productId
  public updateProduct(productId: string, product: IProduct) {
    return this.httpBaseService.httpPatch(
      EndPoint.product + '/' + productId,
      product
    );
  }
}
