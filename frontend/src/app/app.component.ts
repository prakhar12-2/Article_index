import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MainComponent],
  //templateUrl: './app.component.html',
  template:`
  <app-main></app-main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Displayer';
}
