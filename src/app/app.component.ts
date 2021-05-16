import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'my-app';

  public upperCaseTitle(): string {
    return this.title.toUpperCase();
  }
}
