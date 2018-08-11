import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take, scan, finalize, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
    redirecting = {
        value: false,
    };
    timer$ = interval(1000).pipe(
        startWith(0),
        take(5),
        scan((num) => num - 1, 5),
        finalize(() => {
            window.location.assign(`${window.location.protocol}/login`);
        })
    );
}
