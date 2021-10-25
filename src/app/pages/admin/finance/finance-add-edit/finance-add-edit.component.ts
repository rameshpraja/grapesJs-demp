import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IFinance } from 'src/app/models/admin.interface';
import { FinanceService } from 'src/app/services/admin/finance.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-finance-add-edit',
  templateUrl: './finance-add-edit.component.html',
  styleUrls: ['./finance-add-edit.component.scss']
})
export class FinanceAddEditComponent implements OnInit {
  componentName = 'Finance';
  financeForm: FormGroup;
  selectSubmitted = false;
  id: string;
  finance: IFinance;
  private destroyed$ = new Subject(); // For multiple subscription unsubscribed destroy

  constructor(
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private financeService: FinanceService,
    private router: Router
  ) {
    this.finance = {
      amount: '',
      action_towards_company: '',
      action_performed_at: '',
      user_involved: '',
      description: ''
    };
  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.finance = this.financeService.getSingleFinance(this.id)
      if (!this.finance?.id) {
        this.router.navigateByUrl('/admin/finance/list');
        return;
      }
      this.finance.action_towards_company = this.finance.action_towards_company.toLocaleLowerCase();
    }
    this.loadFinanceFrom();
  }

  // For Load supplier form for add / edit supplier
  private loadFinanceFrom(): void {
    this.financeForm = this.formBuilder.group({
      amount: [this.finance.amount, Validators.required],
      action_towards_company: [this.finance.action_towards_company, Validators.required],
      action_performed_at: [this.id ? formatDate(this.finance.action_performed_at, 'yyyy-MM-dd', 'en') : '', Validators.required],
      user_involved: [this.finance.user_involved, Validators.required],
      description: [this.finance.description],
    });
  }

  onSubmit() {
    this.selectSubmitted = true;

    if (this.financeForm.valid && this.selectSubmitted) {
      const obj: IFinance = this.financeForm.value;
      if (this.id) {
        this.financeService.updateFinance(this.id, obj).subscribe(res => {
          this.router.navigateByUrl('admin/finance/list');
        });
      } else {
        this.financeService.addFinance(obj).subscribe(res => {
          this.router.navigateByUrl('admin/finance/list');
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
