import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plot-page',
  templateUrl: './plot-page.component.html',
  styleUrls: ['./plot-page.component.scss']
})
export class PlotPageComponent {
  public gets: number = 0;
  public length: number = 1200;
  public mockData: any = {};
  public mockStatus: string = '';
  public graph = {
    data: [
      {
        x: [],
        y: [],
        type: 'scatter',
        mode: 'lines+points',
        marker: { color: 'red' }
      }
    ],
    layout: {
      width: 800,
      height: 640,
      yaxis: {
        range: [0, 14],
        title: 'Number of Items in Stock'
      },
      title: 'A Fancy Plot'
    }
  };

  constructor(private http: HttpClient) {}

  getMockData(): void {
    this.http
      .get(`http://localhost:3000/mockdata/${this.length}`)
      .subscribe((d) => {
        console.log(d);
        this.mockData = d;
        this.graph.data[0].x = this.mockData.x;
        this.graph.data[0].y = this.mockData.y;
        this.mockStatus = JSON.stringify(this.mockData, null, 2);
        this.gets += 1;
      });
  }
}
