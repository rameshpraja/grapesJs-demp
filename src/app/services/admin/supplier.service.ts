import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISupplier } from 'src/app/models/admin.interface';
import { RequestServiceBase } from '../request-service-base';
import { EndPoint } from 'src/app/app.constant';
import { IStatus } from 'src/app/models/status.interface';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  public supplierList: ISupplier[] = [];

  constructor(private httpBaseService: RequestServiceBase) {
    this.getSupplier();
  }

  // For get all supplier
  public getSupplier(from: number = 0, rows: number = 0): Observable<IStatus> {
    let URL;
    if (rows == 0) {
      URL = EndPoint.supplier + '?from=' + from;
    } else {
      URL = EndPoint.supplier + '?from=' + from + '&rows=' + rows;
    }
    return this.httpBaseService.httpGet(URL).pipe(
      map((res) => {
        this.supplierList = [...res.data];
        return res;
      })
    );
  }

  // For remove supplier using supplierId
  public removeSupplier(supplierId: string) {
    //
  }

  // For get single supplier using supplierId
  public getSingleSupplier(supplierId: string): any {
    return this.supplierList.find((supplier) => supplier.id === supplierId);
  }

  // For add supplier
  public addSupplier(supplier: ISupplier): Observable<any> {
    return this.httpBaseService.httpPost(EndPoint.supplier, supplier);
  }

  // For update supplier using supplierId
  public updateSupplier(supplierId: string, supplier: ISupplier): Observable<any> {
    return this.httpBaseService.httpPatch(
      EndPoint.supplier + '/' + supplierId,
      supplier
    );
  }
}
