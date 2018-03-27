webpackJsonp([0,16],{

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
var info_nutricional_service_1 = __webpack_require__(802);
var composicao_produto_popup_modal_component_1 = __webpack_require__(837);
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(25);
var forms_1 = __webpack_require__(18);
var http_1 = __webpack_require__(20);
var ng2_select_1 = __webpack_require__(155);
var angular2_ladda_1 = __webpack_require__(278);
var modal_1 = __webpack_require__(103);
var popup_modal_module_1 = __webpack_require__(147);
var produto_service_1 = __webpack_require__(150);
var categoria_service_1 = __webpack_require__(149);
var shared_component_module_1 = __webpack_require__(78);
var produto_routing_module_1 = __webpack_require__(839);
var listar_produtos_component_1 = __webpack_require__(825);
var create_produto_component_1 = __webpack_require__(823);
var edit_produtos_component_1 = __webpack_require__(824);
var storage_service_1 = __webpack_require__(65);
var angular2_text_mask_1 = __webpack_require__(104);
var ng2_currency_mask_1 = __webpack_require__(806);
var unidade_medida_service_1 = __webpack_require__(799);
var tabs_1 = __webpack_require__(152);
var info_nutricional_produto_popup_modal_component_1 = __webpack_require__(838);
var ProdutoModule = (function () {
    function ProdutoModule() {
    }
    return ProdutoModule;
}());
ProdutoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            modal_1.ModalModule.forRoot(),
            shared_component_module_1.SharedComponentModule,
            forms_1.ReactiveFormsModule,
            popup_modal_module_1.PopupModalModule,
            http_1.HttpClientModule,
            produto_routing_module_1.ProdutoRoutingModule,
            ng2_select_1.SelectModule,
            tabs_1.TabsModule,
            angular2_ladda_1.LaddaModule,
            angular2_text_mask_1.TextMaskModule,
            ng2_currency_mask_1.CurrencyMaskModule
        ],
        declarations: [
            listar_produtos_component_1.ListarProdutosComponent,
            create_produto_component_1.CreateProdutoComponent,
            edit_produtos_component_1.EditProdutosComponent,
            composicao_produto_popup_modal_component_1.ComposicaoProdutoPopupModalComponent,
            info_nutricional_produto_popup_modal_component_1.InfoNutricionalProdutoPopupModalComponent
        ],
        providers: [
            produto_service_1.ProdutoService,
            categoria_service_1.CategoriaService,
            unidade_medida_service_1.UnidadeMedidaService,
            storage_service_1.StorageService,
            info_nutricional_service_1.InfoNutricionalService
        ]
    })
], ProdutoModule);
exports.ProdutoModule = ProdutoModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/produto.module.js.map

/***/ }),

/***/ 799:
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
var api_config_1 = __webpack_require__(34);
var http_1 = __webpack_require__(20);
var core_1 = __webpack_require__(1);
var abstract_service_1 = __webpack_require__(55);
var UnidadeMedidaService = (function (_super) {
    __extends(UnidadeMedidaService, _super);
    function UnidadeMedidaService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/unidademedida";
        return _this;
    }
    UnidadeMedidaService.prototype.findAll = function () {
        return this.http.get(this.url + "/all", this.getHearderToken());
    };
    UnidadeMedidaService.prototype.findAllAtivo = function () {
        return this.http.get(this.url + "/");
    };
    UnidadeMedidaService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    UnidadeMedidaService.prototype.salvar = function (unidade) {
        return this.http.post(this.url + "/", JSON.stringify(unidade), this.getHearderTokenNoResponse());
    };
    UnidadeMedidaService.prototype.changeStatus = function (unidade) {
        return this.http.put(this.url + "/" + unidade.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    UnidadeMedidaService.prototype.atualizar = function (unidade) {
        return this.http.put(this.url + "/" + unidade.id, JSON.stringify(unidade), this.getHearderTokenNoResponse());
    };
    UnidadeMedidaService.prototype.excluir = function (unidade) {
        var url = this.url + "/" + unidade.id;
        return this.http.delete(url, this.getHearderToken());
    };
    return UnidadeMedidaService;
}(abstract_service_1.AbstractService));
UnidadeMedidaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], UnidadeMedidaService);
exports.UnidadeMedidaService = UnidadeMedidaService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/unidade-medida.service.js.map

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(18);
var currency_mask_config_1 = __webpack_require__(807);
var input_handler_1 = __webpack_require__(809);
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

/***/ 802:
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
var api_config_1 = __webpack_require__(34);
var http_1 = __webpack_require__(20);
var core_1 = __webpack_require__(1);
var abstract_service_1 = __webpack_require__(55);
var InfoNutricionalService = (function (_super) {
    __extends(InfoNutricionalService, _super);
    function InfoNutricionalService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/infonutricional";
        return _this;
    }
    InfoNutricionalService.prototype.findAll = function () {
        return this.http.get(this.url + "/all", this.getHearderToken());
    };
    InfoNutricionalService.prototype.findAllAtivo = function () {
        return this.http.get(this.url + "/");
    };
    InfoNutricionalService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    InfoNutricionalService.prototype.salvar = function (info) {
        return this.http.post(this.url + "/", JSON.stringify(info), this.getHearderTokenNoResponse());
    };
    InfoNutricionalService.prototype.changeStatus = function (info) {
        return this.http.put(this.url + "/" + info.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    InfoNutricionalService.prototype.atualizar = function (info) {
        return this.http.put(this.url + "/" + info.id, JSON.stringify(info), this.getHearderTokenNoResponse());
    };
    InfoNutricionalService.prototype.excluir = function (info) {
        var url = this.url + "/" + info.id;
        return this.http.delete(url, this.getHearderToken());
    };
    return InfoNutricionalService;
}(abstract_service_1.AbstractService));
InfoNutricionalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], InfoNutricionalService);
exports.InfoNutricionalService = InfoNutricionalService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/info-nutricional.service.js.map

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(800));
__export(__webpack_require__(808));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
exports.CURRENCY_MASK_CONFIG = new core_1.InjectionToken("currency.mask.config");
//# sourceMappingURL=currency-mask.config.js.map

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(25);
var forms_1 = __webpack_require__(18);
var core_1 = __webpack_require__(1);
var currency_mask_directive_1 = __webpack_require__(800);
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

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_service_1 = __webpack_require__(811);
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

/***/ 810:
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

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_manager_1 = __webpack_require__(810);
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

