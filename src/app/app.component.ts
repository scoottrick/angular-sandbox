import { Component } from '@angular/core';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-sandbox';
  menus: { name: string }[] = [
    'File',
    'Edit',
    'View',
    'Window',
  ].map((name) => ({ name }));
}
