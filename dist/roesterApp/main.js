(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\twuellner\Documents\Privat\angular\roesterApp\roesterApp\src\main.ts */"zUnb");


/***/ }),

/***/ "0CC8":
/*!*************************************************************!*\
  !*** ./src/app/archiv/archiv-item/archiv-item.component.ts ***!
  \*************************************************************/
/*! exports provided: ArchivItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivItemComponent", function() { return ArchivItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class ArchivItemComponent {
    constructor() {
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEye"];
        this.faAdd = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
    }
    ngOnInit() {
    }
}
ArchivItemComponent.ɵfac = function ArchivItemComponent_Factory(t) { return new (t || ArchivItemComponent)(); };
ArchivItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArchivItemComponent, selectors: [["app-archiv-item"]], inputs: { archivItem: "archivItem" }, decls: 10, vars: 4, consts: [[1, "archivItem"], [1, "name"], [1, "buttonDiv", "push"], [1, "btn", "btn-dark", "buttonOwn"], [1, "fa-lg", 3, "icon"]], template: function ArchivItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.archivItem.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEye);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTrash);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".archivItem[_ngcontent-%COMP%]{\r\n    background-color: var(--secondary-color);\r\n    border-radius: 5px;\r\n    padding: 5%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 90%;\r\n    height: 5%;\r\n    color: white;\r\n    font-size: 4vw;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 5px auto 5px auto;\r\n\r\n}\r\n\r\n.push[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n}\r\n\r\n.buttonDiv[_ngcontent-%COMP%]{\r\n    \r\n\r\n}\r\n\r\n.buttonOwn[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2hpdi1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7OztBQUdBOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoiYXJjaGl2LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcmNoaXZJdGVte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0byA1cHggYXV0bztcclxuXHJcbn1cclxuXHJcbi5wdXNoe1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b25EaXZ7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5idXR0b25Pd257XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchivItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-archiv-item',
                templateUrl: './archiv-item.component.html',
                styleUrls: ['./archiv-item.component.css']
            }]
    }], function () { return []; }, { archivItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B+DH":
/*!*****************************************************************!*\
  !*** ./src/app/archiv/archiv-detail/archiv-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArchivDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivDetailComponent", function() { return ArchivDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _simple_graph_simple_graph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-graph/simple-graph.component */ "SW7M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rating_item_rating_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating-item/rating-item.component */ "puzN");





function ArchivDetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-rating-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isRated", i_r1);
} }
class ArchivDetailComponent {
    constructor() {
        this.ratingBool = [false, false, false, false, false];
    }
    ngOnInit() {
        this.rating2bool();
        console.log(this.ratingBool);
    }
    rating2bool() {
        for (let i = 0; i < this.archivItem.rating; i++) {
            this.ratingBool[i] = true;
        }
    }
}
ArchivDetailComponent.ɵfac = function ArchivDetailComponent_Factory(t) { return new (t || ArchivDetailComponent)(); };
ArchivDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArchivDetailComponent, selectors: [["app-archiv-detail"]], inputs: { archivItem: "archivItem" }, decls: 23, vars: 5, consts: [[1, "archivDetail"], [1, "boxV"], [1, "boxItem", 2, "width", "80%", "height", "30%"], [3, "archivItem"], [1, "boxItem", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "width", "60%"], [4, "ngFor", "ngForOf"], [1, "boxItem"], [3, "isRated"]], template: function ArchivDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-simple-graph", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ArchivDetailComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Datum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Bohne:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("archivItem", ctx.archivItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratingBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.archivItem.dateTime.toLocaleString());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.archivItem.bean);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.archivItem.comments, " ");
    } }, directives: [_simple_graph_simple_graph_component__WEBPACK_IMPORTED_MODULE_1__["SimpleGraphComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _rating_item_rating_item_component__WEBPACK_IMPORTED_MODULE_3__["RatingItemComponent"]], styles: [".archivDetail[_ngcontent-%COMP%]{\r\n    \r\n    color: white;\r\n    background-color: var(--secondary-color);\r\n    height:100%;\r\n    width: 100%;\r\n    \r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid #dddddd;\r\n    text-align: left;\r\n    padding: 8px;\r\n  }\r\n\r\n.boxV[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    height: 100%;\r\n}\r\n\r\n.boxItem[_ngcontent-%COMP%]{\r\n  margin-bottom: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2hpdi1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7QUFFRjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFyY2hpdi1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcmNoaXZEZXRhaWx7XHJcbiAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7ICovXHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGQsIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuXHJcbi5ib3hWe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYm94SXRlbXtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchivDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-archiv-detail',
                templateUrl: './archiv-detail.component.html',
                styleUrls: ['./archiv-detail.component.css']
            }]
    }], function () { return []; }, { archivItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "FT2y":
/*!*************************************************!*\
  !*** ./src/app/services/temperature.service.ts ***!
  \*************************************************/
/*! exports provided: TemperatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureService", function() { return TemperatureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_measurement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/measurement */ "hxC7");




