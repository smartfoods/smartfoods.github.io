webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layout/dashboard/dashboard.module": [
		"./src/app/layout/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./pages/auth/auth.module": [
		"./src/app/pages/auth/auth.module.ts"
	],
	"./pages/cadastros/cardapio/cardapio.module": [
		"./src/app/pages/cadastros/cardapio/cardapio.module.ts",
		"cardapio.module"
	],
	"./pages/cadastros/cliente/cliente.module": [
		"./src/app/pages/cadastros/cliente/cliente.module.ts",
		"common"
	],
	"./pages/cadastros/produto/produto.module": [
		"./src/app/pages/cadastros/produto/produto.module.ts",
		"common",
		"produto.module"
	],
	"./pages/cadastros/usuario/usuario.module": [
		"./src/app/pages/cadastros/usuario/usuario.module.ts"
	],
	"./pages/config/adicional/adicional-produto.module": [
		"./src/app/pages/config/adicional/adicional-produto.module.ts",
		"common",
		"adicional-produto.module"
	],
	"./pages/config/categoria/categoria.module": [
		"./src/app/pages/config/categoria/categoria.module.ts",
		"categoria.module"
	],
	"./pages/config/formapagamento/forma-pagamento.module": [
		"./src/app/pages/config/formapagamento/forma-pagamento.module.ts",
		"common",
		"forma-pagamento.module"
	],
	"./pages/config/infonutricional/info-nutricional.module": [
		"./src/app/pages/config/infonutricional/info-nutricional.module.ts",
		"common",
		"info-nutricional.module"
	],
	"./pages/config/servicoentrega/servico-entrega.module": [
		"./src/app/pages/config/servicoentrega/servico-entrega.module.ts",
		"common",
		"servico-entrega.module"
	],
	"./pages/config/taxaentrega/taxa-entrega.module": [
		"./src/app/pages/config/taxaentrega/taxa-entrega.module.ts",
		"common",
		"taxa-entrega.module"
	],
	"./pages/config/unidademedida/unidade-medida.module": [
		"./src/app/pages/config/unidademedida/unidade-medida.module.ts",
		"common",
		"unidade-medida.module"
	],
	"./pages/pedido/pedido.module": [
		"./src/app/pages/pedido/pedido.module.ts",
		"common",
		"pedido.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var angular2_toaster_1 = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var AppComponent = (function () {
    function AppComponent(toasterService) {
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            tapToDismiss: true,
            newestOnTop: true,
            positionClass: 'toast-top-full-width',
            timeout: 3500
        });
        this.toasterService = toasterService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        event_emitter_services_1.EventEmitterService.getToater().subscribe(function (res) { return _this.showToasterMessage(res); });
    };
    AppComponent.prototype.showToasterMessage = function (tm) {
        this.toasterService.clear();
        this.toasterService.pop(tm.getTipoMensagem(), tm.getTitulo(), tm.getMensagem());
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'body',
        template: __webpack_require__("./src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_toaster_1.ToasterService !== "undefined" && angular2_toaster_1.ToasterService) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var log_service_1 = __webpack_require__("./src/services/log.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var auth_module_1 = __webpack_require__("./src/app/pages/auth/auth.module.ts");
var dropdown_1 = __webpack_require__("./node_modules/ng2-bootstrap/dropdown/index.js");
var tabs_1 = __webpack_require__("./node_modules/ng2-bootstrap/tabs/index.js");
var ng2_charts_1 = __webpack_require__("./node_modules/ng2-charts/ng2-charts.js");
var angular2_toaster_1 = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
var auth_guard_service_1 = __webpack_require__("./src/config/guard/auth-guard.service.ts");
var storage_service_1 = __webpack_require__("./src/services/storage.service.ts");
var auth_service_1 = __webpack_require__("./src/services/auth.service.ts");
// Routing Module
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
//Layouts
var layout_module_1 = __webpack_require__("./src/app/layout/layouts/layout.module.ts");
var error_interceptor_1 = __webpack_require__("./src/config/interceptors/error-interceptor.ts");
var auth_interceptor_1 = __webpack_require__("./src/config/interceptors/auth-interceptor.ts");
var _404_component_1 = __webpack_require__("./src/app/pages/admin/erros/404.component.ts");
var _500_component_1 = __webpack_require__("./src/app/pages/admin/erros/500.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            app_routing_1.AppRoutingModule,
            dropdown_1.BsDropdownModule.forRoot(),
            tabs_1.TabsModule.forRoot(),
            ng2_charts_1.ChartsModule,
            angular2_toaster_1.ToasterModule,
            http_1.HttpClientModule,
            layout_module_1.LayoutModule,
            auth_module_1.AuthModule
        ],
        declarations: [
            app_component_1.AppComponent,
            _404_component_1.p404Component,
            _500_component_1.p500Component
        ],
        providers: [{
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            },
            auth_guard_service_1.AuthGuard,
            auth_service_1.AuthService,
            storage_service_1.StorageService,
            log_service_1.LogService,
            auth_interceptor_1.AuthInterceptorProvider,
            error_interceptor_1.ErrorInterceptorProvider,
            { provide: core_1.LOCALE_ID, useValue: 'pt-BR' }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_guard_service_1 = __webpack_require__("./src/config/guard/auth-guard.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
//Layouts
var full_layout_component_1 = __webpack_require__("./src/app/layout/layouts/base/full-layout.component.ts");
var simple_layout_component_1 = __webpack_require__("./src/app/layout/layouts/base/simple-layout.component.ts");
var _404_component_1 = __webpack_require__("./src/app/pages/admin/erros/404.component.ts");
var _500_component_1 = __webpack_require__("./src/app/pages/admin/erros/500.component.ts");
exports.routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: full_layout_component_1.FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './layout/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'pedidos',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/pedido/pedido.module#PedidoModule'
            },
            {
                path: 'usuarios',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/cadastros/usuario/usuario.module#UsuarioModule'
            },
            {
                path: 'produtos',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/cadastros/produto/produto.module#ProdutoModule'
            },
            {
                path: 'clientes',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/cadastros/cliente/cliente.module#ClienteModule'
            },
            {
                path: 'cardapios',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/cadastros/cardapio/cardapio.module#CardapioModule'
            },
            {
                path: 'categorias',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/config/categoria/categoria.module#CategoriaModule'
            },
            {
                path: 'unidades',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/config/unidademedida/unidade-medida.module#UnidadeMedidaModule'
            },
            {
                path: 'infonutricional',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/config/infonutricional/info-nutricional.module#InfoNutricionalModule'
            },
            {
                path: 'adicionais',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/config/adicional/adicional-produto.module#AdicionalProdutoModule'
            },
            {
                path: 'formapagamento',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/config/formapagamento/forma-pagamento.module#FormaPagamentoModule'
            },
            {
                path: 'taxaentrega',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/config/taxaentrega/taxa-entrega.module#TaxaEntregaModule'
            },
            {
                path: 'servicoentrega',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/config/servicoentrega/servico-entrega.module#ServicoEntregaModule'
            }
        ]
    },
    {
        path: 'auth',
        component: simple_layout_component_1.SimpleLayoutComponent,
        data: {
            title: 'Auth'
        },
        children: [
            {
                path: '',
                loadChildren: './pages/auth/auth.module#AuthModule',
            }
        ]
    },
    {
        path: 'errors',
        component: _500_component_1.p500Component,
    },
    {
        path: '**',
        component: _404_component_1.p404Component,
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/app.routing.js.map

/***/ }),

/***/ "./src/app/layout/layouts/base/full-layout.component.css":
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\r\n    position: relative;\r\n    margin-bottom: 1.5rem;\r\n    border-bottom: 1px solid #333;\r\n}\r\n.app-footer {\r\n   margin-left: 200px;\r\n   border-top: 1px solid #333;\r\n}"

/***/ }),

/***/ "./src/app/layout/layouts/base/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<up-side-bar>\r\n</up-side-bar>\r\n<div class=\"app-body\">\r\n    <div class=\"sidebar\">\r\n        <div class=\"sidebar-header\">\r\n            <heard-side-bar></heard-side-bar>\r\n        </div>\r\n        <nav class=\"sidebar-nav\">\r\n            <menu-side-bar></menu-side-bar>\r\n        </nav>\r\n    </div>\r\n\r\n    <!-- Main content -->\r\n    <main class=\"main\">\r\n\r\n        <!-- Breadcrumb -->\r\n        <ol class=\"breadcrumb\">\r\n            <breadcrumbs></breadcrumbs>\r\n        </ol>\r\n        <div class=\"container-fluid\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <!-- /.conainer-fluid -->\r\n    </main>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/layouts/base/full-layout.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) { };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    return FullLayoutComponent;
}());
FullLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        styles: [__webpack_require__("./src/app/layout/layouts/base/full-layout.component.css")],
        template: __webpack_require__("./src/app/layout/layouts/base/full-layout.component.html"),
        providers: []
    }),
    __metadata("design:paramtypes", [])
], FullLayoutComponent);
exports.FullLayoutComponent = FullLayoutComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/full-layout.component.js.map

/***/ }),

/***/ "./src/app/layout/layouts/base/simple-layout.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var SimpleLayoutComponent = (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent.prototype.ngOnInit = function () { };
    return SimpleLayoutComponent;
}());
SimpleLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: '<router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [])
], SimpleLayoutComponent);
exports.SimpleLayoutComponent = SimpleLayoutComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/simple-layout.component.js.map

/***/ }),

/***/ "./src/app/layout/layouts/footer/footer.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'app-footer',
        template: "\n              <footer class=\"app-footer\">\n                <span class=\"float-right\">\n                    <a href=\"http://www.gestaosimples.com\" target=\"blank\">Gest\u00E3oSimples</a>\n                </span>\n            </footer>\n  "
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/footer.component.js.map

/***/ }),

/***/ "./src/app/layout/layouts/heard-side-bar/heard-side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-header\">\r\n  <foto src=\"{{urlFotoPerfil}}\" classCss=\"img-avatar\" alt=\"Avatar\"></foto>\r\n  <div>\r\n    <strong> {{nmUsuario}}</strong>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/layouts/heard-side-bar/heard-side-bar.component.ts":
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
var image_service_1 = __webpack_require__("./src/services/image.service.ts");
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var usuario_service_1 = __webpack_require__("./src/app/pages/cadastros/usuario/usuario.service.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var HeardSideBarComponent = (function () {
    function HeardSideBarComponent(usuarioService, image) {
        this.usuarioService = usuarioService;
        this.image = image;
        this.idUsuario = "";
        this.nmUsuario = "";
        this.urlFotoPerfil = '/assets/img/noimage/prod.jpg';
    }
    HeardSideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.infoUsuarioLogado()
            .subscribe(function (res) {
            _this.idUsuario = res.id;
            _this.nmUsuario = res.nmPessoa;
            _this.image.getImageFromBucket(_this.idUsuario, 'CLI').subscribe(function (res) { return _this.urlFotoPerfil = api_config_1.API_CONFIG.bucketBaseUrl + "/clientes/cli" + _this.idUsuario + ".jpg"; });
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return HeardSideBarComponent;
}());
HeardSideBarComponent = __decorate([
    core_1.Component({
        selector: 'heard-side-bar',
        template: __webpack_require__("./src/app/layout/layouts/heard-side-bar/heard-side-bar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof usuario_service_1.UsuarioService !== "undefined" && usuario_service_1.UsuarioService) === "function" && _a || Object, typeof (_b = typeof image_service_1.ImageService !== "undefined" && image_service_1.ImageService) === "function" && _b || Object])
], HeardSideBarComponent);
exports.HeardSideBarComponent = HeardSideBarComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/heard-side-bar.component.js.map

/***/ }),

/***/ "./src/app/layout/layouts/layout.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var modal_1 = __webpack_require__("./node_modules/ng2-bootstrap/modal/index.js");
var image_service_1 = __webpack_require__("./src/services/image.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
var shared_component_module_1 = __webpack_require__("./src/app/shared/shared-component.module.ts");
var popup_modal_module_1 = __webpack_require__("./src/app/shared/popup/popup-modal.module.ts");
var dropdown_1 = __webpack_require__("./node_modules/ng2-bootstrap/dropdown/index.js");
var aside_directive_1 = __webpack_require__("./src/app/shared/directive/aside.directive.ts");
var sidebar_directive_1 = __webpack_require__("./src/app/shared/directive/sidebar.directive.ts");
var nav_dropdown_directive_1 = __webpack_require__("./src/app/shared/directive/nav-dropdown.directive.ts");
var breadcrumb_component_1 = __webpack_require__("./src/app/shared/components/breadcrumb.component.ts");
var footer_component_1 = __webpack_require__("./src/app/layout/layouts/footer/footer.component.ts");
var menu_side_bar_component_1 = __webpack_require__("./src/app/layout/layouts/menu-side-bar/menu-side-bar.component.ts");
var heard_side_bar_component_1 = __webpack_require__("./src/app/layout/layouts/heard-side-bar/heard-side-bar.component.ts");
var up_side_bar_component_1 = __webpack_require__("./src/app/layout/layouts/up-side-bar/up-side-bar.component.ts");
var full_layout_component_1 = __webpack_require__("./src/app/layout/layouts/base/full-layout.component.ts");
var simple_layout_component_1 = __webpack_require__("./src/app/layout/layouts/base/simple-layout.component.ts");
var auth_service_1 = __webpack_require__("./src/services/auth.service.ts");
var usuario_module_1 = __webpack_require__("./src/app/pages/cadastros/usuario/usuario.module.ts");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.AppRoutingModule,
            popup_modal_module_1.PopupModalModule,
            shared_component_module_1.SharedComponentModule,
            dropdown_1.BsDropdownModule.forRoot(),
            modal_1.ModalModule.forRoot(),
            usuario_module_1.UsuarioModule
        ],
        declarations: [
            aside_directive_1.AsideToggleDirective,
            up_side_bar_component_1.UpSideBarComponent,
            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
            full_layout_component_1.FullLayoutComponent,
            simple_layout_component_1.SimpleLayoutComponent,
            menu_side_bar_component_1.MenuSideBarComponent,
            footer_component_1.FooterComponent,
            breadcrumb_component_1.BreadcrumbsComponent,
            heard_side_bar_component_1.HeardSideBarComponent,
            footer_component_1.FooterComponent
        ],
        providers: [
            auth_service_1.AuthService,
            image_service_1.ImageService
        ]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/layout.module.js.map

/***/ }),

/***/ "./src/app/layout/layouts/menu-side-bar/menu-side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n      <i class=\"icon-speedometer\"></i>Dashboard\r\n    </a>\r\n  </li>\r\n  <li class=\"divider\"></li>\r\n  <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\">\r\n      <i class=\"fa fa-server\"></i>Pedidos</a>\r\n    <ul class=\"nav-dropdown-items\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pedidos/novo']\">\r\n          <i class=\"fa fa-cart-plus\"></i>Novo</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pedidos/listar']\">\r\n          <i class=\"fa fa-cart-arrow-down\"></i>Acompanhamento</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </li>\r\n\r\n  <li class=\"divider\"></li>\r\n  <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\">\r\n      <i class=\"fa fa-folder\"></i>Cadastro</a>\r\n    <ul class=\"nav-dropdown-items\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/usuarios/listar']\">\r\n          <i class=\"fa fa-user\"></i>Usuário</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/clientes/listar']\">\r\n          <i class=\"fa fa-users\"></i>Clientes</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/produtos/listar']\">\r\n          <i class=\"fa fa-building-o\"></i>Produtos</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/cardapios/listar']\">\r\n          <i class=\"fa fa-book\"></i>Cardapios</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </li>\r\n  <li class=\"divider\" ></li>\r\n\r\n  <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\">\r\n      <i class=\"icon-settings\"></i> Configurações</a>\r\n    <ul class=\"nav-dropdown-items\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/unidades/listar']\">\r\n          <i class=\"fa fa-cube\"></i>Unidade medida</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/categorias/listar']\">\r\n          <i class=\"fa fa-object-group\"></i>Categorias</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/infonutricional/listar']\">\r\n          <i class=\"fa fa-reorder\"></i>Info Nutricional</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/adicionais/listar']\">\r\n          <i class=\"fa fa-cubes\"></i>Adicionais</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/formapagamento/listar']\">\r\n          <i class=\"fa fa-money\"></i>Forma de Pagamento</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/taxaentrega/listar']\">\r\n          <i class=\"fa fa-truck\"></i>Taxa de entrega</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/servicoentrega/listar']\">\r\n          <i class=\"fa fa-motorcycle\"></i>Servico de entrega</a>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <div class=\"divider hidden-lg-up\"></div>\r\n  <li class=\"nav-item nav-dropdown hidden-lg-up\" routerLinkActive=\"open\">\r\n    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\">\r\n      <i class=\"fa fa-group\"></i> Contas</a>\r\n    <ul class=\"nav-dropdown-items\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/clientes/perfil/']\">\r\n          <i class=\"fa fa-user\"></i> Perfil</a>\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/usuarios/changePassword/']\">\r\n          <i class=\"fa fa-lock\"></i> Alterar senha</a>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <div class=\"divider\"></div>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link cursor-hands\" routerLinkActive=\"active\" (click)=\"logout()\">\r\n      <i class=\"fa fa-power-off\"></i>Sair\r\n    </a>\r\n  </li>\r\n\r\n</ul>"

/***/ }),

