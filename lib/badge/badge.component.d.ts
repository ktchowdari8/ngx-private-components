import { OnInit } from '@angular/core';
export declare type ColorType = 'warn' | 'success' | 'error';
export declare class BadgeComponent implements OnInit {
    label: string;
    color: ColorType;
    constructor();
    ngOnInit(): void;
}