class TemperatureService {
    constructor() {
        this.akGradient = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.temperature = 0;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.statusUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.measures = [];
        this.subject.next({ time: 0, temperature: 0 });
    }
    startMeasure() {
        this.startDate = Date.now();
        this.temperature = 0;
        this.intId = setInterval(() => { this.calcTemperature(); this.calcGradient(); }, 1000);
    }
    stopMeasure() {
        clearInterval(this.intId);
    }
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    calcTemperature() {
        let temp = this.getRandomArbitrary(20, 300);
        let akTime = Date.now() - this.startDate;
        this.subject.next({ time: akTime / 1000, temperature: temp });
        this.measures.push(new _models_measurement__WEBPACK_IMPORTED_MODULE_2__["Measurement"](akTime / 1000, temp));
    }
    resetTemperature() {
        clearInterval(this.intId);
        this.statusUpdate.next("reset");
        // this.subject.next({time : 0, temperature : 0})
    }
    getTemperature() {
        return this.subject;
    }
    calcGradient() {
        let mlen = this.measures.length - 1;
        // console.log(this.measures[mlen]);
        if (mlen > 2) {
            this.akGradient.next((this.measures[mlen].temperature - this.measures[mlen - 1].temperature) /
                (this.measures[mlen].time - this.measures[mlen - 1].time));
        }
    }
}
TemperatureService.ɵfac = function TemperatureService_Factory(t) { return new (t || TemperatureService)(); };
TemperatureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TemperatureService, factory: TemperatureService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemperatureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KWBv":
/*!************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.ts ***!
  \************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






const _c0 = ["sideBarOwn"];
function SideNavComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleIcon(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faBars);
} }
class SideNavComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        this.showIcon = true;
    }
    ngOnInit() {
    }
    openNav() {
    }
    closeNav() {
        this.renderer.setStyle(this.sideBar.nativeElement, 'width', '0');
    }
    toggleIcon() {
        this.showIcon = !this.showIcon;
        // if(!this.showIcon){
        //   setTimeout(() => {
        //       this.showIcon = !this.showIcon;
        //   }, 50);
        // } else {
        //     this.showIcon = !this.showIcon;
        // }
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], viewQuery: function SideNavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sideBar = _t.first);
    } }, decls: 22, vars: 1, consts: [[2, "overflow", "visible", "height", "50px"], ["class", "btn btn-dark buttonOwn", "data-toggle", "collapse", "data-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 3, "click", 4, "ngIf"], ["id", "collapseExample", 1, "collapse"], [1, "nav", "flex-column", "bg-dark", "sideBarOwn"], [1, "nav-item"], [1, "btn-group", "dropright"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-dark", "dropdown-toggle"], [1, "dropdown-menu", "bg-dark", "dropdownOwn"], ["type", "button", "routerLink", "/roasting", "routerLinkActive", "active", 1, "btn", "btn-dark"], ["type", "button", "routerLink", "/archiv", 1, "btn", "btn-dark"], [1, "badge", "badge-dark"], ["type", "button", "routerLink", "/option", 1, "btn", "btn-dark"], [1, "nav-item", 2, "border-top", "1px solid white"], ["href", "#", "type", "button", "data-toggle", "collapse", "href", "#collapseExample", 1, "btn", "btn-dark", 3, "click"], ["data-toggle", "collapse", "data-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-dark", "buttonOwn", 3, "click"], [3, "icon"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_button_1_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " R\u00F6stungen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Neue R\u00F6stung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Alle R\u00F6stungen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Einstellungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_a_click_20_listener() { return ctx.toggleIcon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Men\u00FC schlie\u00DFen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".sideBarOwn[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    width: 140px;\r\n    height: 200px;\r\n    text-align: center;\r\n    position: relative;\r\n    z-index: 1;    \r\n}\r\n\r\n.buttonOwn[_ngcontent-%COMP%]{\r\n    \r\n    width: 100%;\r\n    height: 90%;\r\n    \r\n    text-align: center;\r\n    margin: 5%;\r\n}\r\n\r\n.collapsing[_ngcontent-%COMP%]{\r\n    transition-duration: 0s;\r\n    z-index: 1; \r\n    overflow: visible;\r\n}\r\n\r\n.dropdownOwn[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    width: 180px;\r\n    text-align: center;\r\n    \r\n    \r\n    position: relative;\r\n\r\n   \r\n}\r\n\r\n[_nghost-%COMP%]{\r\n    \r\n    \r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7OztBQUd0Qjs7QUFDQTtJQUNJO3dCQUNvQjtJQUNwQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUNBOzs7Ozs7S0FNSyIsImZpbGUiOiJzaWRlLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zaWRlQmFyT3due1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7ICAgIFxyXG59XHJcblxyXG4uYnV0dG9uT3due1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIC8qIHotaW5kZXg6IDE7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcbi5jb2xsYXBzaW5ne1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XHJcbiAgICB6LWluZGV4OiAxOyBcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duT3due1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgLyogei1pbmRleDogMTsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgIFxyXG59XHJcbjpob3N0e1xyXG4gICAgLyogei1pbmRleDogMTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAqL1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgLyogei1pbmRleDogMTsgKi9cclxufSAgIFxyXG4vKiA6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7IFxyXG59ICAgKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav',
                templateUrl: './side-nav.component.html',
                styleUrls: ['./side-nav.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { sideBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sideBarOwn', { static: true }]
        }] }); })();


/***/ }),

/***/ "MyLd":
/*!********************************************!*\
  !*** ./src/app/archiv/archiv.component.ts ***!
  \********************************************/
/*! exports provided: ArchivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivComponent", function() { return ArchivComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_archivItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/archivItem */ "pRzg");
/* harmony import */ var _models_measurement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/measurement */ "hxC7");
/* harmony import */ var _archiv_item_archiv_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archiv-item/archiv-item.component */ "0CC8");
/* harmony import */ var _archiv_detail_archiv_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./archiv-detail/archiv-detail.component */ "B+DH");