/***/ "./src/app/layout/layouts/menu-side-bar/menu-side-bar.component.ts":
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
var auth_service_1 = __webpack_require__("./src/services/auth.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var MenuSideBarComponent = (function () {
    function MenuSideBarComponent(auth) {
        this.auth = auth;
    }
    MenuSideBarComponent.prototype.ngOnInit = function () { };
    MenuSideBarComponent.prototype.logout = function () {
        this.auth.logoutSistema();
    };
    return MenuSideBarComponent;
}());
MenuSideBarComponent = __decorate([
    core_1.Component({
        selector: 'menu-side-bar',
        template: __webpack_require__("./src/app/layout/layouts/menu-side-bar/menu-side-bar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], MenuSideBarComponent);
exports.MenuSideBarComponent = MenuSideBarComponent;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/menu-side-bar.component.js.map

/***/ }),

/***/ "./src/app/layout/layouts/up-side-bar/up-side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\">&#9776;</button>\r\n\r\n  <a class=\"navbar-brand\" href=\"#\"></a>\r\n  <ul class=\"nav navbar-nav hidden-md-down\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\"><i class=\"fa fa-navicon\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item px-1\">\r\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item dropdown hidden-md-down\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\r\n        <i class=\"icon-bell\"></i>\r\n        <span class=\"badge badge-pill badge-danger\">5</span>\r\n      </a>\r\n\r\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n\r\n        <div class=\"dropdown-header text-center\">\r\n          <strong>You have 5 notifications</strong>\r\n        </div>\r\n\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-user-follow text-success\"></i> New user registered\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-user-unfollow text-danger\"></i> User deleted\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-chart text-info\"></i> Sales report is ready\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-basket-loaded text-primary\"></i> New client\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-speedometer text-warning\"></i> Server overloaded\r\n        </a>\r\n\r\n      </div>\r\n    </li>\r\n\r\n    <li class=\"nav-item dropdown hidden-md-down\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link navbar-toggler\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\r\n        dropdownToggle><i class=\"fa fa-navicon\"></i>\r\n      </a>\r\n\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n\r\n        <div class=\"dropdown-header text-center\">\r\n          <strong>Contas</strong>\r\n        </div>\r\n\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-bell-o\"></i> Atualizações\r\n          <span class=\"badge badge-info\">42</span>\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-envelope-o\"></i> Mensagens\r\n          <span class=\"badge badge-success\">42</span>\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-tasks\"></i> Tarefas\r\n          <span class=\"badge badge-danger\">42</span>\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-comments\"></i> Comentários\r\n          <span class=\"badge badge-warning\">42</span>\r\n        </a>\r\n\r\n        <div class=\"dropdown-header text-center\">\r\n          <strong>Configurações</strong>\r\n        </div>\r\n\r\n        <a class=\"dropdown-item\" [routerLink]=\"['/clientes/perfil/']\">\r\n          <i class=\"fa fa-user\"></i> Perfil</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['/usuarios/changePassword/']\">\r\n          <i class=\"fa fa-lock\"></i> Alterar senha</a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\">\r\n          <i class=\"fa fa-power-off\"></i> Sair</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</header>"

/***/ }),

/***/ "./src/app/layout/layouts/up-side-bar/up-side-bar.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("./src/services/auth.service.ts");
var UpSideBarComponent = (function () {
    function UpSideBarComponent(auth) {
        this.auth = auth;
    }
    UpSideBarComponent.prototype.ngOnInit = function () {
    };
    UpSideBarComponent.prototype.logout = function () {
        this.auth.logoutSistema();
    };
    return UpSideBarComponent;
}());
UpSideBarComponent = __decorate([
    core_1.Component({
        selector: 'up-side-bar',
        template: __webpack_require__("./src/app/layout/layouts/up-side-bar/up-side-bar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], UpSideBarComponent);
exports.UpSideBarComponent = UpSideBarComponent;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/up-side-bar.component.js.map

/***/ }),

/***/ "./src/app/pages/admin/erros/404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-2\">404</h1>\r\n          <h4 class=\"pt-1\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/admin/erros/404.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var p404Component = (function () {
    function p404Component() {
    }
    return p404Component;
}());
p404Component = __decorate([
    core_1.Component({
        template: __webpack_require__("./src/app/pages/admin/erros/404.component.html")
    }),
    __metadata("design:paramtypes", [])
], p404Component);
exports.p404Component = p404Component;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/404.component.js.map

/***/ }),

/***/ "./src/app/pages/admin/erros/500.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-2\">500</h1>\r\n          <h4 class=\"pt-1\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  \r\n"

/***/ }),

/***/ "./src/app/pages/admin/erros/500.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var p500Component = (function () {
    function p500Component() {
    }
    return p500Component;
}());
p500Component = __decorate([
    core_1.Component({
        template: __webpack_require__("./src/app/pages/admin/erros/500.component.html")
    }),
    __metadata("design:paramtypes", [])
], p500Component);
exports.p500Component = p500Component;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/500.component.js.map

/***/ }),

/***/ "./src/app/pages/auth/auth-routing.module.ts":
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
var register_component_1 = __webpack_require__("./src/app/pages/auth/register/register.component.ts");
var login_component_1 = __webpack_require__("./src/app/pages/auth/login/login.component.ts");
var routes = [
    {
        path: '',
        data: {
            title: 'Auth Pages'
        },
        children: [
            {
                path: 'login',
                component: login_component_1.LoginComponent,
                data: {
                    title: 'Login page'
                }
            },
            {
                path: 'register',
                component: register_component_1.RegisterComponent,
                data: {
                    title: 'Registrer Page'
                }
            }
        ]
    }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    return AuthRoutingModule;
}());
AuthRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], AuthRoutingModule);
exports.AuthRoutingModule = AuthRoutingModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/auth-routing.module.js.map

