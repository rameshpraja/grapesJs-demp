import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trendifly';
  isSpinnerShow = false;
  constructor(
    public loadingService: LoadingService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe(res => {
      this.isSpinnerShow = res;
      this.cdr.detectChanges();
    });
  }
}
