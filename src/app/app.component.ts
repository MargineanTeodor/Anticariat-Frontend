import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anticariat';
  stock: any = {};
  private webSocket: WebSocket;
  constructor() {
    this.webSocket = new WebSocket('ws://localhost:8082/stock');
    this.webSocket.onmessage = (event) => {
      this.stock = JSON.parse(event.data)
    };
}}
