import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { IProduct } from 'src/app/models/admin.interface';
import { ProductsService } from 'src/app/services/admin/products.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss'],
})
export class ProductAddEditComponent implements OnInit, OnDestroy {
  componentName: string = 'Product';
  productForm: FormGroup;
  selectSubmitted = false;
  id: string;
  product: IProduct;
  private destroyed$ = new Subject(); // For multiple subscription unsubscribed destroy

  constructor(
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.product = {
      name: '',
      sku: '',
      cost_price: null,
      stock: null,
      weight: null,
      length: null,
      bredth: null,
      height: null,
      description: '',
      id: '',
    };
  }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.componentName = !this.id ? 'Add' : 'Update' + 'Product';
    if (this.id) {
      this.product = this.productsService.getSingleProduct(this.id);
      if (!this.product) {
        this.redirectTOListPage();
        return;
      }
    }
    this.loadProductFrom();
  }

  // For Load product form for add / edit
  private loadProductFrom(): void {
    this.productForm = this.formBuilder.group({
      name: [this.product.name, Validators.required],
      cost_price: [this.product.cost_price, Validators.required],
      stock: [this.product.stock, Validators.required],
      length: [this.product.length, Validators.required],
      bredth: [this.product.bredth, Validators.required],
      height: [this.product.height, Validators.required],
      weight: [this.product.weight, Validators.required],
      volumetricWeight: [''],
      sku: [this.product.sku, Validators.required],
      description: [this.product.description, Validators.required],
    });
    this.calculateVolumetricWeight();
  }

  onSubmit() {
    this.selectSubmitted = true;

    if (this.productForm.valid && this.selectSubmitted) {
      const productData = this.productForm.value;
      if (this.id) {
        this.productsService
          .updateProduct(this.id, productData)
          .pipe(takeUntil(this.destroyed$))
          .subscribe((res) => {
            this.redirectTOListPage();
          });
      } else {
        this.productsService
          .addProduct(productData)
          .pipe(takeUntil(this.destroyed$))
          .subscribe((res) => {
            this.redirectTOListPage();
          });
      }
    }
  }

  redirectTOListPage(): void {
    this.router.navigateByUrl('/admin/product/list');
  }

  calculateVolumetricWeight(): void {
    const data = this.productForm.value;

    if (data.length && data.bredth && data.height) {
      const weight = (data.length * data.bredth * data.height) / 5000;
      this.productForm.get('volumetricWeight').setValue(weight);
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