/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_component_module_1 = __webpack_require__("./src/app/shared/shared-component.module.ts");
var storage_service_1 = __webpack_require__("./src/services/storage.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var auth_routing_module_1 = __webpack_require__("./src/app/pages/auth/auth-routing.module.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var login_component_1 = __webpack_require__("./src/app/pages/auth/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/pages/auth/register/register.component.ts");
var auth_service_1 = __webpack_require__("./src/services/auth.service.ts");
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        imports: [
            auth_routing_module_1.AuthRoutingModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            shared_component_module_1.SharedComponentModule
        ],
        declarations: [
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
        ],
        providers: [
            auth_service_1.AuthService,
            storage_service_1.StorageService
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/auth.module.js.map

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-8\">\r\n        <alert-field-mensagem></alert-field-mensagem>\r\n        <div class=\"card-group mb-0\">\r\n          <div class=\"card p-2\">\r\n            <form>\r\n              <div class=\"card-block\">\r\n                <h1>Smartfood</h1>\r\n                <div class=\"small text-muted\">{{versao}}</div>\r\n                <br/>\r\n                <div class=\"input-group mb-1\">\r\n                  <span class=\"input-group-addon\">\r\n                    <i class=\"icon-user\"></i>\r\n                  </span>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"login\" [(ngModel)]=\"creds.dsLogin\" name=\"login\">\r\n                </div>\r\n                <div class=\"input-group mb-2\">\r\n                  <span class=\"input-group-addon\">\r\n                    <i class=\"icon-lock\"></i>\r\n                  </span>\r\n                  <input type=\"password\" class=\"form-control\" placeholder=\"senha\" [(ngModel)]=\"creds.dsSenha\" name=\"senha\">\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 col-sm-8\">\r\n                    <button type=\"button\" class=\"btn btn-block btn-primary px-2 cursor-hands\"  (click)=\"login()\">Login</button>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-sm-8\">\r\n                    <button type=\"button\" class=\"btn btn-link px-0 cursor-hands\">Esqueceu a senha?</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"card py-3 hidden-md-down\" style=\"width:44%\">\r\n            <div class=\"card-block text-center\">\r\n              <img src=\"./assets/img/logo_paladar_fit.png\" style=\"height: 100%; width: 100%\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.ts":
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
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var log_service_1 = __webpack_require__("./src/services/log.service.ts");
var auth_service_1 = __webpack_require__("./src/services/auth.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var LoginComponent = (function () {
    function LoginComponent(auth, router, log) {
        this.auth = auth;
        this.router = router;
        this.log = log;
        this.creds = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.versao = api_config_1.API_CONFIG.versao;
        if (this.auth.hasToken()) {
            this.auth.refreshToken()
                .subscribe(function (response) { return _this.auth.successfulLogin(response['headers'].get('Authorization')); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.authenticate(this.creds)
            .subscribe(function (response) {
            _this.auth.successfulLogin(response.headers.get('Authorization'));
            _this.router.navigate(['dashboard']);
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("./src/app/pages/auth/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _c || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/login.component.js.map

/***/ }),

/***/ "./src/app/pages/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card mx-2\">\r\n          <div class=\"card-block p-2\">\r\n            <h1>Register</h1>\r\n            <p class=\"text-muted\">Create your account</p>\r\n            <div class=\"input-group mb-1\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-1\">\r\n              <span class=\"input-group-addon\">@</span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-1\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-2\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\r\n            </div>\r\n\r\n            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\r\n          </div>\r\n          <div class=\"card-footer p-2\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/register/register.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("./src/app/pages/auth/register/register.component.html")
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/register.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/cliente/cliente.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var abstract_service_1 = __webpack_require__("./src/config/core/abstract-service.ts");
//import { catchError, retry } from 'rxjs/operators';
var ClienteService = (function (_super) {
    __extends(ClienteService, _super);
    function ClienteService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/clientes";
        return _this;
    }
    ClienteService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    ClienteService.prototype.findAll = function () {
        return this.http.get(this.url, this.getHearderToken());
    };
    ClienteService.prototype.findByNrCpfOrNmPessoa = function (nrCpf, nmPessoaFisica) {
        var cpf = nrCpf.replace(/\D/g, '');
        return this.http.get(this.url + "/consultarPor?cpf=" + cpf + "&nome=" + nmPessoaFisica, this.getHearderToken());
    };
    ClienteService.prototype.salvar = function (cliente) {
        return this.http.post("" + this.url, JSON.stringify(cliente), this.getHearderTokenNoResponse());
    };
    ClienteService.prototype.changeStatus = function (cliente) {
        return this.http.put(this.url + "/" + cliente.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    ClienteService.prototype.infoClienteLogado = function () {
        return this.http.get(this.url + "/clientelogado", this.getHearderToken());
    };
    ClienteService.prototype.consultarPorCpf = function (nrCpf) {
        var cpf = nrCpf.replace(/\D/g, '');
        return this.http.get(this.url + "/consultarCpf?cpf=" + cpf, this.getHearderToken());
    };
    ClienteService.prototype.atualizar = function (cliente) {
        return this.http.put(this.url + "/" + cliente.id, JSON.stringify(cliente), this.getHearderTokenNoResponse());
    };
    ClienteService.prototype.excluir = function (cliente) {
        return this.http.delete(this.url + "/" + cliente.id, this.getHearderToken());
    };
    return ClienteService;
}(abstract_service_1.AbstractService));
ClienteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], ClienteService);
exports.ClienteService = ClienteService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cliente.service.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/produto/produto.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var abstract_service_1 = __webpack_require__("./src/config/core/abstract-service.ts");
//import { catchError, retry } from 'rxjs/operators';
var ProdutoService = (function (_super) {
    __extends(ProdutoService, _super);
    function ProdutoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/produtos";
        return _this;
    }
    ProdutoService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    ProdutoService.prototype.findAll = function () {
        return this.http.get(this.url + "/", this.getHearderToken());
    };
    ProdutoService.prototype.findByCategorias = function (categorias) {
        var ids = '';
        for (var _i = 0, categorias_1 = categorias; _i < categorias_1.length; _i++) {
            var s = categorias_1[_i];
            ids += s + ',';
        }
        return this.http.get(this.url + "/consultarPorCategorias?categorias=" + ids, this.getHearderToken());
    };
    ProdutoService.prototype.findByCategoriaOrNmProduto = function (idCategoria, nmProduto, moduloConsulta) {
        if (moduloConsulta == 'CRD') {
            return this.http.get(api_config_1.API_CONFIG.baseUrl + "/cardapio/consultarPor?idCategoria=" + idCategoria + "&nmProduto=" + nmProduto);
        }
        else {
            return this.http.get(this.url + "/consultarPor?idCategoria=" + idCategoria + "&nmProduto=" + nmProduto, this.getHearderToken());
        }
    };
    ProdutoService.prototype.findAllProdutoInterno = function () {
        return this.http.get(this.url + "/internos", this.getHearderToken());
    };
    ProdutoService.prototype.salvar = function (produto) {
        return this.http.post(this.url + "/", JSON.stringify(produto), this.getHearderTokenNoResponse());
    };
    ProdutoService.prototype.changeStatus = function (produto) {
        return this.http.put(this.url + "/" + produto.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    ProdutoService.prototype.atualizar = function (produto) {
        return this.http.put(this.url + "/" + produto.id, JSON.stringify(produto), this.getHearderTokenNoResponse());
    };
    ProdutoService.prototype.excluir = function (produto) {
        var url = this.url + "/" + produto.id;
        return this.http.delete(url, this.getHearderToken());
    };
    return ProdutoService;
}(abstract_service_1.AbstractService));
ProdutoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], ProdutoService);
exports.ProdutoService = ProdutoService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/produto.service.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/listar/listar-usuario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"usuarioModal.show()\">\r\n    <i class=\"icon-plus\"></i> Novo</button>\r\n\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de usuários\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>\r\n                        <div style=\"width: 25%\" style=\"width: 20%\">Nome</div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"text-center hidden-md-down\" style=\"width: 20%\">CPF / Cnpj</div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"text-center hidden-md-down\" style=\"width: 20%\">E-mail</div>\r\n                    </th>\r\n                    <th>\r\n                        <div style=\"width: 18%\">Login</div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"text-center hidden-md-down\" style=\"width: 5%\">Situação</div>\r\n                    </th>\r\n                    <th>\r\n                        <div style=\"width: 12%\">Ação</div>\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td>\r\n                        <div>\r\n                            {{item.nmPessoa | uppercase}}\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"text-center hidden-md-down\">\r\n                            {{item.nrDocumento | cpfCnpj}}\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"text-center hidden-md-down\">\r\n                            {{item.edEmail}}\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"text-left\">\r\n                            {{item.dsLogin}}\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"text-center hidden-md-down\">\r\n                            <status status={{item.status}}></status>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n\r\n                        <form-buttons \r\n                            [exibirBtnAlterarSenha]=\"true\"\r\n                            (onClickBtnEditar)=\"usuarioModal.showAlteracao(item)\" \r\n                            (onClickBtnAlterarSenha)=\"senhaModal.showAlteracao(item)\" \r\n                            \r\n                            (onClickBtnExcluir)=\"selecionarItem(item)\" \r\n                            (onClickBtnAlterarStatus)=\"selecionarItemChangeStatus(item)\">\r\n\r\n                        </form-buttons>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>\r\n\r\n<confirm-popup-modal #excluirModal popupStyle=\"danger\" (onClickConfirm)=\"excluir()\">\r\n    <strong>Deseja excluir a cliente?</strong>\r\n</confirm-popup-modal>\r\n\r\n<confirm-popup-modal #changeStatusModal popupStyle=\"danger\" (onClickConfirm)=\"changeStatus()\">\r\n    <strong>Deseja alterar o status do cliente?</strong>\r\n</confirm-popup-modal>\r\n\r\n<usuario-popup-modal #usuarioModal (onClickConfirm)=\"carregarTodos()\"></usuario-popup-modal>\r\n<senha-popup-modal #senhaModal (onClickConfirm)=\"carregarTodos()\"></senha-popup-modal>"

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/listar/listar-usuario.component.scss":
/***/ (function(module, exports) {

module.exports = ".table th, .table td {\n  padding: 0.20rem; }\n"

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/listar/listar-usuario.component.ts":
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
var usuario_service_1 = __webpack_require__("./src/app/pages/cadastros/usuario/usuario.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var abstract_base_component_1 = __webpack_require__("./src/config/core/abstract-base.component.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var ListarUsuarioComponent = (function (_super) {
    __extends(ListarUsuarioComponent, _super);
    function ListarUsuarioComponent(usuarioService, router) {
        var _this = _super.call(this) || this;
        _this.usuarioService = usuarioService;
        _this.router = router;
        _this.items = [];
        return _this;
    }
    ListarUsuarioComponent.prototype.ngOnInit = function () {
        this.carregarTodos();
    };
    ListarUsuarioComponent.prototype.selecionarItem = function (item) {
        this.cliente = item;
        this.popupExclusao.show();
    };
    ListarUsuarioComponent.prototype.selecionarItemChangeStatus = function (item) {
        this.cliente = item;
        this.popupChangeStatus.show();
    };
    ListarUsuarioComponent.prototype.changeStatus = function () {
        var _this = this;
        this.usuarioService.changeStatus(this.cliente)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Usuário', 'Status do usuário foi alterado com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarUsuarioComponent.prototype.excluir = function () {
        var _this = this;
        this.usuarioService.excluir(this.cliente)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Usuário', 'Usuário foi excluído com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarUsuarioComponent.prototype.carregarTodos = function () {
        var _this = this;
        this.usuarioService.findAll().subscribe(function (response) { _this.items = response; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return ListarUsuarioComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('excluirModal'),
    __metadata("design:type", Object)
], ListarUsuarioComponent.prototype, "popupExclusao", void 0);
__decorate([
    core_1.ViewChild('changeStatusModal'),
    __metadata("design:type", Object)
], ListarUsuarioComponent.prototype, "popupChangeStatus", void 0);
ListarUsuarioComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("./src/app/pages/cadastros/usuario/listar/listar-usuario.component.html"),
        styles: [__webpack_require__("./src/app/pages/cadastros/usuario/listar/listar-usuario.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof usuario_service_1.UsuarioService !== "undefined" && usuario_service_1.UsuarioService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ListarUsuarioComponent);
exports.ListarUsuarioComponent = ListarUsuarioComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-usuario.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/popup/senha-popup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<base-popup-modal [nomePopup]=\"nomeJanePopup\" #modalConfirm modalSize=\"lg\" [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formulario.value)\"\r\n  [desabilitarBtnConfirmar]=\"!formulario.valid\">\r\n\r\n  <form [formGroup]=\"formulario\">\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Login</label>\r\n      <div class=\"col-sm-4\">\r\n        <input type=\"text\" class=\"form-control input-sm\" value=\"{{usuario.dsLogin}}\" [readonly]=\"true\">\r\n      </div>\r\n    </div>\r\n    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('dsSenha'))\" >\r\n      <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Senha</label>\r\n      <div class=\"col-sm-4\">\r\n        <input #campoNome type=\"password\" formControlName=\"dsSenha\" class=\"form-control input-sm\" name=\"dsSenha\" maxlength=\"8\">\r\n      </div>\r\n    </div>\r\n    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('senhaConfirmacao'))\" >\r\n      <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Confirmação</label>\r\n      <div class=\"col-sm-4\">\r\n        <input type=\"password\" formControlName=\"senhaConfirmacao\" class=\"form-control input-sm\" name=\"senhaConfirmacao\" maxlength=\"8\">\r\n      </div>\r\n    </div> \r\n  </form>\r\n</base-popup-modal>"

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/popup/senha-popup-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal-dialog {\n  padding-top: 5%; }\n"

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/popup/senha-popup-modal.component.ts":
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
var usuario_service_1 = __webpack_require__("./src/app/pages/cadastros/usuario/usuario.service.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var abstract_popup_component_1 = __webpack_require__("./src/config/core/abstract-popup.component.ts");
var SenhaPopupModalComponent = (function (_super) {
    __extends(SenhaPopupModalComponent, _super);
    function SenhaPopupModalComponent(fb, usuarioService) {
        var _this = _super.call(this, 'senhaPopup') || this;
        _this.fb = fb;
        _this.usuarioService = usuarioService;
        _this.usuario = {};
        return _this;
    }
    SenhaPopupModalComponent.prototype.ngOnInit = function () {
        this.criarForm();
    };
    SenhaPopupModalComponent.prototype.showAlteracao = function (item) {
        this.alterarForm(item);
        this.showPopup("Alteração de senha");
    };
    SenhaPopupModalComponent.prototype.btnConfirmar = function (usuario) {
        var _this = this;
        this.usuarioService.changePassword(usuario)
            .subscribe(function (res) { return _this.tratarSucesso(); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    SenhaPopupModalComponent.prototype.alterarForm = function (usuario) {
        this.isAlteracao = true;
        this.usuario = usuario;
        this.formulario.patchValue({
            id: usuario.id,
            dsLogin: usuario.dsLogin,
            dsSenha: usuario.dsSenha,
            senhaConfirmacao: usuario.senhaConfirmacao,
            emAlteracao: true
        });
    };
    SenhaPopupModalComponent.prototype.criarForm = function () {
        this.formulario = this.fb.group({
            id: [''],
            dsLogin: [''],
            dsSenha: [''],
            senhaConfirmacao: [''],
            emAlteracao: false
        });
    };
    return SenhaPopupModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
SenhaPopupModalComponent = __decorate([
    core_1.Component({
        selector: 'senha-popup-modal',
        template: __webpack_require__("./src/app/pages/cadastros/usuario/popup/senha-popup-modal.component.html"),
        styles: [__webpack_require__("./src/app/pages/cadastros/usuario/popup/senha-popup-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof usuario_service_1.UsuarioService !== "undefined" && usuario_service_1.UsuarioService) === "function" && _b || Object])
], SenhaPopupModalComponent);
exports.SenhaPopupModalComponent = SenhaPopupModalComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/senha-popup-modal.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/popup/usuario-popup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<base-popup-modal [nomePopup]=\"nomeJanePopup\" #modalConfirm modalSize=\"lg\" [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formulario.value)\"\r\n  [desabilitarBtnConfirmar]=\"!formulario.valid\">\r\n\r\n  <form [formGroup]=\"formulario\" >\r\n    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nrDocumento'))\">\r\n      <label class=\"col-sm-2 form-control-label\" for=\"input-small\">CPF</label>\r\n      <div class=\"col-sm-4\">\r\n        <input #campoNome type=\"text\" formControlName=\"nrDocumento\" class=\"form-control input-sm\" name=\"nrDocumento\" [textMask]=\"{mask: maskCPF}\"\r\n          (blur)=\"consultarCpf($event.target.value)\" [readonly]=\"isAlteracao\">\r\n      </div>\r\n    </div>\r\n    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmPessoa'))\">\r\n      <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Nome</label>\r\n      <div class=\"col-sm-8\">\r\n        <input upper type=\"text\" formControlName=\"nmPessoa\" class=\"form-control input-sm\" name=\"nmPessoa\" maxlength=\"100\" [readonly]=\"isAlteracao\">\r\n      </div>\r\n    </div>\r\n    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('edEmail'))\">\r\n      <label class=\"col-sm-2 form-control-label\" for=\"input-small\">E-mail</label>\r\n      <div class=\"col-sm-8\">\r\n        <input lower type=\"text\" class=\"form-control input-sm\" formControlName=\"edEmail\" name=\"edEmail\" maxlength=\"100\" (blur)=\"consultarEdEmail($event.target.value)\">\r\n      </div>\r\n    </div>\r\n    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('dsLogin'))\">\r\n      <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Login</label>\r\n      <div class=\"col-sm-4\">\r\n        <input lower type=\"text\" formControlName=\"dsLogin\" class=\"form-control input-sm\" name=\"dsLogin\" (blur)=\"consultarLogin($event.target.value)\"\r\n          [readonly]=\"formulario.get('emAlteracao').value\">\r\n      </div>\r\n    </div>\r\n    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('dsSenha'))\" *ngIf=\"!isAlteracao\">\r\n      <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Senha</label>\r\n      <div class=\"col-sm-4\">\r\n        <input type=\"password\" formControlName=\"dsSenha\" class=\"form-control input-sm\" name=\"dsSenha\">\r\n      </div>\r\n    </div>\r\n    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('senhaConfirmacao'))\" *ngIf=\"!isAlteracao\">\r\n      <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Confirmação</label>\r\n      <div class=\"col-sm-4\">\r\n        <input type=\"password\" formControlName=\"senhaConfirmacao\" class=\"form-control input-sm\" name=\"senhaConfirmacao\">\r\n      </div>\r\n    </div>\r\n    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('perfil'))\">\r\n      <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Perfil</label>\r\n      <div class=\"col-sm-4\">\r\n        <select class=\"form-control\" id=\"perfil\" formControlName=\"perfil\" name=\"perfil\">\r\n          <option value=\"0\">:: selecione ::</option>\r\n          <option value=\"A\">Administrador</option>\r\n          <option value=\"C\">Cliente</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</base-popup-modal>"

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/popup/usuario-popup-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 5%; }\n"

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/popup/usuario-popup-modal.component.ts":
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
var usuario_service_1 = __webpack_require__("./src/app/pages/cadastros/usuario/usuario.service.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var abstract_popup_component_1 = __webpack_require__("./src/config/core/abstract-popup.component.ts");
var UsuarioPopupModalComponent = (function (_super) {
    __extends(UsuarioPopupModalComponent, _super);
    function UsuarioPopupModalComponent(fb, usuarioService) {
        var _this = _super.call(this, 'usuarioPopup') || this;
        _this.fb = fb;
        _this.usuarioService = usuarioService;
        _this.usuario = {};
        return _this;
    }
    UsuarioPopupModalComponent.prototype.ngOnInit = function () {
        this.criarForm();
    };
    UsuarioPopupModalComponent.prototype.show = function () {
        this.criarForm();
        this.showPopup("Cadastro de usuário");
    };
    UsuarioPopupModalComponent.prototype.showAlteracao = function (item) {
        this.alterarForm(item);
        this.showPopup("Alterar usuário");
    };
    UsuarioPopupModalComponent.prototype.btnConfirmar = function (usuario) {
        if (!this.isAlteracao && usuario.dsSenha != usuario.senhaConfirmacao) {
            trata_error_service_1.TrataErrorService.emitirMensagemError("Senhas não conferem.");
        }
        else {
            this.acao(usuario, this.usuarioService);
        }
    };
    UsuarioPopupModalComponent.prototype.consultarCpf = function (nrCpf) {
        var _this = this;
        if (!this.isAlteracao && nrCpf != '') {
            this.usuarioService.consultarPorCpf(nrCpf)
                .subscribe(function (res) {
                _this.alterarForm(res);
                trata_error_service_1.TrataErrorService.emitirMensagemError("Já exite um usuario cadastrado com o CPF informado.");
            }, function (error) { return trata_error_service_1.TrataErrorService.limparMensagemError(); });
        }
    };
    UsuarioPopupModalComponent.prototype.consultarLogin = function (dsLogin) {
        var _this = this;
        if (dsLogin != '' && this.usuario.dsLogin != dsLogin) {
            this.usuarioService.consultarPorLogin(dsLogin)
                .subscribe(function (res) {
                if (res.id != _this.usuario.id) {
                    trata_error_service_1.TrataErrorService.emitirMensagemError("o login informado já está em uso");
                }
            }, function (error) { return trata_error_service_1.TrataErrorService.limparMensagemError(); });
        }
    };
    UsuarioPopupModalComponent.prototype.consultarEdEmail = function (edEmail) {
        var _this = this;
        if (edEmail != '') {
            this.usuarioService.consultarPorEdEmail(edEmail)
                .subscribe(function (res) {
                if (res.id != _this.usuario.id) {
                    trata_error_service_1.TrataErrorService.emitirMensagemError("o e-mail informado já está em uso");
                }
            }, function (error) { return trata_error_service_1.TrataErrorService.limparMensagemError(); });
        }
    };
    UsuarioPopupModalComponent.prototype.alterarForm = function (usuario) {
        this.isAlteracao = true;
        this.usuario = usuario;
        this.formulario.patchValue({
            id: usuario.id,
            nmPessoa: usuario.nmPessoa,
            nrDocumento: usuario.nrDocumento,
            dsLogin: usuario.dsLogin,
            edEmail: usuario.edEmail,
            dsSenha: usuario.dsSenha,
            senhaConfirmacao: usuario.senhaConfirmacao,
            status: usuario.status,
            perfil: usuario.perfil,
            emAlteracao: true
        });
    };
    UsuarioPopupModalComponent.prototype.criarForm = function () {
        this.isAlteracao = false;
        this.formulario = this.fb.group({
            id: [''],
            nmPessoa: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(120)]],
            nrDocumento: ['', [forms_1.Validators.required]],
            edEmail: [''],
            dsLogin: [''],
            dsSenha: [''],
            senhaConfirmacao: [''],
            status: [''],
            perfil: ['A'],
            emAlteracao: false
        });
    };
    return UsuarioPopupModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
UsuarioPopupModalComponent = __decorate([
    core_1.Component({
        selector: 'usuario-popup-modal',
        template: __webpack_require__("./src/app/pages/cadastros/usuario/popup/usuario-popup-modal.component.html"),
        styles: [__webpack_require__("./src/app/pages/cadastros/usuario/popup/usuario-popup-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof usuario_service_1.UsuarioService !== "undefined" && usuario_service_1.UsuarioService) === "function" && _b || Object])
], UsuarioPopupModalComponent);
exports.UsuarioPopupModalComponent = UsuarioPopupModalComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/usuario-popup-modal.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/senha/senha-usuario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Alteração de senha</strong>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group\">\r\n          <div class=\"row\">\r\n            <!--/.col-->\r\n\r\n            <div class=\"col-md-12 col-sm-12\">\r\n              <alert-mensagem [mostrarErro]=\"isErro\" titulo=\"Erro:\" [mensagem]=\"errorMensagem\"></alert-mensagem>\r\n\r\n              <form [formGroup]=\"formulario\">\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Nome</label>\r\n                  <div class=\"col-sm-4\">\r\n                    <strong class=\"form-control-static\">{{usuario.nmPessoa}}</strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Login</label>\r\n                  <div class=\"col-sm-4\">\r\n                      <strong class=\"form-control-static\">{{usuario.dsLogin}}</strong>\r\n                  </div>\r\n                </div>\r\n\r\n                <div [ngClass]=\"aplicarCssGroupRow(formulario.get('dsSenha'))\">\r\n                  <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Senha</label>\r\n                  <div class=\"col-sm-4\">\r\n                    <input #campoNome type=\"password\" formControlName=\"dsSenha\" class=\"form-control input-sm\" name=\"dsSenha\" maxlength=\"8\">\r\n                  </div>\r\n                </div>\r\n                <div [ngClass]=\"aplicarCssGroupRow(formulario.get('senhaConfirmacao'))\">\r\n                  <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Confirmação</label>\r\n                  <div class=\"col-sm-4\">\r\n                    <input type=\"password\" formControlName=\"senhaConfirmacao\" class=\"form-control input-sm\" name=\"senhaConfirmacao\" maxlength=\"8\">\r\n                  </div>\r\n                </div>\r\n                <!-- \r\n                -->\r\n              </form>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div style=\"float: right;\">\r\n              <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmSenha.show()\">\r\n                <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<confirm-popup-modal #modalConfirmSenha popupStyle=\"primary\" (onClickConfirm)=\"btnConfirmar(formulario.value)\">\r\n  <strong>Confirma a alteração da senha?</strong>\r\n</confirm-popup-modal>"

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/senha/senha-usuario.component.ts":
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
var auth_service_1 = __webpack_require__("./src/services/auth.service.ts");
var usuario_service_1 = __webpack_require__("./src/app/pages/cadastros/usuario/usuario.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var abstract_base_component_1 = __webpack_require__("./src/config/core/abstract-base.component.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var SenhaUsuarioComponent = (function (_super) {
    __extends(SenhaUsuarioComponent, _super);
    function SenhaUsuarioComponent(auth, fb, usuarioService) {
        var _this = _super.call(this) || this;
        _this.auth = auth;
        _this.fb = fb;
        _this.usuarioService = usuarioService;
        _this.usuario = {};
        return _this;
    }
    SenhaUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.criarForm();
        this.usuarioService.infoUsuarioLogado()
            .subscribe(function (res) { _this.usuario = res; _this.alterarForm(res); });
    };
    SenhaUsuarioComponent.prototype.btnConfirmar = function (usuario) {
        var _this = this;
        this.usuarioService.changePassword(usuario)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Usuario', 'senha alterada com sucesso!!!');
            _this.auth.logoutSistema();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    SenhaUsuarioComponent.prototype.alterarForm = function (usuario) {
        this.formulario.patchValue({
            id: usuario.id,
            dsLogin: usuario.dsLogin,
            dsSenha: usuario.dsSenha,
            senhaConfirmacao: usuario.senhaConfirmacao,
            emAlteracao: true
        });
    };
    SenhaUsuarioComponent.prototype.criarForm = function () {
        this.formulario = this.fb.group({
            id: [''],
            dsLogin: [''],
            dsSenha: [''],
            senhaConfirmacao: [''],
            emAlteracao: false
        });
        if (this.campo != undefined) {
            this.fieldFocus(this.campo);
        }
    };
    return SenhaUsuarioComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('campoNome'),
    __metadata("design:type", Object)
], SenhaUsuarioComponent.prototype, "campo", void 0);
SenhaUsuarioComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("./src/app/pages/cadastros/usuario/senha/senha-usuario.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof usuario_service_1.UsuarioService !== "undefined" && usuario_service_1.UsuarioService) === "function" && _c || Object])
], SenhaUsuarioComponent);
exports.SenhaUsuarioComponent = SenhaUsuarioComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/senha-usuario.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/usuario-routing.module.ts":
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
var listar_usuario_component_1 = __webpack_require__("./src/app/pages/cadastros/usuario/listar/listar-usuario.component.ts");
var senha_usuario_component_1 = __webpack_require__("./src/app/pages/cadastros/usuario/senha/senha-usuario.component.ts");
var routes = [
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
    },
    {
        path: '',
        data: {
            title: 'Usuários'
        },
        children: [
            {
                path: 'listar',
                component: listar_usuario_component_1.ListarUsuarioComponent,
                data: {
                    title: 'Listar'
                }
            },
            {
                path: 'changePassword',
                component: senha_usuario_component_1.SenhaUsuarioComponent,
                data: {
                    title: 'alterar senha'
                }
            }
        ]
    }
];
var UsuarioRoutingModule = (function () {
    function UsuarioRoutingModule() {
    }
    return UsuarioRoutingModule;
}());
UsuarioRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], UsuarioRoutingModule);
exports.UsuarioRoutingModule = UsuarioRoutingModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/usuario-routing.module.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/usuario.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var senha_usuario_component_1 = __webpack_require__("./src/app/pages/cadastros/usuario/senha/senha-usuario.component.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var angular2_ladda_1 = __webpack_require__("./node_modules/angular2-ladda/module/module.js");
var modal_1 = __webpack_require__("./node_modules/ng2-bootstrap/modal/index.js");
var popup_modal_module_1 = __webpack_require__("./src/app/shared/popup/popup-modal.module.ts");
var shared_component_module_1 = __webpack_require__("./src/app/shared/shared-component.module.ts");
var angular2_text_mask_1 = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
var tabs_1 = __webpack_require__("./node_modules/ng2-bootstrap/tabs/index.js");
var usuario_popup_modal_component_1 = __webpack_require__("./src/app/pages/cadastros/usuario/popup/usuario-popup-modal.component.ts");
var usuario_service_1 = __webpack_require__("./src/app/pages/cadastros/usuario/usuario.service.ts");
var listar_usuario_component_1 = __webpack_require__("./src/app/pages/cadastros/usuario/listar/listar-usuario.component.ts");
var usuario_routing_module_1 = __webpack_require__("./src/app/pages/cadastros/usuario/usuario-routing.module.ts");
var senha_popup_modal_component_1 = __webpack_require__("./src/app/pages/cadastros/usuario/popup/senha-popup-modal.component.ts");
var UsuarioModule = (function () {
    function UsuarioModule() {
    }
    return UsuarioModule;
}());
UsuarioModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            modal_1.ModalModule.forRoot(),
            shared_component_module_1.SharedComponentModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule,
            popup_modal_module_1.PopupModalModule,
            tabs_1.TabsModule,
            usuario_routing_module_1.UsuarioRoutingModule,
            angular2_ladda_1.LaddaModule,
            angular2_text_mask_1.TextMaskModule
        ],
        declarations: [
            listar_usuario_component_1.ListarUsuarioComponent,
            usuario_popup_modal_component_1.UsuarioPopupModalComponent,
            senha_popup_modal_component_1.SenhaPopupModalComponent,
            senha_usuario_component_1.SenhaUsuarioComponent
        ],
        providers: [
            usuario_service_1.UsuarioService
        ]
    })
], UsuarioModule);
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/usuario.module.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/usuario/usuario.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var abstract_service_1 = __webpack_require__("./src/config/core/abstract-service.ts");
var UsuarioService = (function (_super) {
    __extends(UsuarioService, _super);
    function UsuarioService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/usuarios";
        return _this;
    }
    UsuarioService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    UsuarioService.prototype.findAll = function () {
        return this.http.get(this.url, this.getHearderToken());
    };
    UsuarioService.prototype.infoUsuarioLogado = function () {
        return this.http.get(this.url + "/usuariologado", this.getHearderToken());
    };
    UsuarioService.prototype.salvar = function (usuario) {
        return this.http.post("" + this.url, JSON.stringify(usuario), this.getHearderTokenNoResponse());
    };
    UsuarioService.prototype.changeStatus = function (usuario) {
        return this.http.put(this.url + "/" + usuario.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    UsuarioService.prototype.consultarPorCpf = function (nrCpf) {
        var cpf = nrCpf.replace(/\D/g, '');
        return this.http.get(this.url + "/consultarCpf?cpf=" + cpf, this.getHearderToken());
    };
    UsuarioService.prototype.consultarPorLogin = function (dsLogin) {
        return this.http.get(this.url + "/username?login=" + dsLogin, this.getHearderToken());
    };
    UsuarioService.prototype.consultarPorEdEmail = function (edEmail) {
        return this.http.get(this.url + "/consultarEmail?edEmail=" + edEmail, this.getHearderToken());
    };
    UsuarioService.prototype.atualizar = function (usuario) {
        return this.http.put(this.url + "/" + usuario.id, JSON.stringify(usuario), this.getHearderTokenNoResponse());
    };
    UsuarioService.prototype.changePassword = function (usuario) {
        return this.http.put(this.url + "/" + usuario.id + "/changepassword", JSON.stringify(usuario), this.getHearderTokenNoResponse());
    };
    UsuarioService.prototype.excluir = function (usuario) {
        return this.http.delete(this.url + "/" + usuario.id, this.getHearderToken());
    };
    return UsuarioService;
}(abstract_service_1.AbstractService));
UsuarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], UsuarioService);
exports.UsuarioService = UsuarioService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/usuario.service.js.map

/***/ }),

/***/ "./src/app/pages/config/adicional/adicional-produto.service.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var abstract_service_1 = __webpack_require__("./src/config/core/abstract-service.ts");
var AdicionalProdutoService = (function (_super) {
    __extends(AdicionalProdutoService, _super);
    function AdicionalProdutoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/adicionais";
        return _this;
    }
    AdicionalProdutoService.prototype.findAll = function () {
        return this.http.get(this.url + "/all", this.getHearderToken());
    };
    AdicionalProdutoService.prototype.findByCategoria = function (idCategoria) {
        return this.http.get(this.url + "/consultarPor?idCategoria=" + idCategoria, this.getHearderToken());
    };
    AdicionalProdutoService.prototype.findAllAtivo = function () {
        return this.http.get(this.url + "/");
    };
    AdicionalProdutoService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    AdicionalProdutoService.prototype.salvar = function (info) {
        return this.http.post(this.url + "/", JSON.stringify(info), this.getHearderTokenNoResponse());
    };
    AdicionalProdutoService.prototype.changeStatus = function (info) {
        return this.http.put(this.url + "/" + info.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    AdicionalProdutoService.prototype.atualizar = function (info) {
        return this.http.put(this.url + "/" + info.id, JSON.stringify(info), this.getHearderTokenNoResponse());
    };
    AdicionalProdutoService.prototype.excluir = function (info) {
        var url = this.url + "/" + info.id;
        return this.http.delete(url, this.getHearderToken());
    };
    return AdicionalProdutoService;
}(abstract_service_1.AbstractService));
AdicionalProdutoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], AdicionalProdutoService);
exports.AdicionalProdutoService = AdicionalProdutoService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/adicional-produto.service.js.map

/***/ }),

/***/ "./src/app/pages/config/categoria/categoria.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var abstract_service_1 = __webpack_require__("./src/config/core/abstract-service.ts");
//import { catchError, retry } from 'rxjs/operators';
var CategoriaService = (function (_super) {
    __extends(CategoriaService, _super);
    function CategoriaService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/categorias";
        return _this;
    }
    CategoriaService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    CategoriaService.prototype.findCategoriasAtivasExcetoInterna = function (moduloConsulta) {
        if (moduloConsulta == 'CRD') {
            return this.http.get(api_config_1.API_CONFIG.baseUrl + "/cardapio/categoria");
        }
        else {
            return this.http.get(this.url + "/", this.getHearderToken());
        }
    };
    CategoriaService.prototype.findAll = function () {
        return this.http.get(this.url + "/all", this.getHearderToken());
    };
    CategoriaService.prototype.salvar = function (categoria) {
        return this.http.post("" + this.url, JSON.stringify(categoria), this.getHearderTokenNoResponse());
    };
    CategoriaService.prototype.changeStatus = function (categoria) {
        return this.http.put(this.url + "/" + categoria.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    CategoriaService.prototype.atualizar = function (categoria) {
        return this.http.put(this.url + "/" + categoria.id, JSON.stringify(categoria), this.getHearderTokenNoResponse());
    };
    CategoriaService.prototype.excluir = function (categoria) {
        return this.http.delete(this.url + "/" + categoria.id, this.getHearderToken());
    };
    CategoriaService.prototype.insert = function (obj) {
        return this.http.post(this.url + "/", obj, { observe: 'response', responseType: 'text' });
    };
    return CategoriaService;
}(abstract_service_1.AbstractService));
CategoriaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], CategoriaService);
exports.CategoriaService = CategoriaService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/categoria.service.js.map

/***/ }),

/***/ "./src/app/shared/components/alert-field-mensagem.component.ts":
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
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var AlertFieldMensagemComponent = (function () {
    function AlertFieldMensagemComponent() {
    }
    AlertFieldMensagemComponent.prototype.ngOnInit = function () {
        var _this = this;
        event_emitter_services_1.EventEmitterService.getErrors().subscribe(function (res) { return _this.fields = res; });
    };
    return AlertFieldMensagemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AlertFieldMensagemComponent.prototype, "fields", void 0);
AlertFieldMensagemComponent = __decorate([
    core_1.Component({
        selector: 'alert-field-mensagem',
        styles: ['.alert .alert-icon-col {min-width: 25px;max-width: 25px;} body {padding: 10px;}'],
        template: "\n        <div *ngIf=\"fields?.length > 0\" class=\"alert alert-danger\" role=\"alert\">\n            <h4 class=\"alert-heading\">Erro de valida\u00E7\u00E3o!</h4>\n            <div class=\"row\">\n            <div class=\"col-1 alert-icon-col\">\n                <span class=\"fa fa-exclamation-triangle fa-fw\"></span>\n            </div>\n            <div class=\"col\">\n              <p *ngFor=\"let error of fields\">\n                <strong>{{error.fieldName}}</strong><span *ngIf=\"error.fieldName\"> - </span>{{error.message}}<br/>\n              </p>\n            </div>\n            </div>\n        </div>\n   "
    }),
    __metadata("design:paramtypes", [])
], AlertFieldMensagemComponent);
exports.AlertFieldMensagemComponent = AlertFieldMensagemComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/alert-field-mensagem.component.js.map

/***/ }),

/***/ "./src/app/shared/components/alert-mensagem.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var AlertMensagemComponent = (function () {
    function AlertMensagemComponent() {
    }
    AlertMensagemComponent.prototype.ngOnInit = function () {
    };
    return AlertMensagemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AlertMensagemComponent.prototype, "mostrarErro", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AlertMensagemComponent.prototype, "titulo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AlertMensagemComponent.prototype, "mensagem", void 0);
AlertMensagemComponent = __decorate([
    core_1.Component({
        selector: 'alert-mensagem',
        template: "\n      <div *ngIf=\"mostrarErro\"   class=\"alert alert-danger\" role=\"alert\">\n          <strong>{{titulo}}</strong> {{mensagem}}\n      </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AlertMensagemComponent);
exports.AlertMensagemComponent = AlertMensagemComponent;
/*
<div *ngIf="mostrarErro" >
  
  <span class="sr-only">(error)</span>
  <div class="alert alert-danger errorDiv" role="alert">
    {{ msgErro }}
  </div>
</div>
*/ 
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/alert-mensagem.component.js.map

/***/ }),

/***/ "./src/app/shared/components/breadcrumb.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
__webpack_require__("./node_modules/rxjs/add/operator/filter.js");
var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __decorate([
    core_1.Component({
        selector: 'breadcrumbs',
        template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/' || breadcrumb.label.title&&last\" [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], BreadcrumbsComponent);
exports.BreadcrumbsComponent = BreadcrumbsComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/breadcrumb.component.js.map

/***/ }),

/***/ "./src/app/shared/components/destaque.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var DestaqueComponent = (function () {
    function DestaqueComponent() {
    }
    DestaqueComponent.prototype.ngOnInit = function () {
    };
    DestaqueComponent.prototype.getColor = function () {
        return { 'color': this.valor ? 'green' : 'gray' };
    };
    DestaqueComponent.prototype.definirIcone = function () {
        return {
            'icon-star': !this.valor,
            'fa fa-star': this.valor
        };
    };
    return DestaqueComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DestaqueComponent.prototype, "valor", void 0);
DestaqueComponent = __decorate([
    core_1.Component({
        selector: 'destaque',
        template: '<i [ngClass]="definirIcone()" [ngStyle]="getColor()"></i>'
    }),
    __metadata("design:paramtypes", [])
], DestaqueComponent);
exports.DestaqueComponent = DestaqueComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/destaque.component.js.map

/***/ }),

/***/ "./src/app/shared/components/form-buttons.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FormButtonsComponent = (function () {
    function FormButtonsComponent() {
        this.ocultarBtnEditar = false;
        this.ocultarBtnExcluir = false;
        this.ocultarBtnAlterarStatus = false;
        this.exibirBtnAlterarSenha = false;
        this.onClickBtnEditar = new core_1.EventEmitter();
        this.onClickBtnExcluir = new core_1.EventEmitter();
        this.onClickBtnAlterarStatus = new core_1.EventEmitter();
        this.onClickBtnAlterarSenha = new core_1.EventEmitter();
    }
    FormButtonsComponent.prototype.ngOnInit = function () {
    };
    FormButtonsComponent.prototype.btnEditar = function () {
        this.onClickBtnEditar.emit(true);
    };
    FormButtonsComponent.prototype.btnExcluir = function () {
        this.onClickBtnExcluir.emit(true);
    };
    FormButtonsComponent.prototype.btnAlterarStatus = function () {
        this.onClickBtnAlterarStatus.emit(true);
    };
    FormButtonsComponent.prototype.btnAlterarSenha = function () {
        this.onClickBtnAlterarSenha.emit(true);
    };
    return FormButtonsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormButtonsComponent.prototype, "ocultarBtnEditar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormButtonsComponent.prototype, "ocultarBtnExcluir", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormButtonsComponent.prototype, "ocultarBtnAlterarStatus", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormButtonsComponent.prototype, "exibirBtnAlterarSenha", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormButtonsComponent.prototype, "onClickBtnEditar", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormButtonsComponent.prototype, "onClickBtnExcluir", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormButtonsComponent.prototype, "onClickBtnAlterarStatus", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormButtonsComponent.prototype, "onClickBtnAlterarSenha", void 0);
FormButtonsComponent = __decorate([
    core_1.Component({
        selector: 'form-buttons',
        template: "\n      <div class=\"hidden-md-down\">\n          <button type=\"button\" *ngIf=\"!ocultarBtnEditar\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"btnEditar()\">\n              <i class=\"fa fa fa-edit\"> </i>\n          </button>\n          <button type=\"button\" *ngIf=\"exibirBtnAlterarSenha\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"btnAlterarSenha()\">\n              <i class=\"fa fa fa-edit\"> </i>\n          </button>\n          <button type=\"button\" *ngIf=\"!ocultarBtnExcluir\" class=\"btn btn-sm btn-danger cursor-hands\" (click)=\"btnExcluir()\">\n              <i class=\"fa fa-eraser\"> </i>\n          </button>\n          <button type=\"button\" *ngIf=\"!ocultarBtnAlterarStatus\" class=\"btn btn-sm btn-warning cursor-hands\" (click)=\"btnAlterarStatus()\">\n              <i class=\"fa fa-exclamation\"> </i>\n          </button>\n      </div>\n      <div dropdown placement=\"bottom right\" class=\"hidden-lg-up\">\n        <button type=\"button\" class=\"btn btn-transparent\" style=\"color:black\" dropdownToggle>\n            <i class=\"icon-options-vertical\"></i>\n        </button>\n        <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n            <a *ngIf=\"!ocultarBtnEditar\" class=\"dropdown-item cursor-hands\"         (click)=\"btnEditar()\">editar</a>\n            <a *ngIf=\"exibirBtnAlterarSenha\" class=\"dropdown-item cursor-hands\"     (click)=\"btnAlterarSenha()\">alterar senha</a>\n            <a *ngIf=\"!ocultarBtnExcluir\" class=\"dropdown-item cursor-hands\"        (click)=\"btnExcluir()\" >excluir </a>\n            <a *ngIf=\"!ocultarBtnAlterarStatus\" class=\"dropdown-item cursor-hands\"  (click)=\"btnAlterarStatus()\" >alterar status</a>\n        </div>\n      </div>\n"
    }),
    __metadata("design:paramtypes", [])
], FormButtonsComponent);
exports.FormButtonsComponent = FormButtonsComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/form-buttons.component.js.map

/***/ }),

/***/ "./src/app/shared/components/form-debug.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FormDebugComponent = (function () {
    function FormDebugComponent() {
    }
    FormDebugComponent.prototype.ngOnInit = function () {
    };
    return FormDebugComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FormDebugComponent.prototype, "form", void 0);
FormDebugComponent = __decorate([
    core_1.Component({
        selector: 'form-debug',
        template: "\n    <div style=\"margin-top:20px;\">\n        <div>\n          Detalhe Formul\u00E1rio\n        </div>\n        <pre>\n          Formul\u00E1rio v\u00E1lido: {{form.valid}}\n        </pre>\n        <pre>\n          Form submetido: {{form.submitted}}\n        </pre>\n        <pre>\n            Valores: <br> {{form.value |json}}\n        </pre>\n    </div>\n"
    }),
    __metadata("design:paramtypes", [])
], FormDebugComponent);
exports.FormDebugComponent = FormDebugComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/form-debug.component.js.map

/***/ }),

/***/ "./src/app/shared/components/foto-uri.component.ts":
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
var image_service_1 = __webpack_require__("./src/services/image.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FotoURIComponent = (function () {
    function FotoURIComponent(imagem) {
        this.imagem = imagem;
    }
    FotoURIComponent.prototype.ngOnInit = function () {
        this.src = '/assets/img/noimage/prod.jpg';
        this.getImageIfExists(this.id);
    };
    FotoURIComponent.prototype.getImageIfExists = function (id) {
        var _this = this;
        if (id != "" && this.modulo != null && this.modulo != undefined) {
            this.imagem.getImageFromBucket(id, this.modulo)
                .subscribe(function (res) { return _this.src = _this.imagem.getImage(id, _this.modulo); });
        }
    };
    return FotoURIComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FotoURIComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FotoURIComponent.prototype, "modulo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FotoURIComponent.prototype, "classCss", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FotoURIComponent.prototype, "alt", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FotoURIComponent.prototype, "styleCss", void 0);
FotoURIComponent = __decorate([
    core_1.Component({
        selector: 'foto-uri',
        template: '<img [src]="src" [class]="classCss" [alt]="alt" [style]="styleCss">'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof image_service_1.ImageService !== "undefined" && image_service_1.ImageService) === "function" && _a || Object])
], FotoURIComponent);
exports.FotoURIComponent = FotoURIComponent;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/foto-uri.component.js.map

/***/ }),

/***/ "./src/app/shared/components/foto.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FotoComponent = (function () {
    function FotoComponent() {
    }
    FotoComponent.prototype.ngOnInit = function () {
    };
    return FotoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FotoComponent.prototype, "src", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FotoComponent.prototype, "classCss", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FotoComponent.prototype, "alt", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FotoComponent.prototype, "styleCss", void 0);
FotoComponent = __decorate([
    core_1.Component({
        selector: 'foto',
        template: '<img [src]="src" [class]="classCss" [alt]="alt" [style]="styleCss">'
    }),
    __metadata("design:paramtypes", [])
], FotoComponent);
exports.FotoComponent = FotoComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/foto.component.js.map

/***/ }),

/***/ "./src/app/shared/components/origem-pedido.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var OrigemPedidoComponent = (function () {
    function OrigemPedidoComponent() {
    }
    OrigemPedidoComponent.prototype.ngOnInit = function () {
        switch (this.status) {
            case 'W':
                this.texto = 'Web Internet';
                break;
            case 'A':
                this.texto = 'Mobile - Android';
                break;
            case 'I':
                this.texto = 'Mobile - IOS';
                break;
        }
        this.class = 'default';
    };
    return OrigemPedidoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OrigemPedidoComponent.prototype, "status", void 0);
OrigemPedidoComponent = __decorate([
    core_1.Component({
        selector: 'origem-pedido',
        template: '<span  class="badge badge-{{class}}">{{texto}}</span>'
    }),
    __metadata("design:paramtypes", [])
], OrigemPedidoComponent);
exports.OrigemPedidoComponent = OrigemPedidoComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/origem-pedido.component.js.map

/***/ }),

/***/ "./src/app/shared/components/sim-nao.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var SimNaoComponent = (function () {
    function SimNaoComponent() {
    }
    SimNaoComponent.prototype.ngOnInit = function () {
        switch (this.valor) {
            case 'N':
                this.texto = 'Não';
                this.class = 'danger';
                break;
            default:
                this.texto = 'Sim';
                this.class = 'success';
                break;
        }
    };
    return SimNaoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SimNaoComponent.prototype, "valor", void 0);