/***/ 822:
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
var trata_error_service_1 = __webpack_require__(32);
var abstract_base_component_1 = __webpack_require__(102);
var forms_1 = __webpack_require__(18);
var AbstractProdutoComponent = (function (_super) {
    __extends(AbstractProdutoComponent, _super);
    function AbstractProdutoComponent(fb, location, categoriaService, unidadeService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.location = location;
        _this.categoriaService = categoriaService;
        _this.unidadeService = unidadeService;
        _this.produtosComposicoes = [];
        _this.produtosInfoNutricionais = [];
        _this.comboUnidades = [];
        _this.comboUnidadesEmCasa = [];
        _this.comboCategorias = [];
        return _this;
    }
    AbstractProdutoComponent.prototype.carregarCombosProduto = function () {
        var _this = this;
        this.categoriaService.findAll()
            .subscribe(function (response) { return _this.comboCategorias = _this.preencharCombo(response, 'id', 'nmCategoria'); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        this.unidadeService.findAll()
            .subscribe(function (response) {
            _this.comboUnidades = _this.preencharCombo(response, 'id', 'sgUnidadeMedida');
            _this.comboUnidadesEmCasa = _this.preencharCombo(response, 'id', 'sgUnidadeMedida');
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    AbstractProdutoComponent.prototype.voltar = function () {
        this.location.back();
    };
    AbstractProdutoComponent.prototype.mudarImage = function (evento) {
        this.atualizarFoto(evento.foto);
    };
    AbstractProdutoComponent.prototype.atualizarFoto = function (foto) {
        this.urlFoto = foto;
    };
    AbstractProdutoComponent.prototype.criarFormulario = function () {
        this.formulario = this.fb.group({
            id: [''],
            nmProduto: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(25)]],
            vlVenda: ['', forms_1.Validators.required],
            vlCompra: [''],
            status: ['A'],
            urlImagem: [''],
            categoria: ['', forms_1.Validators.required],
            unidadeVenda: [''],
            qtAcompanhamento: [''],
            qtMinimaEstoque: [''],
            nrCodigoBarra: [''],
            dsUrlBlog: [''],
            dsInfoComplementar: [''],
            emCada: [''],
            qtEmcada: [''],
            composicoes: [''],
            infoNutricionais: ['']
        });
        this.urlFoto = this.urlFotoAvatar;
    };
    AbstractProdutoComponent.prototype.atualizarForm = function (produto) {
        console.log('alteraçao', produto);
        this.formulario.patchValue({
            id: produto.id,
            idEmpresa: produto.idEmpresa,
            nmProduto: produto.nmProduto,
            vlVenda: produto.vlVenda,
            vlCompra: produto.vlCompra,
            status: produto.status,
            urlImagem: produto.urlImagem,
            qtMinimaEstoque: produto.qtMinimaEstoque,
            qtAcompanhamento: produto.qtAcompanhamento,
            dsUrlBlog: produto.dsUrlBlog,
            qtEmcada: produto.qtEmcada,
            nrCodigoBarra: produto.nrCodigoBarra,
            dsInfoComplementar: produto.dsInfoComplementar
        });
        if (produto.categoria != null) {
            this.formulario.patchValue({
                categoria: [{ id: produto.categoria.id, text: produto.categoria.nmCategoria }],
            });
        }
        if (produto.unidadeVenda != null) {
            this.formulario.patchValue({
                unidadeVenda: [{ id: produto.unidadeVenda.id, text: produto.unidadeVenda.nmUnidadeMedida }],
            });
        }
        if (produto.emCada != null) {
            this.formulario.patchValue({
                emCada: [{ id: produto.emCada.id, text: produto.emCada.nmUnidadeMedida }],
            });
        }
        if (produto.composicoes != null) {
            this.produtosComposicoes = produto.composicoes;
        }
        if (produto.infoNutricionais != null) {
            this.produtosInfoNutricionais = produto.infoNutricionais;
        }
    };
    AbstractProdutoComponent.prototype.confirmarCompProd = function (value) {
        var prod = {};
        prod.idProduto = value.idProdutoPai;
        prod.idProdutoComposicao = value.produtoComp[0].id;
        prod.nmProdutoComposicao = value.produtoComp[0].text;
        prod.idUnidadeMedida = value.unidade[0].id;
        prod.nmUnidadeMedida = value.unidade[0].text;
        prod.qtUtilizada = Number(value.qtUtilizada);
        prod.mostrarUnidade = value.mostrarUnidade;
        prod.emAlteracao = value.emAlteracao;
        var position = this.produtosComposicoes.findIndex(function (x) { return x.idProdutoComposicao == prod.idProdutoComposicao; });
        if (position == -1) {
            this.produtosComposicoes.push(prod);
        }
        else {
            if (prod.emAlteracao) {
                this.produtosComposicoes[position] = prod;
            }
            else {
                this.produtosComposicoes[position].qtUtilizada += prod.qtUtilizada;
            }
        }
    };
    AbstractProdutoComponent.prototype.excluirItem = function (item) {
        this.produtosComposicoes =
            this.produtosComposicoes
                .filter(function (prod) { return prod.idProdutoComposicao != item.idProdutoComposicao; });
    };
    AbstractProdutoComponent.prototype.confirmarInfoNutricional = function (value) {
        var prod = {};
        prod.idProduto = value.idProduto;
        prod.idInfoNutricional = value.infoNutricional[0].id;
        prod.dsInfoNutricional = value.infoNutricional[0].text;
        prod.idUnidadeMedida = value.unidade[0].id;
        prod.sgUnidadeMedida = value.unidade[0].text;
        prod.qtUtilizada = Number(value.qtUtilizada);
        var position = this.produtosInfoNutricionais.findIndex(function (x) { return x.idInfoNutricional == prod.idInfoNutricional; });
        if (position == -1) {
            this.produtosInfoNutricionais.push(prod);
        }
        else {
            if (prod.emAlteracao) {
                this.produtosInfoNutricionais[position] = prod;
            }
            else {
                this.produtosInfoNutricionais[position].qtUtilizada += prod.qtUtilizada;
            }
        }
    };
    AbstractProdutoComponent.prototype.excluirItemInfoNutriciobnal = function (item) {
        this.produtosInfoNutricionais =
            this.produtosInfoNutricionais
                .filter(function (prod) { return prod.idInfoNutricional != item.idInfoNutricional; });
    };
    AbstractProdutoComponent.prototype.preencharProduto = function (value) {
        var prod = {};
        prod.id = value.idProduto;
        prod.nmProduto = value.nmProduto;
        prod.vlVenda = value.vlVenda;
        prod.vlCompra = value.vlCompra;
        prod.stProdutoComposto = value.stProdutoComposto;
        prod.status = 'A';
        prod.urlImagem = this.urlFoto;
        prod.categoria = { id: value.categoria[0].id, nmCategoria: value.categoria[0].text },
            prod.unidadeVenda = { id: value.unidadeVenda[0].id, nmUnidadeMedida: value.unidadeVenda[0].text };
        prod.qtMinimaEstoque = value.qtMinimaEstoque;
        prod.nrCodigoBarra = value.nrCodigoBarra;
        prod.dsUrlBlog = value.dsUrlBlog;
        prod.dsInfoComplementar = value.dsInfoComplementar;
        prod.emCada = { id: value.emCada[0].id, nmUnidadeMedida: value.emCada[0].text };
        prod.qtEmcada = value.qtEmcada;
        prod.composicoes = this.produtosComposicoes;
        prod.infoNutricionais = this.produtosInfoNutricionais;
        return prod;
    };
    return AbstractProdutoComponent;
}(abstract_base_component_1.AbstractBaseComponent));
exports.AbstractProdutoComponent = AbstractProdutoComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/abstract-produto.component.js.map

/***/ }),

/***/ 823:
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
var trata_error_service_1 = __webpack_require__(32);
var forms_1 = __webpack_require__(18);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var common_1 = __webpack_require__(25);
var produto_service_1 = __webpack_require__(150);
var categoria_service_1 = __webpack_require__(149);
var abstract_produto_component_1 = __webpack_require__(822);
var event_emitter_services_1 = __webpack_require__(27);
var unidade_medida_service_1 = __webpack_require__(799);
var CreateProdutoComponent = (function (_super) {
    __extends(CreateProdutoComponent, _super);
    function CreateProdutoComponent(fb, location, categoriaService, unidadeService, produtoService, router) {
        var _this = _super.call(this, fb, location, categoriaService, unidadeService) || this;
        _this.fb = fb;
        _this.location = location;
        _this.categoriaService = categoriaService;
        _this.unidadeService = unidadeService;
        _this.produtoService = produtoService;
        _this.router = router;
        return _this;
    }
    CreateProdutoComponent.prototype.ngOnInit = function () {
        this.criarFormulario();
        this.carregarCombosProduto();
    };
    CreateProdutoComponent.prototype.confirmar = function (value) {
        var _this = this;
        var prod = this.preencharProduto(value);
        this.produtoService.salvar(prod)
            .subscribe(function (response) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Produtos', 'Produto incluído com sucesso!!!');
            _this.router.navigate(['/produtos/listar']);
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return CreateProdutoComponent;
}(abstract_produto_component_1.AbstractProdutoComponent));
CreateProdutoComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(871),
        styles: [__webpack_require__(853)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof categoria_service_1.CategoriaService !== "undefined" && categoria_service_1.CategoriaService) === "function" && _c || Object, typeof (_d = typeof unidade_medida_service_1.UnidadeMedidaService !== "undefined" && unidade_medida_service_1.UnidadeMedidaService) === "function" && _d || Object, typeof (_e = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _e || Object, typeof (_f = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _f || Object])
], CreateProdutoComponent);
exports.CreateProdutoComponent = CreateProdutoComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/create-produto.component.js.map

/***/ }),

