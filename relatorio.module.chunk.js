webpackJsonp(["relatorio.module"],{

/***/ "./src/app/pages/relatorio/pedido/relatario-pedido.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Relatório de pedido\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 3%\">\r\n                        <i class=\"fa fa-hashtag\"></i>\r\n                    </th>\r\n                    <th class=\"text-center\" style=\"width: 7%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th class=\"text-left\" style=\"width: 30%\">Cliente</th>\r\n                    <th class=\"text-left\" style=\"width: 10%\">CPF</th>\r\n                    <th class=\"text-left\" style=\"width: 10%\">Telefone</th>\r\n                    <th class=\"text-center\" style=\"width: 10%\">Status</th>\r\n                    <th class=\"text-center\" style=\"width: 10%\">Origem</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td class=\"text-center\">\r\n                        {{item.id}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"avatar\">\r\n                            <foto-uri id=\"{{item.cliente.id}}\" modulo=\"CLI\" classCss=\"img-avatar\" alt=\"Avatar\"></foto-uri>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-left-midle\">\r\n                        <div class=\"margin-top\">\r\n                            {{item.cliente.nmPessoa | uppercase}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-left-midle\">\r\n                        <div class=\"margin-top\">\r\n                            {{item.cliente.nrCpf | cpfMask}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-left-midle\">\r\n                        <div class=\"margin-top\">\r\n                            {{item.cliente.fone.nrFoneCelular | telefone}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"margin-top\">\r\n                            <status-pedido status={{item.status}}></status-pedido>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"margin-top\">\r\n                            <origem-pedido status={{item.origem}}></origem-pedido>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"margin-top\">\r\n                            <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"gerarPDF(item)\">\r\n                                <i class=\"fa fa-file-pdf-o fa-lg\"></i>\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\" (click)=\"gerarEtiquetaPDF(item)\">\r\n                                    <i class=\"fa fa-check-square-o fa-lg\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/relatorio/pedido/relatario-pedido.component.scss":
/***/ (function(module, exports) {

module.exports = ".table th, .table td {\n  padding: 0.20rem; }\n"

/***/ }),

/***/ "./src/app/pages/relatorio/pedido/relatario-pedidocomponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var pedido_service_1 = __webpack_require__("./src/app/pages/pedido/pedido.service.ts");
var relatorio_service_1 = __webpack_require__("./src/app/pages/relatorio/relatorio.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var abstract_base_component_1 = __webpack_require__("./src/config/core/abstract-base.component.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var RelatorioPedidoComponent = (function (_super) {
    __extends(RelatorioPedidoComponent, _super);
    function RelatorioPedidoComponent(pedidoService, relatorioService, router) {
        var _this = _super.call(this) || this;
        _this.pedidoService = pedidoService;
        _this.relatorioService = relatorioService;
        _this.router = router;
        _this.items = [];
        return _this;
    }
    RelatorioPedidoComponent.prototype.ngOnInit = function () {
        this.carregarTodos();
    };
    RelatorioPedidoComponent.prototype.gerarPDF = function (pedido) {
        var _this = this;
        this.relatorioService.gerarPdf(pedido)
            .subscribe(function (data) { return _this.openWindows(data); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    RelatorioPedidoComponent.prototype.gerarEtiquetaPDF = function (pedido) {
        var _this = this;
        this.relatorioService.gerarEtiquetaPdf(pedido)
            .subscribe(function (data) { console.log(data); _this.openWindows(data); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    RelatorioPedidoComponent.prototype.carregarTodos = function () {
        var _this = this;
        this.pedidoService.findAll().subscribe(function (res) { _this.items = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    RelatorioPedidoComponent.prototype.openWindows = function (data) {
        var fileURL = URL.createObjectURL(data);
        window.open(fileURL);
    };
    return RelatorioPedidoComponent;
}(abstract_base_component_1.AbstractBaseComponent));
RelatorioPedidoComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("./src/app/pages/relatorio/pedido/relatario-pedido.component.html"),
        styles: [__webpack_require__("./src/app/pages/relatorio/pedido/relatario-pedido.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof pedido_service_1.PedidoService !== "undefined" && pedido_service_1.PedidoService) === "function" && _a || Object, typeof (_b = typeof relatorio_service_1.RelatorioService !== "undefined" && relatorio_service_1.RelatorioService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], RelatorioPedidoComponent);
exports.RelatorioPedidoComponent = RelatorioPedidoComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/relatario-pedidocomponent.js.map

/***/ }),

/***/ "./src/app/pages/relatorio/relatorio-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var relatario_pedidocomponent_1 = __webpack_require__("./src/app/pages/relatorio/pedido/relatario-pedidocomponent.ts");
var routes = [
    {
        path: '',
        redirectTo: 'pedido/listar',
        pathMatch: 'full',
    },
    {
        path: 'pedido',
        data: {
            title: 'pedido'
        },
        children: [
            {
                path: 'listar',
                component: relatario_pedidocomponent_1.RelatorioPedidoComponent,
                data: {
                    title: 'Listar'
                }
            }
        ]
    }
];
var RelatorioRoutingModule = (function () {
    function RelatorioRoutingModule() {
    }
    return RelatorioRoutingModule;
}());
RelatorioRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], RelatorioRoutingModule);
exports.RelatorioRoutingModule = RelatorioRoutingModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/relatorio-routing.module.js.map

/***/ }),

/***/ "./src/app/pages/relatorio/relatorio.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var angular2_ladda_1 = __webpack_require__("./node_modules/angular2-ladda/module/module.js");
var modal_1 = __webpack_require__("./node_modules/ng2-bootstrap/modal/index.js");
var shared_component_module_1 = __webpack_require__("./src/app/shared/shared-component.module.ts");
var ng2_currency_mask_1 = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
var angular2_text_mask_1 = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
var tabs_1 = __webpack_require__("./node_modules/ng2-bootstrap/tabs/index.js");
var relatario_pedidocomponent_1 = __webpack_require__("./src/app/pages/relatorio/pedido/relatario-pedidocomponent.ts");
var relatorio_routing_module_1 = __webpack_require__("./src/app/pages/relatorio/relatorio-routing.module.ts");
var relatorio_service_1 = __webpack_require__("./src/app/pages/relatorio/relatorio.service.ts");
var pedido_service_1 = __webpack_require__("./src/app/pages/pedido/pedido.service.ts");
var RelatorioModule = (function () {
    function RelatorioModule() {
    }
    return RelatorioModule;
}());
RelatorioModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            modal_1.ModalModule.forRoot(),
            shared_component_module_1.SharedComponentModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule,
            tabs_1.TabsModule,
            relatorio_routing_module_1.RelatorioRoutingModule,
            angular2_ladda_1.LaddaModule,
            angular2_text_mask_1.TextMaskModule,
            angular2_text_mask_1.TextMaskModule,
            ng2_currency_mask_1.CurrencyMaskModule
        ],
        declarations: [
            relatario_pedidocomponent_1.RelatorioPedidoComponent,
        ],
        providers: [
            relatorio_service_1.RelatorioService,
            pedido_service_1.PedidoService
        ]
    })
], RelatorioModule);
exports.RelatorioModule = RelatorioModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/relatorio.module.js.map

/***/ }),

/***/ "./src/app/pages/relatorio/relatorio.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var abstract_service_1 = __webpack_require__("./src/config/core/abstract-service.ts");
var RelatorioService = (function (_super) {
    __extends(RelatorioService, _super);
    function RelatorioService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/relatorio";
        _this.urlReportPedido = _this.url + "/pedido";
        return _this;
    }
    RelatorioService.prototype.gerarPdf = function (pedido) {
        return this.http.get(this.urlReportPedido + "/" + pedido.id + "/pdf", this.getPDF())
            .map(function (res) {
            return new Blob([res], { type: 'application/pdf' });
        });
    };
    RelatorioService.prototype.gerarEtiquetaPdf = function (pedido) {
        return this.http.get(this.urlReportPedido + "/" + pedido.id + "/etiqueta", this.getPDF())
            .map(function (res) {
            return new Blob([res], { type: 'application/pdf' });
        });
    };
    return RelatorioService;
}(abstract_service_1.AbstractService));
RelatorioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], RelatorioService);
exports.RelatorioService = RelatorioService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/relatorio.service.js.map

/***/ })

});
//# sourceMappingURL=relatorio.module.chunk.js.map