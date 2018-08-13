import { Injectable } from '@angular/core';
import * as mockUsers from './mockdata.json';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    data = <any>mockUsers;
    constructor() {}
}