/***/ 824:
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
var image_service_1 = __webpack_require__(79);
var unidade_medida_service_1 = __webpack_require__(799);
var trata_error_service_1 = __webpack_require__(32);
var forms_1 = __webpack_require__(18);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var common_1 = __webpack_require__(25);
var produto_service_1 = __webpack_require__(150);
var categoria_service_1 = __webpack_require__(149);
var abstract_produto_component_1 = __webpack_require__(822);
var event_emitter_services_1 = __webpack_require__(27);
var EditProdutosComponent = (function (_super) {
    __extends(EditProdutosComponent, _super);
    function EditProdutosComponent(fb, route, location, categoriaService, unidadeService, produtoService, image, router) {
        var _this = _super.call(this, fb, location, categoriaService, unidadeService) || this;
        _this.fb = fb;
        _this.route = route;
        _this.location = location;
        _this.categoriaService = categoriaService;
        _this.unidadeService = unidadeService;
        _this.produtoService = produtoService;
        _this.image = image;
        _this.router = router;
        return _this;
    }
    EditProdutosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.criarFormulario();
        this.carregarCombosProduto();
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.produtoService.findById(id).subscribe(function (resp) {
                var produto = resp;
                _this.atualizarForm(produto);
                _this.image.getImageFromBucket(produto.id, 'PRD')
                    .subscribe(function (res) { _this.urlFoto = _this.image.getImage(produto.id, 'PRD'); }, function (error) { _this.urlFoto = _this.image.getImage(produto.id, 'PRD'); });
            }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        });
    };
    EditProdutosComponent.prototype.confirmar = function (value) {
        var _this = this;
        var prod = this.preencharProduto(value);
        this.produtoService.atualizar(prod)
            .subscribe(function (response) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Produtos', 'Produto alterado com sucesso!!!');
            _this.router.navigate(['/produtos/listar']);
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return EditProdutosComponent;
}(abstract_produto_component_1.AbstractProdutoComponent));
EditProdutosComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(872),
        styles: [__webpack_require__(854)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, typeof (_d = typeof categoria_service_1.CategoriaService !== "undefined" && categoria_service_1.CategoriaService) === "function" && _d || Object, typeof (_e = typeof unidade_medida_service_1.UnidadeMedidaService !== "undefined" && unidade_medida_service_1.UnidadeMedidaService) === "function" && _e || Object, typeof (_f = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _f || Object, typeof (_g = typeof image_service_1.ImageService !== "undefined" && image_service_1.ImageService) === "function" && _g || Object, typeof (_h = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _h || Object])
], EditProdutosComponent);
exports.EditProdutosComponent = EditProdutosComponent;
var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/edit-produtos.component.js.map

/***/ }),

