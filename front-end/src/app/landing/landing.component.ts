import { Component, OnInit } from '@angular/core';
import { interval, BehaviorSubject } from 'rxjs';
import { take, map, finalize } from 'rxjs/operators';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
    redirecting = {
        value: false,
    };
    _source$ = interval(1000).pipe(take(5));
    timer$ = new BehaviorSubject(0).pipe(
        map((v) => 5 - v),
        finalize(() => {
            window.location.assign('https://google.fi');
        })
    );

    ngOnInit() {
        const subSource = this._source$.subscribe(this.timer$);
    }
}
