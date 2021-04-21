import { ɵɵdefineInjectable, Injectable, Component, NgModule, Input } from '@angular/core';

class NgxPrivateComponentsService {
    constructor() { }
}
NgxPrivateComponentsService.ɵprov = ɵɵdefineInjectable({ factory: function NgxPrivateComponentsService_Factory() { return new NgxPrivateComponentsService(); }, token: NgxPrivateComponentsService, providedIn: "root" });
NgxPrivateComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxPrivateComponentsService.ctorParameters = () => [];

class NgxPrivateComponentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
NgxPrivateComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ngx-private-components',
                template: `
    <p>
      ngx-private-components works!
    </p>
  `
            },] }
];
NgxPrivateComponentsComponent.ctorParameters = () => [];

class NgxPrivateComponentsModule {
}
NgxPrivateComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxPrivateComponentsComponent],
                imports: [],
                exports: [NgxPrivateComponentsComponent]
            },] }
];

class BadgeComponent {
    constructor() { }
    ngOnInit() {
    }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-badge',
                template: "<p>badge works!</p>\n<div class=\"badge badge-{{color}}\">\n    {{label}}\n</div>",
                styles: [".badge{border-radius:30px;padding:4px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.badge-success{background:green}.badge-error{background:red}.badge-warn{background:orange}"]
            },] }
];
BadgeComponent.ctorParameters = () => [];
BadgeComponent.propDecorators = {
    label: [{ type: Input }],
    color: [{ type: Input }]
};

class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-button',
                template: "<p>button works!</p>\n<button>\n    {{label}}\n</button>",
                styles: ["button{background:#2196f3;color:#fff;font-size:1.2em;padding:16px}"]
            },] }
];
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    label: [{ type: Input }]
};

/*
 * Public API Surface of ngx-private-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeComponent, ButtonComponent, NgxPrivateComponentsComponent, NgxPrivateComponentsModule, NgxPrivateComponentsService };
//# sourceMappingURL=ngx-private-components.js.map
