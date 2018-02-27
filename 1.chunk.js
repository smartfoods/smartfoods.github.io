webpackJsonp([1,12],{

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var consulta_cep_service_1 = __webpack_require__(775);
var cliente_popup_modal_component_1 = __webpack_require__(782);
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(28);
var forms_1 = __webpack_require__(48);
var http_1 = __webpack_require__(57);
var angular2_ladda_1 = __webpack_require__(760);
var modal_1 = __webpack_require__(254);
var popup_modal_module_1 = __webpack_require__(253);
var shared_component_module_1 = __webpack_require__(135);
var angular2_text_mask_1 = __webpack_require__(255);
var tabs_1 = __webpack_require__(256);
var cliente_service_1 = __webpack_require__(756);
var cliente_routing_module_1 = __webpack_require__(781);
var storage_service_1 = __webpack_require__(59);
var listar_cliente_component_1 = __webpack_require__(766);
var ClienteModule = (function () {
    function ClienteModule() {
    }
    return ClienteModule;
}());
ClienteModule = __decorate([
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
            cliente_routing_module_1.ClienteRoutingModule,
            angular2_ladda_1.LaddaModule,
            angular2_text_mask_1.TextMaskModule
        ],
        declarations: [
            listar_cliente_component_1.ListarClienteComponent,
            cliente_popup_modal_component_1.ClientePopupModalComponent
        ],
        providers: [
            cliente_service_1.ClienteService,
            storage_service_1.StorageService,
            consulta_cep_service_1.ConsultaCEPService
        ]
    })
], ClienteModule);
exports.ClienteModule = ClienteModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cliente.module.js.map

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

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var LaddaConfigArgs = (function () {
    function LaddaConfigArgs() {
    }
    return LaddaConfigArgs;
}());
exports.LaddaConfigArgs = LaddaConfigArgs;
exports.configAttributes = {
    "data-style": "style",
    "data-spinner-size": "spinnerSize",
    "data-spinner-color": "spinnerColor",
    "data-spinner-lines": "spinnerLines",
};
var LaddaConfig = (function () {
    function LaddaConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, config);
    }
    return LaddaConfig;
}());
LaddaConfig.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
LaddaConfig.ctorParameters = function () { return [
    { type: LaddaConfigArgs, },
]; };
exports.LaddaConfig = LaddaConfig;
//# sourceMappingURL=ladda-config.js.map

/***/ }),

