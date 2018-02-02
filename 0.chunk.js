webpackJsonp([0,9],{

/***/ 728:
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
var forms_1 = __webpack_require__(70);
var http_1 = __webpack_require__(56);
var popup_modal_module_1 = __webpack_require__(136);
var produtos_service_1 = __webpack_require__(742);
var categoria_service_1 = __webpack_require__(729);
var shared_component_module_1 = __webpack_require__(249);
var produtos_routing_module_1 = __webpack_require__(746);
var listar_produtos_component_1 = __webpack_require__(741);
var create_produtos_component_1 = __webpack_require__(739);
var edit_produtos_component_1 = __webpack_require__(740);
var storage_service_1 = __webpack_require__(57);
var ProdutosModule = (function () {
    function ProdutosModule() {
    }
    return ProdutosModule;
}());
ProdutosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            shared_component_module_1.SharedComponentModule,
            forms_1.ReactiveFormsModule,
            popup_modal_module_1.PopupModalModule,
            http_1.HttpClientModule,
            produtos_routing_module_1.ProdutosRoutingModule
        ],
        declarations: [
            listar_produtos_component_1.ListarProdutosComponent,
            create_produtos_component_1.CreateProdutosComponent,
            edit_produtos_component_1.EditProdutosComponent
        ],
        providers: [
            produtos_service_1.ProdutosService,
            categoria_service_1.CategoriasService,
            storage_service_1.StorageService,
            { provide: core_1.LOCALE_ID, useValue: 'pt-BR' }
        ]
    })
], ProdutosModule);
exports.ProdutosModule = ProdutosModule;
//# sourceMappingURL=E:/paladar-fit/web2/src/produtos.module.js.map

/***/ }),

/***/ 729:
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
var http_1 = __webpack_require__(56);
var api_config_1 = __webpack_require__(135);
var abstract_service_1 = __webpack_require__(731);
//import { catchError, retry } from 'rxjs/operators';
var CategoriasService = (function (_super) {
    __extends(CategoriasService, _super);
    function CategoriasService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CategoriasService.prototype.findById = function (id) {
        return this.http.get(api_config_1.API_CONFIG.baseUrl + "/categorias/" + id, this.getHearderToken());
    };
    CategoriasService.prototype.findAll = function () {
        return this.http.get(api_config_1.API_CONFIG.baseUrl + "/categorias/all");
    };
    CategoriasService.prototype.savar = function (categoria) {
        return this.http.post(api_config_1.API_CONFIG.baseUrl + "/categorias", JSON.stringify(categoria), this.getHearderTokenNoResponse());
    };
    CategoriasService.prototype.changeStatus = function (categoria) {
        return this.http.put(api_config_1.API_CONFIG.baseUrl + "/categorias/" + categoria.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    CategoriasService.prototype.atualizar = function (categoria) {
        return this.http.put(api_config_1.API_CONFIG.baseUrl + "/categorias/" + categoria.id, JSON.stringify(categoria), this.getHearderTokenNoResponse());
    };
    CategoriasService.prototype.excluir = function (categoria) {
        var url = api_config_1.API_CONFIG.baseUrl + "/categorias/" + categoria.id;
        return this.http.delete(url, this.getHearderToken());
    };
    CategoriasService.prototype.insert = function (obj) {
        return this.http.post(api_config_1.API_CONFIG.baseUrl + "/pedidos", obj, { observe: 'response', responseType: 'text' });
    };
    return CategoriasService;
}(abstract_service_1.AbstractService));
CategoriasService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], CategoriasService);
exports.CategoriasService = CategoriasService;
var _a;
//# sourceMappingURL=E:/paladar-fit/web2/src/categoria.service.js.map

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_emiter_services_1 = __webpack_require__(732);
var AbstractBaseComponent = (function () {
    function AbstractBaseComponent() {
        this.maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskCNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskCEP = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.maskFoneResidencial = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskFoneCelular = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.urlFoto = 'assets/img/noimage/prod.jpg';
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
        event_emiter_services_1.EventEmitterService
            .emitirMensagemToasterSucesso(titulo, mensagem);
    };
    AbstractBaseComponent.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        //console.log(message, optionalParams)
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
    return AbstractBaseComponent;
}());
exports.AbstractBaseComponent = AbstractBaseComponent;
//# sourceMappingURL=E:/paladar-fit/web2/src/abstract-base.component.js.map

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var storage_keys_config_1 = __webpack_require__(250);
var http_1 = __webpack_require__(56);
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
//# sourceMappingURL=E:/paladar-fit/web2/src/abstract-service.js.map

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var toater_mensagem_model_1 = __webpack_require__(251);
var tipo_mensagem_enum_1 = __webpack_require__(137);
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
    EventEmitterService.emitirMensagemToasterInfo = function (titulo, mensagem) {
        var tm = new toater_mensagem_model_1.ToasterMensagem(tipo_mensagem_enum_1.TipoMensagemEnum.warning, titulo, mensagem);
        return this.get('showToasterEvent').emit(tm);
    };
    return EventEmitterService;
}());
EventEmitterService.emitters = {};
exports.EventEmitterService = EventEmitterService;
//# sourceMappingURL=E:/paladar-fit/web2/src/event-emiter.services.js.map

