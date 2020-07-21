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
        mode: 'lines+points'
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

        const data = {
          x: this.mockData.x,
          y: this.mockData.y,
          type: 'scatter',
          mode: 'lines+points'
        };
        this.graph.data.push(data);

        this.mockStatus = JSON.stringify(this.mockData, null, 2);
        this.gets += 1;
      });
  }

  clearPlot(): void {
    this.graph.data.splice(0);
  }
}
