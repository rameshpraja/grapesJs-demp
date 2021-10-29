import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { banner, header, product } from '../utils/section';
import { WebBuilderService } from '../web-builder.service';

declare var grapesjs: any;

@Component({
  selector: 'app-simple-demo',
  templateUrl: './simple-demo.component.html',
  styleUrls: ['./simple-demo.component.scss'],
})
export class SimpleDemoComponent implements OnInit {
  editor: any;
  undoManager: any;
  blockManager: any = [];
  constructor(
    public webBuilderService: WebBuilderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: '100vh',
      width: 'auto',
      allowScripts: 1,
      // Disable the storage manager for the moment
      storageManager: true,
      // Avoid any default panel
      panels: {
        defaults: [
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [
              {
                id: 'show-traits',
                active: true,
                label: 'Traits',
                command: 'show-traits',
                togglable: false,
              },
            ],
          },
        ],
      },
      canvas: {
        styles: [
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        ],
        scripts: [
          'https://code.jquery.com/jquery-3.3.1.slim.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js',
        ],
      },
      traitManager: {
        appendTo: '.traits-container',
      },
      selectorManager: {
        appendTo: '.styles-container',
      },
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'heading', // id is mandatory
            label: '<b>Heading</b>', // You can use HTML/SVG inside labels
            attributes: {
              class: 'gjs-block-section',
              href: '/test',
            },
            content: `<section>
              <h1 style="text-align: center;margin: 40px auto;">This is a simple title</h1>`,
          },
          {
            id: 'description',
            label: 'Description',
            content:
              '<div data-gjs-type="text" style="text-align: center;margin: 10px auto;">Insert your text here</div>',
          },
          {
            id: 'image',
            label: 'Image',
            select: true,
            content: { type: 'image' },
            activate: true,
          },
          {
            id: 'banner',
            label: 'Banner',
            content: `<style>.banner {
              width: 100%;
              height: 600px;
              background-image: url(https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
              background-position: center center;
              background-size: cover;
            }</style></style><div class="banner"></div>`,
          },
        ],
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [
          {
            name: 'Dimension',
            open: false,
            // Use built-in properties
            buildProps: ['width', 'flex', 'font-size'],
            // Use `properties` to define/override single property
            properties: [
              {
                // Type of the input,
                // options: integer | radio | select | color | slider | file | composite | stack
                type: 'integer',
                name: 'The width', // Label for the property
                property: 'width', // CSS property (if buildProps contains it will be extended)
                units: ['px'], // Units, available only for 'integer' types
                defaults: 'auto', // Default value
                min: 0, // Min value, available only for 'integer' types
                max: 100,
              },
            ],
          },
          {
            name: 'Extra',
            open: false,
            buildProps: ['background-color', 'box-shadow', 'custom-prop'],
            properties: [
              {
                id: 'custom-prop',
                name: 'Custom Label',
                property: 'font-size',
                type: 'select',
                defaults: '32px',
                // List of options, available only for 'select' and 'radio'  types
                options: [
                  { value: '12px', name: 'Tiny' },
                  { value: '18px', name: 'Medium' },
                  { value: '32px', name: 'Big' },
                ],
              },
            ],
          },
        ],
      },
    });
    this.undoManager = this.editor.UndoManager;
    this.blockManager = this.editor.BlockManager;
    // Make private already inserted selectors
    this.editor.SelectorManager.getAll().each((selector: any) =>
      selector.set('private', 1)
    );

    // All new selectors will be private
    this.editor.on('selector:add', (selector: any) =>
      selector.set('private', 1)
    );

    const Header = header;
    Header.forEach((item, i) => {
      this.blockManager.add(item[1], {
        category: 'Header',
        label: item[1],
        content: item[0],
      });
    });

    const Banner = banner;
    Banner.forEach((item, i) => {
      this.blockManager.add(item[1], {
        category: 'Banner',
        label: item[1],
        content: item[0],
      });
    });

    const Product = product;
    Product.forEach((item, i) => {
      this.blockManager.add(item[1], {
        category: 'Product',
        label: item[1],
        content: item[0],
      });
    });

    // this.editor.on('component:selected', (args: any) => {
    //   args.set({
    //     // selectable: false,
    //     hoverable: true,
    //     resizable: true,
    //   });
    // });
  }

  setDevice(device: string) {
    console.log(this.editor.DeviceManager.getDevices());
    return this.editor.setDevice(device);
  }

  undo(): void {
    return this.undoManager.undo();
  }

  redo(): void {
    return this.undoManager.redo();
  }

  clear(): void {
    this.editor.runCommand('core:canvas-clear');
  }

  view(): void {
    const html = this.editor.getHtml();
    // const css = this.editor.getCss();
    const css = this.editor.getCss();
    const js = this.editor.getJs();
    this.save();
    console.log(html);
    console.log(css);
    console.log(js);
    this.router.navigate(['/', 'preview']);
  }

  save(): void {
    const html = this.editor.getHtml();
    console.log(html);
    
    // const css = this.editor.getCss();
    const css = this.editor.getCss();
    const js = this.editor.getJs();

    this.webBuilderService.save(html, css, js);
  }
}
