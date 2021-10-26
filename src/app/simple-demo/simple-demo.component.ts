import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AboutPages,
  boilerPlate,
  ContactPages,
  element,
  Features,
  Headers,
  layout,
} from '../utils/section';
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
          'https://cdnjs.cloudflare.com/ajax/libs/jquery.gridster/0.5.6/jquery.gridster.css',
        ],
        scripts: [
          'https://cdnjs.cloudflare.com/ajax/libs/jquery.gridster/0.5.6/jquery.gridster.js',
          'https://code.jquery.com/jquery-2.2.4.min.js',
        ],
      },
      traitManager: {
        appendTo: '.traits-container',
      },
      selectorManager: {
        appendTo: '.styles-container',
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
    });
    this.undoManager = this.editor.UndoManager;
    this.blockManager = this.editor.BlockManager;

    // this.editor.addComponents(`
    // <link
    //   rel="stylesheet"
    //   type="text/css"
    //   href="https://cdnjs.cloudflare.com/ajax/libs/jquery.gridster/0.5.6/jquery.gridster.css"
    // />
    // <script
    //   type="text/javascript"
    //   src="https://code.jquery.com/jquery-2.2.4.min.js"
    // ></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.gridster/0.5.6/jquery.gridster.js"></script>
    // <script type="text/javascript">
    //   $(function () {
    //     $('.gridster ul').gridster({
    //       widget_margins: [10, 10],
    //       widget_base_dimensions: [140, 140],
    //     });
    //   });
    // </script>
    // <style type="text/css">
    //   li {
    //     background-color: hotpink;
    //   }
    // </style>
  
    // <div class="gridster">
    //   <ul>
    //     <li data-row="1" data-col="1" data-sizex="1" data-sizey="1"></li>
    //     <li data-row="2" data-col="1" data-sizex="1" data-sizey="1"></li>
    //     <li data-row="3" data-col="1" data-sizex="1" data-sizey="1"></li>

    //     <li data-row="1" data-col="2" data-sizex="2" data-sizey="1"></li>
    //     <li data-row="2" data-col="2" data-sizex="2" data-sizey="2"></li>

    //     <li data-row="1" data-col="4" data-sizex="1" data-sizey="1"></li>
    //     <li data-row="2" data-col="4" data-sizex="2" data-sizey="1"></li>
    //     <li data-row="3" data-col="4" data-sizex="1" data-sizey="1"></li>

    //     <li data-row="1" data-col="5" data-sizex="1" data-sizey="1"></li>
    //     <li data-row="3" data-col="5" data-sizex="1" data-sizey="1"></li>

    //     <li data-row="1" data-col="6" data-sizex="1" data-sizey="1"></li>
    //     <li data-row="2" data-col="6" data-sizex="1" data-sizey="2"></li>
    //   </ul>
    // </div>


    // `);
    // Make private already inserted selectors
    this.editor.SelectorManager.getAll().each((selector: any) =>
      selector.set('private', 1)
    );

    // All new selectors will be private
    this.editor.on('selector:add', (selector: any) =>
      selector.set('private', 1)
    );

    const layoutSection = layout;
    layoutSection.forEach((item, i) => {
      this.blockManager.add('wrapper' + i, {
        category: 'wrapper',
        label: 'section ' + (i + 1),
        content: item,
        attributes: {
          draggable: true,
          name: 'mytable',
        },
      });
    });

    const section = boilerPlate;
    section.forEach((item, i) => {
      this.blockManager.add(item[1], {
        category: 'layout',
        label: item[1],
        content: item[0],
        attributes: {
          draggable: false,
          name: 'mytable',
        },
      });
    });

    const elementSection = element;
    elementSection.forEach((item, i) => {
      this.blockManager.add('Element' + i, {
        category: 'Elements',
        label: item[1],
        content: item[0],
        attributes: {
          draggable: true,
          name: 'mytable',
        },
      });
    });

    const headerSection = Headers;
    headerSection.forEach((item, i) => {
      this.blockManager.add('header' + i, {
        category: 'Header',
        label: 'Header ' + (i + 1),
        content: item,
        attributes: {
          draggable: false,
        },
      });
    });

    const featuresPage = Features;
    featuresPage.forEach((item, i) => {
      this.blockManager.add('feature' + i, {
        category: 'Feature',
        label: 'Feature ' + (i + 1),
        content: item,
        attributes: {
          draggable: false,
        },
      });
    });

    const aboutPages = AboutPages;
    aboutPages.forEach((item, i) => {
      this.blockManager.add('about' + i, {
        category: 'About',
        label: 'About ' + (i + 1),
        content: item,
        attributes: {
          draggable: false,
        },
      });
    });

    const contactPages = ContactPages;
    contactPages.forEach((item, i) => {
      this.blockManager.add('contact' + i, {
        category: 'Contact',
        label: 'Contact ' + (i + 1),
        content: item,
        attributes: {
          draggable: false,
        },
      });
    });

    this.editor.on('component:selected', (args: any) => {
      args.set({
        // selectable: false,
        hoverable: true,
        resizable: true,
      });
    });
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
    const css =
      this.editor.getCss() +
      `.grid-item{
     border: none !important;
 }`;
    this.save();
    console.log(html);
    console.log(css);
    this.router.navigate(['/', 'preview']);
  }

  save(): void {
    const css =
      this.editor.getCss() +
      `.grid-item{
       border: none !important;
   }`;

    this.webBuilderService.save(this.editor.getHtml(), css);
  }
}