SimNaoComponent = __decorate([
    core_1.Component({
        selector: 'simnao',
        template: '<span  class="badge badge-{{class}}">{{texto}}</span>'
    }),
    __metadata("design:paramtypes", [])
], SimNaoComponent);
exports.SimNaoComponent = SimNaoComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/sim-nao.component.js.map

/***/ }),

/***/ "./src/app/shared/components/status-pedido.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var StatusPedidoComponent = (function () {
    function StatusPedidoComponent() {
    }
    StatusPedidoComponent.prototype.ngOnInit = function () {
        switch (this.status) {
            case 'E':
                this.texto = 'Enviado';
                this.class = 'info';
                break;
            case 'P':
                this.texto = 'Em preparação';
                this.class = 'info';
                break;
            case 'C':
                this.texto = 'Cancelado';
                this.class = 'danger';
                break;
            case 'G':
                this.texto = 'Na rota de Entrega';
                this.class = 'primary';
                break;
            case 'T':
                this.texto = 'Entrega';
                this.class = 'success';
                break;
        }
    };
    return StatusPedidoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StatusPedidoComponent.prototype, "status", void 0);
StatusPedidoComponent = __decorate([
    core_1.Component({
        selector: 'status-pedido',
        template: '<span  class="badge badge-{{class}}">{{texto}}</span>'
    }),
    __metadata("design:paramtypes", [])
], StatusPedidoComponent);
exports.StatusPedidoComponent = StatusPedidoComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/status-pedido.component.js.map

/***/ }),

/***/ "./src/app/shared/components/status.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var StatusComponent = (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
        switch (this.status) {
            case 'I':
                this.texto = 'Inativo';
                this.class = 'danger';
                break;
            default:
                this.texto = 'Ativo';
                this.class = 'success';
                break;
        }
    };
    return StatusComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StatusComponent.prototype, "status", void 0);
StatusComponent = __decorate([
    core_1.Component({
        selector: 'status',
        template: '<span  class="badge badge-{{class}}">{{texto}}</span>'
    }),
    __metadata("design:paramtypes", [])
], StatusComponent);
exports.StatusComponent = StatusComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/status.component.js.map

/***/ }),

/***/ "./src/app/shared/components/upload-imagem/modal/upload-image-popup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalUploadImagem=\"bs-modal\" id='modalConfirm' class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n\r\n\r\n  <div class=\"modal-dialog modal-sm modal-primary\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Upload de imagem</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"modalUploadImagem.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n              <label for='selecao-arquivo' class=\"btn btn-md btn-primary btn-block\"><i class=\"fa fa-camera\"> </i> {{botaoTitulo}}</label>\r\n              <input id='selecao-arquivo' type=\"file\" (change)=\"fileChangeListener($event)\" accept=\"image/x-png,image/gif,image/jpeg\" style='display:none' />\r\n          </div>\r\n          <div class=\"col-12\">\r\n              <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary cursor-hands\" (click)=\"modalUploadImagem.hide()\">Fechar</button>\r\n        <button type=\"button\" class=\"btn btn-primary cursor-hands\" (click)=\"btnConfirmar()\">Confirmar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/upload-imagem/modal/upload-image-popup-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal-dialog {\n  padding-top: 5%; }\n"

