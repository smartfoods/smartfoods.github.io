webpackJsonp([6,10],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var toater_mensagem_model_1 = __webpack_require__(252);
var tipo_mensagem_enum_1 = __webpack_require__(136);
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
        this.emitters = {};
        this.getToater();
    };
    EventEmitterService.getToater = function () {
        return this.get('showToasterEvent');
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/event-emitter.services.js.map

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.API_CONFIG = {
    baseUrl: "https://paladarfit.herokuapp.com",
    //baseUrl: "http://localhost:8080",
    bucketBaseUrl: "https://s3.us-east-2.amazonaws.com/paladarfit"
};
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/api.config.js.map

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(28);
var modal_1 = __webpack_require__(253);
// DataTable
var confirm_popup_modal_component_1 = __webpack_require__(283);
var PopupModalModule = (function () {
    function PopupModalModule() {
    }
    return PopupModalModule;
}());
PopupModalModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            modal_1.ModalModule.forRoot()
        ],
        declarations: [
            confirm_popup_modal_component_1.ConfirmPopupModalComponent,
        ],
        exports: [
            confirm_popup_modal_component_1.ConfirmPopupModalComponent
        ]
    })
], PopupModalModule);
exports.PopupModalModule = PopupModalModule;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/popup-modal.module.js.map

/***/ }),

/***/ 136:
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/tipo-mensagem.enum.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_guard_service_1 = __webpack_require__(146);
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(42);
//Layouts
var full_layout_component_1 = __webpack_require__(141);
var simple_layout_component_1 = __webpack_require__(142);
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
                path: 'categorias',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/categorias/categorias.module#CategoriasModule'
            },
            {
                path: 'produtos',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/produtos/produtos.module#ProdutosModule'
            },
            {
                path: 'unidademedida',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                loadChildren: './pages/config/unidademedida/unidade-medida.module#UnidadeMedidaModule'
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
        path: 'error',
        component: simple_layout_component_1.SimpleLayoutComponent,
        data: {
            title: 'Erros pages'
        },
        children: [
            {
                path: '',
                loadChildren: './pages/config/admin/config-pages.module#ConfigPagesModule',
            }
        ]
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/app.routing.js.map

/***/ }),

/***/ 141:
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
var core_1 = __webpack_require__(2);
var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        //console.log('Dropdown is now: ', open);
    };
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
        styles: [__webpack_require__(440)],
        template: __webpack_require__(455),
        providers: []
    }),
    __metadata("design:paramtypes", [])
], FullLayoutComponent);
exports.FullLayoutComponent = FullLayoutComponent;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/full-layout.component.js.map

/***/ }),

/***/ 142:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/simple-layout.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var storage_service_1 = __webpack_require__(58);
var http_1 = __webpack_require__(57);
var auth_routing_module_1 = __webpack_require__(267);
var core_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(56);
var login_component_1 = __webpack_require__(144);
var register_component_1 = __webpack_require__(145);
var auth_service_1 = __webpack_require__(48);
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        imports: [auth_routing_module_1.AuthRoutingModule, forms_1.FormsModule, http_1.HttpClientModule],
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/auth.module.js.map

/***/ }),

/***/ 144:
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
var auth_service_1 = __webpack_require__(48);
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(42);
var event_emitter_services_1 = __webpack_require__(133);
var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.creds = {
            login: "",
            senha: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.hasToken()) {
            this.auth.refreshToken()
                .subscribe(function (response) {
                _this.auth.successfulLogin(response.headers.get('Authorization'));
            }, function (error) { });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.authenticate(this.creds)
            .subscribe(function (response) {
            _this.auth.successfulLogin(response.headers.get('Authorization'));
            _this.router.navigate(['dashboard']);
        }, function (error) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterInfo("Login", "Erro: " + error.status + " - Messagem: " + error.message);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(459)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/login.component.js.map

/***/ }),

/***/ 145:
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
var core_1 = __webpack_require__(2);
var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(460)
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/register.component.js.map

/***/ }),

