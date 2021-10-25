import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  IPurchase,
  IItem,
  IProduct,
  ISupplier,
} from 'src/app/models/admin.interface';
import { IDropdown } from 'src/app/models/dropdown.interface';
import { ProductsService } from 'src/app/services/admin/products.service';
import { SupplierService } from 'src/app/services/admin/supplier.service';
import { PurchaseService } from 'src/app/services/admin/purchase.service';

@Component({
  selector: 'app-purchase-add-edit',
  templateUrl: './purchase-add-edit.component.html',
  styleUrls: ['./purchase-add-edit.component.scss'],
})
export class PurchaseAddEditComponent implements OnInit, OnDestroy {
  componentName = 'Purchase';
  supplierList: IDropdown[] = [];
  productList: IDropdown[] = [];
  selectedSupplier: string = '';
  selectedProduct: string = '';
  selectedCountryControl = new FormControl(this.selectedSupplier);
  purchaseForm: FormGroup;
  purchase: IPurchase; // purchase for add-edit
  items: FormArray; // for multiple product add
  id: string;
  selectSubmitted: boolean;

  private destroy$ = new Subject();

  constructor(
    private supplierService: SupplierService,
    private productService: ProductsService,
    private purchaseService: PurchaseService,
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.purchase = {
      supplier_id: '',
      items: [
        {
          id: '',
          price: null,
          quantity: null,
        },
      ],
      total: null,
      purchased_at: '',
    };
  }

  ngOnInit(): void {
    this.loadSupplierList();
    this.loadProductList();
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.componentName = !this.id ? 'Add' : 'Update' + 'Purchase';
    this.loadPurchaseForm();
  }

  // For Load purchase form for add / edit
  private loadPurchaseForm(): void {
    this.purchaseForm = this.formBuilder.group({
      supplier_id: [this.purchase.supplier_id, Validators.required],
      total: [this.purchase.total, Validators.required],
      purchased_at: [this.purchase.purchased_at, Validators.required],
      items: this.formBuilder.array([]),
      comment: [''],
    });
    this.items = this.purchaseForm.get('items') as FormArray;
    this.loadAllItem();
  }

  // for multiple item load
  loadAllItem() {
    !this.purchase.items
      ? this.createItem()
      : this.purchase.items.forEach((item) => {
          this.items.push(this.createItem(item));
        });
  }

  // for single item create
  createItem(
    item: IItem = {
      id: '',
      price: null,
      quantity: null,
    }
  ) {
    return this.formBuilder.group({
      product_id: [item.id, Validators.required],
      price: [item.price, Validators.required],
      quantity: [item.quantity, Validators.required],
    });
  }

  // for add item
  addItem() {
    this.items.push(this.createItem());
  }

  // for remove item from items and purchase.items array both
  removeItem(index: number) {
    this.purchase.items[index] ? this.purchase.items.splice(index, 1) : null;
    this.items.removeAt(index);
  }

  loadSupplierList(): void {
    this.supplierService
      .getSupplier()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        res?.data.forEach((element) => {
          this.supplierList.push({ name: element.name, value: element.id });
        });
      });
  }

  loadProductList(): void {
    this.productService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        res?.data.forEach((element) => {
          this.productList.push({ name: element.name, value: element.id });
        });
      });
  }

  // calculate total of purchase
  calculateTotal() {
    const items: IItem[] = this.items.value;
    let total = 0;
    items.forEach((item) => {
      if (item.price && item.quantity) {
        total += +item.price * +item.quantity;
      }
    });

    this.purchaseForm.get('total').setValue(total);
  }

  onSubmit() {
    this.selectSubmitted = true;
    if (this.purchaseForm.valid && this.selectSubmitted) {
      // for api call section through dncObj
      const purchaseObj = { ...this.purchaseForm.value };
      // override purchase object with purchase form value

      // for add or update api call
      if (this.id) {
        this.purchaseService
          .updatePurchase(this.id, this.purchaseForm.value)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => {
            this.redirectTOListPage();
          });
      } else {
        this.purchaseService
          .addPurchase(this.purchaseForm.value)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => {
            this.redirectTOListPage();
          });
      }
    }
  }

  redirectTOListPage(): void {
    this.router.navigateByUrl('/admin/purchase/list');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
