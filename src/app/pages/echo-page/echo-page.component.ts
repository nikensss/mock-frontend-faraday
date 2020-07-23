import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-echo-page',
  templateUrl: './echo-page.component.html',
  styleUrls: ['./echo-page.component.scss']
})
export class EchoPageComponent {
  public echoes: number = 0;
  public echoStatus: string = '';
  constructor(private http: HttpClient) {}

  echo() {
    this.http
      .get(`http://localhost:3000/echo/${new Date().getTime()}`)
      .subscribe((d: any) => {
        if (!d.msg) {
          this.echoStatus = '';
          return;
        }

        this.echoStatus = JSON.stringify(d);
        this.echoes += 1;
      });
  }
}