/***/ }),

/***/ 739:
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
var categoria_service_1 = __webpack_require__(729);
var event_emitter_services_1 = __webpack_require__(134);
var forms_1 = __webpack_require__(70);
var core_1 = __webpack_require__(2);
var abstract_base_component_1 = __webpack_require__(730);
var router_1 = __webpack_require__(38);
var common_1 = __webpack_require__(28);
var CreateProdutosComponent = (function (_super) {
    __extends(CreateProdutosComponent, _super);
    function CreateProdutosComponent(fb, location, CategoriasService, router) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.location = location;
        _this.CategoriasService = CategoriasService;
        _this.router = router;
        return _this;
    }
    CreateProdutosComponent.prototype.ngOnInit = function () {
        this.criarFormulario();
    };
    CreateProdutosComponent.prototype.confirmar = function () {
        var _this = this;
        this.formulario.patchValue({
            urlImagem: this.urlFoto
        });
        this.CategoriasService.savar(this.formulario.value)
            .subscribe(function (response) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Categorias', 'Categoria incluída com sucesso!!!');
            _this.router.navigate(['/categorias/listar']);
        }, function (error) {
            console.log('error de validação:', error.error);
        });
    };
    CreateProdutosComponent.prototype.voltar = function () {
        this.location.back();
    };
    CreateProdutosComponent.prototype.mudarImage = function (evento) {
        this.atualizarFoto(evento.foto);
    };
    CreateProdutosComponent.prototype.atualizarFoto = function (foto) {
        this.urlFoto = foto;
    };
    CreateProdutosComponent.prototype.criarFormulario = function () {
        this.formulario = this.fb.group({
            id: [],
            nome: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(25)]],
            status: ['A'],
            comentario: [''],
            urlImagem: ['']
        });
    };
    return CreateProdutosComponent;
}(abstract_base_component_1.AbstractBaseComponent));
CreateProdutosComponent = __decorate([
    core_1.Component({
        selector: 'app-create-catetorias',
        template: __webpack_require__(759),
        styles: [__webpack_require__(750)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof categoria_service_1.CategoriasService !== "undefined" && categoria_service_1.CategoriasService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], CreateProdutosComponent);
exports.CreateProdutosComponent = CreateProdutosComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=E:/paladar-fit/web2/src/create-produtos.component.js.map

/***/ }),

/***/ 740:
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
var categoria_service_1 = __webpack_require__(729);
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(38);
var forms_1 = __webpack_require__(70);
var common_1 = __webpack_require__(28);
var abstract_base_component_1 = __webpack_require__(730);
var event_emitter_services_1 = __webpack_require__(134);
var EditProdutosComponent = (function (_super) {
    __extends(EditProdutosComponent, _super);
    function EditProdutosComponent(fb, route, location, CategoriasService, router) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.route = route;
        _this.location = location;
        _this.CategoriasService = CategoriasService;
        _this.router = router;
        return _this;
    }
    EditProdutosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.criarFormulario();
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.CategoriasService.findById(id)
                .subscribe(function (resp) {
                var cat = resp;
                _this.editFormulario(cat);
            }, function (errors) { return console.log(errors.error); });
        });
    };
    EditProdutosComponent.prototype.confirmar = function () {
        var _this = this;
        this.formulario.patchValue({
            urlImagem: this.urlFoto
        });
        console.log(this.formulario.value);
        this.CategoriasService.atualizar(this.formulario.value)
            .subscribe(function (response) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Categorias', 'Categoria alterada com sucesso!!!');
            _this.router.navigate(['/categorias/listar']);
        }, function (error) {
            console.log(error);
        });
    };
    EditProdutosComponent.prototype.voltar = function () {
        this.location.back();
    };
    EditProdutosComponent.prototype.mudarImage = function (evento) {
        this.atualizarFoto(evento.foto);
    };
    EditProdutosComponent.prototype.atualizarFoto = function (foto) {
        this.urlFoto = foto;
    };
    EditProdutosComponent.prototype.criarFormulario = function () {
        this.formulario = this.fb.group({
            id: [],
            nome: ['', forms_1.Validators.required],
            status: ['A'],
            comentario: [''],
            foto: ['']
        });
    };
    EditProdutosComponent.prototype.editFormulario = function (categoria) {
        this.formulario = this.fb.group({
            id: [categoria.id],
            nome: [categoria.nome, [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(25)]],
            status: [categoria.status],
            comentario: [categoria.comentario],
            urlImagem: [categoria.urlImagem]
        });
        console.log('alterado', categoria);
        this.urlFoto = categoria.urlImagem;
    };
    return EditProdutosComponent;
}(abstract_base_component_1.AbstractBaseComponent));
EditProdutosComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(760),
        styles: [__webpack_require__(751)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, typeof (_d = typeof categoria_service_1.CategoriasService !== "undefined" && categoria_service_1.CategoriasService) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object])
], EditProdutosComponent);
exports.EditProdutosComponent = EditProdutosComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=E:/paladar-fit/web2/src/edit-produtos.component.js.map