class ArchivComponent {
    constructor() {
        this.archiv = [new _models_archivItem__WEBPACK_IMPORTED_MODULE_1__["ArchivItem"]("Testname", [new _models_measurement__WEBPACK_IMPORTED_MODULE_2__["Measurement"](0, 40), new _models_measurement__WEBPACK_IMPORTED_MODULE_2__["Measurement"](1, 45)], 3, "no comments", "testBean", new Date())];
        this.akArchivItem = this.archiv[0];
    }
    ngOnInit() {
    }
}
ArchivComponent.ɵfac = function ArchivComponent_Factory(t) { return new (t || ArchivComponent)(); };
ArchivComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArchivComponent, selectors: [["app-archiv"]], decls: 9, vars: 2, consts: [[1, "archiv"], [1, "boxV"], [2, "width", "70%"], [3, "archivItem"], [2, "width", "30%"]], template: function ArchivComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Archiv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-archiv-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-archiv-detail", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("archivItem", ctx.akArchivItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("archivItem", ctx.akArchivItem);
    } }, directives: [_archiv_item_archiv_item_component__WEBPACK_IMPORTED_MODULE_3__["ArchivItemComponent"], _archiv_detail_archiv_detail_component__WEBPACK_IMPORTED_MODULE_4__["ArchivDetailComponent"]], styles: [".boxV[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--primary-color);\r\n}\r\n.archiv[_ngcontent-%COMP%]{\r\n    background-color: var(--primary-color);\r\n    color:white;\r\n    height:100%;\r\n    width: 100%;\r\n    text-align: center;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2hpdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoiYXJjaGl2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94VntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG4uYXJjaGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchivComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-archiv',
                templateUrl: './archiv.component.html',
                styleUrls: ['./archiv.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SW7M":
/*!*****************************************************************************!*\
  !*** ./src/app/archiv/archiv-detail/simple-graph/simple-graph.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SimpleGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleGraphComponent", function() { return SimpleGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_datapoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/datapoint */ "tg/K");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");




class SimpleGraphComponent {
    constructor() {
        this.ChartOptions = {
            animation: {
                duration: 0
            },
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            max: 500,
                            min: 0
                        }
                    }],
            }
        };
        this.ChartColors = [{ borderColor: "white" }];
    }
    ngOnInit() {
        console.log(this.archivItem);
        this.ChartData = [
            { data: this.measurement2data(this.archivItem.data), label: this.archivItem.name, type: "line", borderWidth: 0.5, pointBackgroundColor: "white" },
        ];
    }
    measurement2data(measures) {
        let datapoints = [];
        measures.forEach(element => {
            datapoints.push(new src_app_models_datapoint__WEBPACK_IMPORTED_MODULE_1__["Datapoint"](element.time, element.temperature));
        });
        return datapoints;
    }
}
SimpleGraphComponent.ɵfac = function SimpleGraphComponent_Factory(t) { return new (t || SimpleGraphComponent)(); };
SimpleGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleGraphComponent, selectors: [["app-simple-graph"]], inputs: { archivItem: "archivItem" }, decls: 2, vars: 5, consts: [[1, "graph"], ["baseChart", "", 3, "datasets", "options", "chartType", "colors", "legend"]], template: function SimpleGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.ChartData)("options", ctx.ChartOptions)("chartType", "scatter")("colors", ctx.ChartColors)("legend", false);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: [".graph[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    width: 100%; \r\n    height: 100%;\r\n    background-color: var(--secondary-color);\r\n    border: 2px solid white;\r\n    border-radius: 5px;\r\n    \r\n}\r\n.graph[_ngcontent-%COMP%]:hover{\r\n    background-color: var(--primary-color);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9COztJQUVwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdDQUF3QztJQUN4Qyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDIiwiZmlsZSI6InNpbXBsZS1ncmFwaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXBoe1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qIG1hcmdpbjogMTAlOyAqL1xyXG59XHJcbi5ncmFwaDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple-graph',
                templateUrl: './simple-graph.component.html',
                styleUrls: ['./simple-graph.component.css']
            }]
    }], function () { return []; }, { archivItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'roesterApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "box"], [1, "stretchDiv"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    align-self:stretch;\r\n    \r\n}\r\n\r\n.box3[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    align-self:stretch;\r\n    \r\n}\r\n\r\n.stretchDiv[_ngcontent-%COMP%]{\r\n    align-self: stretch;\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]{\r\n    display: flex;\r\n  flex-wrap: wrap;\r\n  height: 80%;\r\n}\r\n\r\n.flexItem1[_ngcontent-%COMP%]{\r\n    width:80%;\r\n    height: 100%\r\n}\r\n\r\n.flexItem2[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    height: 100%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0VBQ2YsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtJQUNJLFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGFsaWduLXNlbGY6c3RyZXRjaDtcclxuICAgIC8qIGhlaWdodDogMTAlOyAqL1xyXG59XHJcblxyXG4uYm94M3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1zZWxmOnN0cmV0Y2g7XHJcbiAgICAvKiBoZWlnaHQ6IDEwJTsgKi9cclxufVxyXG5cclxuLnN0cmV0Y2hEaXZ7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG59XHJcblxyXG4uYm94MntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4uZmxleEl0ZW0xe1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbn1cclxuXHJcbi5mbGV4SXRlbTJ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UyCt":
/*!******************************************!*\
  !*** ./src/app/roast/roast.component.ts ***!
  \******************************************/
/*! exports provided: RoastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoastComponent", function() { return RoastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graph/graph.component */ "k/13");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info/info.component */ "XSv0");
/* harmony import */ var _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parameter/parameter.component */ "tltD");





class RoastComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoastComponent.ɵfac = function RoastComponent_Factory(t) { return new (t || RoastComponent)(); };
RoastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoastComponent, selectors: [["app-roast"]], decls: 8, vars: 0, consts: [[1, "box2"], [1, "flexItem1"], [1, "flexItem2"], [1, "box3"], [1, "stretchDiv"]], template: function RoastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-parameter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_graph_graph_component__WEBPACK_IMPORTED_MODULE_1__["GraphComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_2__["InfoComponent"], _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_3__["ParameterComponent"]], styles: [".box3[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    align-self:stretch;\r\n    \r\n}\r\n\r\n.stretchDiv[_ngcontent-%COMP%]{\r\n    align-self: stretch;\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]{\r\n    display: flex;\r\n  flex-wrap: wrap;\r\n  height: 80%;\r\n}\r\n\r\n.flexItem1[_ngcontent-%COMP%]{\r\n    width:80%;\r\n    height: 100%\r\n}\r\n\r\n.flexItem2[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    height: 100%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvYXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7RUFDZixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0lBQ0ksU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7QUFDSiIsImZpbGUiOiJyb2FzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib3gze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGFsaWduLXNlbGY6c3RyZXRjaDtcclxuICAgIC8qIGhlaWdodDogMTAlOyAqL1xyXG59XHJcblxyXG4uc3RyZXRjaERpdntcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5ib3gye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi5mbGV4SXRlbTF7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLmZsZXhJdGVtMntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roast',
                templateUrl: './roast.component.html',
                styleUrls: ['./roast.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XSv0":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/time.service */ "q+Sf");
/* harmony import */ var _services_temperature_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/temperature.service */ "FT2y");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function InfoComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.time);
} }
function InfoComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.temperature, " [\u00B0C] ");
} }
function InfoComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.akGradient, " [\u00B0C/s] ");
} }
function InfoComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.maxGradientString, " [\u00B0C/s] ");
} }
function InfoComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.midGradient, " [\u00B0C/s] ");
} }
class InfoComponent {
    constructor(timeService, tempService) {
        this.timeService = timeService;
        this.tempService = tempService;
        this.faTemp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faThermometerThreeQuarters"];
        this.faTime = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHourglassHalf"];
        this.faChart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartLine"];
        this.faReset = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUndo"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"];
        this.faStop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStop"];
        this.Omega = '\u00D8';
        this.time = "00:00:00";
        this.temperature = "NA";
        this.akGradient = "NA";
        this.gradientsAll = [];
        this.midGradient = "NA";
        this.maxGradient = 0;
        this.maxGradientString = "NA";
    }
    ngOnInit() {
        this.tempService.akGradient.subscribe(value => {
            this.akGradient = value.toFixed(2);
            this.gradientsAll.push(value);
            if (value > this.maxGradient) {
                this.maxGradient = value;
                this.maxGradientString = this.maxGradient.toFixed(2);
            }
            this.midGradient = this.getMean(this.gradientsAll).toFixed(2);
        });
        this.timeService.getTime().subscribe(value => {
            let date = new Date(0);
            date.setSeconds(value);
            this.time = date.toISOString().substr(11, 8);
        });
        this.tempService.getTemperature().subscribe((value) => {
            this.temperature = value.temperature.toFixed(2);
        });
    }
    getMean(array) {
        const total = array.reduce((acc, c) => acc + c, 0);
        return total / array.length;
    }
    startTimer() {
        this.timeService.startTimer();
    }
    endTimer() {
        this.timeService.stopTimer();
    }
    resetTimer() {
        this.timeService.resetTimer();
        this.tempService.resetTemperature();
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_time_service__WEBPACK_IMPORTED_MODULE_2__["TimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_temperature_service__WEBPACK_IMPORTED_MODULE_3__["TemperatureService"])); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 29, vars: 12, consts: [[1, "info"], [1, "buttonDiv"], [1, "btn", "btn-success", "buttonOwn", 3, "click"], [1, "fa-lg", 3, "icon"], [1, "btn", "btn-danger", "buttonOwn", 3, "click"], [1, "btn", "btn-dark", "buttonOwn", 3, "click"], [1, "timeDisplay"], [1, "iconDiv"], ["class", "dynText", "style", " width:70%;", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "width", "90%", "border", "3px solid white", "margin", "5%", "border-radius", "5px"], [1, "timeDisplayCombine", 2, "border-bottom", "3px solid white"], [1, "timeDisplayCombine"], [1, "iconDiv", "dynText", 2, "color", "lightgray"], [1, "dynText", 2, "width", "70%"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_button_click_2_listener() { return ctx.startTimer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_button_click_4_listener() { return ctx.endTimer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_button_click_6_listener() { return ctx.resetTimer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InfoComponent_div_11_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InfoComponent_div_15_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InfoComponent_div_20_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Max. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InfoComponent_div_24_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, InfoComponent_div_28_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faReset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temperature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.akGradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.akGradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Omega, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.akGradient);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".info[_ngcontent-%COMP%]{\r\n    \r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    border: 1px solid black;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content:flex-start;\r\n\r\n}\r\n\r\n.timeDisplay[_ngcontent-%COMP%]{\r\n    border: 3px solid white;\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 90%;\r\n    \r\n    \r\n    margin: 5%;\r\n    \r\n    text-align: center;\r\n    border-radius: 5px;\r\n    background-color: var(--secondary-color);\r\n}\r\n\r\n.dynText[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 3vmin;\r\n    justify-content: center;\r\n}\r\n\r\n.iconDiv[_ngcontent-%COMP%]{\r\n    border-right: 1px solid white;\r\n     width:30%;\r\n     padding: 5%;\r\n}\r\n\r\n.buttonOwn[_ngcontent-%COMP%]{\r\n    margin: 2px;\r\n    width:30%;\r\n}\r\n\r\n.buttonDiv[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.timeDisplayCombine[_ngcontent-%COMP%]{\r\n    \r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    \r\n    \r\n    \r\n    \r\n    text-align: center;\r\n    \r\n    background-color: var(--secondary-color);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjs7QUFFOUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksNkJBQTZCO0tBQzVCLFNBQVM7S0FDVCxXQUFXO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsd0NBQXdDO0FBQzVDIiwiZmlsZSI6ImluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZve1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG5cclxufVxyXG5cclxuLnRpbWVEaXNwbGF5e1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAvKmhlaWdodDogMzAlOyAqL1xyXG4gICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogNSU7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4uZHluVGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAzdm1pbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5pY29uRGl2e1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgd2lkdGg6MzAlO1xyXG4gICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4uYnV0dG9uT3due1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICB3aWR0aDozMCU7XHJcbn1cclxuXHJcbi5idXR0b25EaXZ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpbWVEaXNwbGF5Q29tYmluZXtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qaGVpZ2h0OiAzMCU7ICovXHJcbiAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAvKiBtYXJnaW46IDBweCA1JSAwcHggNSU7ICovXHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDUlOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                templateUrl: './info.component.html',
                styleUrls: ['./info.component.css']
            }]
    }], function () { return [{ type: _services_time_service__WEBPACK_IMPORTED_MODULE_2__["TimeService"] }, { type: _services_temperature_service__WEBPACK_IMPORTED_MODULE_3__["TemperatureService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "KWBv");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ "DKVz");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _control_control_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./control/control.component */ "wikr");
/* harmony import */ var _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parameter/parameter.component */ "tltD");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./graph/graph.component */ "k/13");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _roast_roast_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./roast/roast.component */ "UyCt");
/* harmony import */ var _archiv_archiv_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./archiv/archiv.component */ "MyLd");
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./option/option.component */ "j7bf");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _archiv_archiv_item_archiv_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./archiv/archiv-item/archiv-item.component */ "0CC8");
/* harmony import */ var _archiv_archiv_detail_archiv_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./archiv/archiv-detail/archiv-detail.component */ "B+DH");
/* harmony import */ var _archiv_archiv_detail_simple_graph_simple_graph_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./archiv/archiv-detail/simple-graph/simple-graph.component */ "SW7M");
/* harmony import */ var _archiv_archiv_detail_rating_item_rating_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./archiv/archiv-detail/rating-item/rating-item.component */ "puzN");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__["NgxChartsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_16__["ChartsModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_10__["NgxEchartsModule"].forRoot({
                echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.bind(null, /*! echarts */ "Y+Pg"))
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["SideNavComponent"],
        _info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"],
        _control_control_component__WEBPACK_IMPORTED_MODULE_12__["ControlComponent"],
        _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_13__["ParameterComponent"],
        _graph_graph_component__WEBPACK_IMPORTED_MODULE_15__["GraphComponent"],
        _roast_roast_component__WEBPACK_IMPORTED_MODULE_17__["RoastComponent"],
        _archiv_archiv_component__WEBPACK_IMPORTED_MODULE_18__["ArchivComponent"],
        _option_option_component__WEBPACK_IMPORTED_MODULE_19__["OptionComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
        _archiv_archiv_item_archiv_item_component__WEBPACK_IMPORTED_MODULE_21__["ArchivItemComponent"],
        _archiv_archiv_detail_archiv_detail_component__WEBPACK_IMPORTED_MODULE_22__["ArchivDetailComponent"],
        _archiv_archiv_detail_simple_graph_simple_graph_component__WEBPACK_IMPORTED_MODULE_23__["SimpleGraphComponent"],
        _archiv_archiv_detail_rating_item_rating_item_component__WEBPACK_IMPORTED_MODULE_24__["RatingItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__["NgxChartsModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_16__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_10__["NgxEchartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["SideNavComponent"],
                    _info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"],
                    _control_control_component__WEBPACK_IMPORTED_MODULE_12__["ControlComponent"],
                    _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_13__["ParameterComponent"],
                    _graph_graph_component__WEBPACK_IMPORTED_MODULE_15__["GraphComponent"],
                    _roast_roast_component__WEBPACK_IMPORTED_MODULE_17__["RoastComponent"],
                    _archiv_archiv_component__WEBPACK_IMPORTED_MODULE_18__["ArchivComponent"],
                    _option_option_component__WEBPACK_IMPORTED_MODULE_19__["OptionComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                    _archiv_archiv_item_archiv_item_component__WEBPACK_IMPORTED_MODULE_21__["ArchivItemComponent"],
                    _archiv_archiv_detail_archiv_detail_component__WEBPACK_IMPORTED_MODULE_22__["ArchivDetailComponent"],
                    _archiv_archiv_detail_simple_graph_simple_graph_component__WEBPACK_IMPORTED_MODULE_23__["SimpleGraphComponent"],
                    _archiv_archiv_detail_rating_item_rating_item_component__WEBPACK_IMPORTED_MODULE_24__["RatingItemComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__["NgxChartsModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_16__["ChartsModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_10__["NgxEchartsModule"].forRoot({
                        echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.bind(null, /*! echarts */ "Y+Pg"))
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class HeaderComponent {
    constructor() {
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCoffee"];
        this.faCogs = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCogs"];
        this.faArchiv = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArchive"];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 3, consts: [[1, "box"], [1, "brand"], [1, "push", "iconBox"], ["routerLink", "/roasting", 1, "icon"], [1, "fa-lg", 3, "icon"], ["routerLink", "/archiv", 1, "icon"], ["routerLink", "/option", 1, "icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Roastie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCoffee);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArchiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCogs);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n    background-color: var(--primary-color);\r\n  \r\n\r\n}\r\n\r\n.push[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n}\r\n\r\n.buttonOwn[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n}\r\n\r\n.brand[_ngcontent-%COMP%]{\r\n    display: inherit;\r\n    margin-left: 2%;\r\n    font-size: 3vw;\r\n    font-weight: bold;\r\n    align-items: center;\r\n    color: white;\r\n    font-family:monospace;\r\n}\r\n\r\n.iconBox[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    \r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-right: 10px;\r\n    color : white;\r\n    background-color: var(--secondary-color);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixzQ0FBc0M7RUFDeEMsbUJBQW1COztBQUVyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdDQUF3QztBQUM1QyIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIC8qIGhlaWdodDogMjAwcHg7ICovXHJcblxyXG59XHJcblxyXG4ucHVzaCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbk93bntcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYnJhbmR7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTptb25vc3BhY2U7XHJcbn1cclxuXHJcbi5pY29uQm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcbi5pY29ue1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fTLw":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class EventService {
    constructor() {
        this.graphEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    emitPhaseAdd() {
        this.graphEvent.next("addPhase");
    }
    emitPhaseDelete() {
        this.graphEvent.next("deletePhase");
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hxC7":
/*!***************************************!*\
  !*** ./src/app/models/measurement.ts ***!
  \***************************************/
/*! exports provided: Measurement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Measurement", function() { return Measurement; });
class Measurement {
    constructor(time, temperature) {
        this.time = time;
        this.temperature = temperature;
    }
}


/***/ }),

/***/ "j7bf":
/*!********************************************!*\
  !*** ./src/app/option/option.component.ts ***!
  \********************************************/
/*! exports provided: OptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionComponent", function() { return OptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
OptionComponent.ɵfac = function OptionComponent_Factory(t) { return new (t || OptionComponent)(); };
OptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionComponent, selectors: [["app-option"]], decls: 2, vars: 0, template: function OptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "option works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcHRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-option',
                templateUrl: './option.component.html',
                styleUrls: ['./option.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k/13":
/*!******************************************!*\
  !*** ./src/app/graph/graph.component.ts ***!
  \******************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/time.service */ "q+Sf");
/* harmony import */ var _services_temperature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/temperature.service */ "FT2y");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/event.service */ "fTLw");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "LPYB");






class GraphComponent {
    // public barChartData: ChartDataSets[] = [
    //   { data: this.measures, label: "Röstung", type: "line", borderWidth : 0.5,  pointBackgroundColor: "white" },
    //   {data: [{x:-10,y:200}, {x:-10,y:150},{x:1000,y:150},{x:1000,y:200},{x:-10,y:200}], type:"line", lineTension: 0},
    //   {data: [{x:-10,y:350}, {x:-10,y:200},{x:1000,y:200},{x:1000,y:350},{x:-10,y:350}], type:"line", lineTension: 0},
    //   {data: [{x:-10,y:500}, {x:-10,y:350},{x:1000,y:350},{x:1000,y:500},{x:-10,y:500}], type:"line", lineTension: 0},
    //   {data: this.phases, type: "line"}
    // ];
    constructor(timeService, tempService, eventService) {
        this.timeService = timeService;
        this.tempService = tempService;
        this.eventService = eventService;
        this.phases = [];
        this.measures = [];
        this.maxXTick = 100;
        this.tickShift = 20; // um so viel wird maxXTick erhöht wenn maxXTick Daten vorhanden sind
        // public barChartOptions: ChartOptions = {
        //   animation: {
        //     duration : 0
        //   },
        //   maintainAspectRatio: false,
        //   responsive: true,
        //   scales : {
        //     xAxes: [{
        //        ticks: {
        //           max : this.maxXTick,
        //           min: 0
        //         }
        //     }],
        //     yAxes: [{
        //       ticks: {
        //          max : 500,
        //          min: 0
        //        }
        //    }]
        //   }
        // };
        this.barChartLegend = true;
        this.lineChartColors = [
            {
                borderColor: "white"
            },
            {
                backgroundColor: "rgba(0,200,0,0.2)",
            },
            {
                backgroundColor: "rgba(250,150,0,0.2)",
            },
            {
                backgroundColor: "rgba(255,0,0,0.2)",
            },
            {
            // borderColor: "yellow"
            }
        ];
    }
    ngOnInit() {
        this.updateOptions();
        this.updateData();
        this.tempService.statusUpdate.subscribe(status => {
            if (status === "rest") {
                this.measures = [];
                this.phases = [];
                this.updateData();
            }
        });
        this.tempService.getTemperature().subscribe((value) => {
            console.log(value);
            let time = (value.time);
            this.measures.push({ x: time, y: value.temperature });
            if (time > this.maxXTick) {
                this.maxXTick += this.tickShift;
                // console.log(this.maxXTick)
                this.updateOptions();
            }
        });
        this.eventService.graphEvent.subscribe(value => {
            if (value === "addPhase") {
                this.setPhase();
            }
            if (value === "deletePhase") {
                this.popPhase();
            }
        });
    }
    updateOptions() {
        this.barChartOptions = {
            animation: {
                duration: 0
            },
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                xAxes: [{
                        ticks: {
                            max: this.maxXTick,
                            min: 0
                        }
                    }],
                yAxes: [{
                        ticks: {
                            max: 500,
                            min: 0
                        }
                    }],
            }
        };
    }
    updateData() {
        this.barChartData = [
            { data: this.measures, label: "Röstung", type: "line", borderWidth: 0.5, pointBackgroundColor: "white" },
            { data: [{ x: -10, y: 200 }, { x: -10, y: 150 }, { x: 1000, y: 150 }, { x: 1000, y: 200 }, { x: -10, y: 200 }], type: "line", lineTension: 0 },
            { data: [{ x: -10, y: 350 }, { x: -10, y: 200 }, { x: 1000, y: 200 }, { x: 1000, y: 350 }, { x: -10, y: 350 }], type: "line", lineTension: 0 },
            { data: [{ x: -10, y: 500 }, { x: -10, y: 350 }, { x: 1000, y: 350 }, { x: 1000, y: 500 }, { x: -10, y: 500 }], type: "line", lineTension: 0 },
            { data: this.phases, pointRadius: 10, pointBackgroundColor: "yellow" }
        ];
    }
    setPhase() {
        this.phases.push(this.measures[this.measures.length - 1]);
        console.log(this.measures[this.measures.length - 1]);
        console.log(this.phases[this.phases.length - 1]);
        this.updateData();
    }
    popPhase() {
        this.phases.pop();
        this.updateData();
    }
}
GraphComponent.ɵfac = function GraphComponent_Factory(t) { return new (t || GraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_temperature_service__WEBPACK_IMPORTED_MODULE_2__["TemperatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"])); };
GraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphComponent, selectors: [["app-graph"]], decls: 2, vars: 5, consts: [[1, "graph"], ["baseChart", "", 3, "datasets", "options", "legend", "chartType", "colors"]], template: function GraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", "scatter")("colors", ctx.lineChartColors);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]], styles: [".graph[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: auto; \r\n    height: 100%;\r\n    background-color: var(--secondary-color);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYXBoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUMiLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFwaHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IGF1dG87IFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graph',
                templateUrl: './graph.component.html',
                styleUrls: ['./graph.component.css']
            }]
    }], function () { return [{ type: _services_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"] }, { type: _services_temperature_service__WEBPACK_IMPORTED_MODULE_2__["TemperatureService"] }, { type: _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }]; }, null); })();


/***/ }),

/***/ "pRzg":
/*!**************************************!*\
  !*** ./src/app/models/archivItem.ts ***!
  \**************************************/
/*! exports provided: ArchivItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivItem", function() { return ArchivItem; });
class ArchivItem {
    constructor(name, data, rating, comments, bean, dateTime) {
        this.name = name;
        this.data = data;
        this.rating = rating;
        this.comments = comments;
        this.bean = bean;
        this.dateTime = dateTime;
    }
}


/***/ }),

