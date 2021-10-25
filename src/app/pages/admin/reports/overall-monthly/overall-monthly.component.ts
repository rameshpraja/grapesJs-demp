import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ISelectOption } from 'src/app/models/admin.interface';
import {
  IOrderWiseReport,
  IOverallMonthlyReport,
} from 'src/app/models/report.interface';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-overall-monthly',
  templateUrl: './overall-monthly.component.html',
  styleUrls: ['./overall-monthly.component.scss'],
})
export class OverallMonthlyComponent implements OnInit {
  componentName = 'Overall Monthly report';
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

  overallMonthlyReports: IOverallMonthlyReport[];
  dataSource = new MatTableDataSource([]);
  private subscription: Subscription;
  displayedColumns = ['type', 'description', 'amount', 'other_detail'];
  date = new Date();
  selectedDate: string = '';
  filterObj = {
    error: false,
    selectedMonth: '',
    selectedYear: '',
    searchString: '',
    from: 0, // form start position
    row: 10, // number of record
  };

  // 2017 to current year

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

    for (let index = this.date.getFullYear(); index >= 2017; index--) {
      this.yearSelectOption.push({
        name: String(index),
        value: String(index),
      });
    }

    this.loadReports();
  }

  // load reports
  loadReports(): void {
    this.subscription = this.reportService
      .getOverallMonthlyReport(this.selectedDate)
      .subscribe(
        (data) => {
          this.overallMonthlyReports = data.data;
          this.dataSource.data = this.overallMonthlyReports;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (err) => {
          // this.overallMonthlyReports = OverallMonthlyReport;
        }
      );
  }
  
  onSubmit(): void {
    if (
      this.filterObj.selectedMonth === '' ||
      this.filterObj.selectedYear === ''
    ) {
      this.filterObj.error = true;
    } else {
      this.filterObj.error = false;
      this.selectedDate =
        this.filterObj.selectedYear + '-' + this.filterObj.selectedMonth;
      this.loadReports();
    }
  }
  onReset() {
    this.filterObj = {
      error: false,
      selectedMonth: '',
      selectedYear: '',
      searchString: '',
      from: 0, // form start position
      row: 10, // number of record
    };
    this.loadReports();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
