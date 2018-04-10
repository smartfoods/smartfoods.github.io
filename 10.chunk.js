webpackJsonp([10,16],{

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ng2_charts_1 = __webpack_require__(280);
var dropdown_1 = __webpack_require__(105);
var dashboard_component_1 = __webpack_require__(825);
var dashboard_routing_module_1 = __webpack_require__(841);
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            dashboard_routing_module_1.DashboardRoutingModule,
            ng2_charts_1.ChartsModule,
            dropdown_1.BsDropdownModule
        ],
        declarations: [dashboard_component_1.DashboardComponent]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/dashboard.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.brandPrimary = '#20a8d8';
        this.brandSuccess = '#4dbd74';
        this.brandInfo = '#63c2de';
        this.brandWarning = '#f8cb00';
        this.brandDanger = '#f86c6b';
        // dropdown buttons
        this.status = { isopen: false };
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: this.brandPrimary,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: this.brandInfo,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        this.mainChartElements = 27;
        this.mainChartData1 = [];
        this.mainChartData2 = [];
        this.mainChartData3 = [];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Current'
            },
            {
                data: this.mainChartData2,
                label: 'Previous'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
        ];
        this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.mainChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.charAt(0);
                            }
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: this.convertHex(this.brandInfo, 10),
                borderColor: this.brandInfo,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.socialChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.socialChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.socialChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.socialChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.socialChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.socialChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.socialChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.socialChartLegend = false;
        this.socialChartType = 'line';
        // sparkline charts
        this.sparklineChartData1 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Clients'
            }
        ];
        this.sparklineChartData2 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Clients'
            }
        ];
        this.sparklineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.sparklineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.sparklineChartDefault = [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
            }
        ];
        this.sparklineChartPrimary = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandPrimary,
            }
        ];
        this.sparklineChartInfo = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
            }
        ];
        this.sparklineChartDanger = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
            }
        ];
        this.sparklineChartWarning = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandWarning,
            }
        ];
        this.sparklineChartSuccess = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
            }
        ];
        this.sparklineChartLegend = false;
        this.sparklineChartType = 'line';
    }
    DashboardComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    //convert Hex to RGBA
    DashboardComponent.prototype.convertHex = function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return rgba;
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) { };
    DashboardComponent.prototype.chartHovered = function (e) { };
    // mainChart
    DashboardComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        //generate random values for mainChart
        for (var i = 0; i <= this.mainChartElements; i++) {
            this.mainChartData1.push(this.random(50, 200));
            this.mainChartData2.push(this.random(80, 100));
            this.mainChartData3.push(65);
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(878)
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/dashboard.component.js.map

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var dashboard_component_1 = __webpack_require__(825);
var routes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent,
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], DashboardRoutingModule);
exports.DashboardRoutingModule = DashboardRoutingModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/dashboard-routing.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card card-inverse card-primary\">\r\n        <div class=\"card-block pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown placement=\"bottom right\">\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-1\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\" [datasets]=\"lineChart1Data\" [labels]=\"lineChart1Labels\" [options]=\"lineChart1Options\" [colors]=\"lineChart1Colours\"\r\n            [legend]=\"lineChart1Legend\" [chartType]=\"lineChart1Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card card-inverse card-info\">\r\n        <div class=\"card-block pb-0\">\r\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\r\n            <i class=\"icon-location-pin\"></i>\r\n          </button>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-1\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\" [datasets]=\"lineChart2Data\" [labels]=\"lineChart2Labels\" [options]=\"lineChart2Options\" [colors]=\"lineChart2Colours\"\r\n            [legend]=\"lineChart2Legend\" [chartType]=\"lineChart2Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card card-inverse card-warning\">\r\n        <div class=\"card-block pb-0\">\r\n          <div class=\"btn-group float-right\">\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\">\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\" [datasets]=\"lineChart3Data\" [labels]=\"lineChart3Labels\" [options]=\"lineChart3Options\" [colors]=\"lineChart3Colours\"\r\n            [legend]=\"lineChart3Legend\" [chartType]=\"lineChart3Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card card-inverse card-danger\">\r\n        <div class=\"card-block pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown placement=\"bottom right\">\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-1\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\" [datasets]=\"barChart1Data\" [labels]=\"barChart1Labels\" [options]=\"barChart1Options\" [colors]=\"barChart1Colours\"\r\n            [legend]=\"barChart1Legend\" [chartType]=\"barChart1Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n          <h4 class=\"card-title mb-0\">Traffic</h4>\r\n          <div class=\"small text-muted\">November 2015</div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-7 hidden-sm-down\">\r\n          <button type=\"button\" class=\"btn btn-primary float-right\">\r\n            <i class=\"icon-cloud-download\"></i>\r\n          </button>\r\n          <div class=\"btn-toolbar float-right\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n            <div class=\"btn-group mr-1\" data-toggle=\"buttons\" aria-label=\"First group\">\r\n              <label class=\"btn btn-outline-secondary\">\r\n                <input type=\"radio\" name=\"options\" id=\"option1\"> Day\r\n              </label>\r\n              <label class=\"btn btn-outline-secondary active\">\r\n                <input type=\"radio\" name=\"options\" id=\"option2\" checked> Month\r\n              </label>\r\n              <label class=\"btn btn-outline-secondary\">\r\n                <input type=\"radio\" name=\"options\" id=\"option3\"> Year\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"chart-wrapper\" style=\"height:200px;margin-top:40px;\">\r\n        <canvas baseChart class=\"chart\" [datasets]=\"mainChartData\" [labels]=\"mainChartLabels\" [options]=\"mainChartOptions\" [colors]=\"mainChartColours\"\r\n          [legend]=\"mainChartLegend\" [chartType]=\"mainChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <ul>\r\n        <li>\r\n          <div class=\"text-muted\">Visits</div>\r\n          <strong>29.703 Users (40%)</strong>\r\n          <div class=\"progress progress-xs mt-h\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li class=\"hidden-sm-down\">\r\n          <div class=\"text-muted\">Unique</div>\r\n          <strong>24.093 Users (20%)</strong>\r\n          <div class=\"progress progress-xs mt-h\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"text-muted\">Pageviews</div>\r\n          <strong>78.706 Views (60%)</strong>\r\n          <div class=\"progress progress-xs mt-h\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li class=\"hidden-sm-down\">\r\n          <div class=\"text-muted\">New Users</div>\r\n          <strong>22.123 Users (80%)</strong>\r\n          <div class=\"progress progress-xs mt-h\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li class=\"hidden-sm-down\">\r\n          <div class=\"text-muted\">Bounce Rate</div>\r\n          <strong>40.15%</strong>\r\n          <div class=\"progress progress-xs mt-h\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!-- \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box facebook\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\" [datasets]=\"socialChartData1\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\"\r\n            [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>89k</strong>\r\n            <span>friends</span>\r\n          </li>\r\n          <li>\r\n            <strong>459</strong>\r\n            <span>feeds</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box twitter\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\" [datasets]=\"socialChartData2\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\"\r\n            [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>973k</strong>\r\n            <span>followers</span>\r\n          </li>\r\n          <li>\r\n            <strong>1.792</strong>\r\n            <span>tweets</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box linkedin\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\" [datasets]=\"socialChartData3\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\"\r\n            [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>500+</strong>\r\n            <span>contacts</span>\r\n          </li>\r\n          <li>\r\n            <strong>292</strong>\r\n            <span>feeds</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box google-plus\">\r\n        <i class=\"fa fa-google-plus\"></i>\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\" [datasets]=\"socialChartData4\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\"\r\n            [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>894</strong>\r\n            <span>followers</span>\r\n          </li>\r\n          <li>\r\n            <strong>92</strong>\r\n            <span>circles</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n-->\r\n\r\n</div>"

/***/ })

});