/***/ 146:
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
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(42);
var auth_service_1 = __webpack_require__(48);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/auth-guard.service.js.map

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layout/dashboard/dashboard.module": [
		729,
		4
	],
	"./pages/auth/auth.module": [
		143
	],
	"./pages/categorias/categorias.module": [
		730,
		1
	],
	"./pages/config/admin/config-pages.module": [
		731,
		3
	],
	"./pages/config/unidademedida/unidade-medida.module": [
		732,
		2
	],
	"./pages/produtos/produtos.module": [
		733,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 244;


/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var platform_browser_dynamic_1 = __webpack_require__(258);
var app_module_1 = __webpack_require__(261);
var environment_1 = __webpack_require__(286);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(28);
var forms_1 = __webpack_require__(56);
var angular2_text_mask_1 = __webpack_require__(254);
var form_debug_component_1 = __webpack_require__(271);
var alert_mensagem_component_1 = __webpack_require__(268);
var foto_component_1 = __webpack_require__(272);
var sim_nao_component_1 = __webpack_require__(275);
var status_component_1 = __webpack_require__(276);
var upload_imagem_component_1 = __webpack_require__(277);
var auto_foco_directive_1 = __webpack_require__(279);
var number_only_directive_1 = __webpack_require__(281);
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
            angular2_text_mask_1.TextMaskModule
        ],
        declarations: [
            foto_component_1.FotoComponent,
            alert_mensagem_component_1.AlertMensagemComponent,
            form_debug_component_1.FormDebugComponent,
            upload_imagem_component_1.UploadImagemComponent,
            status_component_1.StatusComponent,
            sim_nao_component_1.SimNaoComponent,
            auto_foco_directive_1.AutofocoDirective,
            number_only_directive_1.NumberOnlyDirective
        ],
        exports: [
            foto_component_1.FotoComponent,
            alert_mensagem_component_1.AlertMensagemComponent,
            form_debug_component_1.FormDebugComponent,
            upload_imagem_component_1.UploadImagemComponent,
            status_component_1.StatusComponent,
            sim_nao_component_1.SimNaoComponent,
            auto_foco_directive_1.AutofocoDirective,
            number_only_directive_1.NumberOnlyDirective
        ]
    })
], SharedComponentModule);
exports.SharedComponentModule = SharedComponentModule;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/shared-component.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGE_KEYS = {
    localUser: "localUser",
    cart: "cursoSpringIonicCart"
};
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/storage-keys.config.js.map

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tipo_mensagem_enum_1 = __webpack_require__(136);
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
        array[tipo_mensagem_enum_1.TipoMensagemEnum.danger] = 'danger';
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/toater-mensagem.model.js.map

/***/ }),

/***/ 260:
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
var core_1 = __webpack_require__(2);
var angular2_toaster_1 = __webpack_require__(147);
var event_emitter_services_1 = __webpack_require__(133);
var AppComponent = (function () {
    function AppComponent(toasterService) {
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            tapToDismiss: true,
            newestOnTop: true,
            positionClass: 'toast-top-full-width',
            timeout: 2500
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
        template: __webpack_require__(454)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_toaster_1.ToasterService !== "undefined" && angular2_toaster_1.ToasterService) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/app.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(56);
var http_1 = __webpack_require__(57);
var platform_browser_1 = __webpack_require__(43);
var animations_1 = __webpack_require__(259);
var common_1 = __webpack_require__(28);
var auth_module_1 = __webpack_require__(143);
var app_component_1 = __webpack_require__(260);
var dropdown_1 = __webpack_require__(137);
var tabs_1 = __webpack_require__(444);
var nav_dropdown_directive_1 = __webpack_require__(273);
var ng2_charts_1 = __webpack_require__(255);
var sidebar_directive_1 = __webpack_require__(274);
var aside_directive_1 = __webpack_require__(269);
var angular2_toaster_1 = __webpack_require__(147);
var auth_guard_service_1 = __webpack_require__(146);
var storage_service_1 = __webpack_require__(58);
var auth_service_1 = __webpack_require__(48);
// Routing Module
var app_routing_1 = __webpack_require__(140);
//Layouts
var layout_module_1 = __webpack_require__(264);
var popup_modal_module_1 = __webpack_require__(135);
var error_interceptor_1 = __webpack_require__(285);
var auth_interceptor_1 = __webpack_require__(284);
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
            auth_module_1.AuthModule,
            popup_modal_module_1.PopupModalModule
            //5r4e3ewaszweszwsaz\CoreModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
            aside_directive_1.AsideToggleDirective
        ],
        providers: [{
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            },
            auth_guard_service_1.AuthGuard,
            auth_service_1.AuthService,
            storage_service_1.StorageService,
            auth_interceptor_1.AuthInterceptorProvider,
            error_interceptor_1.ErrorInterceptorProvider,
            { provide: core_1.LOCALE_ID, useValue: 'pt-BR' }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/app.module.js.map

/***/ }),

