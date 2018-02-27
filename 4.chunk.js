webpackJsonp([4,12],{

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var modal_1 = __webpack_require__(254);
var storage_service_1 = __webpack_require__(59);
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(28);
var forms_1 = __webpack_require__(48);
var http_1 = __webpack_require__(57);
var popup_modal_module_1 = __webpack_require__(253);
var categoria_service_1 = __webpack_require__(752);
var shared_component_module_1 = __webpack_require__(135);
var categoria_routing_module_1 = __webpack_require__(787);
var listar_categoria_component_1 = __webpack_require__(772);
var categoria_popup_modal_component_1 = __webpack_require__(788);
var CategoriaModule = (function () {
    function CategoriaModule() {
    }
    return CategoriaModule;
}());
CategoriaModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            modal_1.ModalModule.forRoot(),
            shared_component_module_1.SharedComponentModule,
            forms_1.ReactiveFormsModule,
            popup_modal_module_1.PopupModalModule,
            http_1.HttpClientModule,
            categoria_routing_module_1.CategoriaRoutingModule
        ],
        declarations: [
            listar_categoria_component_1.ListarCategoriaComponent,
            categoria_popup_modal_component_1.CategoriaPopupModalComponent
        ],
        providers: [
            categoria_service_1.CategoriaService,
            storage_service_1.StorageService
        ]
    })
], CategoriaModule);
exports.CategoriaModule = CategoriaModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/categoria.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_emitter_services_1 = __webpack_require__(72);
var combo_dto_1 = __webpack_require__(751);
var AbstractBaseComponent = (function () {
    function AbstractBaseComponent() {
        this.maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskCNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskCEP = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.maskFoneResidencial = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskFoneCelular = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskData = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.urlFotoAvatar = 'assets/img/noimage/prod.jpg';
        this.urlClienteAvatar = 'assets/img/noimage/noimagem.jpg';
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
    AbstractBaseComponent.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        //console.log(message, optionalParams)
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
    return AbstractBaseComponent;
}());
exports.AbstractBaseComponent = AbstractBaseComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/abstract-base.component.js.map

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var storage_keys_config_1 = __webpack_require__(136);
var http_1 = __webpack_require__(57);
var AbstractService = (function () {
    function AbstractService() {
    }
    AbstractService.prototype.getHearderToken = function () {
        var token = this.getToken().token;
        var authHeader = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }) };
        return authHeader;
    };
    AbstractService.prototype.getHearderTokenNoResponse = function () {
        var token = this.getToken().token;
        var authHeader = {
            observe: 'response',
            responseType: 'text',
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token })
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