/***/ "puzN":
/*!***************************************************************************!*\
  !*** ./src/app/archiv/archiv-detail/rating-item/rating-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: RatingItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingItemComponent", function() { return RatingItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1) { return { "brown": a0, "gray": a1 }; };
class RatingItemComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.isRated);
    }
}
RatingItemComponent.ɵfac = function RatingItemComponent_Factory(t) { return new (t || RatingItemComponent)(); };
RatingItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingItemComponent, selectors: [["app-rating-item"]], inputs: { isRated: "isRated" }, decls: 2, vars: 4, consts: [["src", "assets/coffee-bean-for-a-coffee-break.svg", "alt", "", 1, "grayscale", 2, "width", "60%", "height", "auto", 3, "ngClass"]], template: function RatingItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.isRated, !ctx.isRated));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".gray[_ngcontent-%COMP%] { filter: invert(72%) sepia(0%) saturate(1885%) hue-rotate(147deg) brightness(85%) contrast(87%); }\r\n.brown[_ngcontent-%COMP%] { filter: invert(16%) sepia(27%) saturate(1660%) hue-rotate(350deg) brightness(90%) contrast(87%);}\r\n.white[_ngcontent-%COMP%] {filter: invert(100%) sepia(3%) saturate(7489%) hue-rotate(38deg) brightness(121%) contrast(106%);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSw4RkFBOEYsRUFBRTtBQUN4RyxTQUFTLCtGQUErRixDQUFDO0FBQ3pHLFFBQVEsZ0dBQWdHLENBQUMiLCJmaWxlIjoicmF0aW5nLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmF5IHsgZmlsdGVyOiBpbnZlcnQoNzIlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMTg4NSUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDg1JSkgY29udHJhc3QoODclKTsgfVxyXG4uYnJvd24geyBmaWx0ZXI6IGludmVydCgxNiUpIHNlcGlhKDI3JSkgc2F0dXJhdGUoMTY2MCUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoODclKTt9XHJcbi53aGl0ZSB7ZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMyUpIHNhdHVyYXRlKDc0ODklKSBodWUtcm90YXRlKDM4ZGVnKSBicmlnaHRuZXNzKDEyMSUpIGNvbnRyYXN0KDEwNiUpO31cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rating-item',
                templateUrl: './rating-item.component.html',
                styleUrls: ['./rating-item.component.css']
            }]
    }], function () { return []; }, { isRated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "q+Sf":
/*!******************************************!*\
  !*** ./src/app/services/time.service.ts ***!
  \******************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _temperature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temperature.service */ "FT2y");