/***/ 262:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/footer.component.js.map

/***/ }),

/***/ 263:
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
var router_1 = __webpack_require__(42);
var core_1 = __webpack_require__(2);
var HeardSideBarComponent = (function () {
    function HeardSideBarComponent(router) {
        this.router = router;
        this.urlFotoPerfil = '/assets/img/noimage/noimagem.jpg';
    }
    HeardSideBarComponent.prototype.ngOnInit = function () {
    };
    return HeardSideBarComponent;
}());
HeardSideBarComponent = __decorate([
    core_1.Component({
        selector: 'heard-side-bar',
        template: __webpack_require__(456)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], HeardSideBarComponent);
exports.HeardSideBarComponent = HeardSideBarComponent;
var _a;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/heard-side-bar.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(28);
var http_1 = __webpack_require__(139);
var forms_1 = __webpack_require__(56);
var app_routing_1 = __webpack_require__(140);
var shared_component_module_1 = __webpack_require__(250);
var popup_modal_module_1 = __webpack_require__(135);
var dropdown_1 = __webpack_require__(137);
var aside_directive_1 = __webpack_require__(278);
var sidebar_directive_1 = __webpack_require__(282);
var nav_dropdown_directive_1 = __webpack_require__(280);
var breadcrumb_component_1 = __webpack_require__(270);
var footer_component_1 = __webpack_require__(262);
var menu_side_bar_component_1 = __webpack_require__(265);
var heard_side_bar_component_1 = __webpack_require__(263);
var up_side_bar_component_1 = __webpack_require__(266);
var full_layout_component_1 = __webpack_require__(141);
var simple_layout_component_1 = __webpack_require__(142);
var auth_service_1 = __webpack_require__(48);
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
            heard_side_bar_component_1.HeardSideBarComponent,
            menu_side_bar_component_1.MenuSideBarComponent,
            footer_component_1.FooterComponent
        ],
        providers: [
            auth_service_1.AuthService
        ]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/layout.module.js.map

/***/ }),

/***/ 265:
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
var core_1 = __webpack_require__(2);
var MenuSideBarComponent = (function () {
    function MenuSideBarComponent() {
    }
    MenuSideBarComponent.prototype.ngOnInit = function () {
    };
    return MenuSideBarComponent;
}());
MenuSideBarComponent = __decorate([
    core_1.Component({
        selector: 'menu-side-bar',
        template: __webpack_require__(457)
    }),
    __metadata("design:paramtypes", [])
], MenuSideBarComponent);
exports.MenuSideBarComponent = MenuSideBarComponent;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/menu-side-bar.component.js.map

/***/ }),

/***/ 266:
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
var router_1 = __webpack_require__(42);
var core_1 = __webpack_require__(2);
var auth_service_1 = __webpack_require__(48);
var UpSideBarComponent = (function () {
    function UpSideBarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UpSideBarComponent.prototype.ngOnInit = function () {
    };
    UpSideBarComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['auth/login']);
    };
    return UpSideBarComponent;
}());
UpSideBarComponent = __decorate([
    core_1.Component({
        selector: 'up-side-bar',
        template: __webpack_require__(458)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], UpSideBarComponent);
exports.UpSideBarComponent = UpSideBarComponent;
var _a, _b;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/up-side-bar.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = __webpack_require__(144);
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(42);
var register_component_1 = __webpack_require__(145);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/auth-routing.module.js.map

/***/ }),

/***/ 268:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/alert-mensagem.component.js.map

/***/ }),

/***/ 269:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/aside.directive.js.map

/***/ }),

/***/ 270:
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
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(42);
__webpack_require__(205);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/breadcrumb.component.js.map