/***/ 825:
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
var event_emitter_services_1 = __webpack_require__(27);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var api_config_1 = __webpack_require__(34);
var produto_service_1 = __webpack_require__(150);
var abstract_base_component_1 = __webpack_require__(102);
var trata_error_service_1 = __webpack_require__(32);
var ListarProdutosComponent = (function (_super) {
    __extends(ListarProdutosComponent, _super);
    function ListarProdutosComponent(produtoService, router) {
        var _this = _super.call(this) || this;
        _this.produtoService = produtoService;
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
        this.produtoService.changeStatus(this.produto)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Produtos', 'Status do produto alterado com sucesso!!!');
            _this.carregarProdutos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarProdutosComponent.prototype.excluirCategoria = function () {
        var _this = this;
        this.produtoService.excluir(this.produto)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Produtos', 'Produto excluído com sucesso!!!');
            _this.carregarProdutos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarProdutosComponent.prototype.alterarProduto = function (produto) {
        this.router.navigate(["produtos/editar/" + produto.id]);
    };
    ListarProdutosComponent.prototype.carregarProdutos = function () {
        var _this = this;
        this.produtoService.findAll()
            .subscribe(function (res) { return _this.items = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return ListarProdutosComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('modalExcluirProduto'),
    __metadata("design:type", Object)
], ListarProdutosComponent.prototype, "popupExclusao", void 0);
__decorate([
    core_1.ViewChild('modalChangeSatusProduto'),
    __metadata("design:type", Object)
], ListarProdutosComponent.prototype, "popupChangeStatus", void 0);
ListarProdutosComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(873),
        styles: [__webpack_require__(855)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ListarProdutosComponent);
exports.ListarProdutosComponent = ListarProdutosComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-produtos.component.js.map

/***/ }),

/***/ 837:
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
var trata_error_service_1 = __webpack_require__(32);
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(18);
var produto_service_1 = __webpack_require__(150);
var event_emitter_services_1 = __webpack_require__(27);
var abstract_popup_component_1 = __webpack_require__(64);
var unidade_medida_service_1 = __webpack_require__(799);
var ComposicaoProdutoPopupModalComponent = (function (_super) {
    __extends(ComposicaoProdutoPopupModalComponent, _super);
    function ComposicaoProdutoPopupModalComponent(fb, unidadeService, produtoService) {
        var _this = _super.call(this, 'composicaoProdutoPopupModal') || this;
        _this.fb = fb;
        _this.unidadeService = unidadeService;
        _this.produtoService = produtoService;
        _this.checkMostrar = true;
        _this.comboCompUnidades = [];
        _this.comboCompProdutos = [];
        return _this;
    }
    ComposicaoProdutoPopupModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.criarFormProdComp();
        this.produtoService.findAllProdutoInterno()
            .subscribe(function (response) { return _this.comboCompProdutos = _this.preencharCombo(response, 'id', 'nmProduto'); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        this.unidadeService.findAllAtivo()
            .subscribe(function (response) { return _this.comboCompUnidades = _this.preencharCombo(response, 'id', 'sgUnidadeMedida'); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ComposicaoProdutoPopupModalComponent.prototype.show = function () {
        this.criarFormProdComp();
        this.showPopup("Inclusão de produto na composição");
    };
    ComposicaoProdutoPopupModalComponent.prototype.showAlteracao = function (item) {
        this.alterarProdutoComp(item);
        this.showPopup("Alteração de produto na composição");
    };
    ComposicaoProdutoPopupModalComponent.prototype.btnConfirmar = function (value) {
        event_emitter_services_1.EventEmitterService.closePopup(this.nomeJanePopup);
        this.onClickConfirm.emit(value);
    };
    ComposicaoProdutoPopupModalComponent.prototype.criarFormProdComp = function () {
        this.formProdComp = this.fb.group({
            idProdutoPai: [],
            produtoComp: ['', forms_1.Validators.required],
            unidade: ['', forms_1.Validators.required],
            qtUtilizada: ['', forms_1.Validators.required],
            mostrarUnidade: ['S'],
            emAlteracao: [false]
        });
    };
    ComposicaoProdutoPopupModalComponent.prototype.compProdCheckMostrar = function (valor) {
        this.formProdComp.patchValue({
            mostrarUnidade: valor ? 'S' : 'N'
        });
    };
    ComposicaoProdutoPopupModalComponent.prototype.alterarProdutoComp = function (item) {
        this.formProdComp.patchValue({
            produtoComp: [{ id: item.idProdutoComposicao, text: item.nmProdutoComposicao }],
            unidade: [{ id: item.idUnidadeMedida, text: item.nmUnidadeMedida }],
            qtUtilizada: item.qtUtilizada,
            mostrarUnidade: item.mostrarUnidade,
            emAlteracao: true
        });
    };
    return ComposicaoProdutoPopupModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
ComposicaoProdutoPopupModalComponent = __decorate([
    core_1.Component({
        selector: 'composicao-produto-popup-modal',
        styles: [__webpack_require__(856)],
        template: __webpack_require__(874)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof unidade_medida_service_1.UnidadeMedidaService !== "undefined" && unidade_medida_service_1.UnidadeMedidaService) === "function" && _b || Object, typeof (_c = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _c || Object])
], ComposicaoProdutoPopupModalComponent);
exports.ComposicaoProdutoPopupModalComponent = ComposicaoProdutoPopupModalComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/composicao-produto-popup-modal.component.js.map

/***/ }),

/***/ 838:
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
var info_nutricional_service_1 = __webpack_require__(802);
var trata_error_service_1 = __webpack_require__(32);
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(18);
var event_emitter_services_1 = __webpack_require__(27);
var abstract_popup_component_1 = __webpack_require__(64);
var unidade_medida_service_1 = __webpack_require__(799);
var InfoNutricionalProdutoPopupModalComponent = (function (_super) {
    __extends(InfoNutricionalProdutoPopupModalComponent, _super);
    function InfoNutricionalProdutoPopupModalComponent(fb, unidadeService, infoService) {
        var _this = _super.call(this, 'infoNutricionalProdutoPopup') || this;
        _this.fb = fb;
        _this.unidadeService = unidadeService;
        _this.infoService = infoService;
        _this.checkMostrar = true;
        _this.comboCompUnidades = [];
        _this.comboInfoNutriciais = [];
        return _this;
    }
    InfoNutricionalProdutoPopupModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.criarFormProdInfo();
        this.infoService.findAll()
            .subscribe(function (response) { return _this.comboInfoNutriciais = _this.preencharCombo(response, 'id', 'nmInfoNutricional'); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        this.unidadeService.findAllAtivo()
            .subscribe(function (response) { return _this.comboCompUnidades = _this.preencharCombo(response, 'id', 'sgUnidadeMedida'); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    InfoNutricionalProdutoPopupModalComponent.prototype.show = function () {
        this.criarFormProdInfo();
        this.showPopup("Inclusão de informações nutricionais");
    };
    InfoNutricionalProdutoPopupModalComponent.prototype.showAlteracao = function (item) {
        this.alterarProdutoComp(item);
        this.showPopup("Alteração de informações nutricionais");
    };
    InfoNutricionalProdutoPopupModalComponent.prototype.btnConfirmar = function (value) {
        event_emitter_services_1.EventEmitterService.closePopup(this.nomeJanePopup);
        this.onClickConfirm.emit(value);
    };
    InfoNutricionalProdutoPopupModalComponent.prototype.criarFormProdInfo = function () {
        this.formProdInfo = this.fb.group({
            idProduto: [],
            infoNutricional: ['', forms_1.Validators.required],
            unidade: ['', forms_1.Validators.required],
            qtUtilizada: ['', forms_1.Validators.required],
            emAlteracao: [false]
        });
    };
    InfoNutricionalProdutoPopupModalComponent.prototype.compProdCheckMostrar = function (valor) {
        this.formProdInfo.patchValue({
            mostrarUnidade: valor ? 'S' : 'N'
        });
    };
    InfoNutricionalProdutoPopupModalComponent.prototype.alterarProdutoComp = function (item) {
        this.formProdInfo.patchValue({
            idProduto: item.idProduto,
            infoNutricional: [{ id: item.idInfoNutricional, text: item.dsInfoNutricional }],
            unidade: [{ id: item.idUnidadeMedida, text: item.sgUnidadeMedida }],
            qtUtilizada: ['', forms_1.Validators.required],
            emAlteracao: [false]
        });
    };
    return InfoNutricionalProdutoPopupModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
InfoNutricionalProdutoPopupModalComponent = __decorate([
    core_1.Component({
        selector: 'info-nutricional-produto-popup-modal',
        template: __webpack_require__(875)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof unidade_medida_service_1.UnidadeMedidaService !== "undefined" && unidade_medida_service_1.UnidadeMedidaService) === "function" && _b || Object, typeof (_c = typeof info_nutricional_service_1.InfoNutricionalService !== "undefined" && info_nutricional_service_1.InfoNutricionalService) === "function" && _c || Object])
], InfoNutricionalProdutoPopupModalComponent);
exports.InfoNutricionalProdutoPopupModalComponent = InfoNutricionalProdutoPopupModalComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/info-nutricional-produto-popup-modal.component.js.map

/***/ }),

/***/ 839:
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
var listar_produtos_component_1 = __webpack_require__(825);
var create_produto_component_1 = __webpack_require__(823);
var edit_produtos_component_1 = __webpack_require__(824);
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
                component: create_produto_component_1.CreateProdutoComponent,
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
var ProdutoRoutingModule = (function () {
    function ProdutoRoutingModule() {
    }
    return ProdutoRoutingModule;
}());
ProdutoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ProdutoRoutingModule);
exports.ProdutoRoutingModule = ProdutoRoutingModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/produto-routing.module.js.map

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 10%; }\n\n.table th, .table td {\n  padding: 0.20rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 10%; }\n\n.table th, .table td {\n  padding: 0.20rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".table th, .table td {\n  padding: 0.25rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".modal-dialog {\n  padding-top: 10%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Produto</strong>\r\n        <small> - inclusão de um novo produto</small>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 col-md-4\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <strong>Imagens do produto</strong>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                  <div class=\"row\">\r\n                    <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                  <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n                    (onSelecionarImagem)=\"mudarImage($event)\">\r\n                  </upload-imagem>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--/.col-->\r\n\r\n            <div class=\"col-md-8 col-sm-8\">\r\n              <form [formGroup]=\"formulario\">\r\n                <tabset>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"icon-list\"></i> Dados &nbsp;\r\n                    </ng-template>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmProduto'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Nome</label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input [autofoco]=\"true\" type=\"text\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('nmProduto'))\" name=\"nmProduto\"\r\n                          maxlength=\"25\" placeholder=\"Digite o nome o produto\" formControlName=\"nmProduto\">\r\n                        <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmProduto'))\" titulo=\"Erro:\" mensagem=\"o campo Nome do produto deve ter entre 5 a 50 caracteres\">\r\n                        </alert-mensagem>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('categoria'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Categoria</label>\r\n                      <div class=\"col-sm-4\" >\r\n                        <ng-select [multiple]=\"false\" formControlName=\"categoria\" [items]=\"comboCategorias\" placeholder=\"{{label.selecione}}\" >\r\n                        </ng-select>\r\n                      </div>\r\n                    </div>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('unidadeVenda'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Unid. de venda </label>\r\n                      <div class=\"col-sm-4\">\r\n                        <ng-select [multiple]=\"false\" formControlName=\"unidadeVenda\" [items]=\"comboUnidades\" placeholder=\"{{label.selecione}}\">\r\n                        </ng-select>\r\n                      </div>\r\n                    </div>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('vlVenda'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Valor venda</label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('vlVenda'))\"\r\n                          name=\"vlVenda\" maxlength=\"10\" formControlName=\"vlVenda\">\r\n                      </div>\r\n                    </div>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('vlCompra'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Valor compra</label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('vlCompra'))\"\r\n                          name=\"vlCompra\" maxlength=\"10\" formControlName=\"vlCompra\" [ngClass]=\"aplicarCssForm(formulario.get('vlCompra'))\">\r\n                      </div>\r\n                    </div>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtMinimaEstoque'))\">\r\n                      <label class=\"col-sm-3 form-control-label\">Qtd minima em estoque</label>\r\n                      <div class=\"col-sm-3\">\r\n                        <input numberOnly type=\"text\" formControlName=\"qtMinimaEstoque\" class=\"form-control input-sm\" name=\"qtMinimaEstoque\" formControlName=\"qtMinimaEstoque\"\r\n                          maxlength=\"4\" [ngClass]=\"aplicarCssForm(formulario.get('qtMinimaEstoque'))\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtAcompanhamento'))\">\r\n                      <label class=\"col-sm-3 form-control-label\">Qtd acompanhamentos</label>\r\n                      <div class=\"col-sm-3\">\r\n                        <input numberOnly type=\"text\" formControlName=\"qtAcompanhamento\" class=\"form-control input-sm\" name=\"qtAcompanhamento\" formControlName=\"qtAcompanhamento\"\r\n                          maxlength=\"2\" [ngClass]=\"aplicarCssForm(formulario.get('qtAcompanhamento'))\">\r\n                      </div>\r\n                    </div>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nrCodigoBarra'))\">\r\n                      <label class=\"col-sm-3 form-control-label\">Cód barra</label>\r\n                      <div class=\"col-sm-3\">\r\n                        <input numberOnly type=\"text\" formControlName=\"nrCodigoBarra\" class=\"form-control input\" name=\"codigoBarra\" formControlName=\"nrCodigoBarra\"\r\n                          maxlength=\"13\" [ngClass]=\"aplicarCssForm(formulario.get('nrCodigoBarra'))\">\r\n                      </div>\r\n                    </div>\r\n\r\n                  </tab>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"icon-calculator\"></i> Composição &nbsp;\r\n                    </ng-template>\r\n                    <div class=\"from-group row\">\r\n\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"card\">\r\n                          <div class=\"card-header\">\r\n                            <strong>Composição do produto</strong>\r\n                            <div class=\"card-actions\">\r\n                              <button type=\"button\" (click)=\"composicaoModal.show()\">\r\n                                <i class=\"icon-plus\"></i>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-block\" *ngIf=\"produtosComposicoes?.length > 0\">\r\n                            <div class=\"row\">\r\n\r\n                              <table class=\"table table-striped\">\r\n                                <thead>\r\n                                  <th class=\"text-left\">Produto</th>\r\n                                  <th class=\"text-right\">Quantidade</th>\r\n                                  <th class=\"text-center\">Mostrar</th>\r\n                                  <th class=\"text-right\">Ação</th>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr *ngFor=\"let item of produtosComposicoes\">\r\n                                    <td class=\"text-left\">\r\n                                      <div>{{item.nmProdutoComposicao}}</div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                      {{item?.qtUtilizada}} - {{item.nmUnidadeMedida}}\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                      <simnao valor={{item.mostrarUnidade}}></simnao>\r\n                                    </td>\r\n\r\n\r\n                                    <td class=\"text-right\">\r\n                                      <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"cursor:pointer\" (click)=\"composicaoModal.showAlteracao(item)\">\r\n                                        <i class=\"fa fa fa-edit\"> </i>\r\n                                      </button>\r\n                                      <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"cursor:pointer\" (click)=\"excluirItem(item)\">\r\n                                        <i class=\"fa fa-eraser\"> </i>\r\n                                      </button>\r\n                                    </td>\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </tab>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"icon-pie-chart\"></i> Inf. adicionais\r\n                    </ng-template>\r\n                    <div [ngClass]=\"aplicarCssGroup(formulario.get('dsUrlBlog'))\">\r\n                      <label for=\"nome\">Url blog de receitas</label>\r\n                      <input #campoNome type=\"text\" [ngClass]=\"aplicarCssForm(formulario.get('dsUrlBlog'))\" name=\"urlBlog\" maxlength=\"120\" placeholder=\"url do blog\"\r\n                        formControlName=\"dsUrlBlog\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"dsInfoComplementar\">Informações extra</label>\r\n                      <textarea type=\"textarea\" maxlength=\"200\" rows=\"7\" [ngClass]=\"aplicarCssForm(formulario.get('dsInfoComplementar'))\" name=\"dsInfoComplementar\"\r\n                        placeholder=\"Digite as informações extra sobre o produto\" formControlName=\"dsInfoComplementar\"></textarea>\r\n                    </div>\r\n                  </tab>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"icon-pie-chart\"></i> Inf nutricionais\r\n                    </ng-template>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtEmcada'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Quantidade</label>\r\n                      <div class=\"col-sm-2\">\r\n                        <input numberOnly type=\"text\" formControlName=\"qtEmcada\" class=\"form-control input\" name=\"qtEmcada\" formControlName=\"qtEmcada\"\r\n                          maxlength=\"3\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\">\r\n                        <ng-select [multiple]=\"false\" formControlName=\"emCada\" [items]=\"comboUnidadesEmCasa\" placeholder=\"{{label.selecione}}\">\r\n                        </ng-select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card\">\r\n                      <div class=\"card-header\">\r\n                        <strong>Tabela nutricional</strong>\r\n                        <div class=\"card-actions\">\r\n                          <button type=\"button\" (click)=\"InfoNutricionalModal.show()\">\r\n                            <i class=\"icon-plus\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card-block\" *ngIf=\"produtosInfoNutricionais?.length > 0\">\r\n                        <div class=\"row\">\r\n\r\n                          <table class=\"table table-striped\">\r\n                            <thead>\r\n                              <th class=\"text-left\">Descrição</th>\r\n                              <th class=\"text-right\">Quantidade</th>\r\n                              <th class=\"text-right\">Ação</th>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr *ngFor=\"let item of produtosInfoNutricionais\">\r\n                                <td class=\"text-left\">\r\n                                  <div>{{item.dsInfoNutricional}}</div>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                  {{item?.qtUtilizada}} - {{item.sgUnidadeMedida}}\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                  <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"cursor:pointer\" (click)=\"InfoNutricionalModal.showAlteracao(item)\">\r\n                                    <i class=\"fa fa fa-edit\"> </i>\r\n                                  </button>\r\n                                  <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"cursor:pointer\" (click)=\"excluirItemInfoNutriciobnal(item)\">\r\n                                    <i class=\"fa fa-eraser\"> </i>\r\n                                  </button>\r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </tab>\r\n                </tabset>\r\n              </form>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div style=\"float: right;\">\r\n              <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n                <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n              </button>\r\n              <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmProduto.show();\">\r\n                <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <confirm-popup-modal #modalConfirmProduto popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n    <strong>Confirma a inclusão do Produto?</strong>\r\n  </confirm-popup-modal>\r\n\r\n  <composicao-produto-popup-modal #composicaoModal (onClickConfirm)=\"confirmarCompProd($event)\"></composicao-produto-popup-modal>\r\n  <info-nutricional-produto-popup-modal #InfoNutricionalModal (onClickConfirm)=\"confirmarInfoNutricional($event)\"></info-nutricional-produto-popup-modal>\r\n  <!-- \r\n  -->\r\n</div>"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Produto</strong>\r\n          <small> - alteração de produto</small>\r\n        </div>\r\n  \r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4 col-md-4\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <strong>Imagens do produto</strong>\r\n                  </div>\r\n                  <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                      <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n                    </div>\r\n  \r\n                  </div>\r\n                  <div class=\"card-footer\">\r\n                    <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n                      (onSelecionarImagem)=\"mudarImage($event)\">\r\n                    </upload-imagem>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!--/.col-->\r\n  \r\n              <div class=\"col-md-8 col-sm-8\">\r\n                <form [formGroup]=\"formulario\">\r\n                  <tabset>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-list\"></i> Dados &nbsp;\r\n                      </ng-template>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmProduto'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Nome</label>\r\n                        <div class=\"col-sm-10\">\r\n                          <input [autofoco]=\"true\" type=\"text\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('nmProduto'))\" name=\"nmProduto\"\r\n                            maxlength=\"25\" placeholder=\"Digite o nome o produto\" formControlName=\"nmProduto\">\r\n                          <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmProduto'))\" titulo=\"Erro:\" mensagem=\"o campo Nome do produto deve ter entre 5 a 50 caracteres\">\r\n                          </alert-mensagem>\r\n                        </div>\r\n                      </div>\r\n  \r\n  \r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('categoria'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Categoria</label>\r\n                        <div class=\"col-sm-4\" >\r\n                          <ng-select [multiple]=\"false\" formControlName=\"categoria\" [items]=\"comboCategorias\" placeholder=\"{{label.selecione}}\" >\r\n                          </ng-select>\r\n                        </div>\r\n                      </div>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('unidadeVenda'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Unid. de venda </label>\r\n                        <div class=\"col-sm-4\">\r\n                          <ng-select [multiple]=\"false\" formControlName=\"unidadeVenda\" [items]=\"comboUnidades\" placeholder=\"{{label.selecione}}\">\r\n                          </ng-select>\r\n                        </div>\r\n                      </div>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('vlVenda'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Valor venda</label>\r\n                        <div class=\"col-sm-4\">\r\n                          <input type=\"text\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('vlVenda'))\"\r\n                            name=\"vlVenda\" maxlength=\"10\" formControlName=\"vlVenda\">\r\n                        </div>\r\n                      </div>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('vlCompra'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Valor compra</label>\r\n                        <div class=\"col-sm-4\">\r\n                          <input type=\"text\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('vlCompra'))\"\r\n                            name=\"vlCompra\" maxlength=\"10\" formControlName=\"vlCompra\" [ngClass]=\"aplicarCssForm(formulario.get('vlCompra'))\">\r\n                        </div>\r\n                      </div>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtMinimaEstoque'))\">\r\n                        <label class=\"col-sm-3 form-control-label\">Qtd minima em estoque</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input numberOnly type=\"text\" formControlName=\"qtMinimaEstoque\" class=\"form-control input-sm\" name=\"qtMinimaEstoque\" formControlName=\"qtMinimaEstoque\"\r\n                            maxlength=\"4\" [ngClass]=\"aplicarCssForm(formulario.get('qtMinimaEstoque'))\">\r\n                        </div>\r\n                      </div>\r\n  \r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtAcompanhamento'))\">\r\n                        <label class=\"col-sm-3 form-control-label\">Qtd acompanhamentos</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input numberOnly type=\"text\" formControlName=\"qtAcompanhamento\" class=\"form-control input-sm\" name=\"qtAcompanhamento\" formControlName=\"qtAcompanhamento\"\r\n                            maxlength=\"2\" [ngClass]=\"aplicarCssForm(formulario.get('qtAcompanhamento'))\">\r\n                        </div>\r\n                      </div>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nrCodigoBarra'))\">\r\n                        <label class=\"col-sm-3 form-control-label\">Cód barra</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input numberOnly type=\"text\" formControlName=\"nrCodigoBarra\" class=\"form-control input\" name=\"codigoBarra\" formControlName=\"nrCodigoBarra\"\r\n                            maxlength=\"13\" [ngClass]=\"aplicarCssForm(formulario.get('nrCodigoBarra'))\">\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-calculator\"></i> Composição &nbsp;\r\n                      </ng-template>\r\n                      <div class=\"from-group row\">\r\n  \r\n                        <div class=\"col-sm-12\">\r\n                          <div class=\"card\">\r\n                            <div class=\"card-header\">\r\n                              <strong>Composição do produto</strong>\r\n                              <div class=\"card-actions\">\r\n                                <button type=\"button\" (click)=\"composicaoModal.show()\">\r\n                                  <i class=\"icon-plus\"></i>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"card-block\" *ngIf=\"produtosComposicoes?.length > 0\">\r\n                              <div class=\"row\">\r\n  \r\n                                <table class=\"table table-striped\">\r\n                                  <thead>\r\n                                    <th class=\"text-left\">Produto</th>\r\n                                    <th class=\"text-right\">Quantidade</th>\r\n                                    <th class=\"text-center\">Mostrar</th>\r\n                                    <th class=\"text-right\">Ação</th>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                    <tr *ngFor=\"let item of produtosComposicoes\">\r\n                                      <td class=\"text-left\">\r\n                                        <div>{{item.nmProdutoComposicao}}</div>\r\n                                      </td>\r\n                                      <td class=\"text-right\">\r\n                                        {{item?.qtUtilizada}} - {{item.nmUnidadeMedida}}\r\n                                      </td>\r\n                                      <td class=\"text-center\">\r\n                                        <simnao valor={{item.mostrarUnidade}}></simnao>\r\n                                      </td>\r\n  \r\n  \r\n                                      <td class=\"text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"cursor:pointer\" (click)=\"composicaoModal.showAlteracao(item)\">\r\n                                          <i class=\"fa fa fa-edit\"> </i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"cursor:pointer\" (click)=\"excluirItem(item)\">\r\n                                          <i class=\"fa fa-eraser\"> </i>\r\n                                        </button>\r\n                                      </td>\r\n                                    </tr>\r\n                                  </tbody>\r\n                                </table>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-pie-chart\"></i> Inf. adicionais\r\n                      </ng-template>\r\n                      <div [ngClass]=\"aplicarCssGroup(formulario.get('dsUrlBlog'))\">\r\n                        <label for=\"nome\">Url blog de receitas</label>\r\n                        <input #campoNome type=\"text\" [ngClass]=\"aplicarCssForm(formulario.get('dsUrlBlog'))\" name=\"urlBlog\" maxlength=\"120\" placeholder=\"url do blog\"\r\n                          formControlName=\"dsUrlBlog\">\r\n                      </div>\r\n  \r\n                      <div class=\"form-group\">\r\n                        <label for=\"dsInfoComplementar\">Informações extra</label>\r\n                        <textarea type=\"textarea\" maxlength=\"200\" rows=\"7\" [ngClass]=\"aplicarCssForm(formulario.get('dsInfoComplementar'))\" name=\"dsInfoComplementar\"\r\n                          placeholder=\"Digite as informações extra sobre o produto\" formControlName=\"dsInfoComplementar\"></textarea>\r\n                      </div>\r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-pie-chart\"></i> Inf nutricionais\r\n                      </ng-template>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtEmcada'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Quantidade</label>\r\n                        <div class=\"col-sm-2\">\r\n                          <input numberOnly type=\"text\" formControlName=\"qtEmcada\" class=\"form-control input\" name=\"qtEmcada\" formControlName=\"qtEmcada\"\r\n                            maxlength=\"3\">\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                          <ng-select [multiple]=\"false\" formControlName=\"emCada\" [items]=\"comboUnidadesEmCasa\" placeholder=\"{{label.selecione}}\">\r\n                          </ng-select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                          <strong>Tabela nutricional</strong>\r\n                          <div class=\"card-actions\">\r\n                            <button type=\"button\" (click)=\"InfoNutricionalModal.show()\">\r\n                              <i class=\"icon-plus\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-block\" *ngIf=\"produtosInfoNutricionais?.length > 0\">\r\n                          <div class=\"row\">\r\n  \r\n                            <table class=\"table table-striped\">\r\n                              <thead>\r\n                                <th class=\"text-left\">Descrição</th>\r\n                                <th class=\"text-right\">Quantidade</th>\r\n                                <th class=\"text-right\">Ação</th>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngFor=\"let item of produtosInfoNutricionais\">\r\n                                  <td class=\"text-left\">\r\n                                    <div>{{item.dsInfoNutricional}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    {{item?.qtUtilizada}} - {{item.sgUnidadeMedida}}\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"cursor:pointer\" (click)=\"InfoNutricionalModal.showAlteracao(item)\">\r\n                                      <i class=\"fa fa fa-edit\"> </i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"cursor:pointer\" (click)=\"excluirItemInfoNutriciobnal(item)\">\r\n                                      <i class=\"fa fa-eraser\"> </i>\r\n                                    </button>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                  </tabset>\r\n                </form>\r\n  \r\n              </div>\r\n  \r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div style=\"float: right;\">\r\n                <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n                  <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n                </button>\r\n                <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmProduto.show();\">\r\n                  <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <confirm-popup-modal #modalConfirmProduto popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n      <strong>Confirma a inclusão do Produto?</strong>\r\n    </confirm-popup-modal>\r\n  \r\n    <composicao-produto-popup-modal #composicaoModal (onClickConfirm)=\"confirmarCompProd($event)\"></composicao-produto-popup-modal>\r\n    <info-nutricional-produto-popup-modal #InfoNutricionalModal (onClickConfirm)=\"confirmarInfoNutricional($event)\"></info-nutricional-produto-popup-modal>\r\n    <!-- \r\n    -->\r\n  </div>"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\n<button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/produtos/novo']\">\n    <i class=\"icon-plus\"></i> Novo\n</button>\n<div class=\"card\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i> Listagem de produtos\n    </div>\n    <div class=\"card-block\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th class=\"text-center\" style=\"width: 5%\">\n                        <i class=\"icon-people\"></i>\n                    </th>\n                    <th style=\"width: 40%\">Descrição do produto</th>\n                    <th style=\"width: 10%\" class=\"text-center\">Categoria</th>\n                    <th style=\"width: 10%\" class=\"text-center\">Situação</th>\n                    <th style=\"width: 10%\" class=\"text-center\">Preço</th>\n                    <th style=\"width: 15%\" class=\"text-center\">Ação</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of items\">\n                    <td class=\"text-center\">\n                        <div class=\"avatar\">\n                            <foto-uri id=\"{{item.id}}\" modulo=\"PRD\" classCss=\"img-avatar\" alt=\"Avatar\"></foto-uri>\n                        </div>\n                    </td>\n                    <td>\n                        <div>{{item.nmProduto}}</div>\n                    </td>\n                    <td class=\"text-center\">\n                        {{item?.categoria?.nmCategoria}}\n                    </td>\n                    <td class=\"text-center\">\n                        <status status={{item.status}}></status>\n                    </td>\n                    <td class=\"text-right\">\n                        {{item.vlVenda | currency:'BRL':true}}\n                    </td>\n                    <td class=\"text-right\">\n                        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"cursor:pointer\" (click)=\"alterarProduto(item)\">\n                            <i class=\"fa fa fa-edit\"> </i>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"cursor:pointer\" (click)=\"selecionarItem(item)\">\n                            <i class=\"fa fa-eraser\"> </i>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-sm btn-warning\" style=\"cursor:pointer\" (click)=\"selecionarItemChangeStatus(item)\">\n                            <i class=\"fa fa-exclamation\"> </i>\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<confirm-popup-modal #modalExcluirProduto popupStyle=\"danger\" (onClickConfirm)=\"excluirCategoria()\">\n    <strong>Deseja excluir o produto?</strong>\n</confirm-popup-modal>\n\n<confirm-popup-modal #modalChangeSatusProduto popupStyle=\"danger\" (onClickConfirm)=\"changeStatus()\">\n    <strong>Deseja alterar o status do produto?</strong>\n</confirm-popup-modal>"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<base-popup-modal [nomePopup]=\"nomeJanePopup\" #modalConfirm modalSize=\"md\" [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formProdComp.value)\"\r\n        [desabilitarBtnConfirmar]=\"!formProdComp.valid\">\r\n\r\n        <form [formGroup]=\"formProdComp\" (ngSubmit)=\"confirmarCompProd()\">\r\n                <div [ngClass]=\"aplicarCssGroupRow(formProdComp.get('produtoComp'))\">\r\n                        <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Produto</label>\r\n                        <div class=\"col-sm-10\">\r\n                                <ng-select *ngIf=\"!formProdComp.get('emAlteracao').value\" [multiple]=\"false\" formControlName=\"produtoComp\" [items]=\"comboCompProdutos\"\r\n                                        placeholder=\"{{label.selecione}}\"></ng-select>\r\n                                <input *ngIf=\"formProdComp.get('emAlteracao').value\" type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\"\r\n                                        placeholder=\"Disabled\" disabled=\"\" value=\"{{formProdComp.get('produtoComp').value[0].text}}\">\r\n                        </div>\r\n                </div>\r\n                <div [ngClass]=\"aplicarCssGroupRow(formProdComp.get('qtUtilizada'))\">\r\n                        <label class=\"col-sm-2 form-control-label\" for=\"input-normal\">Quantidade</label>\r\n                        <div class=\"col-sm-4\">\r\n                                <input #campoNome numberOnly type=\"text\" formControlName=\"qtUtilizada\" class=\"form-control input-sm\" name=\"qtUtilizada\" formControlName=\"qtUtilizada\"\r\n                                        maxlength=\"4\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                                <ng-select formControlName=\"unidade\" [items]=\"comboCompUnidades\" placeholder=\"{{label.selecione}}\"></ng-select>\r\n                        </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 form-control-label\">Mostrar</label>\r\n                        <div class=\"col-sm-8\">\r\n                                <label class=\"switch switch-lg switch-text switch-primary\">\r\n                                        <input #checkMostrar type=\"checkbox\" class=\"switch-input\" [checked]=\"checkMostrar\" (change)=\"compProdCheckMostrar(checkMostrar.checked)\"\r\n                                        />\r\n                                        <span class=\"switch-label\" data-on=\"sim\" data-off=\"não\"></span>\r\n                                        <span class=\"switch-handle\"></span>\r\n                                </label>\r\n                        </div>\r\n                </div>\r\n        </form>\r\n</base-popup-modal>"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<base-popup-modal [nomePopup]=\"nomeJanePopup\" #modalConfirm modalSize=\"md\" [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formProdInfo.value)\"\r\n        [desabilitarBtnConfirmar]=\"!formProdInfo.valid\">\r\n\r\n        <form [formGroup]=\"formProdInfo\" (ngSubmit)=\"confirmarCompProd()\">\r\n                \r\n                <div [ngClass]=\"aplicarCssGroupRow(formProdInfo.get('infoNutricional'))\">\r\n                        <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Informação</label>\r\n                        <div class=\"col-sm-10\">\r\n                                <ng-select *ngIf=\"!formProdInfo.get('emAlteracao').value\" [multiple]=\"false\" formControlName=\"infoNutricional\" [items]=\"comboInfoNutriciais\"\r\n                                placeholder=\"{{label.selecione}}\"></ng-select>\r\n                                <input *ngIf=\"formProdInfo.get('emAlteracao').value\" type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\"\r\n                                placeholder=\"Disabled\" disabled=\"\" value=\"{{formProdInfo.get('infoNutricional').value[0].text}}\">\r\n                        </div>\r\n                </div>\r\n                <div [ngClass]=\"aplicarCssGroupRow(formProdInfo.get('qtUtilizada'))\">\r\n                        <label class=\"col-sm-2 form-control-label\" for=\"input-normal\">Quantidade</label>\r\n                        <div class=\"col-sm-4\">\r\n                                <input #campoNome numberOnly type=\"text\" formControlName=\"qtUtilizada\" class=\"form-control input-sm\" name=\"qtUtilizada\" formControlName=\"qtUtilizada\"\r\n                                maxlength=\"4\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                                <ng-select formControlName=\"unidade\" [items]=\"comboCompUnidades\" placeholder=\"{{label.selecione}}\"></ng-select>\r\n                        </div>\r\n                </div>\r\n        </form>\r\n</base-popup-modal>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map