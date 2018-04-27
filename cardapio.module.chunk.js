webpackJsonp(["cardapio.module"],{

/***/ "./src/app/pages/cadastros/cardapio/abstract-cardapio.component.ts":
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
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var abstract_base_component_1 = __webpack_require__("./src/config/core/abstract-base.component.ts");
var AbstractCardapioComponent = (function (_super) {
    __extends(AbstractCardapioComponent, _super);
    function AbstractCardapioComponent(fb, location, cardapioService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.location = location;
        _this.cardapioService = cardapioService;
        _this.cardapio = {};
        _this.cardapioItem = {};
        _this.cardapioItens = [];
        return _this;
    }
    AbstractCardapioComponent.prototype.confirmar = function (value) {
        var _this = this;
        this.cardapioService.salvar(value)
            .subscribe(function (response) {
            if (response['body'] != null) {
                _this.cardapio = JSON.parse(response['body']);
                _this.alterarForm(_this.cardapio);
            }
            //EventEmitterService.emitirMensagemToasterSucesso('Cardápio', 'O Cardapio foi incluído com sucesso!!!');
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    AbstractCardapioComponent.prototype.criarFormulario = function () {
        this.formulario = this.fb.group({
            id: [],
            nmCardapio: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(40)]],
            dsComentario: [''],
            status: ['I'],
            emAlteracao: false
        });
    };
    AbstractCardapioComponent.prototype.alterarForm = function (cardapio) {
        this.formulario.patchValue({
            id: cardapio.id,
            nmCardapio: cardapio.nmCardapio,
            dsComentario: cardapio.dsComentario,
            status: cardapio.status,
            emAlteracao: true
        });
        this.cardapioItens = cardapio.itens;
    };
    AbstractCardapioComponent.prototype.voltar = function () {
        this.location.back();
    };
    AbstractCardapioComponent.prototype.excluirItemCardapio = function () {
        var _this = this;
        this.cardapioService.excluirItem(this.cardapioItem)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Cardapio', 'O item do cardapio foi excluído com sucesso!!!');
            _this.carregarItemCardapio(_this.cardapio.id);
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    AbstractCardapioComponent.prototype.selecionarItem = function (item) {
        this.cardapioItem = item;
        this.popupExclusaoItem.show();
    };
    AbstractCardapioComponent.prototype.adicionarItemCardapio = function (value) {
        var _this = this;
        var item = {};
        item.cardapio = this.cardapio;
        item.produto = value.produto;
        item.nrOrdemItem = value.nrOrdemItem;
        this.cardapioService.salvarItem(item)
            .subscribe(function (res) { return _this.carregarItemCardapio(_this.cardapio.id); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    AbstractCardapioComponent.prototype.carregarItemCardapio = function (idCardapio) {
        var _this = this;
        if (idCardapio != null) {
            this.cardapioService.findAllItemByCardapio(idCardapio).subscribe(function (res) { return _this.cardapioItens = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        }
    };
    AbstractCardapioComponent.prototype.popupAlterarItem = function (item) {
        this.cardapioItem = item;
        this.popupAlterarItemCardapio.show();
    };
    AbstractCardapioComponent.prototype.salvarItem = function () {
        var _this = this;
        this.cardapioService.atualizarItem(this.cardapioItem)
            .subscribe(function (res) { return _this.carregarItemCardapio(_this.cardapio.id); }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    AbstractCardapioComponent.prototype.definirCor = function () {
        this.cardapioItem.destaque = !this.cardapioItem.destaque;
    };
    return AbstractCardapioComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('modalExcluirItemCardapio'),
    __metadata("design:type", Object)
], AbstractCardapioComponent.prototype, "popupExclusaoItem", void 0);
__decorate([
    core_1.ViewChild('modalAlterarItemCardapio'),
    __metadata("design:type", Object)
], AbstractCardapioComponent.prototype, "popupAlterarItemCardapio", void 0);
exports.AbstractCardapioComponent = AbstractCardapioComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/abstract-cardapio.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/cardapio-routing.module.ts":
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
var listar_cardapio_component_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/listar/listar-cardapio.component.ts");
var create_cardapio_component_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/create/create-cardapio.component.ts");
var update_cardapio_component_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/update/update-cardapio.component.ts");
var routes = [
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
    },
    {
        path: '',
        data: {
            title: 'Cardapios'
        },
        children: [
            {
                path: 'listar',
                component: listar_cardapio_component_1.ListarCardapioComponent,
                data: {
                    title: 'Listar'
                }
            },
            {
                path: 'novo',
                component: create_cardapio_component_1.CreateCardapioComponent,
                data: {
                    title: 'Novo'
                }
            },
            {
                path: 'editar/:id',
                component: update_cardapio_component_1.UpdateCardapioComponent,
                data: {
                    title: 'Alterar'
                }
            }
        ]
    }
];
var CardapioRoutingModule = (function () {
    function CardapioRoutingModule() {
    }
    return CardapioRoutingModule;
}());
CardapioRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], CardapioRoutingModule);
exports.CardapioRoutingModule = CardapioRoutingModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cardapio-routing.module.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/cardapio.module.ts":
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
var modal_1 = __webpack_require__("./node_modules/ng2-bootstrap/modal/index.js");
var popup_modal_module_1 = __webpack_require__("./src/app/shared/popup/popup-modal.module.ts");
var shared_component_module_1 = __webpack_require__("./src/app/shared/shared-component.module.ts");
var storage_service_1 = __webpack_require__("./src/services/storage.service.ts");
var cardapio_service_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/cardapio.service.ts");
var cardapio_routing_module_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/cardapio-routing.module.ts");
var listar_cardapio_component_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/listar/listar-cardapio.component.ts");
var update_cardapio_component_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/update/update-cardapio.component.ts");
var create_cardapio_component_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/create/create-cardapio.component.ts");
var CardapioModule = (function () {
    function CardapioModule() {
    }
    return CardapioModule;
}());
CardapioModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            modal_1.ModalModule.forRoot(),
            shared_component_module_1.SharedComponentModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule,
            popup_modal_module_1.PopupModalModule,
            cardapio_routing_module_1.CardapioRoutingModule
        ],
        declarations: [
            listar_cardapio_component_1.ListarCardapioComponent,
            create_cardapio_component_1.CreateCardapioComponent,
            update_cardapio_component_1.UpdateCardapioComponent
        ],
        providers: [
            cardapio_service_1.CardapioService,
            storage_service_1.StorageService
        ]
    })
], CardapioModule);
exports.CardapioModule = CardapioModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cardapio.module.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/cardapio.service.ts":
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
var CardapioService = (function (_super) {
    __extends(CardapioService, _super);
    function CardapioService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/cardapio";
        return _this;
    }
    /** consulta do cardapio */
    CardapioService.prototype.findById = function (id) {
        return this.http.get(this.url + "/" + id, this.getHearderToken());
    };
    CardapioService.prototype.findAll = function () {
        return this.http.get(this.url + "/all", this.getHearderToken());
    };
    CardapioService.prototype.salvar = function (cardapio) {
        return this.http.post("" + this.url, JSON.stringify(cardapio), this.getHearderTokenNoResponse());
    };
    CardapioService.prototype.excluir = function (cardapio) {
        return this.http.delete(this.url + "/" + cardapio.id, this.getHearderToken());
    };
    CardapioService.prototype.changeStatus = function (cardapio) {
        return this.http.put(this.url + "/" + cardapio.id + "/changeStatus", {}, this.getHearderTokenNoResponse());
    };
    CardapioService.prototype.atualizar = function (cardapio) {
        return this.http.put(this.url + "/" + cardapio.id, JSON.stringify(cardapio), this.getHearderTokenNoResponse());
    };
    /**  atualização do item */
    CardapioService.prototype.salvarItem = function (cardapioItem) {
        return this.http.post(this.url + "/item", JSON.stringify(cardapioItem), this.getHearderTokenNoResponse());
    };
    CardapioService.prototype.excluirItem = function (cardapioItem) {
        return this.http.delete(this.url + "/item/" + cardapioItem.id, this.getHearderToken());
    };
    CardapioService.prototype.atualizarItem = function (cardapioItem) {
        return this.http.put(this.url + "/item/" + cardapioItem.id, JSON.stringify(cardapioItem), this.getHearderTokenNoResponse());
    };
    CardapioService.prototype.findAllItemByCardapio = function (idCardapio) {
        return this.http.get(this.url + "/item/?idCardapio=" + idCardapio);
    };
    /** consulta de categoria */
    CardapioService.prototype.findCategoriaByCardapio = function (idCardapio, nmProduto) {
        return this.http.get(this.url + "/categoria");
    };
    /** consulta de produto */
    CardapioService.prototype.findProdutoByCategoriaOrNome = function (idCategoria, nmProduto) {
        return this.http.get(this.url + "/consultarPor?idCategoria=" + idCategoria + "&nmProduto=" + nmProduto, this.getHearderToken());
    };
    CardapioService.prototype.findProdutoByCategoriaCardapio = function (idCategoria) {
        return this.http.get(this.url + "/consultarCategoria/" + idCategoria);
    };
    CardapioService.prototype.findProdutoByDestaques = function () {
        return this.http.get(this.url + "/produtoDestaque");
    };
    return CardapioService;
}(abstract_service_1.AbstractService));
CardapioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], CardapioService);
exports.CardapioService = CardapioService;
var _a;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cardapio.service.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/create/create-cardapio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Cardápio</strong>\r\n        <small> - inclusão de um novo cardapio</small>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group\">\r\n\r\n          <div class=\"col-md-12 col-sm-4\">\r\n            <form [formGroup]=\"formulario\">\r\n              <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmCardapio'))\">\r\n                <label class=\"col-sm-2 form-control-label\">Nome do cardapio</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input [autofoco]=\"true\" upper type=\"text\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('nmCardapio'))\"\r\n                    name=\"nmCardapio\" maxlength=\"40\" placeholder=\"Digite o nome do \" formControlName=\"nmCardapio\">\r\n                  <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmCardapio'))\" titulo=\"Erro:\" mensagem=\"o campo Nome do cardapio deve ter entre 4 a 40 caracteres\">\r\n                  </alert-mensagem>\r\n                </div>\r\n              </div>\r\n              <div [ngClass]=\"aplicarCssGroupRow(formulario.get('dsComentario'))\">\r\n                <label class=\"col-sm-2 form-control-label\">Descrição do cardapio</label>\r\n                <div class=\"col-sm-10\">\r\n                  <textarea type=\"textarea\" maxlength=\"100\" rows=\"4\" [ngClass]=\"aplicarCssForm(formulario.get('dsComentario'))\" name=\"dsComentario\"\r\n                    placeholder=\"Digite o texto descritivo do cardapio\" formControlName=\"dsComentario\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"from-group row\" *ngIf=\"formulario.get('id').value >0;\">\r\n\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                      <strong>Selecione os produtos para montagem do cardapio </strong>\r\n                      <div class=\"card-actions\">\r\n                        <button type=\"button\" (click)=\"modalProduto.show()\" class=\"cursor-hands\">\r\n                          <i class=\"icon-plus\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-block\" *ngIf=\"cardapioItens?.length > 0\">\r\n                      <div class=\"row\">\r\n\r\n                        <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <th class=\"text-left\" style=\"width: 50%\">Produto</th>\r\n                            <th class=\"text-left\" style=\"width: 20%\">categoria</th>\r\n                            <th class=\"text-left\" style=\"width: 15%\">destaque</th>\r\n                            <th class=\"text-right\" style=\"width: 15%\">Ação</th>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of cardapioItens\">\r\n                              <td class=\"text-left\">\r\n                                <div>{{item.nrOrdemItem}} - {{item?.produto?.nmProduto}}</div>\r\n                              </td>\r\n                              <td class=\"text-left\">\r\n                                {{ item.produto?.categoria?.nmCategoria}}\r\n                              </td>\r\n                              <td class=\"text-left\">\r\n                                <destaque [valor]=\"item.destaque\"></destaque>\r\n                              </td>\r\n                              <td class=\"text-right\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"popupAlterarItem(item)\">\r\n                                  <i class=\"fa fa fa-edit\"> </i>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\" (click)=\"selecionarItem(item)\">\r\n                                  <i class=\"fa fa-eraser\"> </i>\r\n                                </button>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div style=\"float: right;\">\r\n          <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n            <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n          </button>\r\n          <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmCardapio.show();\">\r\n            <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <confirm-popup-modal #modalConfirmCardapio popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n    <strong>Confirma a inclusão do Produto?</strong>\r\n  </confirm-popup-modal>\r\n\r\n\r\n\r\n  <pesquisar-produto-popup-modal #modalProduto moduloConsulta=\"PRD\" [ocultarAcompanhamento]=\"true\" [exibirCampoOrdem]=\"true\" (onClickConfirm)=\"adicionarItemCardapio($event)\">\r\n  </pesquisar-produto-popup-modal>\r\n\r\n  \r\n  <confirm-popup-modal #modalExcluirItemCardapio popupStyle=\"danger\" (onClickConfirm)=\"excluirItemCardapio()\">\r\n    <strong>Deseja excluir o item do cardapio?</strong>\r\n  </confirm-popup-modal>\r\n\r\n\r\n  <confirm-popup-modal #modalAlterarItemCardapio popupStyle=\"primary\"  titulo=\"Alterar item do cardápio\" (onClickConfirm)=\"salvarItem()\">\r\n    <div class=\"form-group row\" >\r\n      <label class=\"col-md-4 form-control-label text-align-right-center\">Ordem do item:</label>\r\n      <div class=\"col-md-2\">\r\n        <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"cardapioItem.nrOrdemItem\" maxlength=\"2\" >\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\" >\r\n      <label class=\"col-md-4 form-control-label text-align-right\">Destaque:</label>\r\n      <div class=\"col-md-6\">\r\n        <a (click)=\"definirCor()\" class=\"cursor-hands\">\r\n          <destaque [valor]=\"cardapioItem.destaque\"></destaque> Item com desque no cardapio\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </confirm-popup-modal>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/create/create-cardapio.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/create/create-cardapio.component.ts":
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
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var abstract_cardapio_component_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/abstract-cardapio.component.ts");
var cardapio_service_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/cardapio.service.ts");
var CreateCardapioComponent = (function (_super) {
    __extends(CreateCardapioComponent, _super);
    function CreateCardapioComponent(fb, location, cardapioService) {
        var _this = _super.call(this, fb, location, cardapioService) || this;
        _this.fb = fb;
        _this.location = location;
        _this.cardapioService = cardapioService;
        return _this;
    }
    CreateCardapioComponent.prototype.ngOnInit = function () {
        this.criarFormulario();
    };
    return CreateCardapioComponent;
}(abstract_cardapio_component_1.AbstractCardapioComponent));
CreateCardapioComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("./src/app/pages/cadastros/cardapio/create/create-cardapio.component.html"),
        styles: [__webpack_require__("./src/app/pages/cadastros/cardapio/create/create-cardapio.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof cardapio_service_1.CardapioService !== "undefined" && cardapio_service_1.CardapioService) === "function" && _c || Object])
], CreateCardapioComponent);
exports.CreateCardapioComponent = CreateCardapioComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/create-cardapio.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/listar/listar-cardapio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/cardapios/novo']\">\r\n    <i class=\"icon-plus\"></i> Novo</button>\r\n\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de cardapios\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>\r\n                        <div style=\"width: 45%\">\r\n                            Descrição\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"text-center \" style=\"width: 20%\">\r\n                            Comentário\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"text-center hidden-md-down\" style=\"width: 15%\">\r\n                            Situação\r\n                        </div>\r\n                    </th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td>\r\n                        <div class=\"text-left\">\r\n                            {{item.nmCardapio | uppercase}}\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"text-left\">\r\n                            {{item.dsComentario }}\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"text-left\">\r\n                            <status status={{item.status}}></status>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <form-buttons \r\n                                (onClickBtnEditar)=\"alterarCardapio(item)\"\r\n                                (onClickBtnExcluir)=\"selecionarItem(item)\" \r\n                                (onClickBtnAlterarStatus)=\"selecionarItemChangeStatus(item)\">\r\n                        </form-buttons>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>\r\n\r\n<confirm-popup-modal #excluirModal popupStyle=\"danger\" (onClickConfirm)=\"excluir()\">\r\n    <strong>Deseja excluir o cardapio?</strong>\r\n</confirm-popup-modal>\r\n\r\n<confirm-popup-modal #changeStatusModal popupStyle=\"danger\" (onClickConfirm)=\"changeStatus()\">\r\n    <strong>Deseja alterar o status do cardapio?</strong>\r\n</confirm-popup-modal>"

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/listar/listar-cardapio.component.scss":
/***/ (function(module, exports) {

module.exports = ".table th, .table td {\n  padding: 0.20rem; }\n"

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/listar/listar-cardapio.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var abstract_base_component_1 = __webpack_require__("./src/config/core/abstract-base.component.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var cardapio_service_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/cardapio.service.ts");
var ListarCardapioComponent = (function (_super) {
    __extends(ListarCardapioComponent, _super);
    function ListarCardapioComponent(cardapioService, router) {
        var _this = _super.call(this) || this;
        _this.cardapioService = cardapioService;
        _this.router = router;
        _this.items = [];
        return _this;
    }
    ListarCardapioComponent.prototype.ngOnInit = function () {
        this.carregarTodos();
    };
    ListarCardapioComponent.prototype.selecionarItem = function (item) {
        this.cardarpio = item;
        this.popupExclusao.show();
    };
    ListarCardapioComponent.prototype.selecionarItemChangeStatus = function (item) {
        this.cardarpio = item;
        this.popupChangeStatus.show();
    };
    ListarCardapioComponent.prototype.alterarCardapio = function (item) {
        this.router.navigate(["cardapios/editar/" + item.id]);
    };
    ListarCardapioComponent.prototype.excluir = function () {
        var _this = this;
        this.cardapioService.excluir(this.cardarpio)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Cardapio', 'O Cardapio foi excluído com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarCardapioComponent.prototype.changeStatus = function () {
        var _this = this;
        this.cardapioService.changeStatus(this.cardarpio)
            .subscribe(function (res) {
            event_emitter_services_1.EventEmitterService.emitirMensagemToasterSucesso('Cardapio', 'Status do cardapio foi alterado com sucesso!!!');
            _this.carregarTodos();
        }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ListarCardapioComponent.prototype.carregarTodos = function () {
        var _this = this;
        this.cardapioService.findAll().subscribe(function (res) { return _this.items = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return ListarCardapioComponent;
}(abstract_base_component_1.AbstractBaseComponent));
__decorate([
    core_1.ViewChild('excluirModal'),
    __metadata("design:type", Object)
], ListarCardapioComponent.prototype, "popupExclusao", void 0);
__decorate([
    core_1.ViewChild('changeStatusModal'),
    __metadata("design:type", Object)
], ListarCardapioComponent.prototype, "popupChangeStatus", void 0);
ListarCardapioComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("./src/app/pages/cadastros/cardapio/listar/listar-cardapio.component.html"),
        styles: [__webpack_require__("./src/app/pages/cadastros/cardapio/listar/listar-cardapio.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cardapio_service_1.CardapioService !== "undefined" && cardapio_service_1.CardapioService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ListarCardapioComponent);
exports.ListarCardapioComponent = ListarCardapioComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-cardapio.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/update/update-cardapio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Cardápio</strong>\r\n        <small> - inclusão de um novo cardapio</small>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group\">\r\n\r\n          <div class=\"col-md-12 col-sm-4\">\r\n            <form [formGroup]=\"formulario\">\r\n              <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmCardapio'))\">\r\n                <label class=\"col-sm-2 form-control-label\">Nome do cardapio</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input [autofoco]=\"true\" upper type=\"text\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('nmCardapio'))\"\r\n                    name=\"nmCardapio\" maxlength=\"40\" placeholder=\"Digite o nome do \" formControlName=\"nmCardapio\">\r\n                  <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmCardapio'))\" titulo=\"Erro:\" mensagem=\"o campo Nome do cardapio deve ter entre 4 a 40 caracteres\">\r\n                  </alert-mensagem>\r\n                </div>\r\n              </div>\r\n              <div [ngClass]=\"aplicarCssGroupRow(formulario.get('dsComentario'))\">\r\n                <label class=\"col-sm-2 form-control-label\">Descrição do cardapio</label>\r\n                <div class=\"col-sm-10\">\r\n                  <textarea type=\"textarea\" maxlength=\"100\" rows=\"4\" [ngClass]=\"aplicarCssForm(formulario.get('dsComentario'))\" name=\"dsComentario\"\r\n                    placeholder=\"Digite o texto descritivo do cardapio\" formControlName=\"dsComentario\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"from-group row\" *ngIf=\"formulario.get('id').value >0;\">\r\n\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                      <strong>Selecione os produtos para montagem do cardapio </strong>\r\n                      <div class=\"card-actions\">\r\n                        <button type=\"button\" (click)=\"modalProduto.show()\" class=\"cursor-hands\">\r\n                          <i class=\"icon-plus\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-block\" *ngIf=\"cardapioItens?.length > 0\">\r\n                      <div class=\"row\">\r\n\r\n                        <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <th class=\"text-left\" style=\"width: 50%\">Produto</th>\r\n                            <th class=\"text-left\" style=\"width: 20%\">categoria</th>\r\n                            <th class=\"text-left\" style=\"width: 15%\">destaque</th>\r\n                            <th class=\"text-right\" style=\"width: 15%\">Ação</th>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of cardapioItens\">\r\n                              <td class=\"text-left\">\r\n                                <div>{{item.nrOrdemItem}} - {{item?.produto?.nmProduto}}</div>\r\n                              </td>\r\n                              <td class=\"text-left\">\r\n                                {{ item.produto?.categoria?.nmCategoria}}\r\n                              </td>\r\n                              <td class=\"text-left\">\r\n                                <destaque [valor]=\"item.destaque\"></destaque>\r\n                              </td>\r\n                              <td class=\"text-right\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"popupAlterarItem(item)\">\r\n                                  <i class=\"fa fa fa-edit\"> </i>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\" (click)=\"selecionarItem(item)\">\r\n                                  <i class=\"fa fa-eraser\"> </i>\r\n                                </button>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div style=\"float: right;\">\r\n          <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n            <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n          </button>\r\n          <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmCardapio.show();\">\r\n            <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <confirm-popup-modal #modalConfirmCardapio popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n    <strong>Confirma a inclusão do Produto?</strong>\r\n  </confirm-popup-modal>\r\n\r\n\r\n\r\n  <pesquisar-produto-popup-modal #modalProduto moduloConsulta=\"PRD\" [ocultarAcompanhamento]=\"true\" [exibirCampoOrdem]=\"true\" (onClickConfirm)=\"adicionarItemCardapio($event)\">\r\n  </pesquisar-produto-popup-modal>\r\n\r\n  \r\n  <confirm-popup-modal #modalExcluirItemCardapio popupStyle=\"danger\" (onClickConfirm)=\"excluirItemCardapio()\">\r\n    <strong>Deseja excluir o item do cardapio?</strong>\r\n  </confirm-popup-modal>\r\n\r\n\r\n  <confirm-popup-modal #modalAlterarItemCardapio popupStyle=\"primary\"  titulo=\"Alterar item do cardápio\" (onClickConfirm)=\"salvarItem()\">\r\n    <div class=\"form-group row\" >\r\n      <label class=\"col-md-4 form-control-label text-align-right-center\">Ordem do item:</label>\r\n      <div class=\"col-md-2\">\r\n        <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"cardapioItem.nrOrdemItem\" maxlength=\"2\" >\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\" >\r\n      <label class=\"col-md-4 form-control-label text-align-right\">Destaque:</label>\r\n      <div class=\"col-md-6\">\r\n        <a (click)=\"definirCor()\" class=\"cursor-hands\">\r\n          <destaque [valor]=\"cardapioItem.destaque\"></destaque> Item com desque no cardapio\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </confirm-popup-modal>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/update/update-cardapio.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/cadastros/cardapio/update/update-cardapio.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var abstract_cardapio_component_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/abstract-cardapio.component.ts");
var cardapio_service_1 = __webpack_require__("./src/app/pages/cadastros/cardapio/cardapio.service.ts");
var UpdateCardapioComponent = (function (_super) {
    __extends(UpdateCardapioComponent, _super);
    function UpdateCardapioComponent(fb, location, route, cardapioService) {
        var _this = _super.call(this, fb, location, cardapioService) || this;
        _this.fb = fb;
        _this.location = location;
        _this.route = route;
        _this.cardapioService = cardapioService;
        return _this;
    }
    UpdateCardapioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.criarFormulario();
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.cardapioService.findById(id).subscribe(function (resp) {
                _this.cardapio = resp;
                _this.alterarForm(_this.cardapio);
            }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        });
    };
    return UpdateCardapioComponent;
}(abstract_cardapio_component_1.AbstractCardapioComponent));
UpdateCardapioComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("./src/app/pages/cadastros/cardapio/update/update-cardapio.component.html"),
        styles: [__webpack_require__("./src/app/pages/cadastros/cardapio/update/update-cardapio.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof cardapio_service_1.CardapioService !== "undefined" && cardapio_service_1.CardapioService) === "function" && _d || Object])
], UpdateCardapioComponent);
exports.UpdateCardapioComponent = UpdateCardapioComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/update-cardapio.component.js.map

/***/ })

});
//# sourceMappingURL=cardapio.module.chunk.js.map