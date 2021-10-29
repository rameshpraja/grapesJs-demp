import { Component, OnInit } from '@angular/core';
import { WebBuilderService } from '../web-builder.service';
import { iframely } from '@iframely/embed.js';
@Component({
  selector: 'app-preview',
  template: `<div [innerHtml]="webBuilderService.html"></div>`,
})
export class PreviewComponent implements OnInit {
  constructor(public webBuilderService: WebBuilderService) {
    iframely.load();
  }

  ngOnInit(): void {}
}
