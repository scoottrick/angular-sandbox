import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'sb-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  @Input() menuItems: { name: string }[];
  @ContentChild('menuHeaderTemplate') menuHeaderTemplate: TemplateRef<any>;
  constructor() {}

  ngOnInit(): void {}
}