/***/ }),

/***/ "./src/app/shared/components/upload-imagem/modal/upload-image-popup-modal.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ng2_img_cropper_1 = __webpack_require__("./node_modules/ng2-img-cropper/index.js");
var UploadImagePopupModalComponent = (function () {
    function UploadImagePopupModalComponent() {
        this.onClickConfirm = new core_1.EventEmitter();
        this.botaoTitulo = "Selecione uma imagem";
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 270;
        this.cropperSettings.canvasHeight = 265;
        this.cropperSettings.noFileInput = true;
        this.data = new Image();
    }
    UploadImagePopupModalComponent.prototype.ngOnInit = function () {
    };
    UploadImagePopupModalComponent.prototype.show = function () {
        this.confirma.show();
    };
    UploadImagePopupModalComponent.prototype.btnConfirmar = function () {
        this.confirma.hide();
        this.onClickConfirm.emit({ foto: this.data.image });
    };
    UploadImagePopupModalComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    return UploadImagePopupModalComponent;
}());
__decorate([
    core_1.ViewChild('modalUploadImagem'),
    __metadata("design:type", Object)
], UploadImagePopupModalComponent.prototype, "confirma", void 0);
__decorate([
    core_1.ViewChild('cropper', undefined),
    __metadata("design:type", typeof (_a = typeof ng2_img_cropper_1.ImageCropperComponent !== "undefined" && ng2_img_cropper_1.ImageCropperComponent) === "function" && _a || Object)
], UploadImagePopupModalComponent.prototype, "cropper", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UploadImagePopupModalComponent.prototype, "onClickConfirm", void 0);
UploadImagePopupModalComponent = __decorate([
    core_1.Component({
        selector: 'upload-image-modal',
        styles: [__webpack_require__("./src/app/shared/components/upload-imagem/modal/upload-image-popup-modal.component.scss")],
        template: __webpack_require__("./src/app/shared/components/upload-imagem/modal/upload-image-popup-modal.component.html")
    }),
    __metadata("design:paramtypes", [])
], UploadImagePopupModalComponent);
exports.UploadImagePopupModalComponent = UploadImagePopupModalComponent;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/upload-image-popup-modal.component.js.map

/***/ }),

/***/ "./src/app/shared/components/upload-imagem/upload-imagem.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!--\r\n\r\n    <label for='selecao-arquivo' class=\"{{botaoCss}}\"><i class=\"{{botaoIcone}}\"> </i> {{botaoTitulo}}</label>\r\n    <input id='selecao-arquivo' type=\"file\" (change)=\"selecionarImagem(input)\" accept=\"image/x-png,image/gif,image/jpeg\" #input style='display:none' />\r\n  -->\r\n\r\n  <label for='selecao-arquivo1' class=\"{{botaoCss}}\" (click)=\"uploadImage.show()\" ><i class=\"{{botaoIcone}}\" > </i> {{botaoTitulo}}</label>\r\n  <!--\r\n    <label for='selecao-arquivo1' class=\"btn btn-md btn-primary btn-block\" (click)=\"uploadImage.show()\" ><i class=\"fa fa-save\">  </i> upload da imagem</label>  \r\n  -->\r\n  <upload-image-modal #uploadImage (onClickConfirm)=\"selecionarImagem($event)\" ></upload-image-modal>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/upload-imagem/upload-imagem.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var UploadImagemComponent = (function () {
    function UploadImagemComponent() {
        this.onSelecionarImagem = new core_1.EventEmitter();
    }
    UploadImagemComponent.prototype.ngOnInit = function () { };
    UploadImagemComponent.prototype.selecionarImagem = function (data) {
        this.onSelecionarImagem.emit(data);
    };
    return UploadImagemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UploadImagemComponent.prototype, "altura", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UploadImagemComponent.prototype, "largura", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UploadImagemComponent.prototype, "botaoIcone", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UploadImagemComponent.prototype, "botaoTitulo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UploadImagemComponent.prototype, "botaoCss", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UploadImagemComponent.prototype, "onSelecionarImagem", void 0);
UploadImagemComponent = __decorate([
    core_1.Component({
        selector: 'upload-imagem',
        template: __webpack_require__("./src/app/shared/components/upload-imagem/upload-imagem.component.html")
        /*
        template: `
            <div>
              <label for='selecao-arquivo' class="{{botaoCss}}"  > <i class="{{botaoIcone}}">  </i> {{botaoTitulo}}</label>
              <input  id='selecao-arquivo'
                      type="file"
                      (change)="selecionarImagem(input)"
                      accept="image/x-png,image/gif,image/jpeg"
                      #input
                      style='display:none' />
            </div>
        `
        */
    }),
    __metadata("design:paramtypes", [])
], UploadImagemComponent);
exports.UploadImagemComponent = UploadImagemComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/upload-imagem.component.js.map

/***/ }),

/***/ "./src/app/shared/directive/aside.directive.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    return AsideToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsideToggleDirective.prototype, "toggleOpen", null);
AsideToggleDirective = __decorate([
    core_1.Directive({
        selector: '.aside-menu-toggler',
    }),
    __metadata("design:paramtypes", [])
], AsideToggleDirective);
exports.AsideToggleDirective = AsideToggleDirective;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/aside.directive.js.map

/***/ }),

/***/ "./src/app/shared/directive/auto-foco.directive.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var AutoFocoDirective = (function () {
    function AutoFocoDirective(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
    }
    AutoFocoDirective.prototype.ngOnInit = function () {
        if (this.isFocused) {
            this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus');
        }
    };
    return AutoFocoDirective;
}());
__decorate([
    core_1.Input('autofoco'),
    __metadata("design:type", Boolean)
], AutoFocoDirective.prototype, "isFocused", void 0);
AutoFocoDirective = __decorate([
    core_1.Directive({ selector: '[autofoco]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], AutoFocoDirective);
exports.AutoFocoDirective = AutoFocoDirective;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/auto-foco.directive.js.map

/***/ }),

/***/ "./src/app/shared/directive/disabled-control.directive.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var DisableControlDirective = (function () {
    function DisableControlDirective(ngControl) {
        this.ngControl = ngControl;
    }
    Object.defineProperty(DisableControlDirective.prototype, "disableControl", {
        set: function (condition) {
            var action = condition ? 'disable' : 'enable';
            this.ngControl.control[action]();
        },
        enumerable: true,
        configurable: true
    });
    return DisableControlDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DisableControlDirective.prototype, "disableControl", null);
DisableControlDirective = __decorate([
    core_1.Directive({
        selector: '[disableControl]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.NgControl !== "undefined" && forms_1.NgControl) === "function" && _a || Object])
], DisableControlDirective);
exports.DisableControlDirective = DisableControlDirective;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/disabled-control.directive.js.map

/***/ }),

/***/ "./src/app/shared/directive/lower-case.directive.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var LowerCaseTextDirective = (function () {
    function LowerCaseTextDirective(ref) {
        this.ref = ref;
    }
    LowerCaseTextDirective.prototype.toLowerCase = function (value) {
        this.ref.nativeElement.value = value.toLowerCase();
    };
    return LowerCaseTextDirective;
}());
LowerCaseTextDirective = __decorate([
    core_1.Directive({
        selector: '[lower]',
        host: {
            '(input)': 'toLowerCase($event.target.value)',
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], LowerCaseTextDirective);
exports.LowerCaseTextDirective = LowerCaseTextDirective;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/lower-case.directive.js.map

/***/ }),

/***/ "./src/app/shared/directive/nav-dropdown.directive.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var NavDropdownDirective = (function () {
    function NavDropdownDirective() {
        this._open = false;
    }
    /**
    * Checks if the dropdown menu is open or not.
    */
    NavDropdownDirective.prototype.isOpen = function () { return this._open; };
    /**
    * Opens the dropdown menu.
    */
    NavDropdownDirective.prototype.open = function () {
        this._open = true;
    };
    /**
    * Closes the dropdown menu .
    */
    NavDropdownDirective.prototype.close = function () {
        this._open = false;
    };
    /**
    * Toggles the dropdown menu.
    */
    NavDropdownDirective.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    return NavDropdownDirective;
}());
NavDropdownDirective = __decorate([
    core_1.Directive({
        selector: '.nav-dropdown',
        host: {
            '[class.open]': '_open',
        }
    })
], NavDropdownDirective);
exports.NavDropdownDirective = NavDropdownDirective;
/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    return NavDropdownToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = __decorate([
    core_1.Directive({
        selector: '.nav-dropdown-toggle',
    }),
    __metadata("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);
exports.NavDropdownToggleDirective = NavDropdownToggleDirective;
exports.NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/nav-dropdown.directive.js.map

/***/ }),

/***/ "./src/app/shared/directive/number-only.directive.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var NumberOnlyDirective = (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    return NumberOnlyDirective;
}());
__decorate([
    core_1.HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NumberOnlyDirective.prototype, "onKeyDown", null);
NumberOnlyDirective = __decorate([
    core_1.Directive({
        selector: '[numberOnly]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], NumberOnlyDirective);
exports.NumberOnlyDirective = NumberOnlyDirective;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/number-only.directive.js.map

/***/ }),

/***/ "./src/app/shared/directive/sidebar.directive.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    return SidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = __decorate([
    core_1.Directive({
        selector: '.sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], SidebarToggleDirective);
exports.SidebarToggleDirective = SidebarToggleDirective;
var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    return MobileSidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = __decorate([
    core_1.Directive({
        selector: '.mobile-sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], MobileSidebarToggleDirective);
exports.MobileSidebarToggleDirective = MobileSidebarToggleDirective;
/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    return SidebarOffCanvasCloseDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = __decorate([
    core_1.Directive({
        selector: '.sidebar-close',
    }),
    __metadata("design:paramtypes", [])
], SidebarOffCanvasCloseDirective);
exports.SidebarOffCanvasCloseDirective = SidebarOffCanvasCloseDirective;
exports.SIDEBAR_TOGGLE_DIRECTIVES = [SidebarToggleDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective];
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/sidebar.directive.js.map

/***/ }),

/***/ "./src/app/shared/directive/upper-case.directive.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var UpperCaseTextDirective = (function () {
    function UpperCaseTextDirective(ref) {
        this.ref = ref;
    }
    UpperCaseTextDirective.prototype.toUpperCase = function (value) {
        this.ref.nativeElement.value = value.toUpperCase();
    };
    return UpperCaseTextDirective;
}());
UpperCaseTextDirective = __decorate([
    core_1.Directive({
        selector: '[upper]',
        host: {
            '(input)': 'toUpperCase($event.target.value)',
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], UpperCaseTextDirective);
exports.UpperCaseTextDirective = UpperCaseTextDirective;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/upper-case.directive.js.map

/***/ }),

/***/ "./src/app/shared/event/event-emitter.services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var toater_mensagem_model_1 = __webpack_require__("./src/models/config/toater-mensagem.model.ts");
var tipo_mensagem_enum_1 = __webpack_require__("./src/models/enums/tipo-mensagem.enum.ts");
var EventEmitterService = (function () {
    function EventEmitterService() {
    }
    EventEmitterService.get = function (nomeEvento) {
        if (!this.emitters[nomeEvento]) {
            this.emitters[nomeEvento] = new core_1.EventEmitter();
        }
        return this.emitters[nomeEvento];
    };
    EventEmitterService.unsubscribeEvent = function () {
        var toaster = this.getToater();
        this.emitters = {};
        this.emitters['showToasterEvent'] = toaster;
        this.getErrors();
    };
    EventEmitterService.getToater = function () {
        return this.get('showToasterEvent');
    };
    EventEmitterService.getErrors = function () {
        return this.get('showErrors');
    };
    EventEmitterService.showPopup = function (nomePopup) {
        return this.get(nomePopup);
    };
    EventEmitterService.getPopupClose = function (nomePopup) {
        return this.get(nomePopup + "_close");
    };
    EventEmitterService.closePopup = function (nomePopup) {
        return this.get(nomePopup + "_close").emit();
    };
    EventEmitterService.getEventName = function (nomePopup) {
        return this.get(nomePopup);
    };
    EventEmitterService.emitirErrors = function (errors) {
        return this.get('showErrors').emit(errors);
    };
    EventEmitterService.emitirMensagemToaster = function (tm) {
        return this.get('showToasterEvent').emit(tm);
    };
    EventEmitterService.emitirMensagemToasterSucesso = function (titulo, mensagem) {
        var tm = new toater_mensagem_model_1.ToasterMensagem(tipo_mensagem_enum_1.TipoMensagemEnum.success, titulo, mensagem);
        return this.get('showToasterEvent').emit(tm);
    };
    EventEmitterService.emitirMensagemToasterAlerta = function (titulo, mensagem) {
        var tm = new toater_mensagem_model_1.ToasterMensagem(tipo_mensagem_enum_1.TipoMensagemEnum.warning, titulo, mensagem);
        return this.get('showToasterEvent').emit(tm);
    };
    EventEmitterService.emitirMensagemToasterDanger = function (titulo, mensagem) {
        var tm = new toater_mensagem_model_1.ToasterMensagem(tipo_mensagem_enum_1.TipoMensagemEnum.danger, titulo, mensagem);
        return this.get('showToasterEvent').emit(tm);
    };
    EventEmitterService.emitirMensagemToasterInfo = function (titulo, mensagem) {
        var tm = new toater_mensagem_model_1.ToasterMensagem(tipo_mensagem_enum_1.TipoMensagemEnum.info, titulo, mensagem);
        return this.get('showToasterEvent').emit(tm);
    };
    return EventEmitterService;
}());
EventEmitterService.emitters = {};
exports.EventEmitterService = EventEmitterService;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/event-emitter.services.js.map

/***/ }),

/***/ "./src/app/shared/pipe/cep.pipe.ts":
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
var CepPipe = (function () {
    function CepPipe() {
    }
    CepPipe.prototype.transform = function (value) {
        if (value != null && value != undefined) {
            value = value.replace(/\D/g, '');
            if (value && value.length > 7) {
                value = value.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2-$3");
                return value;
            }
        }
    };
    return CepPipe;
}());
CepPipe = __decorate([
    core_1.Pipe({ name: 'cepMask' })
], CepPipe);
exports.CepPipe = CepPipe;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cep.pipe.js.map

/***/ }),

/***/ "./src/app/shared/pipe/cnpj.pipe.ts":
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
var CnpjPipe = (function () {
    function CnpjPipe() {
    }
    CnpjPipe.prototype.transform = function (value) {
        value = value.replace(/\D/g, '');
        if (value && value.length === 14) {
            value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
            return value;
        }
    };
    return CnpjPipe;
}());
CnpjPipe = __decorate([
    core_1.Pipe({ name: 'cnpjMask' })
], CnpjPipe);
exports.CnpjPipe = CnpjPipe;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cnpj.pipe.js.map

/***/ }),

/***/ "./src/app/shared/pipe/cpf-cnpj.pipe.ts":
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
var CpfCnpjPipe = (function () {
    function CpfCnpjPipe() {
    }
    CpfCnpjPipe.prototype.transform = function (value) {
        value = value.replace(/\D/g, '');
        if (value && value.length === 11) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
            return value;
        }
        else if (value && value.length === 14) {
            value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
            return value;
        }
    };
    return CpfCnpjPipe;
}());
CpfCnpjPipe = __decorate([
    core_1.Pipe({ name: 'cpfCnpj' })
], CpfCnpjPipe);
exports.CpfCnpjPipe = CpfCnpjPipe;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cpf-cnpj.pipe.js.map

/***/ }),

/***/ "./src/app/shared/pipe/cpf.pipe.ts":
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
var CpfPipe = (function () {
    function CpfPipe() {
    }
    CpfPipe.prototype.transform = function (value) {
        value = value.replace(/\D/g, '');
        if (value && value.length === 11) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
            return value;
        }
    };
    return CpfPipe;
}());
CpfPipe = __decorate([
    core_1.Pipe({ name: 'cpfMask' })
], CpfPipe);
exports.CpfPipe = CpfPipe;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cpf.pipe.js.map

/***/ }),

/***/ "./src/app/shared/pipe/data.pipe.ts":
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
var DataPipe = (function () {
    function DataPipe() {
    }
    DataPipe.prototype.transform = function (value) {
        value = value.replace(/\D/g, '');
        if (value && value.length === 8) {
            value = value.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
            return value;
        }
    };
    return DataPipe;
}());
DataPipe = __decorate([
    core_1.Pipe({ name: 'dataMask' })
], DataPipe);
exports.DataPipe = DataPipe;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/data.pipe.js.map

/***/ }),

/***/ "./src/app/shared/pipe/telefone.pipe.ts":
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
var TelefonePipe = (function () {
    function TelefonePipe() {
    }
    TelefonePipe.prototype.transform = function (value) {
        value = value.replace(/\D/g, '');
        if (value && value.length == 10) {
            return value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
        }
        else if (value && value.length === 11) {
            return value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        }
    };
    return TelefonePipe;
}());
TelefonePipe = __decorate([
    core_1.Pipe({ name: 'telefone' })
], TelefonePipe);
exports.TelefonePipe = TelefonePipe;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/telefone.pipe.js.map

/***/ }),

/***/ "./src/app/shared/popup/cep/cep-popup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<base-popup-modal #modalConfirm [nomePopup]=\"nomeJanePopup\" [titulo]=\"titulo\" [desabilitarBtnConfirmar]=\"!formulario.valid\"\r\n  (onClickBaseConfirm)=\"btnConfirmar(formulario.value)\">\r\n\r\n  <form [formGroup]=\"formulario\">\r\n    <div class=\"form-group\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-4\">\r\n          <label for=\"dsEndereco\">Identificação do endereco</label>\r\n          <input type=\"text\" #campoNome sclass=\"form-control\" id=\"cep\" formControlName=\"dsEndereco\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-2\">\r\n          <label for=\"nrCep\">CEP</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"nrCep\" placeholder=\"CEP\" formControlName=\"nrCep\" (blur)=\"consultarCEP($event.target.value)\"\r\n            [textMask]=\"{mask: maskCEP}\">\r\n        </div>\r\n        <div class=\"form-group col-sm-8\">\r\n          <label for=\"dsLogradouro\">Endereço</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"dsLogradouro\" placeholder=\"rua\" formControlName=\"dsLogradouro\" [disableControl]=\"true\">\r\n        </div>\r\n        <div class=\"form-group col-sm-2\">\r\n          <label for=\"nrNumero\">Número</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"nrNumero\" placeholder=\"número\" formControlName=\"nrNumero\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-6\">\r\n          <label for=\"dsComplemento\">Complemento</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"dsComplemento\" placeholder=\"Complemento\" formControlName=\"dsComplemento\">\r\n        </div>\r\n        <div class=\"form-group col-sm-6\">\r\n          <label for=\"dsReferencia\">Referência</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"dsReferencia\" placeholder=\"ponto de referência\" formControlName=\"dsReferencia\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-4\">\r\n          <label for=\"nmBairro\">Bairro</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"nmBairro\" placeholder=\"Bairro\" formControlName=\"nmBairro\" [disableControl]=\"true\">\r\n        </div>\r\n        <div class=\"form-group col-sm-6\">\r\n          <label for=\"cidade\">Cidade</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"nmCidade\" placeholder=\"Cidade\" formControlName=\"nmCidade\" [disableControl]=\"true\">\r\n        </div>\r\n        <div class=\"form-group col-sm-2\">\r\n          <label for=\"sgUF\">Estado</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"ufCidade\" placeholder=\"UF\" formControlName=\"ufCidade\" [disableControl]=\"true\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</base-popup-modal>"