/***/ }),

/***/ 271:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/form-debug.component.js.map

/***/ }),

/***/ 272:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/foto.component.js.map

/***/ }),

/***/ 273:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/nav-dropdown.directive.js.map

/***/ }),

/***/ 274:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/sidebar.directive.js.map

/***/ }),

/***/ 275:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/sim-nao.component.js.map

/***/ }),

/***/ 276:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/status.component.js.map

/***/ }),

/***/ 277:
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
var core_1 = __webpack_require__(2);
var UploadImagemComponent = (function () {
    function UploadImagemComponent() {
        this.onSelecionarImagem = new core_1.EventEmitter();
    }
    UploadImagemComponent.prototype.ngOnInit = function () { };
    UploadImagemComponent.prototype.selecionarImagem = function (input) {
        var _this = this;
        this.lerArquivo(input.files[0], new FileReader(), function (result) {
            var img = document.createElement("img");
            img.src = result;
            _this.redimensionarImagem(img, _this.largura, _this.altura, function (resized_jpeg) {
                _this.onSelecionarImagem.emit({ foto: resized_jpeg });
            });
        });
    };
    UploadImagemComponent.prototype.lerArquivo = function (file, reader, callback) {
        reader.onload = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };
    UploadImagemComponent.prototype.redimensionarImagem = function (img, MAX_WIDTH, MAX_HEIGHT, callback) {
        // This will wait until the img is loaded before calling this function
        return img.onload = function () {
            // Get the images current width and height
            var width = img.width;
            var height = img.height;
            // Set the WxH to fit the Max values (but maintain proportions)
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            // create a canvas object
            var canvas = document.createElement("canvas");
            // Set the canvas to the new calculated dimensions
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            // Get this encoded as a jpeg
            // IMPORTANT: 'jpeg' NOT 'jpg'
            var dataUrl = canvas.toDataURL('image/jpeg');
            // callback with the results
            callback(dataUrl);
        };
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
    core_1.Output(),
    __metadata("design:type", Object)
], UploadImagemComponent.prototype, "onSelecionarImagem", void 0);
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
UploadImagemComponent = __decorate([
    core_1.Component({
        selector: 'upload-imagem',
        template: "\n      <div>\n        <label for='selecao-arquivo' class=\"{{botaoCss}}\"  > <i class=\"{{botaoIcone}}\">  </i> {{botaoTitulo}}</label>\n        <input  id='selecao-arquivo'\n                type=\"file\"\n                (change)=\"selecionarImagem(input)\"\n                accept=\"image/x-png,image/gif,image/jpeg\"\n                #input\n                style='display:none' />\n      </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], UploadImagemComponent);
exports.UploadImagemComponent = UploadImagemComponent;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/upload-imagem.component.js.map

/***/ }),

/***/ 278:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/aside.directive.js.map

/***/ }),

/***/ 279:
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
var core_1 = __webpack_require__(2);
var AutofocoDirective = (function () {
    function AutofocoDirective(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
    }
    AutofocoDirective.prototype.ngOnInit = function () {
        if (this.isFocused) {
            this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus');
        }
    };
    return AutofocoDirective;
}());
__decorate([
    core_1.Input('autoFoco'),
    __metadata("design:type", Boolean)
], AutofocoDirective.prototype, "isFocused", void 0);
AutofocoDirective = __decorate([
    core_1.Directive({ selector: '[autoFoco]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], AutofocoDirective);
exports.AutofocoDirective = AutofocoDirective;
var _a, _b;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/auto-foco.directive.js.map

/***/ }),

/***/ 280:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/nav-dropdown.directive.js.map

/***/ }),

/***/ 281:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/number-only.directive.js.map

/***/ }),

/***/ 282:
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
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/sidebar.directive.js.map

/***/ }),

/***/ 283:
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
var core_1 = __webpack_require__(2);
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
], ConfirmPopupModalComponent.prototype, "popupStyle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ConfirmPopupModalComponent.prototype, "onClickConfirm", void 0);
ConfirmPopupModalComponent = __decorate([
    core_1.Component({
        selector: 'confirm-popup-modal',
        styles: [__webpack_require__(439)],
        template: __webpack_require__(461)
    }),
    __metadata("design:paramtypes", [])
], ConfirmPopupModalComponent);
exports.ConfirmPopupModalComponent = ConfirmPopupModalComponent;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/confirm-popup-modal.component.js.map

