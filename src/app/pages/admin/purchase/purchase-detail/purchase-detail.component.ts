import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPurchase, ISupplier } from 'src/app/models/admin.interface';
import { PurchaseService } from 'src/app/services/admin/purchase.service';
import { SupplierService } from 'src/app/services/admin/supplier.service';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.scss'],
})
export class PurchaseDetailComponent implements OnInit {
  id: string;
  componentName:string = 'Purchase';
  purchase: IPurchase;
  supplier: ISupplier;
  displayedItemsColumns: string[] = ['no', 'cpPrice', 'stock'];
  dataSource: any[] = [];

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private purchaseService: PurchaseService,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.purchase = this.purchaseService.getSinglePurchase(this.id);
      if (!this.purchase) {
        this.redirectTOListPage();
        return;
      }
      this.supplier = this.supplierService.getSingleSupplier(
        this.purchase.supplier_id
      );
      this.componentName = 'Purchase Details' + this.supplier.name;
      this.purchase.items.forEach((pro) => {
        const supplierObj = {
          no: pro.id,
          cpPrice: pro.price,
          stock: pro.quantity,
        };
        this.dataSource.push(supplierObj);
      });
    }
  }

  redirectTOListPage(): void {
    this.router.navigateByUrl('/admin/purchase/list');
  }
}
