import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'e2eDemo';
  public points: number = 0;

  public addPoints(): void {
    this.points++;
  }

  public resetPoints(): void {
    this.points = 0;
  }
}