/***/ 756:
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
    ClienteService.prototype.salvar = function (cliente) {
        return this.http.post("" + this.url, JSON.stringify(cliente), this.getHearderTokenNoResponse());
    };
    ClienteService.prototype.changeStatus = function (cliente) {
        return this.http.put(this.url + "/" + cliente.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    ClienteService.prototype.consultarPorCpf = function (nrCpf) {
        return this.http.get(this.url + "?cpf=" + nrCpf, this.getHearderToken());
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

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var ladda_config_1 = __webpack_require__(755);
var Ladda = __webpack_require__(761);
var LaddaDirective = (function () {
    function LaddaDirective(el, config) {
        this.el = el.nativeElement;
        if (!config) {
            return;
        }
        // apply default styles if they aren't overwritten by an attribute
        for (var attribute in ladda_config_1.configAttributes) {
            var configValue = config[ladda_config_1.configAttributes[attribute]];
            if (!configValue) {
                continue; // don't waste time reading the attribute
            }
            if (!this.el.getAttribute(attribute)) {
                // attribute isn't set - apply the default config value
                var value = (typeof configValue === "number") ? configValue.toString() : configValue;
                this.el.setAttribute(attribute, value);
            }
        }
    }
    LaddaDirective.prototype.ngOnChanges = function (changes) {
        if (!this._ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }
        if (changes['loading']) {
            this.updateLadda(changes['loading'].previousValue);
        }
        if (changes['disabled']) {
            this.updateDisabled();
        }
    };
    LaddaDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._ladda = Ladda.create(this.el);
        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout(function () { _this.updateLadda(false); }, 0);
    };
    LaddaDirective.prototype.ngOnDestroy = function () {
        this._ladda.remove();
    };
    LaddaDirective.prototype.updateLadda = function (previousValue) {
        if (this.loading === false) {
            if (previousValue !== false) {
                this._ladda.stop();
            }
            return this.updateDisabled();
        }
        if (previousValue === false) {
            this._ladda.start();
        }
        if (typeof this.loading === 'number') {
            this._ladda.setProgress(this.loading);
        }
    };
    LaddaDirective.prototype.updateDisabled = function () {
        if (this.disabled) {
            this.el.setAttribute('disabled', '');
        }
        else {
            this.el.removeAttribute('disabled');
        }
    };
    return LaddaDirective;
}());
LaddaDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[ladda]'
            },] },
];
/** @nocollapse */
LaddaDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: ladda_config_1.LaddaConfigArgs, decorators: [{ type: core_1.Inject, args: [ladda_config_1.LaddaConfig,] }, { type: core_1.Optional },] },
]; };
LaddaDirective.propDecorators = {
    'loading': [{ type: core_1.Input, args: ['ladda',] },],
    'disabled': [{ type: core_1.Input, args: ['disabled',] },],
};
exports.LaddaDirective = LaddaDirective;
//# sourceMappingURL=ladda.directive.js.map

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var ladda_directive_1 = __webpack_require__(759);
var ladda_config_1 = __webpack_require__(755);
var LaddaModule = (function () {
    function LaddaModule() {
    }
    LaddaModule.forRoot = function (config) {
        return {
            ngModule: LaddaModule,
            providers: [
                { provide: ladda_config_1.LaddaConfig, useValue: config }
            ]
        };
    };
    return LaddaModule;
}());
LaddaModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [ladda_directive_1.LaddaDirective],
                exports: [ladda_directive_1.LaddaDirective],
            },] },
];
/** @nocollapse */
LaddaModule.ctorParameters = function () { return []; };
exports.LaddaModule = LaddaModule;
//# sourceMappingURL=module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Ladda 1.0.5 (2017-09-24, 16:55)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2017 Hakim El Hattab, http://hakim.se
 */

