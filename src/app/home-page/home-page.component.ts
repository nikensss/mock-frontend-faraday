import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public echoes: number = 0;
  public echoStatus: string = '';
  constructor(private http: HttpClient) {}

  echo() {
    this.http.get('http://localhost:3000/echo').subscribe((d) => {
      console.log(d);
      this.echoStatus = JSON.stringify(d);
      this.echoes += 1;
    });
  }
}