/***/ }),

/***/ "./src/app/shared/popup/cep/cep-popup-modal.component.ts":
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
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var consulta_cep_service_1 = __webpack_require__("./src/services/consulta-cep-service.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var abstract_popup_component_1 = __webpack_require__("./src/config/core/abstract-popup.component.ts");
var CepModalComponent = (function (_super) {
    __extends(CepModalComponent, _super);
    function CepModalComponent(consultaCEPService, fb) {
        var _this = _super.call(this, 'cepPopupModal') || this;
        _this.consultaCEPService = consultaCEPService;
        _this.fb = fb;
        return _this;
    }
    CepModalComponent.prototype.ngOnInit = function () {
        this.criarForm();
    };
    CepModalComponent.prototype.show = function () {
        this.criarForm();
        this.showPopup("Cadastra endereco");
    };
    CepModalComponent.prototype.showAlteracao = function (item) {
        this.item = item;
        this.alterarForm(item);
        this.showPopup("Alterar endereço");
    };
    CepModalComponent.prototype.consultarCEP = function (nrCep) {
        var _this = this;
        var cep = nrCep.replace(/\D/g, '');
        this.consultaCEPService.consultarCEP(nrCep)
            .subscribe(function (res) {
            var error = res['erro'];
            if (error) {
                trata_error_service_1.TrataErrorService.emitirMensagemError("O CEP informado não foi localizado");
            }
            else {
                var ender = _this.consultaCEPService.preencherEndereco(res);
                _this.alterarFormCep(ender);
                trata_error_service_1.TrataErrorService.limparMensagemError();
            }
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    CepModalComponent.prototype.btnConfirmar = function (value) {
        event_emitter_services_1.EventEmitterService.closePopup(this.nomeJanePopup);
        if (value.emAlteracao) {
            this.item.id = value.id;
            this.item.dsReferencia = value.dsReferencia;
            this.item.dsEndereco = value.dsEndereco;
            this.item.nrCep = value.nrCep;
            this.item.nrNumero = value.nrNumero;
            this.item.dsComplemento = value.dsComplemento;
            this.item.emAlteracao = true;
            this.item.nmCidade = value.nmCidade;
            this.item.ufCidade = value.ufCidade;
            this.onClickConfirm.emit(this.item);
        }
        else {
            this.onClickConfirm.emit(value);
        }
    };
    CepModalComponent.prototype.criarForm = function () {
        this.formulario = this.fb.group({
            id: [],
            dsEndereco: [''],
            nrCep: ['', forms_1.Validators.required],
            dsComplemento: [''],
            dsReferencia: [''],
            nrNumero: ['', forms_1.Validators.required],
            nmBairro: [''],
            dsLogradouro: [''],
            ufCidade: [''],
            nmCidade: [''],
            emAlteracao: false
        });
    };
    CepModalComponent.prototype.alterarFormCep = function (endereco) {
        this.formulario.patchValue({
            nmBairro: endereco.nmBairro,
            dsLogradouro: endereco.dsLogradouro,
            ufCidade: endereco.ufCidade,
            nmCidade: endereco.nmCidade
            //ufCidade: (endereco.ufCidade == null || endereco.ufCidade == undefined) ? endereco['uf']: endereco.ufCidade,
            //nmCidade: (endereco.nmCidade == null || endereco.nmCidade == undefined) ? endereco['localidade'] : endereco.nmCidade,
        });
    };
    CepModalComponent.prototype.alterarForm = function (endereco) {
        this.alterarFormCep(endereco);
        this.formulario.patchValue({
            id: endereco.id,
            nrCep: endereco.nrCep,
            dsComplemento: endereco.dsComplemento,
            dsEndereco: endereco.dsEndereco,
            dsReferencia: endereco.dsReferencia,
            nrNumero: endereco.nrNumero,
            emAlteracao: true
        });
    };
    return CepModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
CepModalComponent = __decorate([
    core_1.Component({
        selector: 'cep-popup-modal',
        template: __webpack_require__("./src/app/shared/popup/cep/cep-popup-modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof consulta_cep_service_1.ConsultaCEPService !== "undefined" && consulta_cep_service_1.ConsultaCEPService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], CepModalComponent);
exports.CepModalComponent = CepModalComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cep-popup-modal.component.js.map

/***/ }),

/***/ "./src/app/shared/popup/cliente/pesquisar-cliente-popup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<base-popup-modal #modalConfirm [nomePopup]=\"nomeJanePopup\" [titulo]=\"titulo\" [desabilitarBtnConfirmar]=\"desabilitarBtnSelecione\"\r\n  (onClickBaseConfirm)=\"btnConfirmar()\" [exibirBtnSelecione]=\"true\" [ocultarBotoes]=\"true\">\r\n\r\n  <form [formGroup]=\"formulario\">\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-4 col-sm-12\">\r\n        <input type=\"text\" class=\"form-control\"  placeholder=\"Cpf\" formControlName=\"nrCpf\" [textMask]=\"{mask: maskCPF}\">\r\n      </div>\r\n      <div class=\"form-group col-md-6 col-sm-12\">\r\n        <input #campoNome type=\"text\" class=\"form-control\" placeholder=\"Digite o nome do cliente\" formControlName=\"nmPessoaFisica\">\r\n      </div>\r\n      <div class=\"form-group col-md-2 col-sm-12\">\r\n        <button type=\"button\" class=\"btn btn-md btn-primary btn-block\" style=\"cursor: pointer;\" (click)=\"pesquisarCliente(formulario.value)\">\r\n          <i class=\"fa fa-search\"> </i> Pesquisar\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <table class=\"table table-striped\" *ngIf=\"items?.length > 0\">\r\n        <thead>\r\n          <tr>\r\n\r\n            <th class=\"text-center\" style=\"width: 5%\">\r\n              <i class=\"icon-people\"></i>\r\n            </th>\r\n            <th class=\"text-left\" style=\"width: 40%\">Cliente</th>\r\n            <th class=\"text-left\" style=\"width: 15%\">CPF</th>\r\n            <th class=\"text-center\" style=\"width: 15%\">Situação</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of items\" (click)=\"selecionarCliente(item)\" class=\"cursor-hands\" >\r\n            <td class=\"text-center\" >\r\n              <input type=\"radio\" id=\"radio\" name=\"radios\"  value=\"{{item.id}}\" (click)=\"selecionarCliente(item)\" class=\"cursor-hands\">\r\n            </td>\r\n            <td>\r\n              {{item.nmPessoa}}\r\n            </td>\r\n            <td class=\"text-center\">\r\n              {{item.nrCpf | cpfMask}}\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <status status={{item.status}}></status>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n  </form>\r\n</base-popup-modal>"

/***/ }),

/***/ "./src/app/shared/popup/cliente/pesquisar-cliente-popup-modal.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var abstract_popup_component_1 = __webpack_require__("./src/config/core/abstract-popup.component.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var cliente_service_1 = __webpack_require__("./src/app/pages/cadastros/cliente/cliente.service.ts");
var PesquisarClienteModalComponent = (function (_super) {
    __extends(PesquisarClienteModalComponent, _super);
    function PesquisarClienteModalComponent(clienteService, fb) {
        var _this = _super.call(this, 'pesquisarClientePopupModal') || this;
        _this.clienteService = clienteService;
        _this.fb = fb;
        _this.items = [];
        _this.cliente = {};
        _this.desabilitarBtnSelecione = true;
        return _this;
    }
    PesquisarClienteModalComponent.prototype.ngOnInit = function () {
        this.criarForm();
    };
    PesquisarClienteModalComponent.prototype.show = function () {
        this.criarForm();
        this.showPopup("Pesquisa de clientes");
    };
    PesquisarClienteModalComponent.prototype.pesquisarCliente = function (form) {
        var _this = this;
        this.clienteService.findByNrCpfOrNmPessoa(form.nrCpf, form.nmPessoaFisica).
            subscribe(function (res) { return _this.items = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    PesquisarClienteModalComponent.prototype.selecionarCliente = function (cliente) {
        this.cliente = cliente;
        this.modalConfirm.btnBaseConfirmar();
    };
    PesquisarClienteModalComponent.prototype.btnConfirmar = function () {
        this.onClickConfirm.emit(this.cliente);
        event_emitter_services_1.EventEmitterService.closePopup(this.nomeJanePopup);
    };
    PesquisarClienteModalComponent.prototype.criarForm = function () {
        this.items = [];
        this.formulario = this.fb.group({
            nrCpf: [''],
            nmPessoaFisica: ['']
        });
    };
    return PesquisarClienteModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
__decorate([
    core_1.ViewChild('modalConfirm'),
    __metadata("design:type", Object)
], PesquisarClienteModalComponent.prototype, "modalConfirm", void 0);
PesquisarClienteModalComponent = __decorate([
    core_1.Component({
        selector: 'pesquisar-cliente-popup-modal',
        template: __webpack_require__("./src/app/shared/popup/cliente/pesquisar-cliente-popup-modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], PesquisarClienteModalComponent);
exports.PesquisarClienteModalComponent = PesquisarClienteModalComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/pesquisar-cliente-popup-modal.component.js.map

/***/ }),

/***/ "./src/app/shared/popup/confirm/confirm-popup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalConfirm=\"bs-modal\" id='modalConfirm' class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" \r\n        [ngClass]=\"getPopupStyle()\" \r\n        role=\"document\">\r\n\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{titulo}}</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"modalConfirm.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary cursor-hands\" (click)=\"modalConfirm.hide()\">Fechar</button>\r\n        <button type=\"button\" class=\"btn btn-primary cursor-hands\"   (click)=\"btnConfirmar()\">Confirmar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/popup/confirm/confirm-popup-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal-dialog {\n  padding-top: 10%; }\n"

/***/ }),

/***/ "./src/app/shared/popup/confirm/confirm-popup-modal.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ConfirmPopupModalComponent = (function () {
    function ConfirmPopupModalComponent() {
        this.titulo = "Confirmar";
        this.popupStyle = '';
        this.onClickConfirm = new core_1.EventEmitter();
    }
    ConfirmPopupModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmPopupModalComponent.prototype.show = function () {
        this.confirma.show();
    };
    ConfirmPopupModalComponent.prototype.btnConfirmar = function () {
        this.confirma.hide();
        this.onClickConfirm.emit(true);
    };
    ConfirmPopupModalComponent.prototype.getPopupStyle = function () {
        var cssClasses = {};
        if (this.popupStyle == '') {
            cssClasses['modal-primary'] = true;
        }
        else {
            cssClasses['modal-' + this.popupStyle] = true;
        }
        return cssClasses;
    };
    return ConfirmPopupModalComponent;
}());
__decorate([
    core_1.ViewChild('modalConfirm'),
    __metadata("design:type", Object)
], ConfirmPopupModalComponent.prototype, "confirma", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ConfirmPopupModalComponent.prototype, "titulo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ConfirmPopupModalComponent.prototype, "popupStyle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ConfirmPopupModalComponent.prototype, "onClickConfirm", void 0);
ConfirmPopupModalComponent = __decorate([
    core_1.Component({
        selector: 'confirm-popup-modal',
        styles: [__webpack_require__("./src/app/shared/popup/confirm/confirm-popup-modal.component.scss")],
        template: __webpack_require__("./src/app/shared/popup/confirm/confirm-popup-modal.component.html")
    }),
    __metadata("design:paramtypes", [])
], ConfirmPopupModalComponent);
exports.ConfirmPopupModalComponent = ConfirmPopupModalComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/confirm-popup-modal.component.js.map

/***/ }),

/***/ "./src/app/shared/popup/modal/base-popup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalConfirm=\"bs-modal\" id='modalConfirm' class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n\r\n\r\n  <div class=\"modal-dialog modal-primary \" [ngClass]=\"modalSize\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{titulo}}</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"modalConfirm.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <alert-field-mensagem ></alert-field-mensagem>   \r\n        <ng-content></ng-content>\r\n      </div>\r\n      <div class=\"modal-footer\" *ngIf=\"!ocultarBotoes\" >\r\n        <button class=\"btn btn-secondary cursor-hands\" (click)=\"modalConfirm.hide()\">\r\n          <i class=\"fa fa-history\"></i> voltar\r\n        </button>\r\n        <button *ngIf=\"!exibirBtnSelecione\"   [disabled]=\"desabilitarBtnConfirmar\" [disabled]=\"desabilitarBtnConfirmar\" type=\"button\" class=\"btn btn-md btn-success cursor-hands\" (click)=\"btnBaseConfirmar()\">\r\n          <i class=\"fa fa-save\"> </i> salvar\r\n        </button>\r\n\r\n        <button *ngIf=\"exibirBtnSelecione\"    [disabled]=\"desabilitarBtnConfirmar\" type=\"button\" class=\"btn btn-md btn-success cursor-hands\" (click)=\"btnBaseConfirmar()\">\r\n          <i class=\"fa fa-check-square-o\"> </i> Selecione\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/popup/modal/base-popup-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal-dialog {\n  padding-top: 3%; }\n"

/***/ }),

/***/ "./src/app/shared/popup/modal/base-popup-modal.component.ts":
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
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var BasePopupModalComponent = (function () {
    function BasePopupModalComponent() {
        this.exibirBtnSelecione = false;
        this.desabilitarBtnConfirmar = false;
        this.ocultarBotoes = false;
        this.onClickBaseConfirm = new core_1.EventEmitter();
    }
    BasePopupModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalSize = this.modalSize == undefined ? 'modal-lg' : "modal-" + this.modalSize;
        event_emitter_services_1.EventEmitterService.showPopup(this.nomePopup).subscribe(function (x) { return _this.confirma.show(); });
        event_emitter_services_1.EventEmitterService.getPopupClose(this.nomePopup).subscribe(function (x) { return _this.confirma.hide(); });
    };
    BasePopupModalComponent.prototype.btnBaseConfirmar = function () {
        this.onClickBaseConfirm.emit(true);
    };
    BasePopupModalComponent.prototype.ngOnDestroy = function () {
        event_emitter_services_1.EventEmitterService.unsubscribeEvent();
    };
    return BasePopupModalComponent;
}());
__decorate([
    core_1.ViewChild('modalConfirm'),
    __metadata("design:type", Object)
], BasePopupModalComponent.prototype, "confirma", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BasePopupModalComponent.prototype, "titulo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BasePopupModalComponent.prototype, "nomePopup", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BasePopupModalComponent.prototype, "exibirBtnSelecione", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BasePopupModalComponent.prototype, "modalSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BasePopupModalComponent.prototype, "desabilitarBtnConfirmar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BasePopupModalComponent.prototype, "ocultarBotoes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BasePopupModalComponent.prototype, "onClickBaseConfirm", void 0);
BasePopupModalComponent = __decorate([
    core_1.Component({
        selector: 'base-popup-modal',
        styles: [__webpack_require__("./src/app/shared/popup/modal/base-popup-modal.component.scss")],
        template: __webpack_require__("./src/app/shared/popup/modal/base-popup-modal.component.html")
    }),
    __metadata("design:paramtypes", [])
], BasePopupModalComponent);
exports.BasePopupModalComponent = BasePopupModalComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/base-popup-modal.component.js.map

/***/ }),

/***/ "./src/app/shared/popup/popup-modal.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var adicional_produto_service_1 = __webpack_require__("./src/app/pages/config/adicional/adicional-produto.service.ts");
var ng2_select_1 = __webpack_require__("./node_modules/ng2-select/index.js");
var pesquisar_produto_popup_modal_component_1 = __webpack_require__("./src/app/shared/popup/produto/pesquisar-produto-popup-modal.component.ts");
var categoria_service_1 = __webpack_require__("./src/app/pages/config/categoria/categoria.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var angular2_text_mask_1 = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
var consulta_cep_service_1 = __webpack_require__("./src/services/consulta-cep-service.ts");
var cep_popup_modal_component_1 = __webpack_require__("./src/app/shared/popup/cep/cep-popup-modal.component.ts");
var base_popup_modal_component_1 = __webpack_require__("./src/app/shared/popup/modal/base-popup-modal.component.ts");
var confirm_popup_modal_component_1 = __webpack_require__("./src/app/shared/popup/confirm/confirm-popup-modal.component.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var modal_1 = __webpack_require__("./node_modules/ng2-bootstrap/modal/index.js");
var shared_component_module_1 = __webpack_require__("./src/app/shared/shared-component.module.ts");
var pesquisar_cliente_popup_modal_component_1 = __webpack_require__("./src/app/shared/popup/cliente/pesquisar-cliente-popup-modal.component.ts");
var cliente_service_1 = __webpack_require__("./src/app/pages/cadastros/cliente/cliente.service.ts");
var produto_service_1 = __webpack_require__("./src/app/pages/cadastros/produto/produto.service.ts");
// DataTable
var PopupModalModule = (function () {
    function PopupModalModule() {
    }
    return PopupModalModule;
}());
PopupModalModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            modal_1.ModalModule.forRoot(),
            shared_component_module_1.SharedComponentModule,
            ng2_select_1.SelectModule,
            angular2_text_mask_1.TextMaskModule
        ],
        declarations: [
            confirm_popup_modal_component_1.ConfirmPopupModalComponent,
            base_popup_modal_component_1.BasePopupModalComponent,
            cep_popup_modal_component_1.CepModalComponent,
            pesquisar_cliente_popup_modal_component_1.PesquisarClienteModalComponent,
            pesquisar_produto_popup_modal_component_1.PesquisarProdutoModalComponent
        ],
        exports: [
            confirm_popup_modal_component_1.ConfirmPopupModalComponent,
            base_popup_modal_component_1.BasePopupModalComponent,
            cep_popup_modal_component_1.CepModalComponent,
            pesquisar_cliente_popup_modal_component_1.PesquisarClienteModalComponent,
            pesquisar_produto_popup_modal_component_1.PesquisarProdutoModalComponent
        ],
        providers: [
            consulta_cep_service_1.ConsultaCEPService,
            cliente_service_1.ClienteService,
            produto_service_1.ProdutoService,
            categoria_service_1.CategoriaService,
            adicional_produto_service_1.AdicionalProdutoService
        ]
    })
], PopupModalModule);
exports.PopupModalModule = PopupModalModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/popup-modal.module.js.map

/***/ }),

