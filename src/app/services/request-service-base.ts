import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { throwError } from "rxjs";
import { Router } from "@angular/router";

const BASE_URL = environment.API_BASE_URL;
@Injectable({
  providedIn: "root",
})
export class RequestServiceBase {
  constructor(private http: HttpClient, private parentRouter: Router) {}

  /**
   * Executes a get http call to backend
   * @param path path without base url
   * @param body body object
   */
  public httpGet(path: string) {
    return this.http.get(`${BASE_URL}${path}`).pipe(
      map(this.handleResponse),
      catchError((err) => this.handleErrorBase(err))
    );
  }
  /**
   * Executes a get http call to backend
   * @param path path without base url
   * @param body body object
   */
  public httpGetImage(path: string) {
    return this.http
      .get(`${BASE_URL}${path}`, { responseType: "text" })
      .pipe((data) => data);
  }

  /**
   * Executes a post http call to backend
   * @param path path without base url
   * @param body body object
   */
  public httpPost(path: string, body = {}) {
    return this.http
      .post(`${BASE_URL}${path}`, body, this.getHttpOptions())
      .pipe(
        map(this.handleResponse),
        catchError((err) => this.handleErrorBase(err))
      );
  }

  /**
   * Executes a post http call to backend
   * @param path path without base url
   * @param body body object
   */
  public httpPostImage(path: string, body = {}) {
    return this.http
      .post(`${BASE_URL}${path}`, body, {})
      .pipe(map(this.handleResponse));
  }

  /**
   * Executes a put http call to backend
   * @param path path without base url
   * @param body body object
   */
  public httpPut(path: string, body = {}) {
    //return this.http.put(`${BASE_URL}${path}`, { data: body }, this.getHttpOptions()).pipe(map(this.handleResponse));
    return this.http
      .put(`${BASE_URL}${path}`, body, this.getHttpOptions())
      .pipe(
        map(this.handleResponse),
        catchError((err) => this.handleErrorBase(err))
      );
  }

  public httpPatch(path: string, body = {}) {
    //return this.http.put(`${BASE_URL}${path}`, { data: body }, this.getHttpOptions()).pipe(map(this.handleResponse));
    return this.http
      .patch(`${BASE_URL}${path}`, body, this.getHttpOptions())
      .pipe(
        map(this.handleResponse),
        catchError((err) => this.handleErrorBase(err))
      );
  }

  /**
   * Executes a delete http call to backend
   * @param path path without base url
   * @param body body object
   */
  public httpDelete(path: string) {
    return this.http.delete(`${BASE_URL}${path}`, this.getHttpOptions()).pipe(
      map(this.handleResponse),
      catchError((err) => this.handleErrorBase(err))
    );
  }

  /**
   * Returns httpOptions object
   */
  private getHttpOptions(jsonHeaders: boolean = true) {
    // const token = sessionStorage.getItem('authToken');

    // if (token) {
    //   let httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //       'session_token': sessionStorage.getItem('authToken')
    //     }),
    //   };
    //   return httpOptions;
    // } else {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    //   return httpOptions;
    // }
    return httpOptions;
  }

  /**
   * Http response handler (extracts data object)
   * @param res http response
   */
  private handleResponse(res: any) {
    // if ('data' in res) {
    //   return res.data;
    // }
    return res;
  }

  handleErrorBase(error: any) {
    console.log("error :: ", error);
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error : ${error.error.message}`;
    }
    if (+error.status == 401 || error.status == "401") {
      sessionStorage.removeItem("authToken");
      this.parentRouter.navigate(["/auth/login"]);
    }
    return throwError(errorMessage);
  }
}