/***/ 750:
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
var trata_error_service_1 = __webpack_require__(252);
var abstract_base_component_1 = __webpack_require__(748);
var core_1 = __webpack_require__(2);
var event_emitter_services_1 = __webpack_require__(72);
var AbstractPopupComponent = (function (_super) {
    __extends(AbstractPopupComponent, _super);
    function AbstractPopupComponent() {
        var _this = _super.call(this) || this;
        _this.onClickConfirm = new core_1.EventEmitter();
        _this.titulo = "";
        return _this;
    }
    AbstractPopupComponent.prototype.ngOnInit = function () {
    };
    AbstractPopupComponent.prototype.tratarSucesso = function () {
        event_emitter_services_1.EventEmitterService.getClosePopup().emit(true);
        this.onClickConfirm.emit();
    };
    AbstractPopupComponent.prototype.showPopup = function (titulo) {
        event_emitter_services_1.EventEmitterService.getError422().emit(null);
        event_emitter_services_1.EventEmitterService.getShowPopup().emit();
        this.titulo = titulo;
        this.fieldFocus(this.campo);
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

/***/ 751:
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

/***/ 752:
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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(57);
var api_config_1 = __webpack_require__(134);
var abstract_service_1 = __webpack_require__(749);
//import { catchError, retry } from 'rxjs/operators';
var CategoriaService = (function (_super) {
    __extends(CategoriaService, _super);
    function CategoriaService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CategoriaService.prototype.findById = function (id) {
        return this.http.get(api_config_1.API_CONFIG.baseUrl + "/categorias/" + id, this.getHearderToken());
    };
    CategoriaService.prototype.findAll = function () {
        return this.http.get(api_config_1.API_CONFIG.baseUrl + "/categorias/all");
    };
    CategoriaService.prototype.salvar = function (categoria) {
        return this.http.post(api_config_1.API_CONFIG.baseUrl + "/categorias", JSON.stringify(categoria), this.getHearderTokenNoResponse());
    };
    CategoriaService.prototype.changeStatus = function (categoria) {
        return this.http.put(api_config_1.API_CONFIG.baseUrl + "/categorias/" + categoria.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    CategoriaService.prototype.atualizar = function (categoria) {
        return this.http.put(api_config_1.API_CONFIG.baseUrl + "/categorias/" + categoria.id, JSON.stringify(categoria), this.getHearderTokenNoResponse());
    };
    CategoriaService.prototype.excluir = function (categoria) {
        var url = api_config_1.API_CONFIG.baseUrl + "/categorias/" + categoria.id;
        return this.http.delete(url, this.getHearderToken());
    };
    CategoriaService.prototype.insert = function (obj) {
        return this.http.post(api_config_1.API_CONFIG.baseUrl + "/pedidos", obj, { observe: 'response', responseType: 'text' });
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

/***/ 772:
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
var trata_error_service_1 = __webpack_require__(252);
var event_emitter_services_1 = __webpack_require__(72);
var core_1 = __webpack_require__(2);
var api_config_1 = __webpack_require__(134);
var categoria_service_1 = __webpack_require__(752);
var abstract_base_component_1 = __webpack_require__(748);
var router_1 = __webpack_require__(42);
var ListarCategoriaComponent = (function (_super) {
    __extends(ListarCategoriaComponent, _super);
    function ListarCategoriaComponent(categoriaService, router) {
        var _this = _super.call(this) || this;
        _this.categoriaService = categoriaService;
        _this.router = router;
        _this.urlFotoCategoria = api_config_1.API_CONFIG.bucketBaseUrl + "/categorias/cat";
        return _this;
    }
    ListarCategoriaComponent.prototype.ngOnInit = function () {
        this.carregarTodos();
    };
    ListarCategoriaComponent.prototype.selecionarItem = function (item) {
        this.item = item;
        this.popupExclusao.show();
    };
    ListarCategoriaComponent.prototype.selecionarItemChangeStatus = function (item) {
        this.item = item;
        this.popupChangeStatus.show();
    };
    ListarCategoriaComponent.prototype.changeStatus = function () {
        var _this = this;
        this.categoriaService.changeStatus(this.item)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Categorias', 'Status da categoria alterado com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarCategoriaComponent.prototype.excluir = function () {
        var _this = this;
        this.categoriaService.excluir(this.item)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Categorias', 'Categoria excluída com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarCategoriaComponent.prototype.carregarTodos = function () {
        var _this = this;
        this.categoriaService.findAll().subscribe(function (response) { return _this.items = response; }, function (error) { });
    };
    return ListarCategoriaComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('excluirModal'),
    __metadata("design:type", Object)
], ListarCategoriaComponent.prototype, "popupExclusao", void 0);
__decorate([
    core_1.ViewChild('changeSatusModal'),
    __metadata("design:type", Object)
], ListarCategoriaComponent.prototype, "popupChangeStatus", void 0);
ListarCategoriaComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(824),
        styles: [__webpack_require__(800)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof categoria_service_1.CategoriaService !== "undefined" && categoria_service_1.CategoriaService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ListarCategoriaComponent);
exports.ListarCategoriaComponent = ListarCategoriaComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-categoria.component.js.map

/***/ }),

/***/ 787:
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
var router_1 = __webpack_require__(42);
var listar_categoria_component_1 = __webpack_require__(772);
var routes = [
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
    },
    {
        path: '',
        data: {
            title: 'Categorias'
        },
        children: [
            {
                path: 'listar',
                component: listar_categoria_component_1.ListarCategoriaComponent,
                data: {
                    title: 'Listar'
                }
            }
        ]
    }
];
var CategoriaRoutingModule = (function () {
    function CategoriaRoutingModule() {
    }
    return CategoriaRoutingModule;
}());
CategoriaRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], CategoriaRoutingModule);
exports.CategoriaRoutingModule = CategoriaRoutingModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/categoria-routing.module.js.map

/***/ }),

/***/ 788:
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
var categoria_service_1 = __webpack_require__(752);
var forms_1 = __webpack_require__(48);
var core_1 = __webpack_require__(2);
var abstract_popup_component_1 = __webpack_require__(750);
var CategoriaPopupModalComponent = (function (_super) {
    __extends(CategoriaPopupModalComponent, _super);
    function CategoriaPopupModalComponent(categoriaService, fb) {
        var _this = _super.call(this) || this;
        _this.categoriaService = categoriaService;
        _this.fb = fb;
        return _this;
    }
    CategoriaPopupModalComponent.prototype.ngOnInit = function () {
        this.criarForm();
    };
    CategoriaPopupModalComponent.prototype.show = function () {
        this.criarForm();
        this.showPopup("Cadastra categoria");
    };
    CategoriaPopupModalComponent.prototype.showAlteracao = function (item) {
        this.alterarForm(item);
        this.showPopup("Alterar categoria");
    };
    CategoriaPopupModalComponent.prototype.btnConfirmar = function (categoria) {
        this.acao(categoria, this.categoriaService);
    };
    CategoriaPopupModalComponent.prototype.mudarImage = function (evento) {
        this.atualizarFoto(evento.foto);
    };
    CategoriaPopupModalComponent.prototype.alterarForm = function (categoria) {
        this.formulario = this.fb.group({
            id: [categoria.id],
            nome: [categoria.nome, [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(25)]],
            status: [categoria.status],
            comentario: [categoria.comentario],
            urlImagem: [categoria.urlImagem],
            emAlteracao: [true]
        });
        this.urlFoto = categoria.urlImagem;
    };
    CategoriaPopupModalComponent.prototype.criarForm = function () {
        this.formulario = this.fb.group({
            id: [],
            nome: ['', forms_1.Validators.required],
            status: ['A'],
            comentario: [''],
            foto: [''],
            emAlteracao: [false]
        });
        this.urlFoto = this.urlFotoAvatar;
    };
    CategoriaPopupModalComponent.prototype.atualizarFoto = function (foto) {
        this.urlFoto = foto;
    };
    return CategoriaPopupModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
CategoriaPopupModalComponent = __decorate([
    core_1.Component({
        selector: 'categoria-popup-modal',
        template: __webpack_require__(825),
        styles: [__webpack_require__(801)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof categoria_service_1.CategoriaService !== "undefined" && categoria_service_1.CategoriaService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], CategoriaPopupModalComponent);
exports.CategoriaPopupModalComponent = CategoriaPopupModalComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/categoria-popup-modal.component.js.map

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"categoriaModal.show()\">\r\n    <i class=\"icon-plus\"></i> Novo</button>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de categorias\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 10%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th style=\"width: 40%\">Categorias</th>\r\n                    <th class=\"text-center\" style=\"width: 25%\">Situação</th>\r\n                    <th class=\"text-center\" style=\"width: 25%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td class=\"text-center\">\r\n                        <div class=\"avatar\">\r\n                            <foto src=\"{{urlFotoCategoria}}{{item.id}}.jpg\" classCss=\"img-avatar\" alt=\"Avatar\"></foto>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div>{{item.nome}}</div>\r\n                        <div class=\"small text-muted\">\r\n                            {{item.comentario}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <status status={{item.status}}></status>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"cursor:pointer\" (click)=\"categoriaModal.showAlteracao(item)\">\r\n                            <i class=\"fa fa fa-edit\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"cursor:pointer\" (click)=\"selecionarItem(item)\">\r\n                            <i class=\"fa fa-eraser\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-warning\" style=\"cursor:pointer\" (click)=\"selecionarItemChangeStatus(item)\">\r\n                            <i class=\"fa fa-exclamation\"> </i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<confirm-popup-modal #excluirModal popupStyle=\"primary\" (onClickConfirm)=\"excluir()\">\r\n    <strong>Deseja excluir a categoria?</strong>\r\n</confirm-popup-modal>\r\n\r\n<confirm-popup-modal #changeSatusModal popupStyle=\"primary\" (onClickConfirm)=\"changeStatus()\">\r\n    <strong>Deseja alterar o status da categoria?</strong>\r\n</confirm-popup-modal>\r\n\r\n\r\n<categoria-popup-modal #categoriaModal (onClickConfirm)=\"carregarTodos()\"></categoria-popup-modal>"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<base-popup-modal #modalConfirm [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formulario.value)\" [desabilitarBtnConfirmar]=\"!formulario.valid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Imagem da categoria</strong>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n            (onSelecionarImagem)=\"mudarImage($event)\">\r\n          </upload-imagem>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-md-8 col-sm-8\">\r\n      <form [formGroup]=\"formulario\" novalidade (ngSubmit)=\"confirmar()\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Descrição</strong>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <div [ngClass]=\"aplicarCssGroup(formulario.get('nome'))\">\r\n              <label for=\"nome\">Nome da categoria</label>\r\n              <input #campoNome type=\"text\" [ngClass]=\"aplicarCssForm(formulario.get('nome'))\" name=\"nome\" maxlength=\"25\" placeholder=\"Digite o nome da categoria\"\r\n                formControlName=\"nome\">\r\n              <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nome'))\" titulo=\"Erro:\" mensagem=\"o campo Nome da categoria deve ter entre 5 a 25 caracteres\">\r\n              </alert-mensagem>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"comentario\">Descrição da categoria</label>\r\n              <textarea type=\"textarea\" maxlength=\"100\" rows=\"7\" [ngClass]=\"aplicarCssForm(formulario.get('comentario'))\" name=\"comentario\"\r\n                placeholder=\"Digite o texto descritivo da categoria\" formControlName=\"comentario\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</base-popup-modal>"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map