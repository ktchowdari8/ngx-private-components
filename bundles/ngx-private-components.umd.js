(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-private-components', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-private-components'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var NgxPrivateComponentsService = /** @class */ (function () {
        function NgxPrivateComponentsService() {
        }
        return NgxPrivateComponentsService;
    }());
    NgxPrivateComponentsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxPrivateComponentsService_Factory() { return new NgxPrivateComponentsService(); }, token: NgxPrivateComponentsService, providedIn: "root" });
    NgxPrivateComponentsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgxPrivateComponentsService.ctorParameters = function () { return []; };

    var NgxPrivateComponentsComponent = /** @class */ (function () {
        function NgxPrivateComponentsComponent() {
        }
        NgxPrivateComponentsComponent.prototype.ngOnInit = function () {
        };
        return NgxPrivateComponentsComponent;
    }());
    NgxPrivateComponentsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-ngx-private-components',
                    template: "\n    <p>\n      ngx-private-components works!\n    </p>\n  "
                },] }
    ];
    NgxPrivateComponentsComponent.ctorParameters = function () { return []; };

    var NgxPrivateComponentsModule = /** @class */ (function () {
        function NgxPrivateComponentsModule() {
        }
        return NgxPrivateComponentsModule;
    }());
    NgxPrivateComponentsModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [NgxPrivateComponentsComponent],
                    imports: [],
                    exports: [NgxPrivateComponentsComponent]
                },] }
    ];

    var BadgeComponent = /** @class */ (function () {
        function BadgeComponent() {
        }
        BadgeComponent.prototype.ngOnInit = function () {
        };
        return BadgeComponent;
    }());
    BadgeComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-badge',
                    template: "<p>badge works!</p>\n<div class=\"badge badge-{{color}}\">\n    {{label}}\n</div>",
                    styles: [".badge{border-radius:30px;padding:4px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.badge-success{background:green}.badge-error{background:red}.badge-warn{background:orange}"]
                },] }
    ];
    BadgeComponent.ctorParameters = function () { return []; };
    BadgeComponent.propDecorators = {
        label: [{ type: i0.Input }],
        color: [{ type: i0.Input }]
    };

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        ButtonComponent.prototype.ngOnInit = function () {
        };
        return ButtonComponent;
    }());
    ButtonComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-button',
                    template: "<p>button works!</p>\n<button>\n    {{label}}\n</button>",
                    styles: ["button{background:#2196f3;color:#fff;font-size:1.2em;padding:16px}"]
                },] }
    ];
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        label: [{ type: i0.Input }]
    };

    /*
     * Public API Surface of ngx-private-components
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BadgeComponent = BadgeComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.NgxPrivateComponentsComponent = NgxPrivateComponentsComponent;
    exports.NgxPrivateComponentsModule = NgxPrivateComponentsModule;
    exports.NgxPrivateComponentsService = NgxPrivateComponentsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-private-components.umd.js.map
