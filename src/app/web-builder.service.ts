import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class WebBuilderService {
  html: any;
  css: any;
  js: any;
  constructor(private sanitizer: DomSanitizer) {}

  save(html: any, css: any) {
    this.html = this.sanitizer.bypassSecurityTrustHtml(
      html + '<style>' + css + '</style>'
    );
    console.log(this.html);
  }
}