/***/ }),

/***/ 741:
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
var event_emitter_services_1 = __webpack_require__(134);
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(38);
var api_config_1 = __webpack_require__(135);
var produtos_service_1 = __webpack_require__(742);
var abstract_base_component_1 = __webpack_require__(730);
var ListarProdutosComponent = (function (_super) {
    __extends(ListarProdutosComponent, _super);
    function ListarProdutosComponent(produtosService, router) {
        var _this = _super.call(this) || this;
        _this.produtosService = produtosService;
        _this.router = router;
        _this.bucketUrl = api_config_1.API_CONFIG.bucketBaseUrl;
        return _this;
    }
    ListarProdutosComponent.prototype.ngOnInit = function () {
        this.carregarProdutos();
    };
    ListarProdutosComponent.prototype.selecionarItem = function (item) {
        this.produto = item;
        this.popupExclusao.show();
    };
    ListarProdutosComponent.prototype.selecionarItemChangeStatus = function (item) {
        this.produto = item;
        this.popupChangeStatus.show();
    };
    ListarProdutosComponent.prototype.changeStatus = function () {
        var _this = this;
        this.produtosService.changeStatus(this.produto)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Produtos', 'Status do produto alterado com sucesso!!!');
            _this.carregarProdutos();
        }, function (error) { });
    };
    ListarProdutosComponent.prototype.excluirCategoria = function () {
        var _this = this;
        this.produtosService.excluir(this.produto)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Produtos', 'Produto excluído com sucesso!!!');
            _this.carregarProdutos();
        }, function (error) { });
    };
    ListarProdutosComponent.prototype.alterarproduto = function (produto) {
        this.router.navigate(["produtos/editar/" + produto.id]);
    };
    ListarProdutosComponent.prototype.carregarProdutos = function () {
        var _this = this;
        this.produtosService.findAll().subscribe(function (response) {
            _this.items = response;
            console.log('produtos', response);
        }, function (error) { });
    };
    return ListarProdutosComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('ExcluirProdutoModal'),
    __metadata("design:type", Object)
], ListarProdutosComponent.prototype, "popupExclusao", void 0);
__decorate([
    core_1.ViewChild('ChangeSatusProdutoModal'),
    __metadata("design:type", Object)
], ListarProdutosComponent.prototype, "popupChangeStatus", void 0);
ListarProdutosComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(761),
        styles: [__webpack_require__(752)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof produtos_service_1.ProdutosService !== "undefined" && produtos_service_1.ProdutosService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ListarProdutosComponent);
exports.ListarProdutosComponent = ListarProdutosComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/web2/src/listar-produtos.component.js.map

/***/ }),

