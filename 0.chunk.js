webpackJsonp([0,4,17],{

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var perfil_cliente_component_1 = __webpack_require__(816);
var consulta_cep_service_1 = __webpack_require__(151);
var cliente_popup_modal_component_1 = __webpack_require__(819);
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(25);
var forms_1 = __webpack_require__(18);
var http_1 = __webpack_require__(20);
var angular2_ladda_1 = __webpack_require__(278);
var modal_1 = __webpack_require__(103);
var popup_modal_module_1 = __webpack_require__(147);
var shared_component_module_1 = __webpack_require__(78);
var angular2_text_mask_1 = __webpack_require__(104);
var tabs_1 = __webpack_require__(152);
var cliente_service_1 = __webpack_require__(148);
var cliente_routing_module_1 = __webpack_require__(818);
var storage_service_1 = __webpack_require__(65);
var listar_cliente_component_1 = __webpack_require__(815);
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
            cliente_popup_modal_component_1.ClientePopupModalComponent,
            perfil_cliente_component_1.PerfilClienteComponent
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

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng2_currency_mask_1 = __webpack_require__(808);
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(25);
var forms_1 = __webpack_require__(18);
var http_1 = __webpack_require__(20);
var angular2_ladda_1 = __webpack_require__(278);
var modal_1 = __webpack_require__(103);
var shared_component_module_1 = __webpack_require__(78);
var popup_modal_module_1 = __webpack_require__(147);
var pedido_routing_module_1 = __webpack_require__(862);
var angular2_text_mask_1 = __webpack_require__(104);
var tabs_1 = __webpack_require__(152);
var pedido_service_1 = __webpack_require__(817);
var storage_service_1 = __webpack_require__(65);
var cliente_module_1 = __webpack_require__(791);
var forma_pagamento_service_1 = __webpack_require__(805);
var servico_entrega_service_1 = __webpack_require__(806);
var taxa_entrega_service_1 = __webpack_require__(807);
var listar_pedidocomponent_1 = __webpack_require__(841);
var create_pedido_component_1 = __webpack_require__(840);
var update_pedido_component_1 = __webpack_require__(842);
var PedidoModule = (function () {
    function PedidoModule() {
    }
    return PedidoModule;
}());
PedidoModule = __decorate([
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
            pedido_routing_module_1.PedidoRoutingModule,
            angular2_ladda_1.LaddaModule,
            angular2_text_mask_1.TextMaskModule,
            cliente_module_1.ClienteModule,
            angular2_text_mask_1.TextMaskModule,
            ng2_currency_mask_1.CurrencyMaskModule
        ],
        declarations: [
            listar_pedidocomponent_1.ListarPedidoComponent,
            create_pedido_component_1.CreatePedidoComponent,
            update_pedido_component_1.UpdatePedidoComponent
        ],
        providers: [
            pedido_service_1.PedidoService,
            forma_pagamento_service_1.FormaPagamentoService,
            taxa_entrega_service_1.TaxaEntregaService,
            servico_entrega_service_1.ServicoEntregaService,
            storage_service_1.StorageService
        ]
    })
], PedidoModule);
exports.PedidoModule = PedidoModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/pedido.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(18);
var currency_mask_config_1 = __webpack_require__(809);
var input_handler_1 = __webpack_require__(811);
exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CurrencyMaskDirective; }),
    multi: true
};
var CurrencyMaskDirective = (function () {
    function CurrencyMaskDirective(currencyMaskConfig, elementRef, keyValueDiffers) {
        this.currencyMaskConfig = currencyMaskConfig;
        this.elementRef = elementRef;
        this.keyValueDiffers = keyValueDiffers;
        this.options = {};
        this.optionsTemplate = {
            align: "right",
            allowNegative: true,
            allowZero: true,
            decimal: ".",
            precision: 2,
            prefix: "$ ",
            suffix: "",
            thousands: ","
        };
        if (currencyMaskConfig) {
            this.optionsTemplate = currencyMaskConfig;
        }
        this.keyValueDiffer = keyValueDiffers.find({}).create(null);
    }
    CurrencyMaskDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
    };
    CurrencyMaskDirective.prototype.ngDoCheck = function () {
        if (this.keyValueDiffer.diff(this.options)) {
            this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
    };
    CurrencyMaskDirective.prototype.ngOnInit = function () {
        this.inputHandler = new input_handler_1.InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    };
    CurrencyMaskDirective.prototype.handleBlur = function (event) {
        this.inputHandler.getOnModelTouched().apply(event);
    };
    CurrencyMaskDirective.prototype.handleCut = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleCut(event);
        }
    };
    CurrencyMaskDirective.prototype.handleInput = function (event) {
        if (this.isChromeAndroid()) {
            this.inputHandler.handleInput(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeydown = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeydown(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeypress = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeypress(event);
        }
    };
    CurrencyMaskDirective.prototype.handlePaste = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handlePaste(event);
        }
    };
    CurrencyMaskDirective.prototype.isChromeAndroid = function () {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    };
    CurrencyMaskDirective.prototype.registerOnChange = function (callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
    };
    CurrencyMaskDirective.prototype.registerOnTouched = function (callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
    };
    CurrencyMaskDirective.prototype.setDisabledState = function (value) {
        this.elementRef.nativeElement.disabled = value;
    };
    CurrencyMaskDirective.prototype.writeValue = function (value) {
        this.inputHandler.setValue(value);
    };
    return CurrencyMaskDirective;
}());
CurrencyMaskDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[currencyMask]",
                providers: [exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
CurrencyMaskDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [currency_mask_config_1.CURRENCY_MASK_CONFIG,] },] },
    { type: core_1.ElementRef, },
    { type: core_1.KeyValueDiffers, },
]; };
CurrencyMaskDirective.propDecorators = {
    'options': [{ type: core_1.Input },],
    'handleBlur': [{ type: core_1.HostListener, args: ["blur", ["$event"],] },],
    'handleCut': [{ type: core_1.HostListener, args: ["cut", ["$event"],] },],
    'handleInput': [{ type: core_1.HostListener, args: ["input", ["$event"],] },],
    'handleKeydown': [{ type: core_1.HostListener, args: ["keydown", ["$event"],] },],
    'handleKeypress': [{ type: core_1.HostListener, args: ["keypress", ["$event"],] },],
    'handlePaste': [{ type: core_1.HostListener, args: ["paste", ["$event"],] },],
};
exports.CurrencyMaskDirective = CurrencyMaskDirective;
//# sourceMappingURL=currency-mask.directive.js.map

/***/ }),

/***/ 805:
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
var api_config_1 = __webpack_require__(29);
var http_1 = __webpack_require__(20);
var core_1 = __webpack_require__(1);
var abstract_service_1 = __webpack_require__(55);
var FormaPagamentoService = (function (_super) {
    __extends(FormaPagamentoService, _super);
    function FormaPagamentoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/formapagamento";
        return _this;
    }
    FormaPagamentoService.prototype.findAll = function () {
        return this.http.get(this.url + "/all", this.getHearderToken());
    };
    FormaPagamentoService.prototype.findAllAtivo = function () {
        return this.http.get(this.url + "/", this.getHearderToken());
    };
    FormaPagamentoService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    FormaPagamentoService.prototype.salvar = function (info) {
        return this.http.post(this.url + "/", JSON.stringify(info), this.getHearderTokenNoResponse());
    };
    FormaPagamentoService.prototype.changeStatus = function (info) {
        return this.http.put(this.url + "/" + info.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    FormaPagamentoService.prototype.atualizar = function (info) {
        return this.http.put(this.url + "/" + info.id, JSON.stringify(info), this.getHearderTokenNoResponse());
    };
    FormaPagamentoService.prototype.excluir = function (info) {
        var url = this.url + "/" + info.id;
        return this.http.delete(url, this.getHearderToken());
    };
    return FormaPagamentoService;
}(abstract_service_1.AbstractService));
FormaPagamentoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], FormaPagamentoService);
exports.FormaPagamentoService = FormaPagamentoService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/forma-pagamento.service.js.map

/***/ }),

/***/ 806:
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
var api_config_1 = __webpack_require__(29);
var http_1 = __webpack_require__(20);
var core_1 = __webpack_require__(1);
var abstract_service_1 = __webpack_require__(55);
var ServicoEntregaService = (function (_super) {
    __extends(ServicoEntregaService, _super);
    function ServicoEntregaService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/servicoentrega";
        return _this;
    }
    ServicoEntregaService.prototype.findAll = function () {
        return this.http.get(this.url + "/all", this.getHearderToken());
    };
    ServicoEntregaService.prototype.findAllAtivo = function () {
        return this.http.get(this.url + "/", this.getHearderToken());
    };
    ServicoEntregaService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    ServicoEntregaService.prototype.salvar = function (info) {
        return this.http.post(this.url + "/", JSON.stringify(info), this.getHearderTokenNoResponse());
    };
    ServicoEntregaService.prototype.changeStatus = function (info) {
        return this.http.put(this.url + "/" + info.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    ServicoEntregaService.prototype.atualizar = function (info) {
        return this.http.put(this.url + "/" + info.id, JSON.stringify(info), this.getHearderTokenNoResponse());
    };
    ServicoEntregaService.prototype.excluir = function (info) {
        var url = this.url + "/" + info.id;
        return this.http.delete(url, this.getHearderToken());
    };
    return ServicoEntregaService;
}(abstract_service_1.AbstractService));
ServicoEntregaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], ServicoEntregaService);
exports.ServicoEntregaService = ServicoEntregaService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/servico-entrega.service.js.map

