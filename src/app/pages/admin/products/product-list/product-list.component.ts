import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IProduct } from 'src/app/models/admin.interface';
import { ProductsService } from 'src/app/services/admin/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  componentName = 'Products';
  displayedColumns: string[] = ['no', 'name', 'cpPrice', 'stock', 'action'];
  public products$: Observable<IProduct[]>;
  dataSource: any[] = [];
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

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.productsService
      .getProducts(this.filterObj.from, this.filterObj.row)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        this.dataSource = [];
        res?.data?.forEach((pro) => {
          const supplierObj = {
            no: pro.id,
            name: pro.name,
            cpPrice: pro.cost_price,
            stock: pro.stock,
          };
          this.dataSource.push(supplierObj);
        });
      });
  }

  changePage(event: MatPaginator): void {
    this.filterObj.row = event.pageSize;
    this.filterObj.from = event.pageIndex * event.pageSize;
    this.loadProduct();
  }

  onDelete(productId: string) {
    // call delete api call
    // this.productsService.removeProduct(productId);
  }
}
