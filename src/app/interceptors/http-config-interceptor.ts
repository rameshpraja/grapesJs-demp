import { Injectable, NgZone } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { LoadingService } from "../services/loading.service";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(
    private loadingService: LoadingService,
    private zone: NgZone,
    private notificationService: ToastrService
  ) { }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    this.requests.splice(i, 1);

    if (this.requests.length === 0) {
      this.loadingService.isLoading$.next(false);
    }
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requests.push(request);
    if (this.requests.length === 1) {
      this.loadingService.isLoading$.next(true);
    }

    // request = request.clone({ headers: request.headers.set('x-linkname', 'trendifly.globefunction.com') });

    request = request.clone({
      headers: request.headers.set("Accept", "application/json"),
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.removeRequest(request);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.removeRequest(request);
        let heading = '';
        switch (error.status) {
          case 400:
            heading = 'Bad Request';
            break;
          case 401:
            heading = 'Unable to authenticate. Please log out and log back in.'
            break;
          case 403:
            heading = 'Forbidden Error';  // message: FORBIDDEN
            break;
          case 404:
            heading = 'Page Not Found'; // message: NOT_FOUND
            break;
          case 409:
            heading = 'Invalid Request Error'; // message: NOT_FOUND
            break;
          case 500:
            heading = 'Internal Server Error	';  // message: INTERNAL_SERVER_ERROR
            break;
          case 503:
            heading = 'Service Unavailable Error';  // message: SERVICE_UNAVAILABLE
            break;
          case 0:
            heading = 'Http failure response';
            break;
          default:
            heading = 'Unknown Error';
            break;
        }
        if (heading === '') {
          heading = 'Unknown error';
        }
        console.log(error)
        this.notificationService.error(error.error.error.message, heading, {
          timeOut: 3000,
        });
        return throwError(error);
      })
    );
  }
}
