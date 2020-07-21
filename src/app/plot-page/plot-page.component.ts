import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plot-page',
  templateUrl: './plot-page.component.html',
  styleUrls: ['./plot-page.component.scss']
})
export class PlotPageComponent {
  public gets: number = 0;
  private _mockData: any = {};
  constructor(private http: HttpClient) {}

  getMockData(): void {
    this.http.get('http://localhost:3000/mockdata').subscribe((d) => {
      console.log(d);
      this._mockData = d;
      this.gets += 1;
    });
  }

  get mockData(): string {
    return JSON.stringify(this._mockData);
  }
}
