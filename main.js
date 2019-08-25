(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar.mat-primary {\r\n    background: #fff;\r\n    color: #111;\r\n    font-weight: bold;\r\n    box-shadow: 1px 1px 10px 1px #aaa;\r\n    z-index: 10;\r\n    position: fixed;\r\n}\r\n\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n    height: 3rem;\r\n}\r\n\r\n.home-page {\r\n    width: 100%;\r\n    /* position: fixed; */\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\" role=\"heading\">\n  <span>\n    Device Dashboard\n  </span>\n  <span class=\"example-fill-remaining-space\"></span>\n  <span>\n    <button mat-icon-button>\n      <mat-icon>notifications_none</mat-icon>\n    </button>\n    <button mat-icon-button>\n      <mat-icon>settings</mat-icon>\n    </button>\n  </span>\n</mat-toolbar>\n<app-home class=\"home-page\"></app-home>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _components_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard-card/dashboard-card.component */ "./src/app/components/dashboard-card/dashboard-card.component.ts");
/* harmony import */ var _components_device_table_device_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/device-table/device-table.component */ "./src/app/components/device-table/device-table.component.ts");
/* harmony import */ var _components_dashboard_chart_dashboard_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard-chart/dashboard-chart.component */ "./src/app/components/dashboard-chart/dashboard-chart.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_count_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/count.pipe */ "./src/app/shared/count.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_6__["DashboardCardComponent"],
                _components_device_table_device_table_component__WEBPACK_IMPORTED_MODULE_7__["DeviceTableComponent"],
                _components_dashboard_chart_dashboard_chart_component__WEBPACK_IMPORTED_MODULE_8__["DashboardChartComponent"],
                _shared_count_pipe__WEBPACK_IMPORTED_MODULE_12__["CountPipe"]
            ],
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard-card/dashboard-card.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/dashboard-card/dashboard-card.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-card {\r\n    box-shadow: 1px 1px 10px 1px #aaa;\r\n    background-color: #fff;\r\n    height: 12rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.dashboard-card-header {\r\n    border-bottom: 1px solid #aaa;\r\n    padding: 4px;\r\n    padding-left: 6px;\r\n}\r\n\r\n.dashboard-card-header-icon {\r\n    float: right;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/dashboard-card/dashboard-card.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard-card/dashboard-card.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-card\">\n  <div class=\"dashboard-card-header\">\n    {{cardTitle}}\n    <span class=\"dashboard-card-header-icon\">\n      <mat-icon [matMenuTriggerFor]=\"cardMenu\">more_horiz</mat-icon>\n    </span>\n    <mat-menu #cardMenu=\"matMenu\">\n      <button mat-menu-item>Item 1</button>\n      <button mat-menu-item>Item 2</button>\n    </mat-menu>\n  </div>\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard-card/dashboard-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard-card/dashboard-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardComponent", function() { return DashboardCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardCardComponent = /** @class */ (function () {
    function DashboardCardComponent() {
    }
    DashboardCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DashboardCardComponent.prototype, "cardTitle", void 0);
    DashboardCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-card',
            template: __webpack_require__(/*! ./dashboard-card.component.html */ "./src/app/components/dashboard-card/dashboard-card.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-card.component.css */ "./src/app/components/dashboard-card/dashboard-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardCardComponent);
    return DashboardCardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard-chart/dashboard-chart.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/dashboard-chart/dashboard-chart.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-alignmnet {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/dashboard-chart/dashboard-chart.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboard-chart/dashboard-chart.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard_chart\" class=\"chart-alignmnet\">\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard-chart/dashboard-chart.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard-chart/dashboard-chart.component.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardChartComponent", function() { return DashboardChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {scaleLinear} from "d3-scale";
var DashboardChartComponent = /** @class */ (function () {
    function DashboardChartComponent() {
    }
    DashboardChartComponent.prototype.ngOnInit = function () {
        this.constructD3Chart();
    };
    DashboardChartComponent.prototype.constructD3Chart = function () {
        var data = [{ "name": "Dev", "value": 53 }, { "name": "PO", "value": 15 }, { "name": "QA", "value": 32 }];
        var margin = { top: 10, right: 10, bottom: 30, left: 10 }, width = 200 - margin.left - margin.right, height = 150 - margin.top - margin.bottom;
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scale"].ordinal().rangeRoundBands([0, width], .05);
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["scale"].linear().range([height, 0]);
        var xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["svg"].axis()
            .scale(x);
        // .orient("bottom");
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#dashboard_chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        x.domain(data.map(function (d) { return d.name; }));
        y.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](data, function (d) { return d.value; })]);
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "1em")
            .attr("dy", "1em");
        svg.selectAll("bar")
            .data(data)
            .enter().append("rect")
            .style("fill", "#525")
            .attr("x", function (d) { return 5 + x(d.name); })
            .attr("width", "20%") //x.rangeBand())
            .attr("y", function (d) { return y(d.value); })
            .attr("height", function (d) { return height - y(d.value); });
        svg.selectAll("bar")
            .data(data)
            .enter().append("text")
            .attr('x', function (d) { return 25 + x(d.name); })
            .attr('y', height - 10)
            .attr('text-anchor', 'middle')
            .attr("class", "label")
            .text('21%');
    };
    DashboardChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-chart',
            template: __webpack_require__(/*! ./dashboard-chart.component.html */ "./src/app/components/dashboard-chart/dashboard-chart.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-chart.component.css */ "./src/app/components/dashboard-chart/dashboard-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardChartComponent);
    return DashboardChartComponent;
}());



