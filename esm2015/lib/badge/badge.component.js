import { Component, Input } from '@angular/core';
export class BadgeComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L3JfYW5kX2QvdnNvLWFuZ3VsYXItbGliL3Byb2plY3RzL25neC1wcml2YXRlLWNvbXBvbmVudHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN6RCxNQUFNLE9BQU8sY0FBYztJQUt6QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw2RkFBcUM7O2FBRXRDOzs7O29CQUdFLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBDb2xvclR5cGUgPSAnd2FybicgfCAnc3VjY2VzcycgfCAnZXJyb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYmFkZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYWRnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBDb2xvclR5cGU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59Il19