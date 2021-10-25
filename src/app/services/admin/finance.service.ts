import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndPoint } from 'src/app/app.constant';
import { IFinance } from 'src/app/models/admin.interface';
import { RequestServiceBase } from '../request-service-base';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  private finance$: Observable<IFinance[]>;
  financeList: IFinance[] = [];

  constructor(private httpBaseService: RequestServiceBase) {}

  // For get all Finance
  public getFinance(
    from: number = 0,
    rows: number,
    startDate: string,
    endDate: string,
    userInvolved: string,
    actionTowardsCompany: string
  ): Observable<any> {
    let URL = EndPoint.finance + '?from=' + from + '&rows=' + rows;
    if (userInvolved !== '') {
      URL += '&user_involved=' + userInvolved.toLowerCase();
    }
    if (actionTowardsCompany !== '') {
      URL += '&action_towards_company=' + actionTowardsCompany.toLowerCase();
    }
    if(startDate!== '' && endDate!== ''){
      URL += '&action_performed_start_date=' +
      startDate +
      '&action_performed_end_date=' +
      endDate;
    }      
    return this.httpBaseService.httpGet(URL).pipe(
      map((res) => {
        this.financeList = res.data;
        return res;
      })
    );
  }

  public getSingleFinance(financeId: string): IFinance {
    return this.financeList.find((supplier) => supplier.id === financeId);
  }

  public addFinance(finance: IFinance) {
    return this.httpBaseService.httpPost(EndPoint.finance, finance);
  }

  public updateFinance(financeId: string, finance: IFinance) {
    return this.httpBaseService.httpPut(
      EndPoint.finance + '/' + financeId,
      finance
    );
  }
}