class TimeService {
    constructor(tempService) {
        this.tempService = tempService;
        this.time = 0;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    startTimer() {
        this.tempService.startMeasure();
        this.time = 0;
        this.timerId = setInterval(() => this.increaseTimer(), 1000);
    }
    increaseTimer() {
        this.time++;
        this.subject.next(this.time);
    }
    stopTimer() {
        this.tempService.stopMeasure();
        clearInterval(this.timerId);
    }
    resetTimer() {
        this.time = 0;
        clearInterval(this.timerId);
        this.subject.next(this.time);
    }
    getTime() {
        return this.subject;
    }
}
TimeService.ɵfac = function TimeService_Factory(t) { return new (t || TimeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_temperature_service__WEBPACK_IMPORTED_MODULE_2__["TemperatureService"])); };
TimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimeService, factory: TimeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _temperature_service__WEBPACK_IMPORTED_MODULE_2__["TemperatureService"] }]; }, null); })();


/***/ }),

/***/ "tg/K":
/*!*************************************!*\
  !*** ./src/app/models/datapoint.ts ***!
  \*************************************/
/*! exports provided: Datapoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datapoint", function() { return Datapoint; });
class Datapoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ "tltD":
/*!**************************************************!*\
  !*** ./src/app/parameter/parameter.component.ts ***!
  \**************************************************/