/***/ "./src/app/shared/popup/produto/pesquisar-produto-popup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<base-popup-modal #modalConfirm [nomePopup]=\"nomeJanePopup\" [titulo]=\"titulo\" [desabilitarBtnConfirmar]=\"desabilitarBtnSelecione\"\r\n  (onClickBaseConfirm)=\"btnConfirmar()\" [exibirBtnSelecione]=\"true\">\r\n\r\n  <form [formGroup]=\"formulario\">\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-4 col-sm-12\">\r\n        <ng-select formControlName=\"categoria\" [items]=\"comboCategorias\" placeholder=\"{{label.selecione}}\"></ng-select>\r\n      </div>\r\n      <div class=\"form-group col-md-6 col-sm-12\">\r\n        <input #campoNome type=\"text\" class=\"form-control\" placeholder=\"Digite o nome do produto\" formControlName=\"nmProduto\" name=\"nmProduto\">\r\n      </div>\r\n      <div class=\"form-group col-md-2 col-sm-12\">\r\n        <button type=\"button\" class=\"btn btn-md btn-primary btn-block\" style=\"cursor: pointer;\" (click)=\"pesquisarProduto(formulario.value)\">\r\n          <i class=\"fa fa-search\"> </i> Pesquisar\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"produtos?.length > 0\">\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"text-center\" style=\"width: 5%\">\r\n              <i class=\"icon-people\"></i>\r\n            </th>\r\n            <th class=\"text-left\" style=\"width: 40%\">Produto</th>\r\n            <th class=\"text-left\" style=\"width: 15%\">Categoria</th>\r\n            <th class=\"text-center\" style=\"width: 15%\">Situação</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of produtos\" (click)=\"selecionarProduto(item)\" class=\"cursor-hands\">\r\n            <td class=\"text-center\">\r\n              <input type=\"radio\" id=\"radio\" name=\"radios\" value=\"{{item.id}}\" (click)=\"selecionarProduto(item)\" class=\"cursor-hands\">\r\n            </td>\r\n            <td>\r\n              {{item.nmProduto}}\r\n            </td>\r\n            <td class=\"text-center\">\r\n              {{item?.categoria?.nmCategoria}}\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <status status={{item.status}}></status>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n    <br>\r\n    <div class=\"from-group row\" *ngIf=\"adicionais?.length > 0\">\r\n      <div class=\"col-sm-2\"></div>\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Adicionais</strong>\r\n            <small> - selecione até {{qtAcompanhamento}} adicionais</small>\r\n          </div>\r\n          <div class=\"card-block\">\r\n\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr *ngFor=\"let item of adicionais\">\r\n                  <td class=\"text-left\" *ngIf=\"!verificarItem(item)\">\r\n                    <input type=\"checkbox\" id=\"checkbox1\" name=\"checkbox1\" (click)=\"selecionarItem($event.target.checked, item)\" [(ngModel)]=\"item.selecionado\"\r\n                      class=\"cursor-hands\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <strong>{{item.nmProduto}}</strong>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\" *ngIf=\"ctrExibicaoCampoOrdem\">\r\n      <label class=\"col-md-2 form-control-label text-align-right-center\">Ordem do item:</label>\r\n      <div class=\"col-md-2\">\r\n        <input type=\"text\" #cmpOrdemItem class=\"form-control input\" name=\"nrOrdemItem\" maxlength=\"2\" formControlName=\"nrOrdemItem\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\" *ngIf=\"ctrExibicaoCampoOrdem\">\r\n      <label class=\"col-md-2 form-control-label text-align-right\">Destaque:</label>\r\n      <div class=\"col-md-4\">\r\n        <a (click)=\"definirCor()\" class=\"cursor-hands\">\r\n          <destaque [valor]=\"this.formulario.get('destaque').value\"></destaque> Item com desque no cardapio\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</base-popup-modal>"

/***/ }),

/***/ "./src/app/shared/popup/produto/pesquisar-produto-popup-modal.component.ts":
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
var adicional_produto_service_1 = __webpack_require__("./src/app/pages/config/adicional/adicional-produto.service.ts");
var categoria_service_1 = __webpack_require__("./src/app/pages/config/categoria/categoria.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var abstract_popup_component_1 = __webpack_require__("./src/config/core/abstract-popup.component.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var produto_service_1 = __webpack_require__("./src/app/pages/cadastros/produto/produto.service.ts");
var PesquisarProdutoModalComponent = (function (_super) {
    __extends(PesquisarProdutoModalComponent, _super);
    function PesquisarProdutoModalComponent(produtoService, adicionalProduto, categoriaService, fb) {
        var _this = _super.call(this, 'pesquisarProdutoPopupModal') || this;
        _this.produtoService = produtoService;
        _this.adicionalProduto = adicionalProduto;
        _this.categoriaService = categoriaService;
        _this.fb = fb;
        _this.ocultarAcompanhamento = false;
        _this.exibirCampoOrdem = false;
        _this.moduloConsulta = 'PRD';
        _this.ctrExibicaoCampoOrdem = false;
        //produto = {} as ProdutoDTO;
        _this.desabilitarBtnSelecione = true;
        _this.qtAcompanhamento = 0;
        _this.qtItens = 0;
        //itens de consulta
        _this.produtos = [];
        _this.adicionais = [];
        _this.comboCategorias = [];
        _this.adicionaisItem = [];
        return _this;
    }
    PesquisarProdutoModalComponent.prototype.ngOnInit = function () {
        this.criarForm();
    };
    PesquisarProdutoModalComponent.prototype.show = function () {
        this.ctrExibicaoCampoOrdem = false;
        this.criarForm();
        this.showPopup("Pesquisa de Produto");
    };
    PesquisarProdutoModalComponent.prototype.pesquisarProduto = function (form) {
        var _this = this;
        var idCategoria = '';
        if (form.categoria != '') {
            idCategoria = form.categoria[0].id;
        }
        this.qtAcompanhamento = 0;
        this.qtItens = 0;
        this.produtoService.findByCategoriaOrNmProduto(idCategoria, form.nmProduto, this.moduloConsulta).
            subscribe(function (res) { return _this.produtos = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        this.adicionais = [];
    };
    PesquisarProdutoModalComponent.prototype.selecionarProduto = function (produto) {
        var _this = this;
        this.desabilitarBtnSelecione = false;
        this.qtAcompanhamento = Number(produto.qtAcompanhamento);
        this.produto = produto;
        if (this.ocultarAcompanhamento) {
            this.ctrExibicaoCampoOrdem = this.exibirCampoOrdem;
            if (this.cmpOrdemItem != undefined) {
                this.fieldFocus(this.cmpOrdemItem);
            }
        }
        else if (this.qtAcompanhamento > 0) {
            this.adicionalProduto.findByCategoria(produto.categoria.id)
                .subscribe(function (res) {
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var p = res_1[_i];
                    var prod = {};
                    prod.id = p.idProduto;
                    prod.nmProduto = p.nmProduto;
                    _this.adicionais.push(prod);
                }
                _this.adicionais = res;
            }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
            this.ctrExibicaoCampoOrdem = this.exibirCampoOrdem;
        }
    };
    PesquisarProdutoModalComponent.prototype.btnConfirmar = function () {
        this.pedidoItem.qtItem = 1;
        this.pedidoItem.nrOrdemItem = this.formulario.get('nrOrdemItem').value;
        this.pedidoItem.destaque = this.formulario.get('destaque').value;
        this.pedidoItem.produto = this.produto;
        this.pedidoItem.adicionais = this.adicionaisItem;
        this.pedidoItem.hash = this.calcularHashItem(this.pedidoItem);
        this.onClickConfirm.emit(this.pedidoItem);
        event_emitter_services_1.EventEmitterService.closePopup(this.nomeJanePopup);
    };
    PesquisarProdutoModalComponent.prototype.criarForm = function () {
        var _this = this;
        this.categoriaService.findCategoriasAtivasExcetoInterna(this.moduloConsulta)
            .subscribe(function (response) { return _this.comboCategorias = _this.preencharCombo(response, 'id', 'nmCategoria'); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        this.pedidoItem = {};
        this.produtos = [];
        this.adicionais = [];
        this.adicionaisItem = [];
        this.qtAcompanhamento = 0;
        this.qtItens = 0;
        this.formulario = this.fb.group({
            categoria: [''],
            nmProduto: [''],
            nrOrdemItem: [''],
            destaque: false
        });
    };
    PesquisarProdutoModalComponent.prototype.consultarCategorias = function (modulo) {
        var _this = this;
        modulo.subscribe(function (response) { return _this.comboCategorias = _this.preencharCombo(response, 'id', 'nmCategoria'); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    PesquisarProdutoModalComponent.prototype.selecionarItem = function (acao, item) {
        if (acao) {
            if (this.qtItens < this.qtAcompanhamento) {
                item.selecionado = true;
                this.adicionaisItem.push(item);
                this.qtItens++;
            }
        }
        else {
            this.qtItens--;
            item.selecionado = false;
            this.adicionaisItem = this.adicionaisItem.filter(function (adic) { return adic.id != item.id; });
        }
    };
    PesquisarProdutoModalComponent.prototype.verificarItem = function (item) {
        if (this.qtItens < this.qtAcompanhamento) {
            return false;
        }
        else {
            if (item.selecionado) {
                return false;
            }
        }
        return true;
    };
    PesquisarProdutoModalComponent.prototype.getColor = function () {
        return this.formulario.get('destaque').value ? 'green' : 'gray';
    };
    PesquisarProdutoModalComponent.prototype.definirCor = function () {
        this.formulario.patchValue({
            destaque: !this.formulario.get('destaque').value
        });
    };
    PesquisarProdutoModalComponent.prototype.definirIcone = function () {
        return {
            'icon-star': !this.formulario.get('destaque').value,
            //'fa fa-star fa-lg mt-0': this.formulario.get('destaque').value
            'fa fa-star': this.formulario.get('destaque').value
        };
    };
    return PesquisarProdutoModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
__decorate([
    core_1.ViewChild('cmpOrdemItem'),
    __metadata("design:type", Object)
], PesquisarProdutoModalComponent.prototype, "cmpOrdemItem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PesquisarProdutoModalComponent.prototype, "ocultarAcompanhamento", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PesquisarProdutoModalComponent.prototype, "exibirCampoOrdem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PesquisarProdutoModalComponent.prototype, "moduloConsulta", void 0);
PesquisarProdutoModalComponent = __decorate([
    core_1.Component({
        selector: 'pesquisar-produto-popup-modal',
        template: __webpack_require__("./src/app/shared/popup/produto/pesquisar-produto-popup-modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _a || Object, typeof (_b = typeof adicional_produto_service_1.AdicionalProdutoService !== "undefined" && adicional_produto_service_1.AdicionalProdutoService) === "function" && _b || Object, typeof (_c = typeof categoria_service_1.CategoriaService !== "undefined" && categoria_service_1.CategoriaService) === "function" && _c || Object, typeof (_d = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _d || Object])
], PesquisarProdutoModalComponent);
exports.PesquisarProdutoModalComponent = PesquisarProdutoModalComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/pesquisar-produto-popup-modal.component.js.map

/***/ }),

/***/ "./src/app/shared/shared-component.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng2_img_cropper_1 = __webpack_require__("./node_modules/ng2-img-cropper/index.js");
var upload_image_popup_modal_component_1 = __webpack_require__("./src/app/shared/components/upload-imagem/modal/upload-image-popup-modal.component.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var dropdown_1 = __webpack_require__("./node_modules/ng2-bootstrap/dropdown/index.js");
var angular2_text_mask_1 = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
var ng2_select_1 = __webpack_require__("./node_modules/ng2-select/index.js");
var telefone_pipe_1 = __webpack_require__("./src/app/shared/pipe/telefone.pipe.ts");
var cpf_cnpj_pipe_1 = __webpack_require__("./src/app/shared/pipe/cpf-cnpj.pipe.ts");
var cep_pipe_1 = __webpack_require__("./src/app/shared/pipe/cep.pipe.ts");
var data_pipe_1 = __webpack_require__("./src/app/shared/pipe/data.pipe.ts");
var cnpj_pipe_1 = __webpack_require__("./src/app/shared/pipe/cnpj.pipe.ts");
var cpf_pipe_1 = __webpack_require__("./src/app/shared/pipe/cpf.pipe.ts");
var disabled_control_directive_1 = __webpack_require__("./src/app/shared/directive/disabled-control.directive.ts");
var lower_case_directive_1 = __webpack_require__("./src/app/shared/directive/lower-case.directive.ts");
var upper_case_directive_1 = __webpack_require__("./src/app/shared/directive/upper-case.directive.ts");
var auto_foco_directive_1 = __webpack_require__("./src/app/shared/directive/auto-foco.directive.ts");
var number_only_directive_1 = __webpack_require__("./src/app/shared/directive/number-only.directive.ts");
var destaque_component_1 = __webpack_require__("./src/app/shared/components/destaque.component.ts");
var form_buttons_component_1 = __webpack_require__("./src/app/shared/components/form-buttons.component.ts");
var status_pedido_component_1 = __webpack_require__("./src/app/shared/components/status-pedido.component.ts");
var origem_pedido_component_1 = __webpack_require__("./src/app/shared/components/origem-pedido.component.ts");
var alert_field_mensagem_component_1 = __webpack_require__("./src/app/shared/components/alert-field-mensagem.component.ts");
var upload_imagem_component_1 = __webpack_require__("./src/app/shared/components/upload-imagem/upload-imagem.component.ts");
var form_debug_component_1 = __webpack_require__("./src/app/shared/components/form-debug.component.ts");
var alert_mensagem_component_1 = __webpack_require__("./src/app/shared/components/alert-mensagem.component.ts");
var foto_component_1 = __webpack_require__("./src/app/shared/components/foto.component.ts");
var sim_nao_component_1 = __webpack_require__("./src/app/shared/components/sim-nao.component.ts");
var status_component_1 = __webpack_require__("./src/app/shared/components/status.component.ts");
var foto_uri_component_1 = __webpack_require__("./src/app/shared/components/foto-uri.component.ts");
var image_service_1 = __webpack_require__("./src/services/image.service.ts");
var modal_1 = __webpack_require__("./node_modules/ng2-bootstrap/modal/index.js");
var SharedComponentModule = (function () {
    function SharedComponentModule() {
    }
    return SharedComponentModule;
}());
SharedComponentModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular2_text_mask_1.TextMaskModule,
            ng2_select_1.SelectModule,
            dropdown_1.BsDropdownModule,
            modal_1.ModalModule.forRoot(),
        ],
        declarations: [
            foto_component_1.FotoComponent,
            foto_uri_component_1.FotoURIComponent,
            alert_mensagem_component_1.AlertMensagemComponent,
            alert_field_mensagem_component_1.AlertFieldMensagemComponent,
            form_debug_component_1.FormDebugComponent,
            upload_imagem_component_1.UploadImagemComponent,
            status_component_1.StatusComponent,
            sim_nao_component_1.SimNaoComponent,
            auto_foco_directive_1.AutoFocoDirective,
            number_only_directive_1.NumberOnlyDirective,
            origem_pedido_component_1.OrigemPedidoComponent,
            cpf_cnpj_pipe_1.CpfCnpjPipe,
            cpf_pipe_1.CpfPipe,
            cep_pipe_1.CepPipe,
            cnpj_pipe_1.CnpjPipe,
            data_pipe_1.DataPipe,
            telefone_pipe_1.TelefonePipe,
            upper_case_directive_1.UpperCaseTextDirective,
            lower_case_directive_1.LowerCaseTextDirective,
            disabled_control_directive_1.DisableControlDirective,
            status_pedido_component_1.StatusPedidoComponent,
            form_buttons_component_1.FormButtonsComponent,
            destaque_component_1.DestaqueComponent,
            upload_image_popup_modal_component_1.UploadImagePopupModalComponent,
            ng2_img_cropper_1.ImageCropperComponent
        ],
        exports: [
            foto_component_1.FotoComponent,
            foto_uri_component_1.FotoURIComponent,
            alert_mensagem_component_1.AlertMensagemComponent,
            alert_field_mensagem_component_1.AlertFieldMensagemComponent,
            form_debug_component_1.FormDebugComponent,
            upload_imagem_component_1.UploadImagemComponent,
            status_component_1.StatusComponent,
            sim_nao_component_1.SimNaoComponent,
            auto_foco_directive_1.AutoFocoDirective,
            number_only_directive_1.NumberOnlyDirective,
            cpf_cnpj_pipe_1.CpfCnpjPipe,
            cep_pipe_1.CepPipe,
            cpf_pipe_1.CpfPipe,
            cnpj_pipe_1.CnpjPipe,
            data_pipe_1.DataPipe,
            telefone_pipe_1.TelefonePipe,
            upper_case_directive_1.UpperCaseTextDirective,
            lower_case_directive_1.LowerCaseTextDirective,
            disabled_control_directive_1.DisableControlDirective,
            origem_pedido_component_1.OrigemPedidoComponent,
            status_pedido_component_1.StatusPedidoComponent,
            form_buttons_component_1.FormButtonsComponent,
            destaque_component_1.DestaqueComponent,
            upload_image_popup_modal_component_1.UploadImagePopupModalComponent,
            ng2_img_cropper_1.ImageCropperComponent
        ],
        providers: [
            image_service_1.ImageService
        ]
    })
], SharedComponentModule);
exports.SharedComponentModule = SharedComponentModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/shared-component.module.js.map

/***/ }),

/***/ "./src/config/core/abstract-base.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var combo_dto_1 = __webpack_require__("./src/models/domain/combo.dto.ts");
var AbstractBaseComponent = (function () {
    function AbstractBaseComponent() {
        this.isErro = false;
        this.errorMensagem = "";
        this.maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskCNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskCEP = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.maskFoneResidencial = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskFoneCelular = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskData = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.urlFotoAvatar = 'assets/img/noimage/prod.jpg';
        //protected urlClienteAvatar: string = 'assets/img/noimage/noimagem.jpg';
        this.urlFoto = '';
        this.label = {
            selecione: ':: selecione ::'
        };
        this.btn = {
            btnSalvar: 'Salvar',
            btnEditar: 'Editar',
            btnLimpar: 'Limpar',
            btnVoltar: 'Voltar',
            btnExcluir: 'Excluir',
            btnAtivar: 'Ativar',
            btnAlterarPerfil: 'Alterar perfil',
            btnAlterarSenha: 'Alterar senha',
            btnInativar: 'Inativar',
            btnNovo: 'Novo'
        };
        this.msg = {
            msgRegistroIncluido: 'Registro incluído com sucesso!!!',
            msgRegistroAlterado: 'Registro alterado com sucesso!!!',
            msgRegistroExcluido: 'Registro excluído com sucesso!!!',
            msgSenhaAlterada: 'Senha alterada com sucesso!!!'
        };
        this.casoDeUso = {
            frmCadastroUsuarioTitulo: 'Cadastro de usuário',
            frmCadastroUsuarioNovo: 'Formulário de cadastro de usuário',
            frmCadastroUsuarioLista: 'Listar usuários',
        };
    }
    AbstractBaseComponent.prototype.isInvalido = function (campo) {
        return !campo.valid && !campo.pristine;
    };
    AbstractBaseComponent.prototype.isValido = function (campo) {
        return campo.valid && !campo.pristine;
    };
    AbstractBaseComponent.prototype.getClassFormControl = function (campo) {
        return {
            'form-control': true,
            'form-control-danger': this.isInvalido(campo),
            'form-control-success': this.isValido(campo)
        };
    };
    AbstractBaseComponent.prototype.getClassFormGroup = function (campo) {
        return {
            'form-group': true,
            'has-danger': this.isInvalido(campo),
            'has-success': this.isValido(campo)
        };
    };
    AbstractBaseComponent.prototype.mensagemSucesso = function (titulo, mensagem) {
        event_emitter_services_1.EventEmitterService
            .emitirMensagemToasterSucesso(titulo, mensagem);
    };
    AbstractBaseComponent.prototype.aplicarCssGroupRow = function (campo) {
        return {
            'form-group row ': true,
            'has-danger': this.isInvalido(campo),
            'has-success': this.isValido(campo)
        };
    };
    AbstractBaseComponent.prototype.aplicarCssGroup = function (campo) {
        return {
            'form-group': true,
            'has-danger': this.isInvalido(campo),
            'has-success': this.isValido(campo)
        };
    };
    AbstractBaseComponent.prototype.aplicarCssForm = function (campo) {
        return {
            'form-control': true,
            'form-control-danger': this.isInvalido(campo),
            'form-control-success': this.isValido(campo)
        };
    };
    AbstractBaseComponent.prototype.isCampoVazio = function (campo) {
        return campo.value == null || campo.value == '';
    };
    AbstractBaseComponent.prototype.preencharCombo = function (response, compoId, campoValor) {
        var combo = [];
        for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
            var cat = response_1[_i];
            combo.push(new combo_dto_1.ComboDTO(cat[compoId], cat[campoValor]));
        }
        return combo;
    };
    AbstractBaseComponent.prototype.fieldFocus = function (campo) {
        setTimeout(function () {
            campo.nativeElement.focus();
        }, 500);
    };
    AbstractBaseComponent.prototype.calcularHashItem = function (item) {
        var data = [];
        var x = item.produto.id + ';';
        for (var _i = 0, _a = item.adicionais; _i < _a.length; _i++) {
            var p = _a[_i];
            data.push(p.id);
        }
        data.sort(function (a, b) { return a - b; });
        for (var _b = 0, data_1 = data; _b < data_1.length; _b++) {
            var v = data_1[_b];
            x += v + ";";
        }
        return x;
    };
    return AbstractBaseComponent;
}());
exports.AbstractBaseComponent = AbstractBaseComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/abstract-base.component.js.map

/***/ }),

/***/ "./src/config/core/abstract-popup.component.ts":
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
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var abstract_base_component_1 = __webpack_require__("./src/config/core/abstract-base.component.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var AbstractPopupComponent = (function (_super) {
    __extends(AbstractPopupComponent, _super);
    function AbstractPopupComponent(nomePopup) {
        var _this = _super.call(this) || this;
        _this.onClickConfirm = new core_1.EventEmitter();
        _this.titulo = "";
        _this.nomeJanePopup = nomePopup;
        return _this;
    }
    AbstractPopupComponent.prototype.ngOnInit = function () {
    };
    AbstractPopupComponent.prototype.tratarSucesso = function () {
        event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso(this.titulo, 'operação realizada com sucesso!!!');
        event_emitter_services_1.EventEmitterService.closePopup(this.nomeJanePopup);
        this.onClickConfirm.emit();
    };
    AbstractPopupComponent.prototype.showPopup = function (titulo) {
        event_emitter_services_1.EventEmitterService.getErrors().emit(null);
        event_emitter_services_1.EventEmitterService.showPopup(this.nomeJanePopup).emit();
        this.titulo = titulo;
        if (this.campo != undefined) {
            this.fieldFocus(this.campo);
        }
    };
    AbstractPopupComponent.prototype.acao = function (item, service) {
        var _this = this;
        if (item.emAlteracao) {
            service.atualizar(item)
                .subscribe(function (res) { return _this.tratarSucesso(); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        }
        else {
            service.salvar(item)
                .subscribe(function (res) { return _this.tratarSucesso(); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        }
    };
    return AbstractPopupComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('campoNome'),
    __metadata("design:type", Object)
], AbstractPopupComponent.prototype, "campo", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AbstractPopupComponent.prototype, "onClickConfirm", void 0);
exports.AbstractPopupComponent = AbstractPopupComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/abstract-popup.component.js.map

/***/ }),

/***/ "./src/config/core/abstract-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var storage_keys_config_1 = __webpack_require__("./src/config/core/storage-keys.config.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var AbstractService = (function () {
    function AbstractService() {
    }
    AbstractService.prototype.getHearderToken = function () {
        var token = this.getToken().token;
        var authHeader = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }) };
        return authHeader;
    };
    AbstractService.prototype.getHearderTokenNoResponse = function () {
        var authHeader = {
            observe: 'response',
            responseType: 'text',
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.getToken().token })
        };
        return authHeader;
    };
    AbstractService.prototype.getHeaderTokenOnly = function () {
        var token = this.getToken().token;
        return new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + token });
    };
    AbstractService.prototype.getToken = function () {
        var usr = localStorage.getItem(storage_keys_config_1.STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    };
    return AbstractService;
}());
exports.AbstractService = AbstractService;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/abstract-service.js.map

