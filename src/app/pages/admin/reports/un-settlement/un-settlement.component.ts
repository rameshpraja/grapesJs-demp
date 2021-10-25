import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Subscription } from 'rxjs';
import { ISelectOption } from 'src/app/models/admin.interface';
import {
  ISettlements,
  ISkippedSettlements,
} from 'src/app/models/report.interface';
import { ReportsService } from 'src/app/services/reports.service';
import { formatDate } from '@angular/common';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-un-settlement',
  templateUrl: './un-settlement.component.html',
  styleUrls: ['./un-settlement.component.scss'],
})
export class UnSettlementComponent implements OnInit, OnDestroy {
  componentName = 'Un Settle report';
  // @ViewChild(MatSort) sort: MatSort;
  sort;
  @ViewChild(MatSort, { static: false }) set content(content: ElementRef) {
    this.sort = content;
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  idDateOption: ISelectOption[] = [];
  dataSource = new MatTableDataSource([]);
  settlements: ISettlements[] = [];

  settlementForm: FormGroup;
  unSettleReports: ISkippedSettlements[];
  private destroyed$ = new Subject();

  selectedMonth: string;
  displayedColumns = [
    'id',
    'settlement_id',
    'settlement_date',
    'deposit_date',
    'total_amount',
    'transaction_type',
    'order_id',
    'amount_type',
    'amount_description',
    'amount',
    'order_item_code',
    'sku',
    'quantity_purchased',
  ];
  settlementId = '';

  constructor(private reportService: ReportsService) {}

  ngOnInit() {
    this.settlementForm = new FormGroup({
      idDate: new FormControl(),
    });
    this.reportService
      .getSettlements()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        data.data.forEach((settle) => {
          const date = formatDate(
            new Date(settle.deposit_date),
            'yyyy/MM/dd',
            'en'
          );
          this.idDateOption.push({
            name: date + ' - ' + settle.settlement_id,
            value: settle.settlement_id,
          });
        });
      });
    this.loadReports();
  }

  // load reports
  loadReports(): void {
    this.reportService
      .getUnsettleReport(this.settlementId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.unSettleReports = data.data;
        this.dataSource.data = this.unSettleReports;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  onReset () {
    this.settlementId = '';
    this.loadReports();
  }
  
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