/***/ 742:
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
var http_1 = __webpack_require__(56);
var api_config_1 = __webpack_require__(135);
var abstract_service_1 = __webpack_require__(731);
//import { catchError, retry } from 'rxjs/operators';
var ProdutosService = (function (_super) {
    __extends(ProdutosService, _super);
    function ProdutosService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    ProdutosService.prototype.findById = function (id) {
        return this.http.get(api_config_1.API_CONFIG.baseUrl + "/produtos/" + id, this.getHearderToken());
    };
    ProdutosService.prototype.findAll = function () {
        return this.http.get(api_config_1.API_CONFIG.baseUrl + "/produtos/");
    };
    ProdutosService.prototype.savar = function (produto) {
        return this.http.post(api_config_1.API_CONFIG.baseUrl + "/produtos", JSON.stringify(produto), this.getHearderTokenNoResponse());
    };
    ProdutosService.prototype.changeStatus = function (produto) {
        return this.http.put(api_config_1.API_CONFIG.baseUrl + "/produtos/" + produto.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    ProdutosService.prototype.atualizar = function (produto) {
        return this.http.put(api_config_1.API_CONFIG.baseUrl + "/produtos/" + produto.id, JSON.stringify(produto), this.getHearderTokenNoResponse());
    };
    ProdutosService.prototype.excluir = function (produto) {
        var url = api_config_1.API_CONFIG.baseUrl + "/produtos/" + produto.id;
        return this.http.delete(url, this.getHearderToken());
    };
    return ProdutosService;
}(abstract_service_1.AbstractService));
ProdutosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], ProdutosService);
exports.ProdutosService = ProdutosService;
var _a;
//# sourceMappingURL=E:/paladar-fit/web2/src/produtos.service.js.map

/***/ }),

