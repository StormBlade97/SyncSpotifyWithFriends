import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { concatAll, map, filter, takeUntil, takeLast, reduce } from 'rxjs/operators';

const WS_PROTOCOL = window.location.protocol === 'http:' ? 'ws:' : 'wss:';

// const reduceToArray = reduce((a, b) => a.concat(b), []);

@Injectable({
  providedIn: 'root'
})
export class SocketControllerService  {

  private socket: WebSocket;
  private socketMessages$: Observable<object[]>;
  private socketErrors$: Observable<string[]>;

  constructor() {
    console.log('I am the Socket Controller Service constructor');
    this.socket = new WebSocket(`${WS_PROTOCOL}//${window.location.host}/ws/`);

    fromEvent(this.socket, 'open')
      .subscribe(() => console.log(`WebSocket Connection opened to ${this.socket.url}`));

    const parseJsonOrError = (string) => {
      try {
        return JSON.parse(string);
      } catch (e) {
        return string;
      }
    };

    const convertedMessages$ = fromEvent(this.socket, 'message')
      .pipe(
        map((res: any) => res.data),
        map(parseJsonOrError),
        takeUntil(
          fromEvent(this.socket, 'close'))
      );

    this.socketMessages$ = convertedMessages$
      .pipe(filter(obj => typeof obj === 'object'));
    this.socketErrors$ = convertedMessages$
      .pipe(filter(obj => typeof obj === 'string'));

    // convertedMessages$.subscribe(console.log);
    this.socketMessages$.subscribe(console.log);
    this.socketErrors$.subscribe(console.error);
  }

  getMessages() {
    return this.socketMessages$;
  }

  getErrors() {
    return this.socketErrors$;
  }

  send(message: string) {
    this.socket.send(message);
  }
}
