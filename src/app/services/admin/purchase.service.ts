import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPurchase } from '../../models/admin.interface';
import { EndPoint } from '../../app.constant';
import { RequestServiceBase } from '../request-service-base';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  purchaseList: IPurchase[] = [];

  constructor(private httpBaseService: RequestServiceBase) {}

  // For get all purchase
  public getPurchase(
    productID,
    supplierID,
    startDate,
    endDate,
    from: number = 0,
    rows: number
  ): Observable<any> {
    let URL = EndPoint.purchase + '?from=' + from + '&rows=' + rows;
    if (productID.value !== undefined) {
      URL += '&product_id=' + productID.value;
    }
    if (supplierID.value !== undefined) {
      URL += '&supplier_id=' + supplierID.value;
    }
    if (startDate !== '' && endDate !== '') {
      URL += '&start_date=' + startDate + '&end_date=' + endDate;
    }
    return this.httpBaseService.httpGet(URL).pipe(
      map((res) => {
        this.purchaseList = res.data;
        return res;
      })
    );
  }

  // For remove purchase using purchaseId
  public removePurchase(purchaseId: string) {}

  // For get single purchase using purchaseId
  public getSinglePurchase(purchaseId: string): IPurchase {
    return this.purchaseList.find((purchase) => purchase.id === purchaseId);
  }

  // For add purchase
  public addPurchase(purchase: IPurchase): Observable<any> {
    return this.httpBaseService.httpPost(EndPoint.purchase, purchase);
  }

  // For update purchase using purchaseId
  public updatePurchase(
    purchaseId: string,
    purchase: IPurchase
  ): Observable<any> {
    return this.httpBaseService.httpPatch(
      EndPoint.product + purchaseId,
      purchase
    );
  }
}
