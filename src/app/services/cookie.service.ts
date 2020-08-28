import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class CookiesService {
    constructor(private cookieService: CookieService) { }

    set(name: string, value: any): void {
        this.cookieService.put(name, JSON.stringify(value))
    }

    get(name): any {
        return this.cookieService.get(name);
    }
}