!function(t,e){"use strict"; true?module.exports=e(__webpack_require__(762)):"function"==typeof define&&define.amd?define(["spin"],e):t.Ladda=e(t.Spinner)}(this,function(t){"use strict";function e(t){if(void 0!==t){if(/ladda-button/i.test(t.className)||(t.className+=" ladda-button"),t.hasAttribute("data-style")||t.setAttribute("data-style","expand-right"),!t.querySelector(".ladda-label")){var e=document.createElement("span");e.className="ladda-label",r(t,e)}var a,u=t.querySelector(".ladda-spinner");u||((u=document.createElement("span")).className="ladda-spinner"),t.appendChild(u);var i,o={start:function(){return a||(a=n(t)),t.disabled=!0,t.setAttribute("data-loading",""),clearTimeout(i),a.spin(u),this.setProgress(0),this},startAfter:function(t){return clearTimeout(i),i=setTimeout(function(){o.start()},t),this},stop:function(){return o.isLoading()&&(t.disabled=!1,t.removeAttribute("data-loading")),clearTimeout(i),a&&(i=setTimeout(function(){a.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start()},setProgress:function(e){e=Math.max(Math.min(e,1),0);var a=t.querySelector(".ladda-progress");0===e&&a&&a.parentNode?a.parentNode.removeChild(a):(a||((a=document.createElement("div")).className="ladda-progress",t.appendChild(a)),a.style.width=(e||0)*t.offsetWidth+"px")},enable:function(){return this.stop()},disable:function(){return this.stop(),t.disabled=!0,this},isLoading:function(){return t.hasAttribute("data-loading")},remove:function(){clearTimeout(i),t.disabled=!1,t.removeAttribute("data-loading"),a&&(a.stop(),a=null),d.splice(d.indexOf(o),1)}};return d.push(o),o}console.warn("Ladda button target must be defined.")}function a(t,e){for(;t.parentNode&&t.tagName!==e;)t=t.parentNode;return e===t.tagName?t:void 0}function u(t){var e=[];return["input","textarea","select"].forEach(function(a){for(var u=t.getElementsByTagName(a),n=0;n<u.length;n++)u[n].hasAttribute("required")&&e.push(u[n])}),e}function n(e){var a,u,n=e.offsetHeight;0===n&&(n=parseFloat(window.getComputedStyle(e).height)),n>32&&(n*=.8),e.hasAttribute("data-spinner-size")&&(n=parseInt(e.getAttribute("data-spinner-size"),10)),e.hasAttribute("data-spinner-color")&&(a=e.getAttribute("data-spinner-color")),e.hasAttribute("data-spinner-lines")&&(u=parseInt(e.getAttribute("data-spinner-lines"),10));var r=.2*n,i=.6*r,d=r<7?2:3;return new t({color:a||"#fff",lines:u||12,radius:r,length:i,width:d,zIndex:"auto",top:"auto",left:"auto",className:""})}function r(t,e){var a=document.createRange();a.selectNodeContents(t),a.surroundContents(e),t.appendChild(e)}function i(t,n){if("function"==typeof t.addEventListener){var r=e(t),i=-1;t.addEventListener("click",function(){var e=!0,d=a(t,"FORM");if(void 0!==d)if("function"==typeof d.checkValidity)e=d.checkValidity();else for(var o=u(d),s=0;s<o.length;s++){var F=o[s],l=F.getAttribute("type");if(""===F.value.replace(/^\s+|\s+$/g,"")&&(e=!1),"checkbox"!==l&&"radio"!==l||F.checked||(e=!1),"email"===l&&(e=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(F.value)),"url"===l&&(e=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(F.value)),!e)break}e&&(r.startAfter(1),"number"==typeof n.timeout&&(clearTimeout(i),i=setTimeout(r.stop,n.timeout)),"function"==typeof n.callback&&n.callback.apply(null,[r]))},!1)}}var d=[];return{bind:function(t,e){var a;if("string"==typeof t)a=document.querySelectorAll(t);else{if("object"!=typeof t)throw new Error("target must be string or object");a=[t]}e=e||{};for(var u=0;u<a.length;u++)i(a[u],e)},create:e,stopAll:function(){for(var t=0,e=d.length;t<e;t++)d[t].stop()}}});

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  // CommonJS
  if (true) {
    module.exports = factory();
  }
  // AMD module
  else if (typeof define == 'function' && define.amd) {
    define(factory);
  }
  // Browser global
  else {
    root.Spinner = factory();
  }

}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: '50%',           // center vertically
    left: '50%',          // center horizontally
    position: 'absolute'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width

      css(el, {
        left: o.left,
        top: o.top
      })
        
      if (target) {
        target.insertBefore(el, target.firstChild||null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));


/***/ }),