/*! exports provided: ParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return ParameterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service */ "fTLw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ParameterComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParameterComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.markEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.buttonLabel);
} }
function ParameterComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParameterComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.reverseMarkEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Markierung r\u00FCckg\u00E4ngig");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ParameterComponent {
    constructor(eventService) {
        this.eventService = eventService;
        this.index = 0;
        this.buttonLabels = ["Markieren", "Phase 1", "Phase 2", "Phase 3", "Ende"];
        this.buttonLabel = this.buttonLabels[this.index];
    }
    ngOnInit() {
    }
    markEvent() {
        if (this.index > 0) {
            this.eventService.emitPhaseAdd();
        }
        this.index++;
        this.buttonLabel = this.buttonLabels[this.index];
    }
    reverseMarkEvent() {
        this.index--;
        this.buttonLabel = this.buttonLabels[this.index];
        this.eventService.emitPhaseDelete();
    }
}
ParameterComponent.ɵfac = function ParameterComponent_Factory(t) { return new (t || ParameterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"])); };
ParameterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParameterComponent, selectors: [["app-parameter"]], decls: 17, vars: 2, consts: [[1, "para"], [1, "boxH"], [1, "boxV"], ["for", "name"], ["type", "text", "placeholder", "Name", "id", "name", 1, "inputOwn"], ["for", "duration"], ["type", "number", "placeholder", "Gesamtdauer [min]", "id", "duration", 1, "inputOwn"], [1, "push"], ["class", "btn btn-dark btnOwn", 3, "click", 4, "ngIf"], [1, "btn", "btn-dark", "btnOwn"], [1, "btn", "btn-dark", "btnOwn", 3, "click"]], template: function ParameterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dauer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ParameterComponent_button_13_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ParameterComponent_button_14_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Aktualisiere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonLabel != "Ende");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonLabel != "Markieren");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".para[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n}\r\n.boxV[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    align-self:stretch;\r\n}\r\n.boxH[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n    \r\n}\r\n.push[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n}\r\n.inputOwn[_ngcontent-%COMP%]{\r\n    background-color: var(--secondary-color);\r\n    color: black;\r\n    margin: 5px;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n}\r\n.btnOwn[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    width: 120px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFtZXRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBR0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJwYXJhbWV0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYm94VntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1zZWxmOnN0cmV0Y2g7XHJcbn1cclxuXHJcblxyXG4uYm94SHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXHJcbiAgICAvKiBoZWlnaHQ6IDcwJTsgKi9cclxufVxyXG4ucHVzaCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmlucHV0T3due1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idG5Pd257XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParameterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-parameter',
                templateUrl: './parameter.component.html',
                styleUrls: ['./parameter.component.css']
            }]
    }], function () { return [{ type: _services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _archiv_archiv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archiv/archiv.component */ "MyLd");
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option/option.component */ "j7bf");
/* harmony import */ var _roast_roast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roast/roast.component */ "UyCt");







