import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent, Subject, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
} from 'rxjs/operators';
import { ISelectOption } from 'src/app/models/admin.interface';
import { ISKUMonthlyReport } from 'src/app/models/report.interface';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-sku-monthly',
  templateUrl: './sku-monthly.component.html',
  styleUrls: ['./sku-monthly.component.scss'],
})
export class SkuMonthlyComponent implements OnInit {
  componentName = 'SKU Monthly report';
  @ViewChild('searchInput') searchInput: ElementRef;
  // @ViewChild(MatSort) sort: MatSort;
  sort;
  @ViewChild(MatSort, { static: false }) set content(content: ElementRef) {
    this.sort = content;
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  monthSelectOption: ISelectOption[] = []; // month select options list
  yearSelectOption: ISelectOption[] = []; // year select options list

  skuReports: ISKUMonthlyReport[] = [];
  dataSource = new MatTableDataSource([]);
  private subscription: Subscription;
  displayedColumns: string[] = [
    'month',
    'sku',
    'no_of_orders',
    'no_of_units',
    'no_of_returns',
    'no_of_returned_unit',
    'profit_after_returning_loss',
    'return_loss_amount',
    'is_multi_product',
    'processed_at',
  ];
  date = new Date();

  filterObj = {
    error: false,
    selectedDate: '',
    selectedMonth: '',
    selectedYear: '',
    searchString: '',
    from: 0, // form start position
    row: 10, // number of record
  };
  searchTextChanged = new Subject<null>();

  paginationObj = {
    length: 0,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 100],
  };

  constructor(private reportService: ReportsService) {}

  ngOnInit() {
    this.monthSelectOption = [
      { name: '01', value: 'January' },
      { name: '02', value: 'February' },
      { name: '03', value: 'March' },
      { name: '04', value: 'April' },
      { name: '05', value: 'May' },
      { name: '06', value: 'June' },
      { name: '07', value: 'July' },
      { name: '08', value: 'August' },
      { name: '09', value: 'September' },
      { name: '10', value: 'October' },
      { name: '11', value: 'November' },
      { name: '12', value: 'December' },
    ];

    const date = new Date();
    // 2017 to current year
    for (let index = date.getFullYear(); index >= 2017; index--) {
      this.yearSelectOption.push({
        name: String(index),
        value: String(index),
      });
    }

    this.loadReports();
  }

  // load reports
  loadReports(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.reportService
      .getSkuMonthlyReport(
        this.filterObj.selectedDate,
        this.filterObj.searchString,
        this.filterObj.from,
        this.filterObj.row
      )
      .subscribe(
        (data) => {
          this.skuReports = data.data;
          this.dataSource.data = this.skuReports;
          // this.dataSource.paginator = this.paginator;
          this.paginationObj.length = data['totalRecorded'] || 1000;
          this.dataSource.sort = this.sort;
        },
        (err) => {}
      );
  }

  onSubmit(): void {
    this.filterObj.selectedDate =
      this.filterObj.selectedYear + '-' + this.filterObj.selectedMonth;
    this.loadReports();
  }

  onReset() {
    this.filterObj = {
      error: false,
      selectedDate: '',
      selectedMonth: '',
      selectedYear: '',
      searchString: '',
      from: 0, // form start position
      row: 10, // number of record
    };
    this.loadReports();
  }

  changePage(event: MatPaginator): void {
    this.filterObj.row = event.pageSize;
    this.filterObj.from = event.pageIndex * event.pageSize;
    this.loadReports();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