/***/ }),

/***/ 284:
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
var api_config_1 = __webpack_require__(134);
var storage_service_1 = __webpack_require__(58);
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(57);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/auth-interceptor.js.map

/***/ }),

/***/ 285:
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
var storage_service_1 = __webpack_require__(58);
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(57);
var Rx_1 = __webpack_require__(463); // IMPORTANTE: IMPORT ATUALIZADO
var ErrorInterceptor = (function () {
    function ErrorInterceptor(storage) {
        this.storage = storage;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        //console.log('passando pelo interceptor de erros', req)
        return next.handle(req)
            .catch(function (error, caught) {
            var errorObj = error;
            //console.log(errorObj);
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
                    _this.handle403();
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
    ErrorInterceptor.prototype.handle403 = function () {
        this.storage.setLocalUser(null);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/error-interceptor.js.map

/***/ }),

/***/ 286:
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/environment.js.map

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)();
// imports


// module
exports.push([module.i, ".modal-dialog {\n  padding-top: 10%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)();
// imports


// module
exports.push([module.i, ".breadcrumb {\r\n    position: relative;\r\n    margin-bottom: 1.5rem;\r\n    border-bottom: 1px solid #333;\r\n}\r\n.app-footer {\r\n   margin-left: 200px;\r\n   border-top: 1px solid #333;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n"

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports = "<up-side-bar>\r\n</up-side-bar>\r\n<div class=\"app-body\">\r\n    <div class=\"sidebar\">\r\n        <heard-side-bar></heard-side-bar>\r\n        <nav class=\"sidebar-nav\">\r\n            <menu-side-bar></menu-side-bar>\r\n        </nav>\r\n    </div>\r\n\r\n    <!-- Main content -->\r\n    <main class=\"main\">\r\n\r\n        <!-- Breadcrumb -->\r\n        <ol class=\"breadcrumb\">\r\n            <breadcrumbs></breadcrumbs>\r\n        </ol>\r\n        <div class=\"container-fluid\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <!-- /.conainer-fluid -->\r\n    </main>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-header\">\n  <foto\n    src=\"{{urlFotoPerfil}}\"\n    classCss=\"img-avatar\"\n    alt=\"Avatar\"\n    ></foto>\n  <div><strong> DANIEL AGUIAR</strong></div>\n  <div class=\"text-muted\"><small> CEO</small></div>\n</div>\n"

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav\">\n    <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <i class=\"icon-speedometer\"></i>Dashboard\n          </a>\n      </li>\n          <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n            <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-puzzle\"></i>Cadastro</a>\n              <ul class=\"nav-dropdown-items\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/usuarios/listar']\"><i class=\"icon-puzzle\"></i>Usuário</a>\n                  <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/categorias/listar']\"><i class=\"icon-puzzle\"></i>Categorias</a>\n                  <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/produtos/listar']\"><i class=\"icon-puzzle\"></i>Produtos</a>\n              </li>\n\n          </ul>\n        </li>\n        <li class=\"divider\"></li>\n        \n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Configurações</a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/unidademedida/listar']\"><i class=\"icon-puzzle\"></i>Unidade medida</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"divider\"></li>\n        \n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Auth Pages</a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/auth/login']\"><i class=\"icon-star\"></i> Login</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/auth/register']\"><i class=\"icon-star\"></i> Register</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"divider\"></li>\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Erros Pages</a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/error/404']\"><i class=\"icon-star\"></i> Error 404</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/error/500']\"><i class=\"icon-star\"></i> Error 500</a>\n            </li>\n          </ul>\n        </li>\n\n\n\n</ul>\n"

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n    <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\">&#9776;</button>\n\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <ul class=\"nav navbar-nav hidden-md-down\">\n      <li class=\"nav-item\">\n            <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">&#9776;</a>\n          </li>\n          <li class=\"nav-item px-1\">\n            <a class=\"nav-link\" href=\"#\">Dashboard</a>\n          </li>\n    </ul>\n\n<ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item dropdown hidden-md-down\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\n        <i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span>\n      </a>\n\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n        <div class=\"dropdown-header text-center\"><strong>You have 5 notifications</strong></div>\n\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-user-follow text-success\"></i> New user registered\n        </a>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-user-unfollow text-danger\"></i> User deleted\n        </a>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-chart text-info\"></i> Sales report is ready\n        </a>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-basket-loaded text-primary\"></i> New client\n        </a>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-speedometer text-warning\"></i> Server overloaded\n        </a>\n\n      </div>\n    </li>\n\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\n        <a class=\"nav-link navbar-toggler aside-menu-toggler\" href=\"#\">&#9776;</a>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n        <div class=\"dropdown-header text-center\"><strong>Contas</strong></div>\n\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Atualizações<span class=\"badge badge-info\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Mensagens<span class=\"badge badge-success\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tarefas<span class=\"badge badge-danger\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comentários<span class=\"badge badge-warning\">42</span></a>\n\n        <div class=\"dropdown-header text-center\"><strong>Configurações</strong></div>\n\n        <a class=\"dropdown-item\" [routerLink]=\"['/usuarios/perfil/', uid]\" ><i class=\"fa fa-user\"></i> Perfil</a>\n        <a class=\"dropdown-item\" [routerLink]=\"['/usuarios/alterarsenha/', uid]\" ><i class=\"fa fa-wrench\"></i> Alterar senha</a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Sair</a>\n      </div>\n    </li>\n  </ul>\n\n</header>\n"

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-4\">\n        <div class=\"card-group mb-0\">\n          <div class=\"card p-2\">\n            <form>\n                <div class=\"card-block\">\n                  <h1>Login</h1>\n                      <p class=\"text-muted\">Entrar na sua conta</p>\n                      <div class=\"input-group mb-1\">\n                        <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"login\"  [(ngModel)]=\"creds.login\" name=\"login\" >\n                      </div>\n                      <div class=\"input-group mb-2\">\n                        <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                        <input type=\"password\" class=\"form-control\" placeholder=\"senha\"  [(ngModel)]=\"creds.senha\" name = \"senha\">\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <button type=\"button\" class=\"btn btn-primary px-2\" (click)=\"login()\">Login</button>\n                        </div>\n                        <div class=\"col-6 text-right\">\n                          <button type=\"button\" class=\"btn btn-link px-0\">Esqueceu a senha?</button>\n                        </div>\n                      </div>\n                </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card mx-2\">\n          <div class=\"card-block p-2\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n\n            <div class=\"input-group mb-2\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\n            </div>\n\n            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n          </div>\n          <div class=\"card-footer p-2\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalConfirm=\"bs-modal\" id='modalConfirm' class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" \r\n        [ngClass]=\"getPopupStyle()\" \r\n        role=\"document\">\r\n\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{titulo}}</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"modalConfirm.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalConfirm.hide()\">Fechar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\"   (click)=\"btnConfirmar()\">Confirmar</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->"

/***/ }),

/***/ 48:
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
var http_1 = __webpack_require__(57);
var core_1 = __webpack_require__(2);
var api_config_1 = __webpack_require__(134);
var storage_service_1 = __webpack_require__(58);
var angular2_jwt_1 = __webpack_require__(287);
var AuthService = (function () {
    function AuthService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
    }
    AuthService.prototype.authenticate = function (creds) {
        return this.http.post(api_config_1.API_CONFIG.baseUrl + "/login", creds, { observe: 'response', responseType: 'text' });
    };
    AuthService.prototype.refreshToken = function () {
        return this.http.post(api_config_1.API_CONFIG.baseUrl + "/auth/refresh_token", {}, { observe: 'response', responseType: 'text' });
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
    AuthService.prototype.logout = function () {
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
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object, typeof (_b = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _b || Object])
], AuthService);
exports.AuthService = AuthService;
var _a, _b;
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/auth.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var storage_keys_config_1 = __webpack_require__(251);
var core_1 = __webpack_require__(2);
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
//# sourceMappingURL=e:/paladar-fit/frontend-web/src/storage.service.js.map

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(245);


/***/ })

},[725]);
//# sourceMappingURL=main.bundle.js.map