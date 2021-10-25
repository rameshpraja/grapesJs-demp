import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ISupplier } from 'src/app/models/admin.interface';
import { SupplierService } from 'src/app/services/admin/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss'],
})
export class SupplierListComponent implements OnInit, OnDestroy {
  componentName = 'Supplier';
  displayedColumns: string[] = ['id', 'name', 'mobile', 'address', 'action'];
  dataSource: ISupplier[] = [];
  ids: string[] = [];
  private destroyed$ = new Subject(); // For multiple subscription unsubscribed destroy
  paginationObj = {
    length: 0,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 100],
  };
  filterObj = {
    selectedMonth: '',
    searchString: '',
    from: 0, // form start position
    row: 10, // number of record
  };

  constructor(private supplierService: SupplierService) {}

  ngOnInit() {
    this.loadSupplier();
  }

  loadSupplier(): void {
    this.supplierService
      .getSupplier(this.filterObj.from, this.filterObj.row)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        res.data?.forEach((item) => {
          if (!this.ids.includes(item.id)) {
            this.dataSource.push({
              id: item.id,
              name: item.name,
              mobile: item.mobile,
              address: item.address,
            });
          }
        });
      });
  }

  changePage(event: MatPaginator): void {
    this.filterObj.row = event.pageSize;
    this.filterObj.from = event.pageIndex * event.pageSize;
    this.loadSupplier();
  }

  onDelete(supplierId: string) {
    // call delete api call
    this.supplierService.removeSupplier(supplierId);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
