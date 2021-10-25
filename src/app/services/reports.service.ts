import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint } from '../app.constant';
import {
  IOrderWiseReport,
  IOverallMonthlyReport,
  ISettlements,
  ISkippedSettlements,
  ISKUMonthlyReport,
} from '../models/report.interface';
import { RequestServiceBase } from './request-service-base';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(private httpBaseService: RequestServiceBase) {}

  // sku report
  getSkuMonthlyReport(
    month: string,
    q: string,
    from: number,
    row: number
  ): Observable<{ status: string; data: ISKUMonthlyReport[] }> {
    const url =
      EndPoint.sku +
      '?month=' +
      month +
      '&q=' +
      q +
      '&from=' +
      from +
      '&row=' +
      row;
    return this.httpBaseService.httpGet(url);
  }

  // order wise report
  getOrderWiseReport(
    orderType: string,
    searchString: string,
    fromDate: string,
    toDate: string,
    from: number = 0,
    rows: number
  ): Observable<{ status: string; data: IOrderWiseReport[] }> {
    const orderTypeParams = orderType
      ? '&' + orderType + '=' + searchString
      : '';
    const url =
      EndPoint.order +
      '?' +
      'from=' +
      from +
      '&rows=' +
      rows +
      orderTypeParams +
      '&from_date=' +
      fromDate +
      '&to_date=' +
      toDate;
    return this.httpBaseService.httpGet(url);
  }

  // overall monthly report
  getOverallMonthlyReport(
    month: string
  ): Observable<{ status: string; data: IOverallMonthlyReport[] }> {
    const url = EndPoint.overallMonthly + '?month=' + month;
    return this.httpBaseService.httpGet(url);
  }

  // un settle report (skipped settlement report)
  getUnsettleReport(
    settlementId: string = ''
  ): Observable<{ status: string; data: ISkippedSettlements[] }> {
    const url = EndPoint.unSettle + '?settlement_id=' + settlementId;
    return this.httpBaseService.httpGet(url);
  }

  // get settlements
  getSettlements(): Observable<{ status: string; data: ISettlements[] }> {
    const url = EndPoint.settle;
    return this.httpBaseService.httpGet(url);
  }
}