/***/ }),

/***/ "./src/config/core/api.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.API_CONFIG = {
    baseUrl: "https://paladarfit.herokuapp.com",
    //baseUrl: "http://localhost:8080",
    bucketBaseUrl: "https://s3.us-east-2.amazonaws.com/paladarfit",
    versao: '1.2.1'
};
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/api.config.js.map

/***/ }),

/***/ "./src/config/core/storage-keys.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGE_KEYS = {
    localUser: "localUser",
    cart: "cursoSpringIonicCart"
};
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/storage-keys.config.js.map

/***/ }),

/***/ "./src/config/guard/auth-guard.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("./src/services/auth.service.ts");
var AuthGuard = (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.validadeRouter();
    };
    AuthGuard.prototype.canActivateChild = function () {
        return this.validadeRouter();
    };
    AuthGuard.prototype.validadeRouter = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['auth/login']);
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/auth-guard.service.js.map

/***/ }),

/***/ "./src/config/interceptors/auth-interceptor.ts":
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
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var storage_service_1 = __webpack_require__("./src/services/storage.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var AuthInterceptor = (function () {
    function AuthInterceptor(storage) {
        this.storage = storage;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var localUser = this.storage.getLocalUser();
        var N = api_config_1.API_CONFIG.baseUrl.length;
        var requestToAPI = req.url.substring(0, N) == api_config_1.API_CONFIG.baseUrl;
        if (localUser && requestToAPI) {
            var authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localUser.token) });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _a || Object])
], AuthInterceptor);
exports.AuthInterceptor = AuthInterceptor;
exports.AuthInterceptorProvider = {
    provide: http_1.HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/auth-interceptor.js.map

/***/ }),

/***/ "./src/config/interceptors/error-interceptor.ts":
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
var storage_service_1 = __webpack_require__("./src/services/storage.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var Rx_1 = __webpack_require__("./node_modules/rxjs/Rx.js"); // IMPORTANTE: IMPORT ATUALIZADO
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var ErrorInterceptor = (function () {
    function ErrorInterceptor(storage) {
        this.storage = storage;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req)
            .catch(function (error, caught) {
            var errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            if (!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }
            switch (errorObj.status) {
                case 401:
                    _this.handle401();
                    break;
                case 403:
                    _this.handle403(errorObj);
                    break;
                case 422:
                    _this.handle422(errorObj);
                    break;
                default:
                    _this.handleDefaultEror(errorObj);
            }
            return Rx_1.Observable.throw(errorObj);
        });
    };
    ErrorInterceptor.prototype.handle403 = function (errorObj) {
        trata_error_service_1.TrataErrorService.tratarError(errorObj);
    };
    ErrorInterceptor.prototype.handle401 = function () {
    };
    ErrorInterceptor.prototype.handle422 = function (errorObj) {
    };
    ErrorInterceptor.prototype.handleDefaultEror = function (errorObj) {
    };
    return ErrorInterceptor;
}());
ErrorInterceptor = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _a || Object])
], ErrorInterceptor);
exports.ErrorInterceptor = ErrorInterceptor;
exports.ErrorInterceptorProvider = {
    provide: http_1.HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/error-interceptor.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/main.js.map

/***/ }),

/***/ "./src/models/config/toater-mensagem.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tipo_mensagem_enum_1 = __webpack_require__("./src/models/enums/tipo-mensagem.enum.ts");
var ToasterMensagem = (function () {
    function ToasterMensagem(tipo, titulo, mensagem) {
        this.tipo = tipo;
        this.titulo = titulo;
        this.mensagem = mensagem;
    }
    ToasterMensagem.prototype.getTipoMensagem = function () {
        var array = [];
        array[tipo_mensagem_enum_1.TipoMensagemEnum.success] = 'success';
        array[tipo_mensagem_enum_1.TipoMensagemEnum.warning] = 'warning';
        array[tipo_mensagem_enum_1.TipoMensagemEnum.danger] = 'error';
        array[tipo_mensagem_enum_1.TipoMensagemEnum.info] = 'info';
        return array[this.tipo];
    };
    ToasterMensagem.prototype.getTitulo = function () {
        return this.titulo;
    };
    ToasterMensagem.prototype.getMensagem = function () {
        return this.mensagem;
    };
    return ToasterMensagem;
}());
exports.ToasterMensagem = ToasterMensagem;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/toater-mensagem.model.js.map

/***/ }),

/***/ "./src/models/domain/combo.dto.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComboDTO = (function () {
    function ComboDTO(id, text) {
        this.id = id;
        this.text = text;
    }
    return ComboDTO;
}());
exports.ComboDTO = ComboDTO;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/combo.dto.js.map

/***/ }),

/***/ "./src/models/enums/tipo-mensagem.enum.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TipoMensagemEnum;
(function (TipoMensagemEnum) {
    TipoMensagemEnum[TipoMensagemEnum["success"] = 0] = "success";
    TipoMensagemEnum[TipoMensagemEnum["warning"] = 1] = "warning";
    TipoMensagemEnum[TipoMensagemEnum["danger"] = 2] = "danger";
    TipoMensagemEnum[TipoMensagemEnum["info"] = 3] = "info";
})(TipoMensagemEnum = exports.TipoMensagemEnum || (exports.TipoMensagemEnum = {}));
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/tipo-mensagem.enum.js.map

/***/ }),

/***/ "./src/services/auth.service.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var abstract_service_1 = __webpack_require__("./src/config/core/abstract-service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var storage_service_1 = __webpack_require__("./src/services/storage.service.ts");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http, router, storage) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.router = router;
        _this.storage = storage;
        _this.jwtHelper = new angular2_jwt_1.JwtHelper();
        return _this;
    }
    AuthService.prototype.authenticate = function (creds) {
        return this.http.post(api_config_1.API_CONFIG.baseUrl + "/login", creds, { observe: 'response', responseType: 'text' });
    };
    AuthService.prototype.refreshToken = function () {
        return this.http.post(api_config_1.API_CONFIG.baseUrl + "/auth/refresh_token", {}, this.getHearderTokenNoResponse());
    };
    AuthService.prototype.successfulLogin = function (authorizationValue) {
        var tok = authorizationValue.substring(7);
        var user = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
        //this.cartService.createOrClearCart();
    };
    AuthService.prototype.logouts = function () {
        this.storage.setLocalUser(null);
    };
    AuthService.prototype.isAuthenticated = function () {
        var user = this.storage.getLocalUser();
        if (user != null) {
            return !this.jwtHelper.isTokenExpired(user.token);
        }
        return false;
    };
    AuthService.prototype.hasToken = function () {
        var user = this.storage.getLocalUser();
        return user != null && user.token != null;
    };
    AuthService.prototype.logoutSistema = function () {
        this.storage.setLocalUser(null);
        this.router.navigate(['auth/login']);
    };
    return AuthService;
}(abstract_service_1.AbstractService));
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _c || Object])
], AuthService);
exports.AuthService = AuthService;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/auth.service.js.map

/***/ }),

/***/ "./src/services/consulta-cep-service.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ConsultaCEPService = (function () {
    function ConsultaCEPService(http) {
        this.http = http;
    }
    ConsultaCEPService.prototype.consultarCEP = function (nrCep) {
        nrCep = nrCep.replace(/\D/g, '');
        if (nrCep != "") {
            var validaCep = /^[0-9]{8}$/;
            if (validaCep.test(nrCep)) {
                return this.http.get("//viacep.com.br/ws/" + nrCep + "/json/");
            }
        }
    };
    ConsultaCEPService.prototype.preencherFormEndereco = function (form, end) {
        form.patchValue({
            endereco: {
                id: [],
                nrCep: end.nrCep,
                nmBairro: end.nmBairro,
                dsComplemento: end.dsComplemento,
                dsLogradouro: end.dsLogradouro,
                ufCidade: end.ufCidade,
                nmCidade: end.nmCidade,
            }
        });
        return form;
    };
    ConsultaCEPService.prototype.preencherEndereco = function (end) {
        var ender = {};
        ender.nrCep = end['cep'];
        ender.nmBairro = end['bairro'],
            ender.dsComplemento = end['complemento'],
            ender.dsLogradouro = end['logradouro'],
            ender.ufCidade = end['uf'],
            ender.nmCidade = end['localidade'];
        return ender;
    };
    return ConsultaCEPService;
}());
ConsultaCEPService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], ConsultaCEPService);
exports.ConsultaCEPService = ConsultaCEPService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/consulta-cep-service.js.map

/***/ }),

/***/ "./src/services/image.service.ts":
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
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.getImageFromBucket = function (id, modulo) {
        this.id = id;
        var url = this.recuperarUri(modulo);
        return this.http.get(url);
    };
    ImageService.prototype.getImage = function (id, modulo) {
        this.id = id;
        return this.recuperarUri(modulo);
    };
    ImageService.prototype.recuperarUri = function (modulo) {
        switch (modulo) {
            case 'CLI': return api_config_1.API_CONFIG.bucketBaseUrl + "/clientes/cli" + this.id + ".jpg";
            case 'PRD': return api_config_1.API_CONFIG.bucketBaseUrl + "/produtos/prd" + this.id + ".jpg";
            case 'CAT': return api_config_1.API_CONFIG.bucketBaseUrl + "/categorias/cat" + this.id + ".jpg";
        }
    };
    return ImageService;
}());
ImageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], ImageService);
exports.ImageService = ImageService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/image.service.js.map

/***/ }),

/***/ "./src/services/log.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.consoleLog = function (msg) {
        console.log(msg);
    };
    return LogService;
}());
LogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/log.service.js.map

/***/ }),

/***/ "./src/services/storage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var storage_keys_config_1 = __webpack_require__("./src/config/core/storage-keys.config.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.getLocalUser = function () {
        var usr = localStorage.getItem(storage_keys_config_1.STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    };
    StorageService.prototype.setLocalUser = function (obj) {
        if (obj == null) {
            localStorage.removeItem(storage_keys_config_1.STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(storage_keys_config_1.STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    };
    StorageService.prototype.getCart = function () {
        var str = localStorage.getItem(storage_keys_config_1.STORAGE_KEYS.cart);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    };
    StorageService.prototype.setCart = function (obj) {
        if (obj != null) {
            localStorage.setItem(storage_keys_config_1.STORAGE_KEYS.cart, JSON.stringify(obj));
        }
        else {
            localStorage.removeItem(storage_keys_config_1.STORAGE_KEYS.cart);
        }
    };
    return StorageService;
}());
StorageService = __decorate([
    core_1.Injectable()
], StorageService);
exports.StorageService = StorageService;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/storage.service.js.map

/***/ }),

/***/ "./src/services/trata-error.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var storage_keys_config_1 = __webpack_require__("./src/config/core/storage-keys.config.ts");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var TrataErrorService = (function () {
    function TrataErrorService() {
    }
    TrataErrorService.tratarError = function (error) {
        var errorObj = error;
        if (errorObj.error) {
            errorObj = errorObj.error;
        }
        if (!errorObj.status) {
            errorObj = JSON.parse(errorObj);
        }
        if (errorObj.status == undefined) {
            errorObj.status = 0;
        }
        switch (errorObj.status) {
            case 0:
                event_emitter_services_1.EventEmitterService.emitirMensagemToasterDanger("Alerta", "Erro: " + errorObj.status + " - Mensagem: rede indispon\u00EDvel");
                break;
            case 400:
                event_emitter_services_1.EventEmitterService.emitirMensagemToasterDanger("Alerta", "Erro: " + errorObj.status + " - Mensagem: " + errorObj.message);
                break;
            case 401:
                this.emitirMensagemError("Erro: 401 - Email ou senha incorreto");
                break;
            case 403:
                var requestToAPI = errorObj.url.substring(0, api_config_1.API_CONFIG.bucketBaseUrl.length) == api_config_1.API_CONFIG.bucketBaseUrl;
                if (!requestToAPI) {
                    localStorage.removeItem(storage_keys_config_1.STORAGE_KEYS.localUser);
                }
                break;
            case 422:
                event_emitter_services_1.EventEmitterService.getErrors().emit(errorObj.errors);
                break;
            default:
                event_emitter_services_1.EventEmitterService.emitirMensagemToasterAlerta("Alerta", "Erro: " + errorObj.status + " - Messagem: " + errorObj.message);
        }
    };
    TrataErrorService.handleMessage = function (msg) {
        var errors = [];
        var error = {};
        error.message = msg;
        errors.push(error);
        event_emitter_services_1.EventEmitterService.getErrors().emit(errors);
    };
    TrataErrorService.emitirMensagemError = function (msg) {
        this.handleMessage(msg);
    };
    TrataErrorService.limparMensagemError = function () {
        event_emitter_services_1.EventEmitterService.getErrors().emit({});
    };
    return TrataErrorService;
}());
exports.TrataErrorService = TrataErrorService;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/trata-error.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map