/***/ 766:
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
var event_emitter_services_1 = __webpack_require__(72);
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(42);
var api_config_1 = __webpack_require__(134);
var cliente_service_1 = __webpack_require__(756);
var abstract_base_component_1 = __webpack_require__(748);
var ListarClienteComponent = (function (_super) {
    __extends(ListarClienteComponent, _super);
    function ListarClienteComponent(clienteService, router) {
        var _this = _super.call(this) || this;
        _this.clienteService = clienteService;
        _this.router = router;
        _this.bucketUrl = api_config_1.API_CONFIG.bucketBaseUrl + "/clientes/cli";
        _this.items = [];
        return _this;
    }
    ListarClienteComponent.prototype.ngOnInit = function () {
        this.carregarTodos();
    };
    ListarClienteComponent.prototype.selecionarItem = function (item) {
        this.cliente = item;
        this.popupExclusao.show();
    };
    ListarClienteComponent.prototype.selecionarItemChangeStatus = function (item) {
        this.cliente = item;
        this.popupChangeStatus.show();
    };
    ListarClienteComponent.prototype.changeStatus = function () {
        var _this = this;
        this.clienteService.changeStatus(this.cliente)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Cliente', 'Status do cliente foi alterado com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { });
    };
    ListarClienteComponent.prototype.excluir = function () {
        var _this = this;
        this.clienteService.excluir(this.cliente)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Cliente', 'Cliente foi excluído com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { });
    };
    ListarClienteComponent.prototype.carregarTodos = function () {
        var _this = this;
        this.clienteService.findAll().subscribe(function (response) {
            _this.items = response;
        }, function (error) { });
    };
    ListarClienteComponent.prototype.salvar = function (cliente) {
        console.log('cliente:', cliente);
        if (cliente.emAlteracao) {
            /*
            this.categoriaService.atualizar(categoria)
            .subscribe(response => {
              this.carregarCategorias();
              EventEmitterService.emitirMensagemToasterSucesso('Categorias', 'Categoria alterada com sucesso!!!');
            },
            error => {
              console.log(error);
            });
            */
        }
        else {
            /*
            this.categoriaService.salvar(categoria)
            .subscribe(response => {
              this.carregarCategorias();
              EventEmitterService.emitirMensagemToasterSucesso('Categorias', 'Categoria incluída com sucesso!!!');
            },
            error => {
              //console.log('error de validação:', error.error);
            });
            */
        }
    };
    return ListarClienteComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('ExcluirProdutoModal'),
    __metadata("design:type", Object)
], ListarClienteComponent.prototype, "popupExclusao", void 0);
__decorate([
    core_1.ViewChild('ChangeSatusProdutoModal'),
    __metadata("design:type", Object)
], ListarClienteComponent.prototype, "popupChangeStatus", void 0);
ListarClienteComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(815),
        styles: [__webpack_require__(793)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ListarClienteComponent);
exports.ListarClienteComponent = ListarClienteComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-cliente.component.js.map

/***/ }),

/***/ 775:
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
    ConsultaCEPService.prototype.handerErro = function (err) {
        //console.log('Error:', err);
        return Promise.reject(err.message || err);
    };
    ConsultaCEPService.prototype.preencherEndereco = function (form, end) {
        form.patchValue({
            endereco: {
                id: [],
                cep: end.cep,
                bairro: end.bairro,
                complemento: end.complemento,
                logradouro: end.logradouro,
                uf: end.uf,
                cidade: end['localidade']
            }
        });
        return form;
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

/***/ 781:
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
var listar_cliente_component_1 = __webpack_require__(766);
var routes = [
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
    },
    {
        path: '',
        data: {
            title: 'Clientes'
        },
        children: [
            {
                path: 'listar',
                component: listar_cliente_component_1.ListarClienteComponent,
                data: {
                    title: 'Listar'
                }
            },
            {
                path: 'novo',
                component: listar_cliente_component_1.ListarClienteComponent,
                data: {
                    title: 'Novo cliente'
                }
            },
            {
                path: 'editar/:id',
                component: listar_cliente_component_1.ListarClienteComponent,
                data: {
                    title: 'Alterar cliente'
                }
            }
        ]
    }
];
var ClienteRoutingModule = (function () {
    function ClienteRoutingModule() {
    }
    return ClienteRoutingModule;
}());
ClienteRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ClienteRoutingModule);
exports.ClienteRoutingModule = ClienteRoutingModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cliente-routing.module.js.map

/***/ }),

