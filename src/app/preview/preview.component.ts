import { Component, OnInit } from '@angular/core';
import { WebBuilderService } from '../web-builder.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(
    public webBuilderService: WebBuilderService
  ) { }

  ngOnInit(): void {
  }

}