const routes = [
    { path: 'roasting', component: _roast_roast_component__WEBPACK_IMPORTED_MODULE_4__["RoastComponent"] },
    { path: 'archiv', component: _archiv_archiv_component__WEBPACK_IMPORTED_MODULE_2__["ArchivComponent"] },
    { path: 'option', component: _option_option_component__WEBPACK_IMPORTED_MODULE_3__["OptionComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wikr":
/*!**********************************************!*\
  !*** ./src/app/control/control.component.ts ***!
  \**********************************************/
/*! exports provided: ControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlComponent", function() { return ControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/time.service */ "q+Sf");
/* harmony import */ var _services_temperature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/temperature.service */ "FT2y");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../side-nav/side-nav.component */ "KWBv");





class ControlComponent {
    constructor(timeService, tempService) {
        this.timeService = timeService;
        this.tempService = tempService;
    }
    ngOnInit() {
    }
    startTimer() {
        this.timeService.startTimer();
    }
    endTimer() {
        this.timeService.stopTimer();
    }
    resetTimer() {
        this.timeService.resetTimer();
        this.tempService.resetTemperature();
    }
}
ControlComponent.ɵfac = function ControlComponent_Factory(t) { return new (t || ControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_temperature_service__WEBPACK_IMPORTED_MODULE_2__["TemperatureService"])); };
ControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlComponent, selectors: [["app-control"]], decls: 12, vars: 0, consts: [[1, "box"], [1, "brand"], [1, "push"], [1, "btn", "btn-success", "buttonOwn", 3, "click"], [1, "btn", "btn-danger", "buttonOwn", 3, "click"], [1, "btn", "btn-dark", "buttonOwn", 3, "click"]], template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-side-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Roastie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlComponent_Template_button_click_6_listener() { return ctx.startTimer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlComponent_Template_button_click_8_listener() { return ctx.endTimer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlComponent_Template_button_click_10_listener() { return ctx.resetTimer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"]], styles: [".box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n    background-color: var(--primary-color);\r\n  \r\n\r\n}\r\n\r\n.push[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n}\r\n\r\n.buttonOwn[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n}\r\n\r\n.brand[_ngcontent-%COMP%]{\r\n    display: inherit;\r\n    margin-left: 2%;\r\n    font-size: 3vw;\r\n    font-weight: bold;\r\n    align-items: center;\r\n    color: white;\r\n    font-family:monospace;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isc0NBQXNDO0VBQ3hDLG1CQUFtQjs7QUFFckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUI7QUFDekIiLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgLyogaGVpZ2h0OiAyMDBweDsgKi9cclxuXHJcbn1cclxuXHJcbi5wdXNoIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uT3due1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5icmFuZHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-control',
                templateUrl: './control.component.html',
                styleUrls: ['./control.component.css']
            }]
    }], function () { return [{ type: _services_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"] }, { type: _services_temperature_service__WEBPACK_IMPORTED_MODULE_2__["TemperatureService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map