/***/ }),

/***/ 807:
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
var api_config_1 = __webpack_require__(29);
var http_1 = __webpack_require__(20);
var core_1 = __webpack_require__(1);
var abstract_service_1 = __webpack_require__(55);
var TaxaEntregaService = (function (_super) {
    __extends(TaxaEntregaService, _super);
    function TaxaEntregaService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/taxaentrega";
        return _this;
    }
    TaxaEntregaService.prototype.findAll = function () {
        return this.http.get(this.url + "/all", this.getHearderToken());
    };
    TaxaEntregaService.prototype.findAllAtivo = function () {
        return this.http.get(this.url + "/", this.getHearderToken());
    };
    TaxaEntregaService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    TaxaEntregaService.prototype.salvar = function (info) {
        return this.http.post(this.url + "/", JSON.stringify(info), this.getHearderTokenNoResponse());
    };
    TaxaEntregaService.prototype.changeStatus = function (info) {
        return this.http.put(this.url + "/" + info.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    TaxaEntregaService.prototype.atualizar = function (info) {
        return this.http.put(this.url + "/" + info.id, JSON.stringify(info), this.getHearderTokenNoResponse());
    };
    TaxaEntregaService.prototype.excluir = function (info) {
        var url = this.url + "/" + info.id;
        return this.http.delete(url, this.getHearderToken());
    };
    return TaxaEntregaService;
}(abstract_service_1.AbstractService));
TaxaEntregaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], TaxaEntregaService);
exports.TaxaEntregaService = TaxaEntregaService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/taxa-entrega.service.js.map

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(804));
__export(__webpack_require__(810));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
exports.CURRENCY_MASK_CONFIG = new core_1.InjectionToken("currency.mask.config");
//# sourceMappingURL=currency-mask.config.js.map

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(25);
var forms_1 = __webpack_require__(18);
var core_1 = __webpack_require__(1);
var currency_mask_directive_1 = __webpack_require__(804);
var CurrencyMaskModule = (function () {
    function CurrencyMaskModule() {
    }
    return CurrencyMaskModule;
}());
CurrencyMaskModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule
                ],
                declarations: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ],
                exports: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ]
            },] },
];
/** @nocollapse */
CurrencyMaskModule.ctorParameters = function () { return []; };
exports.CurrencyMaskModule = CurrencyMaskModule;
//# sourceMappingURL=currency-mask.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_service_1 = __webpack_require__(813);
var InputHandler = (function () {
    function InputHandler(htmlInputElement, options) {
        this.inputService = new input_service_1.InputService(htmlInputElement, options);
    }
    InputHandler.prototype.handleCut = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 0);
    };
    InputHandler.prototype.handleInput = function (event) {
        var keyCode = this.inputService.rawValue.charCodeAt(this.inputService.rawValue.length - 1);
        var rawValueLength = this.inputService.rawValue.length;
        var rawValueSelectionEnd = this.inputService.inputSelection.selectionEnd;
        var storedRawValueLength = this.inputService.storedRawValue.length;
        this.inputService.rawValue = this.inputService.storedRawValue;
        if (rawValueLength != rawValueSelectionEnd || Math.abs(rawValueLength - storedRawValueLength) != 1) {
            this.setCursorPosition(event);
            return;
        }
        if (rawValueLength < storedRawValueLength) {
            if (this.inputService.value != 0) {
                this.inputService.removeNumber(8);
            }
            else {
                this.setValue(null);
            }
        }
        if (rawValueLength > storedRawValueLength) {
            switch (keyCode) {
                case 43:
                    this.inputService.changeToPositive();
                    break;
                case 45:
                    this.inputService.changeToNegative();
                    break;
                default:
                    if (!this.inputService.canInputMoreNumbers || (isNaN(this.inputService.value) && String.fromCharCode(keyCode).match(/\d/) == null)) {
                        return;
                    }
                    this.inputService.addNumber(keyCode);
            }
        }
        this.setCursorPosition(event);
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handleKeydown = function (event) {
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
            event.preventDefault();
            var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
            if (selectionRangeLength == this.inputService.rawValue.length || this.inputService.value == 0) {
                this.setValue(null);
                this.onModelChange(this.inputService.value);
            }
            if (selectionRangeLength == 0 && !isNaN(this.inputService.value)) {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
        }
    };
    InputHandler.prototype.handleKeypress = function (event) {
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == undefined || [9, 13].indexOf(keyCode) != -1 || this.isArrowEndHomeKeyInFirefox(event)) {
            return;
        }
        switch (keyCode) {
            case 43:
                this.inputService.changeToPositive();
                break;
            case 45:
                this.inputService.changeToNegative();
                break;
            default:
                if (this.inputService.canInputMoreNumbers && (!isNaN(this.inputService.value) || String.fromCharCode(keyCode).match(/\d/) != null)) {
                    this.inputService.addNumber(keyCode);
                }
        }
        event.preventDefault();
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handlePaste = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 1);
    };
    InputHandler.prototype.updateOptions = function (options) {
        this.inputService.updateOptions(options);
    };
    InputHandler.prototype.getOnModelChange = function () {
        return this.onModelChange;
    };
    InputHandler.prototype.setOnModelChange = function (callbackFunction) {
        this.onModelChange = callbackFunction;
    };
    InputHandler.prototype.getOnModelTouched = function () {
        return this.onModelTouched;
    };
    InputHandler.prototype.setOnModelTouched = function (callbackFunction) {
        this.onModelTouched = callbackFunction;
    };
    InputHandler.prototype.setValue = function (value) {
        this.inputService.value = value;
    };
    InputHandler.prototype.isArrowEndHomeKeyInFirefox = function (event) {
        if ([35, 36, 37, 38, 39, 40].indexOf(event.keyCode) != -1 && (event.charCode == undefined || event.charCode == 0)) {
            return true;
        }
        return false;
    };
    InputHandler.prototype.setCursorPosition = function (event) {
        setTimeout(function () {
            event.target.setSelectionRange(event.target.value.length, event.target.value.length);
        }, 0);
    };
    return InputHandler;
}());
exports.InputHandler = InputHandler;
//# sourceMappingURL=input.handler.js.map

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager = (function () {
    function InputManager(htmlInputElement) {
        this.htmlInputElement = htmlInputElement;
    }
    InputManager.prototype.setCursorAt = function (position) {
        if (this.htmlInputElement.setSelectionRange) {
            this.htmlInputElement.focus();
            this.htmlInputElement.setSelectionRange(position, position);
        }
        else if (this.htmlInputElement.createTextRange) {
            var textRange = this.htmlInputElement.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd("character", position);
            textRange.moveStart("character", position);
            textRange.select();
        }
    };
    InputManager.prototype.updateValueAndCursor = function (newRawValue, oldLength, selectionStart) {
        this.rawValue = newRawValue;
        var newLength = newRawValue.length;
        selectionStart = selectionStart - (oldLength - newLength);
        this.setCursorAt(selectionStart);
    };
    Object.defineProperty(InputManager.prototype, "canInputMoreNumbers", {
        get: function () {
            var haventReachedMaxLength = !(this.rawValue.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
            var selectionStart = this.inputSelection.selectionStart;
            var selectionEnd = this.inputSelection.selectionEnd;
            var haveNumberSelected = (selectionStart != selectionEnd && this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/\d/)) ? true : false;
            var startWithZero = (this.htmlInputElement.value.substring(0, 1) == "0");
            return haventReachedMaxLength || haveNumberSelected || startWithZero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "inputSelection", {
        get: function () {
            var selectionStart = 0;
            var selectionEnd = 0;
            if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
                selectionStart = this.htmlInputElement.selectionStart;
                selectionEnd = this.htmlInputElement.selectionEnd;
            }
            else {
                var range = document.selection.createRange();
                if (range && range.parentElement() == this.htmlInputElement) {
                    var lenght = this.htmlInputElement.value.length;
                    var normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
                    var startRange = this.htmlInputElement.createTextRange();
                    startRange.moveToBookmark(range.getBookmark());
                    var endRange = this.htmlInputElement.createTextRange();
                    endRange.collapse(false);
                    if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                        selectionStart = selectionEnd = lenght;
                    }
                    else {
                        selectionStart = -startRange.moveStart("character", -lenght);
                        selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;
                        if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                            selectionEnd = lenght;
                        }
                        else {
                            selectionEnd = -startRange.moveEnd("character", -lenght);
                            selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
                        }
                    }
                }
            }
            return {
                selectionStart: selectionStart,
                selectionEnd: selectionEnd
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "rawValue", {
        get: function () {
            return this.htmlInputElement && this.htmlInputElement.value;
        },
        set: function (value) {
            this._storedRawValue = value;
            if (this.htmlInputElement) {
                this.htmlInputElement.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "storedRawValue", {
        get: function () {
            return this._storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    return InputManager;
}());
exports.InputManager = InputManager;
//# sourceMappingURL=input.manager.js.map

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_manager_1 = __webpack_require__(812);
var InputService = (function () {
    function InputService(htmlInputElement, options) {
        this.htmlInputElement = htmlInputElement;
        this.options = options;
        this.inputManager = new input_manager_1.InputManager(htmlInputElement);
    }
    InputService.prototype.addNumber = function (keyCode) {
        if (!this.rawValue) {
            this.rawValue = this.applyMask(false, "0");
        }
        var keyChar = String.fromCharCode(keyCode);
        var selectionStart = this.inputSelection.selectionStart;
        var selectionEnd = this.inputSelection.selectionEnd;
        this.rawValue = this.rawValue.substring(0, selectionStart) + keyChar + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart + 1);
    };
    InputService.prototype.applyMask = function (isNumber, rawValue) {
        var _a = this.options, allowNegative = _a.allowNegative, decimal = _a.decimal, precision = _a.precision, prefix = _a.prefix, suffix = _a.suffix, thousands = _a.thousands;
        rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
        var onlyNumbers = rawValue.replace(/[^0-9]/g, "");
        if (!onlyNumbers) {
            return "";
        }
        var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision).replace(/^0*/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
        if (integerPart == "") {
            integerPart = "0";
        }
        var newRawValue = integerPart;
        var decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
        if (precision > 0) {
            newRawValue += decimal + decimalPart;
        }
        var isZero = parseInt(integerPart) == 0 && (parseInt(decimalPart) == 0 || decimalPart == "");
        var operator = (rawValue.indexOf("-") > -1 && allowNegative && !isZero) ? "-" : "";
        return operator + prefix + newRawValue + suffix;
    };
    InputService.prototype.clearMask = function (rawValue) {
        if (rawValue == null) {
            return null;
        }
        var value = rawValue.replace(this.options.prefix, "").replace(this.options.suffix, "");
        if (this.options.thousands) {
            value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
        }
        if (this.options.decimal) {
            value = value.replace(this.options.decimal, ".");
        }
        return parseFloat(value);
    };
    InputService.prototype.changeToNegative = function () {
        if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
            this.rawValue = "-" + this.rawValue;
        }
    };
    InputService.prototype.changeToPositive = function () {
        this.rawValue = this.rawValue.replace("-", "");
    };
    InputService.prototype.removeNumber = function (keyCode) {
        var selectionEnd = this.inputSelection.selectionEnd;
        var selectionStart = this.inputSelection.selectionStart;
        if (selectionStart > this.rawValue.length - this.options.suffix.length) {
            selectionEnd = this.rawValue.length - this.options.suffix.length;
            selectionStart = this.rawValue.length - this.options.suffix.length;
        }
        selectionEnd = keyCode == 46 || keyCode == 63272 ? selectionEnd + 1 : selectionEnd;
        selectionStart = keyCode == 8 ? selectionStart - 1 : selectionStart;
        this.rawValue = this.rawValue.substring(0, selectionStart) + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart);
    };
    InputService.prototype.updateFieldValue = function (selectionStart) {
        var newRawValue = this.applyMask(false, this.rawValue || "");
        selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
        this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
    };
    InputService.prototype.updateOptions = function (options) {
        var value = this.value;
        this.options = options;
        this.value = value;
    };
    Object.defineProperty(InputService.prototype, "canInputMoreNumbers", {
        get: function () {
            return this.inputManager.canInputMoreNumbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "inputSelection", {
        get: function () {
            return this.inputManager.inputSelection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "rawValue", {
        get: function () {
            return this.inputManager.rawValue;
        },
        set: function (value) {
            this.inputManager.rawValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "storedRawValue", {
        get: function () {
            return this.inputManager.storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "value", {
        get: function () {
            return this.clearMask(this.rawValue);
        },
        set: function (value) {
            this.rawValue = this.applyMask(true, "" + value);
        },
        enumerable: true,
        configurable: true
    });
    return InputService;
}());
exports.InputService = InputService;
//# sourceMappingURL=input.service.js.map

/***/ }),

/***/ 815:
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
var trata_error_service_1 = __webpack_require__(27);
var event_emitter_services_1 = __webpack_require__(28);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var cliente_service_1 = __webpack_require__(148);
var abstract_base_component_1 = __webpack_require__(102);
var ListarClienteComponent = (function (_super) {
    __extends(ListarClienteComponent, _super);
    function ListarClienteComponent(clienteService, router) {
        var _this = _super.call(this) || this;
        _this.clienteService = clienteService;
        _this.router = router;
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
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarClienteComponent.prototype.excluir = function () {
        var _this = this;
        this.clienteService.excluir(this.cliente)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Cliente', 'Cliente foi excluído com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarClienteComponent.prototype.carregarTodos = function () {
        var _this = this;
        this.clienteService.findAll().subscribe(function (response) { _this.items = response; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return ListarClienteComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('excluirModal'),
    __metadata("design:type", Object)
], ListarClienteComponent.prototype, "popupExclusao", void 0);
__decorate([
    core_1.ViewChild('changeStatusModal'),
    __metadata("design:type", Object)
], ListarClienteComponent.prototype, "popupChangeStatus", void 0);
ListarClienteComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(823),
        styles: [__webpack_require__(820)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ListarClienteComponent);
exports.ListarClienteComponent = ListarClienteComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-cliente.component.js.map

/***/ }),

/***/ 816:
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
var abstract_base_component_1 = __webpack_require__(102);
var trata_error_service_1 = __webpack_require__(27);
var event_emitter_services_1 = __webpack_require__(28);
var cliente_service_1 = __webpack_require__(148);
var consulta_cep_service_1 = __webpack_require__(151);
var api_config_1 = __webpack_require__(29);
var forms_1 = __webpack_require__(18);
var core_1 = __webpack_require__(1);
var PerfilClienteComponent = (function (_super) {
    __extends(PerfilClienteComponent, _super);
    function PerfilClienteComponent(fb, clienteService, consultaCEPService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.clienteService = clienteService;
        _this.consultaCEPService = consultaCEPService;
        _this.enderecos = [];
        return _this;
    }
    PerfilClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.criarForm();
        this.clienteService.infoClienteLogado().subscribe(function (res) { return _this.alterarForm(res); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    PerfilClienteComponent.prototype.btnConfirmar = function (cliente) {
        cliente.enderecos = this.enderecos;
        cliente.urlImagem = this.urlFoto;
        this.clienteService.atualizar(cliente).subscribe(function (res) { return event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Perfil', 'Operação realizada com sucesso!!!'); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    PerfilClienteComponent.prototype.mudarImage = function (evento) {
        this.atualizarFoto(evento.foto);
    };
    PerfilClienteComponent.prototype.alterarForm = function (cliente) {
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
                nrFoneWhatsapp: cliente.fone.nrFoneWhatsapp
            }
        });
        if (cliente.enderecos != undefined) {
            this.enderecos = cliente.enderecos;
        }
        this.urlFoto = cliente.urlImagem == undefined ? api_config_1.API_CONFIG.bucketBaseUrl + "/clientes/cli" + cliente.id + ".jpg" : cliente.urlImagem;
    };
    PerfilClienteComponent.prototype.criarForm = function () {
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
            })
        });
        this.enderecos = [];
        this.urlFoto = this.urlFotoAvatar;
    };
    PerfilClienteComponent.prototype.atualizarFoto = function (foto) {
        this.urlFoto = foto;
    };
    PerfilClienteComponent.prototype.confirmarEndereco = function (ender) {
        if (!ender.emAlteracao) {
            ender.id = '99' + (Math.floor((Math.random() * 100) + 1));
            this.enderecos.push(ender);
        }
        else {
            var position = this.enderecos.findIndex(function (x) { return x.id == ender.id; });
            this.enderecos[position] = ender;
        }
    };
    PerfilClienteComponent.prototype.excluirEndereco = function (ender) {
        this.enderecos = this.enderecos.filter(function (end) { return end.id != ender.id; });
    };
    return PerfilClienteComponent;
}(abstract_base_component_1.AbstractBaseComponent));
PerfilClienteComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(824),
        styles: [__webpack_require__(821)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _b || Object, typeof (_c = typeof consulta_cep_service_1.ConsultaCEPService !== "undefined" && consulta_cep_service_1.ConsultaCEPService) === "function" && _c || Object])
], PerfilClienteComponent);
exports.PerfilClienteComponent = PerfilClienteComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/perfil-cliente.component.js.map

/***/ }),

/***/ 817:
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
var api_config_1 = __webpack_require__(29);
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(20);
var abstract_service_1 = __webpack_require__(55);
//import { catchError, retry } from 'rxjs/operators';
var PedidoService = (function (_super) {
    __extends(PedidoService, _super);
    function PedidoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/pedido";
        return _this;
    }
    PedidoService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    PedidoService.prototype.findAll = function () {
        return this.http.get(this.url, this.getHearderToken());
    };
    PedidoService.prototype.salvar = function (cliente) {
        return this.http.post("" + this.url, JSON.stringify(cliente), this.getHearderTokenNoResponse());
    };
    PedidoService.prototype.changeStatus = function (cliente) {
        return this.http.put(this.url + "/" + cliente.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    PedidoService.prototype.atualizar = function (cliente) {
        return this.http.put(this.url + "/" + cliente.id, JSON.stringify(cliente), this.getHearderTokenNoResponse());
    };
    PedidoService.prototype.excluir = function (cliente) {
        return this.http.delete(this.url + "/" + cliente.id, this.getHearderToken());
    };
    return PedidoService;
}(abstract_service_1.AbstractService));
PedidoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], PedidoService);
exports.PedidoService = PedidoService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/pedido.service.js.map

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var perfil_cliente_component_1 = __webpack_require__(816);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var listar_cliente_component_1 = __webpack_require__(815);
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
                path: 'perfil',
                component: perfil_cliente_component_1.PerfilClienteComponent,
                data: {
                    title: 'Perfil'
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

/***/ 819:
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
var trata_error_service_1 = __webpack_require__(27);
var cliente_service_1 = __webpack_require__(148);
var consulta_cep_service_1 = __webpack_require__(151);
var api_config_1 = __webpack_require__(29);
var forms_1 = __webpack_require__(18);
var core_1 = __webpack_require__(1);
var abstract_popup_component_1 = __webpack_require__(64);
var ClientePopupModalComponent = (function (_super) {
    __extends(ClientePopupModalComponent, _super);
    function ClientePopupModalComponent(fb, clienteService, consultaCEPService) {
        var _this = _super.call(this, 'clientePopup') || this;
        _this.fb = fb;
        _this.clienteService = clienteService;
        _this.consultaCEPService = consultaCEPService;
        _this.enderecos = [];
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
        cliente.enderecos = this.enderecos;
        cliente.urlImagem = this.urlFoto;
        this.acao(cliente, this.clienteService);
    };
    ClientePopupModalComponent.prototype.mudarImage = function (evento) {
        this.atualizarFoto(evento.foto);
    };
    ClientePopupModalComponent.prototype.consultarCpf = function (nrCpf) {
        if (!this.formulario.controls['emAlteracao'].value) {
            this.clienteService.consultarPorCpf(nrCpf)
                .subscribe(function (res) { trata_error_service_1.TrataErrorService.emitirMensagemError("Já exite um cliente cadastrado com o CPF informado."); }, function (error) { return trata_error_service_1.TrataErrorService.limparMensagemError(); });
        }
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
                nrFoneWhatsapp: cliente.fone.nrFoneWhatsapp
            }
        });
        if (cliente.enderecos != undefined) {
            this.enderecos = cliente.enderecos;
        }
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
            })
        });
        this.enderecos = [];
        this.urlFoto = this.urlFotoAvatar;
    };
    ClientePopupModalComponent.prototype.atualizarFoto = function (foto) {
        this.urlFoto = foto;
    };
    ClientePopupModalComponent.prototype.confirmarEndereco = function (ender) {
        if (!ender.emAlteracao) {
            ender.id = '99' + (Math.floor((Math.random() * 100) + 1));
            this.enderecos.push(ender);
        }
        else {
            var position = this.enderecos.findIndex(function (x) { return x.id == ender.id; });
            this.enderecos[position] = ender;
        }
    };
    ClientePopupModalComponent.prototype.excluirEndereco = function (ender) {
        this.enderecos = this.enderecos.filter(function (end) { return end.id != ender.id; });
    };
    return ClientePopupModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
ClientePopupModalComponent = __decorate([
    core_1.Component({
        selector: 'cliente-popup-modal',
        template: __webpack_require__(825),
        styles: [__webpack_require__(822)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _b || Object, typeof (_c = typeof consulta_cep_service_1.ConsultaCEPService !== "undefined" && consulta_cep_service_1.ConsultaCEPService) === "function" && _c || Object])
], ClientePopupModalComponent);
exports.ClientePopupModalComponent = ClientePopupModalComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cliente-popup-modal.component.js.map

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".table th, .table td {\n  padding: 0.20rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"clienteModal.show()\">\r\n    <i class=\"icon-plus\"></i> Novo</button>\r\n\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de clientes\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 5%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th style=\"width: 45%\">Nome</th>\r\n                    <th class=\"text-center\"style=\"width: 20%\">CPF</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Situação</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td class=\"text-center\">\r\n                        <div class=\"avatar\">\r\n                            <foto-uri id=\"{{item.id}}\" modulo=\"CLI\" classCss=\"img-avatar\" alt=\"Avatar\"></foto-uri>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        {{item.nmPessoa | uppercase}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        {{item.nrCpf | cpfMask}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <status status={{item.status}}></status>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"clienteModal.showAlteracao(item)\">\r\n                            <i class=\"fa fa fa-edit\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"selecionarItem(item)\">\r\n                            <i class=\"fa fa-eraser\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-warning cursor-hands\" (click)=\"selecionarItemChangeStatus(item)\">\r\n                            <i class=\"fa fa-exclamation\"> </i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>\r\n\r\n<confirm-popup-modal #excluirModal popupStyle=\"danger\" (onClickConfirm)=\"excluir()\">\r\n    <strong>Deseja excluir a cliente?</strong>\r\n</confirm-popup-modal>\r\n\r\n<confirm-popup-modal #changeStatusModal popupStyle=\"danger\" (onClickConfirm)=\"changeStatus()\">\r\n    <strong>Deseja alterar o status do cliente?</strong>\r\n</confirm-popup-modal>\r\n\r\n<cliente-popup-modal #clienteModal (onClickConfirm)=\"carregarTodos()\"></cliente-popup-modal>"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Perfil</strong>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 col-md-4\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <strong>Imagens do produto</strong>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                  <div class=\"row\">\r\n                    <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                  <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n                    (onSelecionarImagem)=\"mudarImage($event)\">\r\n                  </upload-imagem>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--/.col-->\r\n\r\n            <div class=\"col-md-8 col-sm-8\">\r\n              <alert-mensagem [mostrarErro]=\"isErro\" titulo=\"Erro:\" [mensagem]=\"errorMensagem\"></alert-mensagem>\r\n              <form [formGroup]=\"formulario\" novalidade (ngSubmit)=\"confirmar()\">\r\n                  <tabset>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-list\"></i> Dados Pessoais &nbsp;\r\n                      </ng-template>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmPessoa'))\">\r\n                        <div class=\"col-sm-12\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Nome</label>\r\n                          <input #campoNome upper type=\"text\" formControlName=\"nmPessoa\" class=\"form-control input-sm\" name=\"nmPessoa\" maxlength=\"120\"\r\n                            [readonly]=\"formulario.get('emAlteracao').value\">\r\n                          <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmPessoa'))\" titulo=\"Erro:\" mensagem=\"o campo Nome ter entre 5 a 120 caracteres\">\r\n                          </alert-mensagem>\r\n                        </div>\r\n          \r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('nrCpf'))\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">CPF</label>\r\n                          <input type=\"text\" formControlName=\"nrCpf\" class=\"form-control input-sm\" name=\"nrCpf\" [textMask]=\"{mask: maskCPF}\" (blur)=\"consultarCpf($event.target.value)\"\r\n                            [readonly]=\"formulario.get('emAlteracao').value\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('dtNascimento'))\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Data de Nascimento</label>\r\n                          <input type=\"text\" formControlName=\"dtNascimento\" class=\"form-control input-sm\" name=\"dtNascimento\" [textMask]=\"{mask: maskData}\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\" formGroupName=\"fone\">\r\n                        <div class=\"col-sm-6\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Celular/Whatsapp</label>\r\n                          <input type=\"text\" formControlName=\"nrFoneCelular\" class=\"form-control input-sm\" name=\"nrFoneCelular\" [textMask]=\"{mask: maskFoneCelular}\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Residencial</label>\r\n                          <input type=\"text\" formControlName=\"nrFoneResidencial\" class=\"form-control input-sm\" name=\"nrFoneResidencial\" [textMask]=\"{mask: maskFoneResidencial}\">\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-list\"></i> Endereços &nbsp;\r\n                      </ng-template>\r\n                      <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                          <strong>Lista de endereços</strong>\r\n                          <div class=\"card-actions\">\r\n                              <button type=\"button\" (click)=\"cepPopuModal.show()\">\r\n                                  <i class=\"icon-plus\"></i>\r\n                                </button>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-block\" *ngIf=\"enderecos?.length > 0\">\r\n                          <div class=\"row\">\r\n          \r\n                            <table class=\"table table-striped\">\r\n                              <thead>\r\n                                <th class=\"text-left\">Descrição</th>\r\n                                <th class=\"text-right\">Cep</th>\r\n                                <th class=\"text-right\">Logradouro</th>\r\n                                <th class=\"text-right\">Cidade</th>\r\n                                <th class=\"text-right\">UF</th>\r\n                                <th class=\"text-right\">Ação</th>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngFor=\"let item of enderecos\">\r\n                                  <td class=\"text-left\">\r\n                                    <div>{{item.dsEndereco}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.nrCep | cepMask}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.dsLogradouro}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.nmCidade}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.ufCidade}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"cepPopuModal.showAlteracao(item)\">\r\n                                      <i class=\"fa fa fa-edit\"> </i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"excluirEndereco(item)\">\r\n                                      <i class=\"fa fa-eraser\"> </i>\r\n                                    </button>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                  </tabset>\r\n                </form>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div style=\"float: right;\">\r\n              <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmPerfil.show();\">\r\n                <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <cep-popup-modal #cepPopuModal (onClickConfirm)=\"confirmarEndereco($event)\">\r\n  </cep-popup-modal>\r\n</div>\r\n\r\n<confirm-popup-modal #modalConfirmPerfil popupStyle=\"primary\" (onClickConfirm)=\"btnConfirmar(formulario.value)\">\r\n    <strong>Confirma a alteraçdo do Perfil?</strong>\r\n  </confirm-popup-modal>"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<base-popup-modal [nomePopup]=\"nomeJanePopup\" #modalConfirm  modalSize=\"lg\" [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formulario.value)\"\r\n  [desabilitarBtnConfirmar]=\"!formulario.valid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Imagem da categoria</strong>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n            (onSelecionarImagem)=\"mudarImage($event)\">\r\n          </upload-imagem>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-md-8 col-sm-8\">\r\n      <alert-mensagem [mostrarErro]=\"isErro\" titulo=\"Erro:\" [mensagem]=\"errorMensagem\"></alert-mensagem>\r\n      <form [formGroup]=\"formulario\" novalidade (ngSubmit)=\"confirmar()\">\r\n        <tabset>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-list\"></i> Dados Pessoais &nbsp;\r\n            </ng-template>\r\n            <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmPessoa'))\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Nome</label>\r\n                <input #campoNome upper type=\"text\" formControlName=\"nmPessoa\" class=\"form-control input-sm\" name=\"nmPessoa\" maxlength=\"120\"\r\n                  [readonly]=\"formulario.get('emAlteracao').value\">\r\n                <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmPessoa'))\" titulo=\"Erro:\" mensagem=\"o campo Nome ter entre 5 a 120 caracteres\">\r\n                </alert-mensagem>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('nrCpf'))\">\r\n                <label class=\"form-control-label\" for=\"input-small\">CPF</label>\r\n                <input type=\"text\" formControlName=\"nrCpf\" class=\"form-control input-sm\" name=\"nrCpf\" [textMask]=\"{mask: maskCPF}\" (blur)=\"consultarCpf($event.target.value)\"\r\n                  [readonly]=\"formulario.get('emAlteracao').value\">\r\n              </div>\r\n              <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('dtNascimento'))\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Data de Nascimento</label>\r\n                <input type=\"text\" formControlName=\"dtNascimento\" class=\"form-control input-sm\" name=\"dtNascimento\" [textMask]=\"{mask: maskData}\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" formGroupName=\"fone\">\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Celular/Whatsapp</label>\r\n                <input type=\"text\" formControlName=\"nrFoneCelular\" class=\"form-control input-sm\" name=\"nrFoneCelular\" [textMask]=\"{mask: maskFoneCelular}\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Residencial</label>\r\n                <input type=\"text\" formControlName=\"nrFoneResidencial\" class=\"form-control input-sm\" name=\"nrFoneResidencial\" [textMask]=\"{mask: maskFoneResidencial}\">\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-list\"></i> Endereços &nbsp;\r\n            </ng-template>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <strong>Lista de endereços</strong>\r\n                <div class=\"card-actions\">\r\n                    <button type=\"button\" (click)=\"cepPopuModal.show()\">\r\n                        <i class=\"icon-plus\"></i>\r\n                      </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-block\" *ngIf=\"enderecos?.length > 0\">\r\n                <div class=\"row\">\r\n\r\n                  <table class=\"table table-striped\">\r\n                    <thead>\r\n                      <th class=\"text-left\">Descrição</th>\r\n                      <th class=\"text-right\">Cep</th>\r\n                      <th class=\"text-right\">Logradouro</th>\r\n                      <th class=\"text-right\">Cidade</th>\r\n                      <th class=\"text-right\">UF</th>\r\n                      <th class=\"text-right\">Ação</th>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of enderecos\">\r\n                        <td class=\"text-left\">\r\n                          <div>{{item.dsEndereco}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.nrCep | cepMask}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.dsLogradouro}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.nmCidade}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.ufCidade}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"cepPopuModal.showAlteracao(item)\">\r\n                            <i class=\"fa fa fa-edit\"> </i>\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"excluirEndereco(item)\">\r\n                            <i class=\"fa fa-eraser\"> </i>\r\n                          </button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n\r\n          <!-- \r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-calculator\"></i> Endereço &nbsp;\r\n            </ng-template>\r\n            <div class=\"form-group\" formGroupName=\"endereco\">\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"endCep\">CEP</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"cep\" placeholder=\"CEP\" formControlName=\"cep\" (blur)=\"consultarCEP($event.target.value)\"\r\n                    [textMask]=\"{mask: maskCEP}\">\r\n                </div>\r\n                <div class=\"form-group col-sm-8\">\r\n                  <label for=\"logradouro\">Endereço</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"logradouro\" placeholder=\"rua\" formControlName=\"logradouro\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-2\">\r\n                  <label for=\"numero\">Número</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"numero\" placeholder=\"número\" formControlName=\"numero\">\r\n                </div>\r\n                <div class=\"form-group col-sm-6\">\r\n                  <label for=\"complemento\">Complemento</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"complemento\" placeholder=\"Complemento\" formControlName=\"complemento\">\r\n                </div>\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"bairro\">Bairro</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"bairro\" placeholder=\"Bairro\" formControlName=\"bairro\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"sgUF\">Estado</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"uf\" placeholder=\"estado\" formControlName=\"uf\" [disableControl]=\"true\">\r\n                </div>\r\n                <div class=\"form-group col-sm-8\">\r\n                  <label for=\"cidade\">Cidade</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" formControlName=\"cidade\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab [disabled]=\"isAlteracao\">\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-pie-chart\"></i> Acesso\r\n            </ng-template>\r\n            <div formGroupName=\"usuario\">\r\n\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <label class=\"form-control-label\" for=\"input-small\">email</label>\r\n                  <input type=\"text\" formControlName=\"email\" class=\"form-control input-sm\" name=\"email\" lower>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Login</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"text\" formControlName=\"login\" class=\"form-control input-sm\" name=\"login\" maxlength=\"40\" lower>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Senha</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"password\" formControlName=\"senha\" class=\"form-control input-sm\" name=\"senha\" maxlength=\"8\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Confirmação</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"password\" formControlName=\"senhaConfirmacao\" class=\"form-control input-sm\" name=\"senhaConfirmacao\" maxlength=\"8\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n-->\r\n        </tabset>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</base-popup-modal>\r\n<cep-popup-modal #cepPopuModal (onClickConfirm)=\"confirmarEndereco($event)\">\r\n</cep-popup-modal>"

/***/ }),

