import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IPurchase, ISupplier } from 'src/app/models/admin.interface';
import { IDropdown } from 'src/app/models/dropdown.interface';
import { ProductsService } from 'src/app/services/admin/products.service';
import { PurchaseService } from 'src/app/services/admin/purchase.service';
import { SupplierService } from 'src/app/services/admin/supplier.service';

const ELEMENT_DATA = [
  {
    no: 1,
    supplier: 'lorem ipsum',
    product: 'product',
    price: 100,
    quantity: 10,
    total: 1000,
    billDate: '23-may-2021',
    action: '',
  },
];

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss'],
})
export class PurchaseListComponent implements OnInit, OnDestroy {
  componentName = 'Purchase';
  displayedColumns: string[] = [
    'supplierName',
    'purchasedAt',
    'noOfItems',
    'total',
    'action',
  ];
  dataSource: any[] = [];

  supplierList: ISupplier[] = [];
  supplierListDropDown: IDropdown[] = [];
  filteredSupplierListDropDown: IDropdown[] = [];
  productListDropDown: IDropdown[] = [];
  filteredProductListDropDown: IDropdown[] = [];
  private destroyed$ = new Subject(); // For multiple subscription unsubscribed destroy
  paginationObj = {
    length: 0,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 100],
  };
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  filterObj = {
    selectedSupplier: '',
    selectedProduct: '',
    startDate: '',
    endDate: '',
    from: 0, // form start position
    row: 10, // number of record
  };

  constructor(
    private purchaseService: PurchaseService,
    private productService: ProductsService,
    private supplierService: SupplierService
  ) {}

  ngOnInit() {
    this.loadPurchase();
    this.loadSupplierList();
    this.loadProductList();
  }

  loadPurchase() {
    this.supplierService
      .getSupplier()
      .pipe(
        switchMap((supplier) => {
          this.supplierList = supplier.data;
          return this.purchaseService.getPurchase(
            this.filterObj.selectedProduct,
            this.filterObj.selectedSupplier,
            this.filterObj.startDate,
            this.filterObj.endDate,
            this.filterObj.from,
            this.filterObj.row
          );
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe((res) => {
        this.dataSource = [];
        const data: IPurchase[] = res.data;
        data?.forEach((purchase) => {
          const purchaseObj = {
            id: purchase.id,
            supplierName: this.supplierList.find(
              (supplier) => supplier.id === purchase.supplier_id
            ).name,
            purchasedAt: purchase.purchased_at,
            noOfItems: purchase.items.length,
            total: purchase.total,
          };
          this.dataSource.push(purchaseObj);
        });
      });
  }

  loadSupplierList(): void {
    this.supplierService.getSupplier().subscribe((res) => {
      res?.data.forEach((element) => {
        this.supplierListDropDown.push({
          name: element.name,
          value: element.id,
        });
      });
      this.filteredSupplierListDropDown = this.supplierListDropDown;
    });
  }

  loadProductList(): void {
    this.productService.getProducts().subscribe((res) => {
      res?.data.forEach((element) => {
        this.productListDropDown.push({
          name: element.name,
          value: element.id,
        });
      });
      this.filteredProductListDropDown = this.productListDropDown;
    });
  }

  changePage(event: MatPaginator): void {
    this.filterObj.row = event.pageSize;
    this.filterObj.from = event.pageIndex * event.pageSize;
    this.loadPurchase();
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
  }
  onApply() {
    this.loadPurchase();
  }
  onReset() {
    this.filterObj = {
      selectedSupplier: '',
      selectedProduct: '',
      startDate: '',
      endDate: '',
      from: 0, // form start position
      row: 10, // number of record
    };
    this.filteredSupplierListDropDown = this.supplierListDropDown;
    this.filteredProductListDropDown = this.productListDropDown;
    this.loadPurchase();
  }

  displayFn(filter: IDropdown): string {
    if (filter != null) {
      return filter.name;
    }
    return null;
  }

  onProductValueChange($event) {
    let $filteredValue = $event;
    if ($filteredValue.name !== undefined) {
      $filteredValue = $filteredValue.name;
    }
    this.filteredProductListDropDown = this.productListDropDown.filter(
      (option) =>
        option.name.toLowerCase().includes($filteredValue.toLowerCase())
    );
  }

  onSupplierValueChange($event) {
    let $filteredValue = $event;
    if ($filteredValue.name !== undefined) {
      $filteredValue = $filteredValue.name;
    }
    this.filteredSupplierListDropDown = this.supplierListDropDown.filter(
      (option) =>
        option.name.toLowerCase().includes($filteredValue.toLowerCase())
    );
  }

  onDelete(purchaseId: string) {}

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