/***/ 782:
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
var cliente_service_1 = __webpack_require__(756);
var consulta_cep_service_1 = __webpack_require__(775);
var api_config_1 = __webpack_require__(134);
var forms_1 = __webpack_require__(48);
var core_1 = __webpack_require__(2);
var abstract_popup_component_1 = __webpack_require__(750);
var ClientePopupModalComponent = (function (_super) {
    __extends(ClientePopupModalComponent, _super);
    function ClientePopupModalComponent(fb, clienteService, consultaCEPService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.clienteService = clienteService;
        _this.consultaCEPService = consultaCEPService;
        _this.isErro = false;
        _this.errorMensagem = "";
        return _this;
    }
    ClientePopupModalComponent.prototype.ngOnInit = function () {
        this.criarForm();
    };
    ClientePopupModalComponent.prototype.show = function () {
        this.criarForm();
        this.showPopup("Cadastro de cliente");
    };
    ClientePopupModalComponent.prototype.showAlteracao = function (item) {
        this.alterarForm(item);
        this.showPopup("Alterar cliente");
    };
    ClientePopupModalComponent.prototype.btnConfirmar = function (cliente) {
        cliente.urlImagem = this.urlFoto;
        this.acao(cliente, this.clienteService);
    };
    ClientePopupModalComponent.prototype.mudarImage = function (evento) {
        this.atualizarFoto(evento.foto);
    };
    ClientePopupModalComponent.prototype.consultarCpf = function (nrCpf) {
        var _this = this;
        this.clienteService.consultarPorCpf(nrCpf)
            .subscribe(function (res) {
            _this.isErro = true;
            _this.errorMensagem = "O CPF informando já foi utilizado";
        }, function (error) { });
    };
    ClientePopupModalComponent.prototype.alterarForm = function (cliente) {
        this.formulario.patchValue({
            id: cliente.id,
            nmPessoa: cliente.nmPessoa,
            nrCpf: cliente.nrCpf,
            dtNascimento: cliente.dtNascimento,
            status: cliente.status,
            urlImagem: cliente.urlImagem,
            emAlteracao: true,
            fone: {
                id: cliente.fone.id,
                nrFoneCelular: cliente.fone.nrFoneCelular,
                nrFoneResidencial: cliente.fone.nrFoneResidencial,
                nrFoneWhatsapp: cliente.fone.nrFoneWhatsapp,
            },
            endereco: {
                id: cliente.endereco.id,
                cep: cliente.endereco.cep,
                complemento: cliente.endereco.complemento,
                numero: cliente.endereco.numero,
                bairro: cliente.endereco.bairro,
                logradouro: cliente.endereco.logradouro,
                uf: cliente.endereco['cidade']['estado']['sgEstado'],
                cidade: cliente.endereco['cidade']['nome']
            }
        });
        this.urlFoto = cliente.urlImagem == undefined ? api_config_1.API_CONFIG.bucketBaseUrl + "/clientes/cli" + cliente.id + ".jpg" : cliente.urlImagem;
    };
    ClientePopupModalComponent.prototype.criarForm = function () {
        this.formulario = this.fb.group({
            id: [''],
            nmPessoa: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(120)]],
            nrCpf: ['', [forms_1.Validators.required]],
            dtNascimento: [''],
            status: ['A'],
            urlImagem: [''],
            emAlteracao: [false],
            fone: this.fb.group({
                id: [''],
                nrFoneCelular: [''],
                nrFoneResidencial: [''],
                nrFoneWhatsapp: [''],
            }),
            endereco: this.fb.group({
                id: [],
                cep: [''],
                complemento: [''],
                numero: [''],
                bairro: [''],
                logradouro: [''],
                uf: [''],
                cidade: ['']
            }),
            usuario: this.fb.group({
                login: [''],
                email: [''],
                senha: [''],
                senhaConfirmacao: ['']
            })
        });
        this.urlFoto = this.urlClienteAvatar;
    };
    ClientePopupModalComponent.prototype.atualizarFoto = function (foto) {
        this.urlFoto = foto;
    };
    ClientePopupModalComponent.prototype.consultarCEP = function (nrCep) {
        var _this = this;
        this.consultaCEPService.consultarCEP(nrCep)
            .subscribe(function (res) { _this.formulario = _this.consultaCEPService.preencherEndereco(_this.formulario, res); });
    };
    return ClientePopupModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
