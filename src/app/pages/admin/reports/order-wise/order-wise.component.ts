import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { fromEvent, Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { ISelectOption } from "src/app/models/admin.interface";
import { IOrderWiseReport } from "src/app/models/report.interface";
import { ReportsService } from "src/app/services/reports.service";

@Component({
  selector: "app-order-wise",
  templateUrl: "./order-wise.component.html",
  styleUrls: ["./order-wise.component.scss"],
})
export class OrderWiseComponent implements OnInit {
  componentName = 'Order Wise report';
  @ViewChild("searchInput") searchInput: ElementRef;
  // @ViewChild(MatSort) sort: MatSort;
  sort;
  @ViewChild(MatSort, { static: false }) set content(content: ElementRef) {
    this.sort = content;
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  orderWiseOptions: ISelectOption[];
  orderReports: IOrderWiseReport[];
  dataSource = new MatTableDataSource([]);
  displayedColumns = [
    "order_id",
    "order_date",
    "skus",
    "invoice_amount",
    "settled_amount",
    "profit",
    "is_returned",
    "is_cancelled",
    "easy_ship_charges",
    "gst_amount",
    "cost_price",
    "quantity_detail",
    "return_details",
  ];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  filterObj = {
    selectedOrderOptions: "",
    searchString: "",
    startDate: "",
    endDate: "",
    from: 0, // form start position
    row: 10  // number of record
  };
  searchTextChanged = new Subject<null>();
  paginationObj = {
    length: 0,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 100]
  };
  private subscription: Subscription;

  constructor(private reportService: ReportsService) { }

  ngOnInit() {
    
    this.orderWiseOptions = [
      {
        name: "Order Id",
        value: "order-id",
      },
      {
        name: "Sku",
        value: "sku",
      },
      {
        name: "ASIN",
        value: "ASIN",
      },
    ];

    this.loadReports();

  }

  // load reports
  loadReports(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.reportService
      .getOrderWiseReport(
        this.filterObj.selectedOrderOptions,
        this.filterObj.searchString,
        this.filterObj.startDate,
        this.filterObj.endDate,
        this.filterObj.from,
        this.filterObj.row
      )
      .subscribe(
        (data) => {   
          console.table(data.data);       
          this.orderReports = data.data;
          this.dataSource.data = this.orderReports;
          // this.dataSource.paginator = this.paginator;
          this.paginationObj.length = data['totalRecord'] || 1000;
          this.dataSource.sort = this.sort;
        },
        (err) => { }
      );
  }



  dateRangeChange(
    dateRangeStart: HTMLInputElement,
    dateRangeEnd: HTMLInputElement
  ) {
    ("5/9/2021");
    ("5/15/2021");
    if (!dateRangeStart.value || !dateRangeEnd.value) {
      return;
    }
    let startDate = dateRangeStart.value.split("/");
    startDate.unshift(startDate[2]);
    startDate.pop();

    let endDate = dateRangeEnd.value.split("/");
    endDate.unshift(endDate[2]);

    endDate.pop();

    this.filterObj.startDate = startDate.join("-");
    this.filterObj.endDate = endDate.join("-");
  }

  onApply(){
      this.loadReports();
  }

  onReset(){
    this.filterObj = {
      selectedOrderOptions: "",
      searchString: "",
      startDate: "",
      endDate: "",
      from: 0, // form start position
      row: 10  // number of record
    };
    this.range.reset();
    this.loadReports();
  }

  changePage(event: MatPaginator): void {
    this.filterObj.row = event.pageSize;
    this.filterObj.from = event.pageIndex*event.pageSize;
    this.loadReports();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
