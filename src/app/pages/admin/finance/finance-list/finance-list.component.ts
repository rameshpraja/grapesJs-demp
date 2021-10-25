import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IFinance } from 'src/app/models/admin.interface';
import { FinanceService } from 'src/app/services/admin/finance.service';

@Component({
  selector: 'app-finance-list',
  templateUrl: './finance-list.component.html',
  styleUrls: ['./finance-list.component.scss'],
})
export class FinanceListComponent implements OnInit, OnDestroy {
  componentName = 'Finance';
  displayedColumns: string[] = [
    'amount',
    'action_towards_company',
    'user_involved',
    'action_performed_at',
    'action',
  ];
  actionTowardsCompany = ['Debit', 'Credit'];
  public products$: Observable<IFinance[]>;
  dataSource: any[] = [];
  UserInvolved: string[] = [];
  private destroyed$ = new Subject();
  filterObj = {
    selectedOrderOptions: '',
    selectedUserInvolved: '',
    selectedAction: '',
    startDate: '',
    endDate: '',
    from: 0, // form start position
    row: 10, // number of record
  };
  paginationObj = {
    length: 0,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 100],
  };
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  selectedValue = '';

  constructor(private financeService: FinanceService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports() {
    this.financeService
      .getFinance(
        this.filterObj.from,
        this.filterObj.row,
        this.filterObj.startDate,
        this.filterObj.endDate,
        this.filterObj.selectedUserInvolved,
        this.filterObj.selectedAction
      )
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        this.dataSource = [...res?.data];
      });
  }

  onUserChange($event): void {
    this.filterObj.selectedUserInvolved = $event;
    this.loadReports();
  }

  onActionChange($event): void {
    this.filterObj.selectedAction = $event;
    this.loadReports();
  }

  dateRangeChange(
    dateRangeStart: HTMLInputElement,
    dateRangeEnd: HTMLInputElement
  ) {
    if (!dateRangeStart.value || !dateRangeEnd.value) {
      return;
    }
    let startDate = new Date(dateRangeStart.value);
    startDate = new Date(startDate.getTime() + 86400000);
    let endDate = new Date(dateRangeEnd.value);
    endDate = new Date(endDate.getTime() + 86400000);
    this.filterObj.startDate = startDate.toISOString().split('T')[0];
    this.filterObj.endDate = endDate.toISOString().split('T')[0];
    this.loadReports();
  }

  changePage(event: MatPaginator): void {
    this.filterObj.row = event.pageSize;
    this.filterObj.from = event.pageIndex * event.pageSize;
    this.loadReports();
  }

  onlyUnique(value, index, self) {
    console.log(self);
    return (
      self.findIndex(
        (obj) =>
          obj.user_involved.toLowerCase() === value.user_involved.toLowerCase()
      ) === index
    );
  }

  onReset() {
    this.filterObj = {
      selectedOrderOptions: '',
      selectedUserInvolved: '',
      selectedAction: '',
      startDate: '',
      endDate: '',
      from: 0, // form start position
      row: 10, // number of record
    };
    this.range.reset();
    this.loadReports();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