/***/ 839:
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
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_base_component_1 = __webpack_require__(102);
var trata_error_service_1 = __webpack_require__(27);
var AbstractPedidoComponent = (function (_super) {
    __extends(AbstractPedidoComponent, _super);
    function AbstractPedidoComponent(fb, pagService, taxaService, servicoService, pedidoService, location, router) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.pagService = pagService;
        _this.taxaService = taxaService;
        _this.servicoService = servicoService;
        _this.pedidoService = pedidoService;
        _this.location = location;
        _this.router = router;
        _this.exibirProduto = false;
        _this.exibirDadosPedido = false;
        _this.exibirServicoEntrega = false;
        _this.formaPagmentos = [];
        _this.taxaEntregas = [];
        _this.servicoEntregas = [];
        return _this;
    }
    AbstractPedidoComponent.prototype.voltar = function () {
        this.location.back();
    };
    AbstractPedidoComponent.prototype.limpar = function () {
        this.exibirServicoEntrega = false;
        this.exibirDadosPedido = false;
    };
    AbstractPedidoComponent.prototype.totalItem = function (item) {
        return item.qtItem * item.produto.vlVenda;
    };
    AbstractPedidoComponent.prototype.decreaseQuantity = function (item) {
        item.qtItem--;
        if (item.qtItem == 0) {
            this.removeItem(item);
        }
        this.totalizarPedido();
    };
    AbstractPedidoComponent.prototype.increaseQuantity = function (item) {
        item.qtItem++;
        this.totalizarPedido();
    };
    AbstractPedidoComponent.prototype.removeItem = function (item) {
        this.pedido.itens = this.pedido.itens.filter(function (it) { return it.hash != item.hash; });
        this.totalizarPedido();
    };
    AbstractPedidoComponent.prototype.atualizarValorDesconto = function (desconto) {
        this.pedido.vlDesconto = Number(desconto.replace(',', "."));
        this.totalizarPedido();
    };
    AbstractPedidoComponent.prototype.totalizarPedido = function () {
        this.pedido.vlPedido = 0;
        if (this.pedido.itens.length > 0) {
            for (var _i = 0, _a = this.pedido.itens; _i < _a.length; _i++) {
                var item = _a[_i];
                var total = item.qtItem * item.produto.vlVenda;
                this.pedido.vlPedido += total;
            }
            this.pedido.vlPedido += this.pedido.vlTaxaEntrega - this.pedido.vlDesconto;
            this.exibirDadosPedido = true;
        }
        else {
            this.limpar();
        }
    };
    AbstractPedidoComponent.prototype.selecionarTaxaEntrega = function (te) {
        this.exibirServicoEntrega = !(te == 1);
        if (this.exibirServicoEntrega) {
            var position = this.taxaEntregas.findIndex(function (x) { return x.id == te; });
            this.pedido.vlTaxaEntrega = this.taxaEntregas[position].vlTaxaEntrega;
            this.exibirServicoEntrega = true;
        }
        else {
            this.pedido.vlTaxaEntrega = 0;
            this.exibirServicoEntrega = false;
        }
        this.totalizarPedido();
    };
    AbstractPedidoComponent.prototype.selecionarCliente = function (cliente) {
        this.exibirProduto = true;
        this.pedido.cliente = cliente;
        this.formulario.patchValue({
            cliente: {
                id: cliente.id,
                nmPessoa: cliente.nmPessoa
            },
            vlDesconto: ['']
        });
        this.pedido.itens = [];
        this.enderecos = cliente.enderecos;
    };
    AbstractPedidoComponent.prototype.adicionarProduto = function (pedidoItem) {
        var position = this.pedido.itens.findIndex(function (x) { return x.hash == pedidoItem.hash; });
        if (position == -1) {
            this.pedido.itens.push(pedidoItem);
        }
        else {
            this.pedido.itens[position].qtItem++;
        }
        this.totalizarPedido();
    };
    AbstractPedidoComponent.prototype.criarFormulario = function () {
        this.exibirProduto = false;
        this.pedido = {};
        this.pedido.itens = [];
        this.pedido.emAlteracao = false;
        this.pedido.vlTaxaEntrega = 0;
        this.pedido.vlDesconto = 0;
        this.pedido.status = 'E';
        this.formulario = this.fb.group({
            id: [''],
            cliente: this.fb.group({
                id: [''],
                nmPessoa: ['']
            }),
            vlDesconto: [''],
            enderecoEntrega: ['1'],
            taxaEntrega: ['1'],
            servicoEntrega: ['1'],
            formaPagamento: ['1']
        });
    };
    AbstractPedidoComponent.prototype.carregarCombos = function () {
        var _this = this;
        this.pagService.findAllAtivo().subscribe(function (res) { return _this.formaPagmentos = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        this.taxaService.findAllAtivo().subscribe(function (res) { return _this.taxaEntregas = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        this.servicoService.findAllAtivo().subscribe(function (res) { return _this.servicoEntregas = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    AbstractPedidoComponent.prototype.preencherPedido = function (pedidoForm) {
        this.pedido.id = pedidoForm.id;
        this.pedido.cliente = {};
        this.pedido.cliente.id = pedidoForm.cliente.id;
        this.pedido.vlDesconto = pedidoForm.vlDesconto;
        this.pedido.enderecoEntrega = {};
        this.pedido.enderecoEntrega.id = pedidoForm.enderecoEntrega;
        this.pedido.taxaEntrega = {};
        this.pedido.taxaEntrega.id = pedidoForm.taxaEntrega;
        if (pedidoForm.servicoEntrega != undefined) {
            this.pedido.servicoEntrega = {};
            this.pedido.servicoEntrega.id = pedidoForm.servicoEntrega;
        }
        this.pedido.formaPagamento = {};
        this.pedido.formaPagamento.id = pedidoForm.formaPagamento;
        this.pedido.origem = 'W';
    };
    return AbstractPedidoComponent;
}(abstract_base_component_1.AbstractBaseComponent));
exports.AbstractPedidoComponent = AbstractPedidoComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/abstract-pedido.component.js.map

/***/ }),

/***/ 840:
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
var forms_1 = __webpack_require__(18);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var common_1 = __webpack_require__(25);
var abstract_pedido_component_1 = __webpack_require__(839);
var pedido_service_1 = __webpack_require__(817);
var taxa_entrega_service_1 = __webpack_require__(807);
var forma_pagamento_service_1 = __webpack_require__(805);
var servico_entrega_service_1 = __webpack_require__(806);
var trata_error_service_1 = __webpack_require__(27);
var event_emitter_services_1 = __webpack_require__(28);
var CreatePedidoComponent = (function (_super) {
    __extends(CreatePedidoComponent, _super);
    function CreatePedidoComponent(fb, pagService, taxaService, servicoService, pedidoService, location, router) {
        var _this = _super.call(this, fb, pagService, taxaService, servicoService, pedidoService, location, router) || this;
        _this.fb = fb;
        _this.pagService = pagService;
        _this.taxaService = taxaService;
        _this.servicoService = servicoService;
        _this.pedidoService = pedidoService;
        _this.location = location;
        _this.router = router;
        return _this;
    }
    CreatePedidoComponent.prototype.ngOnInit = function () {
        this.criarFormulario();
        this.carregarCombos();
        this.limpar();
    };
    CreatePedidoComponent.prototype.confirmar = function (pedidoForm) {
        var _this = this;
        this.preencherPedido(pedidoForm);
        this.pedidoService.salvar(this.pedido)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Pedido', 'Pedido incluído com sucesso!!!');
            _this.router.navigate(['/pedidos/listar']);
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return CreatePedidoComponent;
}(abstract_pedido_component_1.AbstractPedidoComponent));
CreatePedidoComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(902),
        styles: [__webpack_require__(878)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof forma_pagamento_service_1.FormaPagamentoService !== "undefined" && forma_pagamento_service_1.FormaPagamentoService) === "function" && _b || Object, typeof (_c = typeof taxa_entrega_service_1.TaxaEntregaService !== "undefined" && taxa_entrega_service_1.TaxaEntregaService) === "function" && _c || Object, typeof (_d = typeof servico_entrega_service_1.ServicoEntregaService !== "undefined" && servico_entrega_service_1.ServicoEntregaService) === "function" && _d || Object, typeof (_e = typeof pedido_service_1.PedidoService !== "undefined" && pedido_service_1.PedidoService) === "function" && _e || Object, typeof (_f = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _f || Object, typeof (_g = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _g || Object])
], CreatePedidoComponent);
exports.CreatePedidoComponent = CreatePedidoComponent;
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/create-pedido.component.js.map

/***/ }),

/***/ 841:
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
var trata_error_service_1 = __webpack_require__(27);
var pedido_service_1 = __webpack_require__(817);
var cliente_service_1 = __webpack_require__(148);
var event_emitter_services_1 = __webpack_require__(28);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var abstract_base_component_1 = __webpack_require__(102);
var ListarPedidoComponent = (function (_super) {
    __extends(ListarPedidoComponent, _super);
    function ListarPedidoComponent(clienteService, pedidoService, router) {
        var _this = _super.call(this) || this;
        _this.clienteService = clienteService;
        _this.pedidoService = pedidoService;
        _this.router = router;
        _this.items = [];
        return _this;
    }
    ListarPedidoComponent.prototype.ngOnInit = function () {
        this.carregarTodos();
    };
    ListarPedidoComponent.prototype.selecionarItem = function (item) {
        this.pedido = item;
        this.popupExclusao.show();
    };
    ListarPedidoComponent.prototype.selecionarItemChangeStatus = function (item) {
        this.pedido = item;
        this.popupChangeStatus.show();
    };
    ListarPedidoComponent.prototype.changeStatus = function () {
        var _this = this;
        this.pedidoService.changeStatus(this.pedido)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Pedido', 'Status do pedido foi alterado com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarPedidoComponent.prototype.alterarPedido = function (pedido) {
        this.router.navigate(["pedidos/alterar/" + pedido.id]);
    };
    ListarPedidoComponent.prototype.excluir = function () {
        var _this = this;
        this.pedidoService.excluir(this.pedido)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Pedido', 'Pedido foi excluído com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarPedidoComponent.prototype.carregarTodos = function () {
        var _this = this;
        this.pedidoService.findAll().subscribe(function (res) { _this.items = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return ListarPedidoComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('excluirModal'),
    __metadata("design:type", Object)
], ListarPedidoComponent.prototype, "popupExclusao", void 0);
__decorate([
    core_1.ViewChild('changeStatusModal'),
    __metadata("design:type", Object)
], ListarPedidoComponent.prototype, "popupChangeStatus", void 0);
ListarPedidoComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(903),
        styles: [__webpack_require__(879)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _a || Object, typeof (_b = typeof pedido_service_1.PedidoService !== "undefined" && pedido_service_1.PedidoService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ListarPedidoComponent);
exports.ListarPedidoComponent = ListarPedidoComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-pedidocomponent.js.map

/***/ }),

/***/ 842:
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
var forms_1 = __webpack_require__(18);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var common_1 = __webpack_require__(25);
var abstract_pedido_component_1 = __webpack_require__(839);
var pedido_service_1 = __webpack_require__(817);
var taxa_entrega_service_1 = __webpack_require__(807);
var forma_pagamento_service_1 = __webpack_require__(805);
var servico_entrega_service_1 = __webpack_require__(806);
var trata_error_service_1 = __webpack_require__(27);
var event_emitter_services_1 = __webpack_require__(28);
var UpdatePedidoComponent = (function (_super) {
    __extends(UpdatePedidoComponent, _super);
    function UpdatePedidoComponent(fb, pagService, taxaService, servicoService, pedidoService, location, router, route) {
        var _this = _super.call(this, fb, pagService, taxaService, servicoService, pedidoService, location, router) || this;
        _this.fb = fb;
        _this.pagService = pagService;
        _this.taxaService = taxaService;
        _this.servicoService = servicoService;
        _this.pedidoService = pedidoService;
        _this.location = location;
        _this.router = router;
        _this.route = route;
        return _this;
    }
    UpdatePedidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.criarFormulario();
        this.limpar();
        this.carregarCombos();
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.pedidoService.findById(id).subscribe(function (resp) {
                _this.pedido = resp;
                _this.atualizarFormulario(_this.pedido);
            }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        });
    };
    UpdatePedidoComponent.prototype.confirmar = function (pedidoForm) {
        var _this = this;
        this.preencherPedido(pedidoForm);
        this.pedidoService.atualizar(this.pedido)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Pedido', 'Pedido alterado com sucesso!!!');
            _this.router.navigate(['/pedidos/listar']);
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    UpdatePedidoComponent.prototype.atualizarFormulario = function (pedido) {
        this.exibirProduto = true;
        this.exibirDadosPedido = true;
        this.enderecos = pedido.cliente.enderecos;
        this.formulario.patchValue({
            id: pedido.id,
            cliente: {
                id: pedido.cliente.id,
                nmPessoa: pedido.cliente.nmPessoa
            },
            taxaEntrega: pedido.taxaEntrega.id,
            formaPagamento: pedido.formaPagamento.id,
            vlDesconto: pedido.vlDesconto
        });
        if (pedido.enderecoEntrega != null) {
            this.formulario.patchValue({
                enderecoEntrega: pedido.enderecoEntrega.id,
            });
        }
        if (pedido.taxaEntrega.vlTaxaEntrega > 0) {
            this.exibirServicoEntrega = true;
            this.formulario.patchValue({
                servicoEntrega: pedido.servicoEntrega.id
            });
        }
        this.totalizarPedido();
    };
    return UpdatePedidoComponent;
}(abstract_pedido_component_1.AbstractPedidoComponent));
UpdatePedidoComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(904),
        styles: [__webpack_require__(880)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof forma_pagamento_service_1.FormaPagamentoService !== "undefined" && forma_pagamento_service_1.FormaPagamentoService) === "function" && _b || Object, typeof (_c = typeof taxa_entrega_service_1.TaxaEntregaService !== "undefined" && taxa_entrega_service_1.TaxaEntregaService) === "function" && _c || Object, typeof (_d = typeof servico_entrega_service_1.ServicoEntregaService !== "undefined" && servico_entrega_service_1.ServicoEntregaService) === "function" && _d || Object, typeof (_e = typeof pedido_service_1.PedidoService !== "undefined" && pedido_service_1.PedidoService) === "function" && _e || Object, typeof (_f = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _f || Object, typeof (_g = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _g || Object, typeof (_h = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _h || Object])
], UpdatePedidoComponent);
exports.UpdatePedidoComponent = UpdatePedidoComponent;
var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/update-pedido.component.js.map

/***/ }),

/***/ 862:
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
var listar_pedidocomponent_1 = __webpack_require__(841);
var create_pedido_component_1 = __webpack_require__(840);
var update_pedido_component_1 = __webpack_require__(842);
var routes = [
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
    },
    {
        path: '',
        data: {
            title: 'Pedidos'
        },
        children: [
            {
                path: 'listar',
                component: listar_pedidocomponent_1.ListarPedidoComponent,
                data: {
                    title: 'Listar'
                }
            },
            {
                path: 'novo',
                component: create_pedido_component_1.CreatePedidoComponent,
                data: {
                    title: 'novo pedido'
                }
            },
            {
                path: 'alterar/:id',
                component: update_pedido_component_1.UpdatePedidoComponent,
                data: {
                    title: 'alterar pedido'
                }
            }
        ]
    }
];
var PedidoRoutingModule = (function () {
    function PedidoRoutingModule() {
    }
    return PedidoRoutingModule;
}());
PedidoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], PedidoRoutingModule);
exports.PedidoRoutingModule = PedidoRoutingModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/pedido-routing.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 10%; }\n\n.table th, .table td {\n  padding: 0.20rem; }\n\n.coluna {\n  vertical-align: middle;\n  text-align: center; }\n\n.nolinebreak {\n  float: left;\n  padding-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".table th, .table td {\n  padding: 0.20rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 10%; }\n\n.table th, .table td {\n  padding: 0.20rem; }\n\n.coluna {\n  vertical-align: middle;\n  text-align: center; }\n\n.nolinebreak {\n  float: left;\n  padding-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-1\"></div>\r\n  <div class=\"col-sm-10\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Pedido</strong>\r\n        <small> - inclusão de um novo pedido</small>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <form [formGroup]=\"formulario\" class=\"form-horizontal \">\r\n\r\n          <div class=\"form-group row\" formGroupName=\"cliente\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Cliente:</label>\r\n            <div class=\"col-md-10\">\r\n              <input type=\"text\" formControlName=\"nmPessoa\" name=\"nmPessoa\" class=\"form-control input-sm cursor-hands\" readonly placeholder=\"clique para selecionar um cliente\"\r\n                (click)=\"modalCliente.show()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" formGroupName=\"cliente\" *ngIf=\"exibirProduto\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Produtos:</label>\r\n            <div class=\"col-md-10\">\r\n              <div class=\"from-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                      <strong>Produtos</strong>\r\n                      <div class=\"card-actions\">\r\n                        <button type=\"button\" (click)=\"modalProduto.show()\" class=\"cursor-hands\">\r\n                          <i class=\"icon-plus\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-block\" *ngIf=\"pedido.itens?.length > 0\">\r\n                      <table class=\"table table-striped\">\r\n                        <thead>\r\n                          <th style=\"width:65%;\" class=\"text-left\">Produto</th>\r\n                          <th style=\"width:10%;\" class=\"text-left\">Quantidade</th>\r\n                          <th style=\"width:10%;\" class=\"text-right\">Valor</th>\r\n                          <th style=\"width:05%\" class=\"text-left\">Ação</th>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of pedido.itens\">\r\n                            <td class=\"text-left\">\r\n                              <strong>{{item?.produto?.nmProduto}}</strong>\r\n                              <div *ngIf=\"item?.adicionais?.length > 0\" style=\"padding-left:5%\">\r\n                                <div *ngFor=\"let ad of item?.adicionais\">{{ad.nmProduto}}</div>\r\n                              </div>\r\n                            </td>\r\n                            <td class=\"text-left\" class=\"coluna\">\r\n                              <i class=\"fa fa-minus-circle fa-lg mt-0 cursor-hands\" style=\"color: red\" (click)=\"decreaseQuantity(item)\"></i>\r\n                              <strong>&nbsp;&nbsp; {{item.qtItem}}&nbsp;&nbsp; </strong>\r\n                              <i class=\"fa fa-plus-circle fa-lg mt-0  cursor-hands\" style=\"color: blue\" (click)=\"increaseQuantity(item)\"></i>\r\n                            </td>\r\n                            <td class=\"text-left\" class=\"coluna\">\r\n                              <strong>{{item.qtItem * item.produto.vlVenda | currency:'BRL':true}}</strong>\r\n                            </td>\r\n                            <td class=\"text-left\" class=\"coluna\">\r\n                              <i class=\"fa fa-trash fa-lg mt-0 cursor-hands\" style=\"color:red\" (click)=\"removeItem(item)\"></i>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n\r\n                    </div>\r\n                    <div class=\"card-footer\" *ngIf=\"pedido.itens?.length > 0\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-7\"></div>\r\n                        <div class=\"col-md-3 text-align-right\">\r\n                          <strong>Taxa Entrega:</strong>\r\n                        </div>\r\n                        <div class=\"col-md-2 text-align-right\">\r\n                          <strong>{{pedido.vlTaxaEntrega | currency:'BRL':true}}</strong>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\" *ngIf=\"pedido.vlDesconto >0\">\r\n                        <div class=\"col-md-7\"></div>\r\n                        <div class=\"col-md-3 text-align-right\">\r\n                          <strong>Descontos:</strong>\r\n                        </div>\r\n                        <div class=\"col-md-2 text-align-right\">\r\n                          <strong>{{pedido.vlDesconto | currency:'BRL':true}}</strong>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-7\"></div>\r\n                        <div class=\"col-md-3 text-align-right\">\r\n                          <strong>Totalização:</strong>\r\n                        </div>\r\n                        <div class=\"col-md-2 text-align-right\">\r\n                          <strong>{{pedido.vlPedido | currency:'BRL':true}}</strong>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Descontos</label>\r\n            <div class=\"col-md-2\">\r\n              <input type=\"text\" currencyMask [options]=\"{ prefix: '', thousands: '.', decimal: ',' }\" class=\"form-control input\"\r\n                name=\"vlDesconto\" maxlength=\"10\" formControlName=\"vlDesconto\" [ngClass]=\"aplicarCssForm(formulario.get('vlDesconto'))\"\r\n                (blur)=\"atualizarValorDesconto($event.target.value)\"\r\n                >\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Endereco de entrega:</label>\r\n            <div class=\"col-md-10\">\r\n              <select class=\"form-control\" id=\"enderecoEntrega\" formControlName=\"enderecoEntrega\">\r\n                <option *ngFor=\"let endr of enderecos\" value=\"{{endr.id}}\">\r\n                  {{endr.dsEndereco }} - {{endr.dsLogradouro}} - {{endr.nrNumero }} - {{endr.dsComplemento}} {{endr.nmCidade}} - {{endr.ufCidade}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Taxa de entrega:</label>\r\n            <div class=\"col-md-4\">\r\n              <select class=\"form-control\" formControlName=\"taxaEntrega\" id=\"taxaEntrega\" (ngModelChange)=\"selecionarTaxaEntrega($event)\">\r\n                <option *ngFor=\"let te of taxaEntregas\" value=\"{{te.id}}\">{{te.nmTaxaEntrega}} - {{te.vlTaxaEntrega | currency:'BRL':true}} </option>\r\n              </select>\r\n            </div>\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\" *ngIf=\"exibirServicoEntrega\">Servico de entrega:</label>\r\n            <div class=\"col-md-4\">\r\n              <select class=\"form-control\" formControlName=\"servicoEntrega\" id=\"servicoEntrega\" *ngIf=\"exibirServicoEntrega\">\r\n                <option *ngFor=\"let se of servicoEntregas\" value=\"{{se.id}}\">{{se.nmServicoEntrega}} - {{se.nrTelefone | telefone}} </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Pagamento:</label>\r\n            <div class=\"col-md-4\">\r\n              <select class=\"form-control\" id=\"formaPagamento\" formControlName=\"formaPagamento\">\r\n                <option *ngFor=\"let fp of formaPagmentos\" value=\"{{fp.id}}\">{{fp.nmFormaPagamento}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"card-footer\">\r\n          <div style=\"float: right;\">\r\n            <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n              <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n            </button>\r\n            <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmPedido.show();\">\r\n              <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <confirm-popup-modal #modalConfirmPedido popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n    <strong>Confirma a inclusão do pedido?</strong>\r\n  </confirm-popup-modal>\r\n\r\n  <pesquisar-cliente-popup-modal #modalCliente (onClickConfirm)=\"selecionarCliente($event)\"> </pesquisar-cliente-popup-modal>\r\n  <pesquisar-produto-popup-modal #modalProduto (onClickConfirm)=\"adicionarProduto($event)\"> </pesquisar-produto-popup-modal>\r\n</div>"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de pedidos\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 3%\">\r\n                        <i class=\"fa fa-hashtag\"></i>\r\n                    </th>\r\n                    <th class=\"text-center\" style=\"width: 7%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th class=\"text-left\" style=\"width: 30%\">Cliente</th>\r\n                    <th class=\"text-left\" style=\"width: 10%\">CPF</th>\r\n                    <th class=\"text-left\" style=\"width: 10%\">Telefone</th>\r\n                    <th class=\"text-center\" style=\"width: 10%\">Status</th>\r\n                    <th class=\"text-center\" style=\"width: 10%\">Origem</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td class=\"text-center\">\r\n                        {{item.id}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"avatar\">\r\n                            <foto-uri id=\"{{item.cliente.id}}\" modulo=\"CLI\" classCss=\"img-avatar\" alt=\"Avatar\"></foto-uri>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-left-midle\">\r\n                        <div class=\"margin-top\">\r\n                            {{item.cliente.nmPessoa | uppercase}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-left-midle\">\r\n                        <div class=\"margin-top\">\r\n                            {{item.cliente.nrCpf | cpfMask}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-left-midle\">\r\n                        <div class=\"margin-top\">\r\n                            {{item.cliente.fone.nrFoneCelular | telefone}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"margin-top\">\r\n                            <status-pedido status={{item.status}}></status-pedido>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"margin-top\">\r\n                            <origem-pedido status={{item.origem}}></origem-pedido>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"margin-top\">\r\n                            <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"alterarPedido(item)\">\r\n                                <i class=\"fa fa fa-edit\"> </i>\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\" (click)=\"selecionarItem(item)\">\r\n                                <i class=\"fa fa-eraser\"> </i>\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-sm btn-warning cursor-hands\" (click)=\"selecionarItemChangeStatus(item)\">\r\n                                <i class=\"fa fa-exclamation\"> </i>\r\n                            </button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>\r\n\r\n<confirm-popup-modal #excluirModal popupStyle=\"danger\" (onClickConfirm)=\"excluir()\">\r\n    <strong>Deseja excluir a pedido?</strong>\r\n</confirm-popup-modal>"

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-1\"></div>\r\n    <div class=\"col-sm-10\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Pedido</strong>\r\n          <small> - alteração de pedido</small>\r\n        </div>\r\n  \r\n        <div class=\"card-block\">\r\n          <form [formGroup]=\"formulario\" class=\"form-horizontal \">\r\n  \r\n            <div class=\"form-group row\" formGroupName=\"cliente\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Cliente:</label>\r\n              <div class=\"col-md-10\">\r\n                <input type=\"text\" formControlName=\"nmPessoa\" name=\"nmPessoa\" class=\"form-control input-sm cursor-hands\" readonly placeholder=\"clique para selecionar um cliente\"\r\n                  (click)=\"modalCliente.show()\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" formGroupName=\"cliente\" *ngIf=\"exibirProduto\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Produtos:</label>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"from-group row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"card\">\r\n                      <div class=\"card-header\">\r\n                        <strong>Produtos</strong>\r\n                        <div class=\"card-actions\">\r\n                          <button type=\"button\" (click)=\"modalProduto.show()\" class=\"cursor-hands\">\r\n                            <i class=\"icon-plus\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card-block\" *ngIf=\"pedido.itens?.length > 0\">\r\n                        <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <th style=\"width:65%;\" class=\"text-left\">Produto</th>\r\n                            <th style=\"width:10%;\" class=\"text-left\">Quantidade</th>\r\n                            <th style=\"width:10%;\" class=\"text-right\">Valor</th>\r\n                            <th style=\"width:05%\" class=\"text-left\">Ação</th>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of pedido.itens\">\r\n                              <td class=\"text-left\">\r\n                                <strong>{{item?.produto?.nmProduto}}</strong>\r\n                                <div *ngIf=\"item?.adicionais?.length > 0\" style=\"padding-left:5%\">\r\n                                  <div *ngFor=\"let ad of item?.adicionais\">{{ad.nmProduto}}</div>\r\n                                </div>\r\n                              </td>\r\n                              <td class=\"text-left\" class=\"coluna\">\r\n                                <i class=\"fa fa-minus-circle fa-lg mt-0 cursor-hands\" style=\"color: red\" (click)=\"decreaseQuantity(item)\"></i>\r\n                                <strong>&nbsp;&nbsp; {{item.qtItem}}&nbsp;&nbsp; </strong>\r\n                                <i class=\"fa fa-plus-circle fa-lg mt-0  cursor-hands\" style=\"color: blue\" (click)=\"increaseQuantity(item)\"></i>\r\n                              </td>\r\n                              <td class=\"text-left\" class=\"coluna\">\r\n                                <strong>{{item.qtItem * item.produto.vlVenda | currency:'BRL':true}}</strong>\r\n                              </td>\r\n                              <td class=\"text-left\" class=\"coluna\">\r\n                                <i class=\"fa fa-trash fa-lg mt-0 cursor-hands\" style=\"color:red\" (click)=\"removeItem(item)\"></i>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n  \r\n                      </div>\r\n                      <div class=\"card-footer\" *ngIf=\"pedido.itens?.length > 0\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-7\"></div>\r\n                          <div class=\"col-md-3 text-align-right\">\r\n                            <strong>Taxa Entrega:</strong>\r\n                          </div>\r\n                          <div class=\"col-md-2 text-align-right\">\r\n                            <strong>{{pedido.vlTaxaEntrega | currency:'BRL':true}}</strong>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"pedido.vlDesconto >0\">\r\n                          <div class=\"col-md-7\"></div>\r\n                          <div class=\"col-md-3 text-align-right\">\r\n                            <strong>Descontos:</strong>\r\n                          </div>\r\n                          <div class=\"col-md-2 text-align-right\">\r\n                            <strong>{{pedido.vlDesconto | currency:'BRL':true}}</strong>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-7\"></div>\r\n                          <div class=\"col-md-3 text-align-right\">\r\n                            <strong>Totalização:</strong>\r\n                          </div>\r\n                          <div class=\"col-md-2 text-align-right\">\r\n                            <strong>{{pedido.vlPedido | currency:'BRL':true}}</strong>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  \r\n  \r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Descontos</label>\r\n              <div class=\"col-md-2\">\r\n                <input type=\"text\" currencyMask [options]=\"{ prefix: '', thousands: '.', decimal: ',' }\" class=\"form-control input\"\r\n                  name=\"vlDesconto\" maxlength=\"10\" formControlName=\"vlDesconto\" [ngClass]=\"aplicarCssForm(formulario.get('vlDesconto'))\"\r\n                  (blur)=\"atualizarValorDesconto($event.target.value)\"\r\n                  >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Endereco de entrega:</label>\r\n              <div class=\"col-md-10\">\r\n                <select class=\"form-control\" id=\"enderecoEntrega\" formControlName=\"enderecoEntrega\">\r\n                  <option *ngFor=\"let endr of enderecos\" value=\"{{endr.id}}\">\r\n                    {{endr.dsEndereco }} - {{endr.dsLogradouro}} - {{endr.nrNumero }} - {{endr.dsComplemento}} {{endr.nmCidade}} - {{endr.ufCidade}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Taxa de entrega:</label>\r\n              <div class=\"col-md-4\">\r\n                <select class=\"form-control\" formControlName=\"taxaEntrega\" id=\"taxaEntrega\" (ngModelChange)=\"selecionarTaxaEntrega($event)\">\r\n                  <option *ngFor=\"let te of taxaEntregas\" value=\"{{te.id}}\">{{te.nmTaxaEntrega}} - {{te.vlTaxaEntrega | currency:'BRL':true}} </option>\r\n                </select>\r\n              </div>\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\" *ngIf=\"exibirServicoEntrega\">Servico de entrega:</label>\r\n              <div class=\"col-md-4\">\r\n                <select class=\"form-control\" formControlName=\"servicoEntrega\" id=\"servicoEntrega\" *ngIf=\"exibirServicoEntrega\">\r\n                  <option *ngFor=\"let se of servicoEntregas\" value=\"{{se.id}}\">{{se.nmServicoEntrega}} - {{se.nrTelefone | telefone}} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Pagamento:</label>\r\n              <div class=\"col-md-4\">\r\n                <select class=\"form-control\" id=\"formaPagamento\" formControlName=\"formaPagamento\">\r\n                  <option *ngFor=\"let fp of formaPagmentos\" value=\"{{fp.id}}\">{{fp.nmFormaPagamento}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class=\"card-footer\">\r\n            <div style=\"float: right;\">\r\n              <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n                <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n              </button>\r\n              <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmPedido.show();\">\r\n                <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <confirm-popup-modal #modalConfirmPedido popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n      <strong>Confirma a inclusão do pedido?</strong>\r\n    </confirm-popup-modal>\r\n  \r\n    <pesquisar-cliente-popup-modal #modalCliente (onClickConfirm)=\"selecionarCliente($event)\"> </pesquisar-cliente-popup-modal>\r\n    <pesquisar-produto-popup-modal #modalProduto (onClickConfirm)=\"adicionarProduto($event)\"> </pesquisar-produto-popup-modal>\r\n  </div>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map