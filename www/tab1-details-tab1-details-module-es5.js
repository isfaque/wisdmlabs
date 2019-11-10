(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-details-tab1-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1-details/tab1-details.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1-details/tab1-details.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Details</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img [src]=\"userData.picture\" />\n    <ion-card-header>\n      <ion-card-title>{{userData.firstName}} {{userData.lastName}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p><strong>Gender: </strong>{{userData.gender}}</p>\n      <p><strong>Age: </strong>{{userData.age}}</p>\n      <p><strong>Contact No.: </strong>{{userData.phone}}</p>\n      <p><strong>Email: </strong>{{userData.email}}</p>\n      <p><strong>City: </strong>{{userData.city}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1-details/tab1-details.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/tab1-details/tab1-details.module.ts ***!
  \*****************************************************/
/*! exports provided: Tab1DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1DetailsPageModule", function() { return Tab1DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-details.page */ "./src/app/tab1-details/tab1-details.page.ts");







var routes = [
    {
        path: '',
        component: _tab1_details_page__WEBPACK_IMPORTED_MODULE_6__["Tab1DetailsPage"]
    }
];
var Tab1DetailsPageModule = /** @class */ (function () {
    function Tab1DetailsPageModule() {
    }
    Tab1DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab1_details_page__WEBPACK_IMPORTED_MODULE_6__["Tab1DetailsPage"]]
        })
    ], Tab1DetailsPageModule);
    return Tab1DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/tab1-details/tab1-details.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/tab1-details/tab1-details.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEtZGV0YWlscy90YWIxLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tab1-details/tab1-details.page.ts":
/*!***************************************************!*\
  !*** ./src/app/tab1-details/tab1-details.page.ts ***!
  \***************************************************/
/*! exports provided: Tab1DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1DetailsPage", function() { return Tab1DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var Tab1DetailsPage = /** @class */ (function () {
    function Tab1DetailsPage(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (res) {
            console.log(res);
            _this.userData = res;
        });
    }
    Tab1DetailsPage.prototype.ngOnInit = function () {
    };
    Tab1DetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    Tab1DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1-details',
            template: __webpack_require__(/*! raw-loader!./tab1-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1-details/tab1-details.page.html"),
            styles: [__webpack_require__(/*! ./tab1-details.page.scss */ "./src/app/tab1-details/tab1-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], Tab1DetailsPage);
    return Tab1DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-details-tab1-details-module-es5.js.map