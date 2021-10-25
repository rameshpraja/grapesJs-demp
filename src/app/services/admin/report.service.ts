import { map } from 'rxjs/operators';
import { RequestServiceBase } from 'src/app/services/request-service-base';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IOrderWiseReport,
  IOverallMonthlyReport,
  ISkippedSettlements,
  ISKUMonthlyReport,
} from 'src/app/models/report.interface';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  BASE_URL = 'http://trendifly.globefucntion.com/apis';

  constructor(
    private httpBaseService: RequestServiceBase
  ) { }

  // sku report
  getSkuMonthlyReport(
    month: string,
    q: string
  ): Observable<{ status: string, data: ISKUMonthlyReport[] }> {
    const url = 'report/v1/sku-monthly-report?month=' + month + '&q=' + q;
    return this.httpBaseService.httpGet(url);
  }

  // order wise report
  getOrderWiseReport(
    orderId: string = '',
    sku: string = '',
    fromDate: string,
    toDate: string,
    from: number = 0,
    rows: number
  ): Observable<{ status: string, data: IOrderWiseReport[] }> {
    const url =
      'report/v1/order-wise-report?' +
      'from=' +
      from +
      '&rows=' +
      rows +
      '&order_id' +
      orderId +
      '&sku=' +
      sku +
      '&from_date=' +
      fromDate +
      '&to_date=' +
      toDate;

    return this.httpBaseService.httpGet(url);
  }

  // overall monthly report
  getOverallMonthlyReport(): Observable<{ status: string, data: IOverallMonthlyReport[] }> {
    const url = 'report/v1/overall-monthly-report?month=2021-01';
    return this.httpBaseService.httpGet(url);
  }

  // un settle report (skipped settlement report)
  getUnsettleReport(
    settlementId: string = ''
  ): Observable<{ status: string, data: ISkippedSettlements[] }> {
    const url = 'amazon/v1/skipped_settlements?settlement_id=' + settlementId;
    return this.httpBaseService.httpGet(url);
  }
}