/***/ }),

/***/ "./src/app/components/device-table/device-table.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/device-table/device-table.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".device-table {\r\n    box-shadow: 1px 1px 10px 1px #aaa;\r\n    background-color: #fff;\r\n}\r\n\r\n.device-table-header {\r\n    border-bottom: 1px solid #aaa;\r\n    padding: 5px;\r\n    padding-left: 8px;\r\n    font-size: 18px;\r\n}\r\n\r\n.device-table-header-icon {\r\n    float: right;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/device-table/device-table.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/device-table/device-table.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"device-table\">\n  <div class=\"device-table-header\">\n    Device List\n    <span class=\"device-table-header-icon\">\n      <mat-icon [matMenuTriggerFor]=\"tableMenu\">more_horiz</mat-icon>\n    </span>\n    <mat-menu #tableMenu=\"matMenu\">\n      <button mat-menu-item>Item 1</button>\n      <button mat-menu-item>Item 2</button>\n    </mat-menu>\n  </div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">No.</th>\n          <th scope=\"col\">User name</th>\n          <th scope=\"col\">User role</th>\n          <th scope=\"col\">Location</th>\n          <th scope=\"col\">Status</th>\n          <th scope=\"col\">Device</th>\n          <th scope=\"col\">Version no.</th>\n          <th scope=\"col\">Battery</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"tableData && tableData.length>0\">\n        <tr *ngFor=\"let user of tableData;let i=index\">\n          <th scope=\"row\">{{i+1}}</th>\n          <td>{{user.userName}}</td>\n          <td>{{user.userRole}}</td>\n          <td>{{user.location}}</td>\n          <th>{{user.status}}</th>\n          <td>{{user.deviceName}}</td>\n          <td>{{user.version}}</td>\n          <td>{{user.battery}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/device-table/device-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/device-table/device-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeviceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceTableComponent", function() { return DeviceTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceTableComponent = /** @class */ (function () {
    function DeviceTableComponent() {
        this.tableData = [];
    }
    DeviceTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeviceTableComponent.prototype, "tableData", void 0);
    DeviceTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-table',
            template: __webpack_require__(/*! ./device-table.component.html */ "./src/app/components/device-table/device-table.component.html"),
            styles: [__webpack_require__(/*! ./device-table.component.css */ "./src/app/components/device-table/device-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeviceTableComponent);
    return DeviceTableComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.title-text {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 18pt;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.dropdown-button-wrapper {\r\n    border: 1.5px solid #aaa;\r\n    border-radius: 8px;\r\n    padding: 0.3rem;\r\n    float: right;\r\n}\r\n\r\n.home-padding {\r\n    padding: 2rem;\r\n    padding-top: 4rem;\r\n}\r\n\r\n.card-block {\r\n    margin-top: 1.5rem;\r\n}\r\n\r\n.card-alignmnet {\r\n    text-align: center;\r\n}\r\n\r\n.active-device-count {\r\n    font-size: 44px;\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.active-device-type{\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.device-title{\r\n    font-weight: bold;\r\n}\r\n\r\n.device-data{\r\n    color: #626;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.device-title mat-icon{\r\n    vertical-align: bottom;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-padding\">\n  <div>\n    <span class=\"title-text\">Real-time Overview</span>\n    <span class=\"dropdown\">\n      <button [matMenuTriggerFor]=\"menu\" class=\"btn dropdown-toggle dropdown-button-wrapper\">Export\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>Item 1</button>\n        <button mat-menu-item>Item 2</button>\n      </mat-menu>\n    </span>\n  </div>\n\n  <div class=\"row card-block\">\n    <app-dashboard-card cardTitle=\"Active Devices\" class=\"col-md-4 col-sm-12 col-xs-12 col-12 card-alignmnet\">\n      <div class=\"row\">\n        <div class=\"col-12 active-device-count\">\n          {{usersData.length}}\n        </div>\n      </div>\n      <div class=\"row active-device-type\">\n        <div class=\"col-6\">\n          <div class=\"device-title\">\n            <mat-icon>phone_android</mat-icon>\n            Android\n          </div>\n          <div class=\"device-data\">\n            {{usersData|count:'deviceType':'Android'}}\n            ({{(usersData|count:'deviceType':'Android')*100/usersData.length}}%)\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"device-title\">\n            <mat-icon>phone_android</mat-icon>\n            iOS\n          </div>\n          <div class=\"device-data\">\n            {{usersData|count:'deviceType':'IOS'}}\n            ({{(usersData|count:'deviceType':'IOS')*100/usersData.length}}%)\n          </div>\n        </div>\n      </div>\n    </app-dashboard-card>\n    <app-dashboard-card cardTitle=\"Roles\" class=\"col-md-4 col-sm-12 col-xs-12 col-12\">\n      <app-dashboard-chart></app-dashboard-chart>\n    </app-dashboard-card>\n    <app-dashboard-card cardTitle=\"Sample Board\" class=\"col-md-4 col-sm-12 col-xs-12 col-12\"></app-dashboard-card>\n  </div>\n\n  <app-device-table [tableData]=\"usersData\"></app-device-table>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(db) {
        var _this = this;
        this.usersData = null;
        db.list('/users').valueChanges().subscribe(function (data) {
            _this.parseDataForTable(data);
            // this.usersData = data;
        }, function (error) {
            console.log(error);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.parseDataForTable = function (data) {
        var users = [];
        data.forEach(function (user) {
            if (user.devices) {
                for (var device in user.devices) {
                    var tempUser = {
                        "userName": user.userName,
                        "userRole": user.userRole,
                        "battery": user.devices[device].battery,
                        "deviceName": user.devices[device].deviceName,
                        "location": user.devices[device].location,
                        "status": user.devices[device].status,
                        "version": user.devices[device].version,
                        "deviceType": user.devices[device].deviceType
                    };
                    users.push(tempUser);
                }
            }
        });
        this.usersData = users;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/count.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/shared/count.pipe.ts ***!
  \**************************************/
/*! exports provided: CountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountPipe", function() { return CountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CountPipe = /** @class */ (function () {
    function CountPipe() {
    }
    CountPipe.prototype.transform = function (items, key, value) {
        var count = 0;
        items.forEach(function (element) {
            if (element[key] === value) {
                count++;
            }
        });
        return count;
    };
    CountPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'count'
        })
    ], CountPipe);
    return CountPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyApHf7YWMy0z-H_Ob6sHkiot1bS6zb1aPU",
        authDomain: "device-manager-c88d3.firebaseapp.com",
        databaseURL: "https://device-manager-c88d3.firebaseio.com",
        projectId: "device-manager-c88d3",
        storageBucket: "",
        messagingSenderId: "296691118933",
        appId: "1:296691118933:web:9a3baa55199e474b"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\i338015\OneDrive - SAP SE\Documents\Angular Workspace\Project_IR\project-task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map