/***/ 746:
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
var router_1 = __webpack_require__(38);
var create_produtos_component_1 = __webpack_require__(739);
var listar_produtos_component_1 = __webpack_require__(741);
var edit_produtos_component_1 = __webpack_require__(740);
var routes = [
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
    },
    {
        path: '',
        data: {
            title: 'Produtos'
        },
        children: [
            {
                path: 'listar',
                component: listar_produtos_component_1.ListarProdutosComponent,
                data: {
                    title: 'Listar'
                }
            },
            {
                path: 'novo',
                component: create_produtos_component_1.CreateProdutosComponent,
                data: {
                    title: 'Novo produto'
                }
            },
            {
                path: 'editar/:id',
                component: edit_produtos_component_1.EditProdutosComponent,
                data: {
                    title: 'Alterar produto'
                }
            }
        ]
    }
];
var ProdutosRoutingModule = (function () {
    function ProdutosRoutingModule() {
    }
    return ProdutosRoutingModule;
}());
ProdutosRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ProdutosRoutingModule);
exports.ProdutosRoutingModule = ProdutosRoutingModule;
//# sourceMappingURL=E:/paladar-fit/web2/src/produtos-routing.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(93)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.danger {\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(93)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(93)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Categoria</strong>\n        <small> - inclusão de uma nova categoria</small>\n      </div>\n      \n      <div class=\"card-block\">\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <strong>Imagem da categoria</strong>\n                </div>\n                <div class=\"card-block\">\n                  <div class=\"row\">\n                    <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\n                  </div>\n                  \n                </div>\n                <div class=\"card-footer\">\n                  <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\n                  (onSelecionarImagem)=\"mudarImage($event)\">\n                </upload-imagem>\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          \n          <div class=\"col-md-8 col-sm-8\">\n            <form [formGroup]=\"formulario\" (ngSubmit)=\"confirmar()\" >\n\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    <strong>Descrição</strong>\n                  </div>\n                  <div class=\"card-block\">\n                      <div  [ngClass]=\"aplicarCssGroup(formulario.get('nome'))\">\n                        <label for=\"nome\">Nome da categoria</label>\n                        <input  type=\"text\"\n                                [ngClass]=\"aplicarCssForm(formulario.get('nome'))\"\n                                name=\"nome\"\n                                maxlength=\"25\"\n                                placeholder=\"Digite o nome da categoria\"\n                                formControlName=\"nome\">\n                                <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nome'))\" \n                                    titulo=\"Erro:\" mensagem=\"o campo Nome da categoria deve ter entre 5 a 25 caracteres\">\n                                </alert-mensagem>\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"comentario\">Descrição da categoria</label>\n                          <textarea type=\"textarea\"\n                                maxlength=\"100\"\n                                rows=\"7\"\n                                [ngClass]=\"aplicarCssForm(formulario.get('comentario'))\"\n                                name=\"comentario\"\n                                placeholder=\"Digite o texto descritivo da categoria\"\n                                formControlName=\"comentario\"></textarea>\n                    </div>\n                  </div>\n                </div>\n\n              </form>\n              </div>\n\n            </div>\n              <div class=\"card-footer\">\n                  <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"confirmEditarModalUsuario.show()\">\n                     <i class=\"fa fa-save\">  </i> {{btn.btnSalvar}}\n                  </button>\n                  <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\n                      <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\n                  </button>\n              </div>\n          </div>\n        </div>\n    </div>\n  </div>\n\n  <confirm-popup-modal #confirmEditarModalUsuario popupStyle=\"primary\" (onClickConfirm)=\"confirmar()\">\n    <strong>Confirma inclusão da categoria?</strong>\n  </confirm-popup-modal>\n"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Categoria</strong>\n        <small> - alteração da categoria selecionada</small>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <strong>Imagem da categoria</strong>\n                </div>\n                <div class=\"card-block\">\n                  <div class=\"row\">\n                    <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\n                  </div>\n\n                </div>\n                <div class=\"card-footer\">\n                  <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\n                    (onSelecionarImagem)=\"mudarImage($event)\">\n                  </upload-imagem>\n                </div>\n              </div>\n            </div>\n            <!--/.col-->\n\n            <div class=\"col-md-8 col-sm-8\">\n              <form [formGroup]=\"formulario\" novalidade (ngSubmit)=\"confirmar()\">\n\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    <strong>Descrição</strong>\n                  </div>\n                  <div class=\"card-block\">\n                    <div [ngClass]=\"aplicarCssGroup(formulario.get('nome'))\">\n                      <label for=\"nome\">Nome da categoria</label>\n                      <input type=\"text\" [ngClass]=\"aplicarCssForm(formulario.get('nome'))\" name=\"nome\" maxlength=\"25\" placeholder=\"Digite o nome da categoria\"\n                        formControlName=\"nome\">\n                      <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nome'))\" titulo=\"Erro:\" mensagem=\"o campo Nome da categoria deve ter entre 5 a 25 caracteres\">\n                      </alert-mensagem>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"comentario\">Descrição da categoria</label>\n                      <textarea type=\"textarea\" maxlength=\"100\" rows=\"7\" [ngClass]=\"aplicarCssForm(formulario.get('comentario'))\" name=\"comentario\"\n                        placeholder=\"Digite o texto descritivo da categoria\" formControlName=\"comentario\"></textarea>\n                    </div>\n                  </div>\n                </div>\n\n              </form>\n            </div>\n\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"confirmEditarModalUsuario.show()\">\n              <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\n            </button>\n            <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\n              <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <confirm-popup-modal #confirmEditarModalUsuario popupStyle=\"warning\" (onClickConfirm)=\"confirmar()\">\n    <strong>Confirma alteração da categoria?</strong>\n  </confirm-popup-modal>"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\n<button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/produtos/novo']\">\n    <i class=\"icon-plus\"></i> Novo</button>\n\n<table class=\"table table-hover table-outline mb-0 hidden-sm-down\">\n    <thead class=\"thead-default\">\n        <tr>\n            <th class=\"text-center\">\n                <i class=\"icon-people\"></i>\n            </th>\n            <th>Descrição do produto</th>\n            <th class=\"text-center\">Categoria</th>\n            <th class=\"text-center\">Uso interno</th>\n            <th class=\"text-center\">Situação</th>\n            <th class=\"text-center\">Preço</th>\n            <th class=\"text-center\">Ação</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let item of items\">\n            <td class=\"text-center\">\n                <div class=\"avatar\">\n                    <foto src=\"{{bucketUrl}}/produto/prod{{item.id}}.jpg\" classCss=\"img-avatar\" alt=\"Avatar\"></foto>\n                </div>\n            </td>\n            <td>\n                <div>{{item.nmProduto}}</div>\n            </td>\n            <td class=\"text-center\">\n                {{item?.categoria?.nome}}\n            </td>\n            <td class=\"text-center\">\n                <simnao valor={{item.usoInterno}}></simnao>\n            </td>\n            <td class=\"text-center\">\n                <status status={{item.status}}></status>\n            </td>\n            <td class=\"text-rigth\">\n                {{item.preco | currency:'BRL':true}}\n            </td>\n            <td class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-md btn-primary\" style=\"cursor:pointer\" (click)=\"alterarCategoria(item)\">\n                    <i class=\"fa fa fa-edit\"> </i> </button>\n                <button type=\"button\" class=\"btn btn-md btn-danger\" style=\"cursor:pointer\" (click)=\"selecionarItem(item)\">\n                    <i class=\"fa fa-eraser\"> </i></button>\n                <button type=\"button\" class=\"btn btn-md btn-warning\" style=\"cursor:pointer\" (click)=\"selecionarItemChangeStatus(item)\">\n                    <i class=\"fa fa-exclamation\"> </i></button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<confirm-popup-modal #ExcluirCategoriaModal popupStyle=\"danger\" (onClickConfirm)=\"excluirCategoria()\">\n    <strong>Deseja excluir a categoria?</strong>\n</confirm-popup-modal>\n\n<confirm-popup-modal #ChangeSatusCategoriaModal popupStyle=\"danger\" (onClickConfirm)=\"changeStatus()\">\n    <strong>Deseja alterar o status da categoria?</strong>\n</confirm-popup-modal>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map