ClientePopupModalComponent = __decorate([
    core_1.Component({
        selector: 'cliente-popup-modal',
        template: __webpack_require__(816),
        styles: [__webpack_require__(794)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _b || Object, typeof (_c = typeof consulta_cep_service_1.ConsultaCEPService !== "undefined" && consulta_cep_service_1.ConsultaCEPService) === "function" && _c || Object])
], ClientePopupModalComponent);
exports.ClientePopupModalComponent = ClientePopupModalComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cliente-popup-modal.component.js.map

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)();
// imports


// module
exports.push([module.i, ".table th, .table td {\n  padding: 0.20rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"clienteModal.show()\">\r\n    <i class=\"icon-plus\"></i> Novo</button>\r\n\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de usuários\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 5%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th style=\"width: 45%\">Nome</th>\r\n                    <th class=\"text-center\"style=\"width: 20%\">CPF</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Situação</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td class=\"text-center\">\r\n                        <div class=\"avatar\">\r\n                            <foto src=\"{{bucketUrl}}{{item.id}}.jpg\" classCss=\"img-avatar\" alt=\"Avatar\"></foto>\r\n                            <!-- \r\n                            -->\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        {{item.nmPessoa}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        {{item.nrCpf | cpfMask}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <status status={{item.status}}></status>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"cursor:pointer\" (click)=\"clienteModal.showAlteracao(item)\">\r\n                            <i class=\"fa fa fa-edit\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"cursor:pointer\" (click)=\"selecionarItem(item)\">\r\n                            <i class=\"fa fa-eraser\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-warning\" style=\"cursor:pointer\" (click)=\"selecionarItemChangeStatus(item)\">\r\n                            <i class=\"fa fa-exclamation\"> </i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n        <!-- \r\n\r\n            <ul class=\"pagination\">\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">Prev</a>\r\n                </li>\r\n                <li class=\"page-item active\">\r\n                    <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">2</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">3</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">4</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">Next</a>\r\n                </li>\r\n            </ul>\r\n        -->\r\n    </div>\r\n</div>\r\n\r\n<confirm-popup-modal #ExcluirCategoriaModal popupStyle=\"danger\" (onClickConfirm)=\"excluirCategoria()\">\r\n    <strong>Deseja excluir a categoria?</strong>\r\n</confirm-popup-modal>\r\n\r\n<confirm-popup-modal #ChangeSatusCategoriaModal popupStyle=\"danger\" (onClickConfirm)=\"changeStatus()\">\r\n    <strong>Deseja alterar o status da categoria?</strong>\r\n</confirm-popup-modal>\r\n\r\n<cliente-popup-modal #clienteModal (onClickConfirm)=\"salvar($event)\"></cliente-popup-modal>"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<base-popup-modal #modalConfirm [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formulario.value)\" [desabilitarBtnConfirmar]=\"!formulario.valid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Imagem da categoria</strong>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n            (onSelecionarImagem)=\"mudarImage($event)\">\r\n          </upload-imagem>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-md-8 col-sm-8\">\r\n      <alert-mensagem [mostrarErro]=\"isErro\" titulo=\"Erro:\" [mensagem]=\"errorMensagem\"></alert-mensagem>\r\n      <form [formGroup]=\"formulario\" novalidade (ngSubmit)=\"confirmar()\">\r\n        <tabset #tabUsuario>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-list\"></i> Dados Pessoais &nbsp;\r\n\r\n            </ng-template>\r\n            <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmPessoa'))\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Nome</label>\r\n                <input #campoNome upper type=\"text\" formControlName=\"nmPessoa\" class=\"form-control input-sm\" name=\"nmPessoa\" maxlength=\"120\"\r\n                  [disableControl]=\"formulario.get('emAlteracao').value\">\r\n                <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmPessoa'))\" titulo=\"Erro:\" mensagem=\"o campo Nome ter entre 5 a 120 caracteres\">\r\n                </alert-mensagem>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('nrCpf'))\">\r\n                <label class=\"form-control-label\" for=\"input-small\">CPF</label>\r\n                <input type=\"text\" formControlName=\"nrCpf\" class=\"form-control input-sm\" name=\"nrCpf\" [textMask]=\"{mask: maskCPF}\" (blur)=\"consultarCpf($event.target.value)\"\r\n                  [disableControl]=\"formulario.get('emAlteracao').value\">\r\n              </div>\r\n              <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('dtNascimento'))\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Data de Nascimento</label>\r\n                <input type=\"text\" formControlName=\"dtNascimento\" class=\"form-control input-sm\" name=\"dtNascimento\" [textMask]=\"{mask: maskData}\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" formGroupName=\"fone\">\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Celular/Whatsapp</label>\r\n                <input type=\"text\" formControlName=\"nrFoneCelular\" class=\"form-control input-sm\" name=\"nrFoneCelular\" [textMask]=\"{mask: maskFoneCelular}\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Residencial</label>\r\n                <input type=\"text\" formControlName=\"nrFoneResidencial\" class=\"form-control input-sm\" name=\"nrFoneResidencial\" [textMask]=\"{mask: maskFoneResidencial}\">\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-calculator\"></i> Endereço &nbsp;\r\n            </ng-template>\r\n            <div class=\"form-group\" formGroupName=\"endereco\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"endCep\">CEP</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"cep\" placeholder=\"CEP\" formControlName=\"cep\" (blur)=\"consultarCEP($event.target.value)\"\r\n                    [textMask]=\"{mask: maskCEP}\">\r\n                </div>\r\n                <div class=\"form-group col-sm-8\">\r\n                  <label for=\"logradouro\">Endereço</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"logradouro\" placeholder=\"rua\" formControlName=\"logradouro\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-2\">\r\n                  <label for=\"numero\">Número</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"numero\" placeholder=\"número\" formControlName=\"numero\">\r\n                </div>\r\n                <div class=\"form-group col-sm-6\">\r\n                  <label for=\"complemento\">Complemento</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"complemento\" placeholder=\"Complemento\" formControlName=\"complemento\">\r\n                </div>\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"bairro\">Bairro</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"bairro\" placeholder=\"Bairro\" formControlName=\"bairro\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"sgUF\">Estado</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"uf\" placeholder=\"estado\" formControlName=\"uf\" [disableControl]=\"true\">\r\n                </div>\r\n                <div class=\"form-group col-sm-8\">\r\n                  <label for=\"cidade\">Cidade</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" formControlName=\"cidade\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab [disabled]=\"isAlteracao\">\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-pie-chart\"></i> Acesso\r\n            </ng-template>\r\n            <div formGroupName=\"usuario\">\r\n\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <label class=\"form-control-label\" for=\"input-small\">email</label>\r\n                  <input type=\"text\" formControlName=\"email\" class=\"form-control input-sm\" name=\"email\" lower>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Login</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"text\" formControlName=\"login\" class=\"form-control input-sm\" name=\"login\" maxlength=\"40\" lower>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Senha</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"password\" formControlName=\"senha\" class=\"form-control input-sm\" name=\"senha\" maxlength=\"8\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Confirmação</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"password\" formControlName=\"senhaConfirmacao\" class=\"form-control input-sm\" name=\"senhaConfirmacao\" maxlength=\"8\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n        </tabset>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</base-popup-modal>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map