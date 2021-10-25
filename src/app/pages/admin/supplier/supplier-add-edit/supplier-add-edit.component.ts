import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ISupplier } from 'src/app/models/admin.interface';
import { SupplierService } from 'src/app/services/admin/supplier.service';

@Component({
  selector: 'app-supplier-add-edit',
  templateUrl: './supplier-add-edit.component.html',
  styleUrls: ['./supplier-add-edit.component.scss'],
})
export class SupplierAddEditComponent implements OnInit {
  componentName: string = 'Supplier';
  supplierForm: FormGroup;
  selectSubmitted = false;
  id: string;
  supplier: ISupplier;
  private destroyed$ = new Subject(); // For multiple subscription unsubscribed destroy

  constructor(
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private supplierService: SupplierService,
    private router: Router
  ) {
    this.supplier = {
      id: '',
      name: '',
      mobile: null,
      address: null,
    };
  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.componentName = !this.id ? 'Add' : 'Update' + 'Supplier';
    if (this.id) {
      this.supplier = this.supplierService.getSingleSupplier(this.id);
      if (!this.supplier?.id) {
        this.router.navigateByUrl('/admin/supplier/list');
        return;
      }
    }
    this.loadSupplierFrom();
  }

  // For Load supplier form for add / edit supplier
  private loadSupplierFrom(): void {
    this.supplierForm = this.formBuilder.group({
      supplierName: [this.supplier.name, Validators.required],
      mobileNumber: [this.supplier.mobile, Validators.required],
      address: [this.supplier.address, Validators.required],
    });
  }

  onSubmit() {
    this.selectSubmitted = true;

    if (this.supplierForm.valid && this.selectSubmitted) {
      const supplierObj: ISupplier = {
        name: this.supplierForm.value.supplierName,
        mobile: this.supplierForm.value.mobileNumber,
        address: this.supplierForm.value.address,
      };
      if (this.supplier.id) {
        this.supplierService
          .updateSupplier(this.supplier.id, supplierObj)
          .subscribe((res) => {
            this.router.navigateByUrl('admin/supplier/list');
          });
      } else {
        this.supplierService.addSupplier(supplierObj).subscribe((res) => {
          this.router.navigateByUrl('admin/supplier/list');
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
