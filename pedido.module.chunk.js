webpackJsonp(["pedido.module"],{

/***/ "./src/app/pages/pedido/abstract-pedido.component.ts":
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
var abstract_base_component_1 = __webpack_require__("./src/config/core/abstract-base.component.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
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

/***/ "./src/app/pages/pedido/create/create-pedido.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-1\"></div>\r\n  <div class=\"col-sm-10\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Pedido</strong>\r\n        <small> - inclusão de um novo pedido</small>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <form [formGroup]=\"formulario\" class=\"form-horizontal \">\r\n\r\n          <div class=\"form-group row\" formGroupName=\"cliente\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Cliente:</label>\r\n            <div class=\"col-md-10\">\r\n              <input type=\"text\" formControlName=\"nmPessoa\" name=\"nmPessoa\" class=\"form-control input-sm cursor-hands\" readonly placeholder=\"clique para selecionar um cliente\"\r\n                (click)=\"modalCliente.show()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" formGroupName=\"cliente\" *ngIf=\"exibirProduto\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Produtos:</label>\r\n            <div class=\"col-md-10\">\r\n              <div class=\"from-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                      <strong>Produtos</strong>\r\n                      <div class=\"card-actions\">\r\n                        <button type=\"button\" (click)=\"modalProduto.show()\" class=\"cursor-hands\">\r\n                          <i class=\"icon-plus\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-block\" *ngIf=\"pedido.itens?.length > 0\">\r\n                      <table class=\"table table-striped\">\r\n                        <thead>\r\n                          <th style=\"width:65%;\" class=\"text-left\">Produto</th>\r\n                          <th style=\"width:10%;\" class=\"text-left\">Quantidade</th>\r\n                          <th style=\"width:10%;\" class=\"text-right\">Valor</th>\r\n                          <th style=\"width:05%\" class=\"text-left\">Ação</th>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of pedido.itens\">\r\n                            <td class=\"text-left\">\r\n                              <strong>{{item?.produto?.nmProduto}}</strong>\r\n                              <div *ngIf=\"item?.adicionais?.length > 0\" style=\"padding-left:5%\">\r\n                                <div *ngFor=\"let ad of item?.adicionais\">{{ad.nmProduto}}</div>\r\n                              </div>\r\n                            </td>\r\n                            <td class=\"text-left\" class=\"coluna\">\r\n                              <i class=\"fa fa-minus-circle fa-lg mt-0 cursor-hands\" style=\"color: red\" (click)=\"decreaseQuantity(item)\"></i>\r\n                              <strong>&nbsp;&nbsp; {{item.qtItem}}&nbsp;&nbsp; </strong>\r\n                              <i class=\"fa fa-plus-circle fa-lg mt-0  cursor-hands\" style=\"color: blue\" (click)=\"increaseQuantity(item)\"></i>\r\n                            </td>\r\n                            <td class=\"text-left\" class=\"coluna\">\r\n                              <strong>{{item.qtItem * item.produto.vlVenda | currency:'BRL':true}}</strong>\r\n                            </td>\r\n                            <td class=\"text-left\" class=\"coluna\">\r\n                              <i class=\"fa fa-trash fa-lg mt-0 cursor-hands\" style=\"color:red\" (click)=\"removeItem(item)\"></i>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n\r\n                    </div>\r\n                    <div class=\"card-footer\" *ngIf=\"pedido.itens?.length > 0\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-7\"></div>\r\n                        <div class=\"col-md-3 text-align-right\">\r\n                          <strong>Taxa Entrega:</strong>\r\n                        </div>\r\n                        <div class=\"col-md-2 text-align-right\">\r\n                          <strong>{{pedido.vlTaxaEntrega | currency:'BRL':true}}</strong>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\" *ngIf=\"pedido.vlDesconto >0\">\r\n                        <div class=\"col-md-7\"></div>\r\n                        <div class=\"col-md-3 text-align-right\">\r\n                          <strong>Descontos:</strong>\r\n                        </div>\r\n                        <div class=\"col-md-2 text-align-right\">\r\n                          <strong>{{pedido.vlDesconto | currency:'BRL':true}}</strong>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-7\"></div>\r\n                        <div class=\"col-md-3 text-align-right\">\r\n                          <strong>Totalização:</strong>\r\n                        </div>\r\n                        <div class=\"col-md-2 text-align-right\">\r\n                          <strong>{{pedido.vlPedido | currency:'BRL':true}}</strong>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Descontos</label>\r\n            <div class=\"col-md-2\">\r\n              <input type=\"text\" currencyMask [options]=\"{ prefix: '', thousands: '.', decimal: ',' }\" class=\"form-control input\"\r\n                name=\"vlDesconto\" maxlength=\"10\" formControlName=\"vlDesconto\" [ngClass]=\"aplicarCssForm(formulario.get('vlDesconto'))\"\r\n                (blur)=\"atualizarValorDesconto($event.target.value)\"\r\n                >\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Endereco de entrega:</label>\r\n            <div class=\"col-md-10\">\r\n              <select class=\"form-control\" id=\"enderecoEntrega\" formControlName=\"enderecoEntrega\">\r\n                <option *ngFor=\"let endr of enderecos\" value=\"{{endr.id}}\">\r\n                  {{endr.dsEndereco }} - {{endr.dsLogradouro}} - {{endr.nrNumero }} - {{endr.dsComplemento}} {{endr.nmCidade}} - {{endr.ufCidade}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Taxa de entrega:</label>\r\n            <div class=\"col-md-4\">\r\n              <select class=\"form-control\" formControlName=\"taxaEntrega\" id=\"taxaEntrega\" (ngModelChange)=\"selecionarTaxaEntrega($event)\">\r\n                <option *ngFor=\"let te of taxaEntregas\" value=\"{{te.id}}\">{{te.nmTaxaEntrega}} - {{te.vlTaxaEntrega | currency:'BRL':true}} </option>\r\n              </select>\r\n            </div>\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\" *ngIf=\"exibirServicoEntrega\">Servico de entrega:</label>\r\n            <div class=\"col-md-4\">\r\n              <select class=\"form-control\" formControlName=\"servicoEntrega\" id=\"servicoEntrega\" *ngIf=\"exibirServicoEntrega\">\r\n                <option *ngFor=\"let se of servicoEntregas\" value=\"{{se.id}}\">{{se.nmServicoEntrega}} - {{se.nrTelefone | telefone}} </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n            <label class=\"col-md-2 form-control-label text-align-right-center\">Pagamento:</label>\r\n            <div class=\"col-md-4\">\r\n              <select class=\"form-control\" id=\"formaPagamento\" formControlName=\"formaPagamento\">\r\n                <option *ngFor=\"let fp of formaPagmentos\" value=\"{{fp.id}}\">{{fp.nmFormaPagamento}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"card-footer\">\r\n          <div style=\"float: right;\">\r\n            <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n              <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n            </button>\r\n            <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmPedido.show();\">\r\n              <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <confirm-popup-modal #modalConfirmPedido popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n    <strong>Confirma a inclusão do pedido?</strong>\r\n  </confirm-popup-modal>\r\n\r\n  <pesquisar-cliente-popup-modal #modalCliente (onClickConfirm)=\"selecionarCliente($event)\"> </pesquisar-cliente-popup-modal>\r\n  <pesquisar-produto-popup-modal #modalProduto (onClickConfirm)=\"adicionarProduto($event)\"> </pesquisar-produto-popup-modal>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/pedido/create/create-pedido.component.scss":
/***/ (function(module, exports) {

module.exports = ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 10%; }\n\n.table th, .table td {\n  padding: 0.20rem; }\n\n.coluna {\n  vertical-align: middle;\n  text-align: center; }\n\n.nolinebreak {\n  float: left;\n  padding-right: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/pedido/create/create-pedido.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var abstract_pedido_component_1 = __webpack_require__("./src/app/pages/pedido/abstract-pedido.component.ts");
var pedido_service_1 = __webpack_require__("./src/app/pages/pedido/pedido.service.ts");
var taxa_entrega_service_1 = __webpack_require__("./src/app/pages/config/taxaentrega/taxa-entrega.service.ts");
var forma_pagamento_service_1 = __webpack_require__("./src/app/pages/config/formapagamento/forma-pagamento.service.ts");
var servico_entrega_service_1 = __webpack_require__("./src/app/pages/config/servicoentrega/servico-entrega.service.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
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
        template: __webpack_require__("./src/app/pages/pedido/create/create-pedido.component.html"),
        styles: [__webpack_require__("./src/app/pages/pedido/create/create-pedido.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof forma_pagamento_service_1.FormaPagamentoService !== "undefined" && forma_pagamento_service_1.FormaPagamentoService) === "function" && _b || Object, typeof (_c = typeof taxa_entrega_service_1.TaxaEntregaService !== "undefined" && taxa_entrega_service_1.TaxaEntregaService) === "function" && _c || Object, typeof (_d = typeof servico_entrega_service_1.ServicoEntregaService !== "undefined" && servico_entrega_service_1.ServicoEntregaService) === "function" && _d || Object, typeof (_e = typeof pedido_service_1.PedidoService !== "undefined" && pedido_service_1.PedidoService) === "function" && _e || Object, typeof (_f = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _f || Object, typeof (_g = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _g || Object])
], CreatePedidoComponent);
exports.CreatePedidoComponent = CreatePedidoComponent;
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/create-pedido.component.js.map

/***/ }),

/***/ "./src/app/pages/pedido/listar/listar-pedido.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de pedidos\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 3%\">\r\n                        <i class=\"fa fa-hashtag\"></i>\r\n                    </th>\r\n                    <th class=\"text-center\" style=\"width: 7%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th class=\"text-left\" style=\"width: 30%\">Cliente</th>\r\n                    <th class=\"text-left\" style=\"width: 10%\">CPF</th>\r\n                    <th class=\"text-left\" style=\"width: 10%\">Telefone</th>\r\n                    <th class=\"text-center\" style=\"width: 10%\">Status</th>\r\n                    <th class=\"text-center\" style=\"width: 10%\">Origem</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td class=\"text-center\">\r\n                        {{item.id}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"avatar\">\r\n                            <foto-uri id=\"{{item.cliente.id}}\" modulo=\"CLI\" classCss=\"img-avatar\" alt=\"Avatar\"></foto-uri>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-left-midle\">\r\n                        <div class=\"margin-top\">\r\n                            {{item.cliente.nmPessoa | uppercase}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-left-midle\">\r\n                        <div class=\"margin-top\">\r\n                            {{item.cliente.nrCpf | cpfMask}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-left-midle\">\r\n                        <div class=\"margin-top\">\r\n                            {{item.cliente.fone.nrFoneCelular | telefone}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"margin-top\">\r\n                            <status-pedido status={{item.status}}></status-pedido>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"margin-top\">\r\n                            <origem-pedido status={{item.origem}}></origem-pedido>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"margin-top\">\r\n                            <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"alterarPedido(item)\">\r\n                                <i class=\"fa fa fa-edit\"> </i>\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\" (click)=\"selecionarItem(item)\">\r\n                                <i class=\"fa fa-eraser\"> </i>\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-sm btn-warning cursor-hands\" (click)=\"selecionarItemChangeStatus(item)\">\r\n                                <i class=\"fa fa-exclamation\"> </i>\r\n                            </button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>\r\n\r\n<confirm-popup-modal #excluirModal popupStyle=\"danger\" (onClickConfirm)=\"excluir()\">\r\n    <strong>Deseja excluir a pedido?</strong>\r\n</confirm-popup-modal>"

/***/ }),

/***/ "./src/app/pages/pedido/listar/listar-pedido.component.scss":
/***/ (function(module, exports) {

module.exports = ".table th, .table td {\n  padding: 0.20rem; }\n"

/***/ }),

/***/ "./src/app/pages/pedido/listar/listar-pedidocomponent.ts":
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
var pedido_service_1 = __webpack_require__("./src/app/pages/pedido/pedido.service.ts");
var cliente_service_1 = __webpack_require__("./src/app/pages/cadastros/cliente/cliente.service.ts");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var abstract_base_component_1 = __webpack_require__("./src/config/core/abstract-base.component.ts");
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
        template: __webpack_require__("./src/app/pages/pedido/listar/listar-pedido.component.html"),
        styles: [__webpack_require__("./src/app/pages/pedido/listar/listar-pedido.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _a || Object, typeof (_b = typeof pedido_service_1.PedidoService !== "undefined" && pedido_service_1.PedidoService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ListarPedidoComponent);
exports.ListarPedidoComponent = ListarPedidoComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-pedidocomponent.js.map

/***/ }),

/***/ "./src/app/pages/pedido/pedido-routing.module.ts":
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
var listar_pedidocomponent_1 = __webpack_require__("./src/app/pages/pedido/listar/listar-pedidocomponent.ts");
var create_pedido_component_1 = __webpack_require__("./src/app/pages/pedido/create/create-pedido.component.ts");
var update_pedido_component_1 = __webpack_require__("./src/app/pages/pedido/update/update-pedido.component.ts");
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

/***/ "./src/app/pages/pedido/pedido.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng2_currency_mask_1 = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var angular2_ladda_1 = __webpack_require__("./node_modules/angular2-ladda/module/module.js");
var modal_1 = __webpack_require__("./node_modules/ng2-bootstrap/modal/index.js");
var shared_component_module_1 = __webpack_require__("./src/app/shared/shared-component.module.ts");
var popup_modal_module_1 = __webpack_require__("./src/app/shared/popup/popup-modal.module.ts");
var pedido_routing_module_1 = __webpack_require__("./src/app/pages/pedido/pedido-routing.module.ts");
var angular2_text_mask_1 = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
var tabs_1 = __webpack_require__("./node_modules/ng2-bootstrap/tabs/index.js");
var pedido_service_1 = __webpack_require__("./src/app/pages/pedido/pedido.service.ts");
var storage_service_1 = __webpack_require__("./src/services/storage.service.ts");
var cliente_module_1 = __webpack_require__("./src/app/pages/cadastros/cliente/cliente.module.ts");
var forma_pagamento_service_1 = __webpack_require__("./src/app/pages/config/formapagamento/forma-pagamento.service.ts");
var servico_entrega_service_1 = __webpack_require__("./src/app/pages/config/servicoentrega/servico-entrega.service.ts");
var taxa_entrega_service_1 = __webpack_require__("./src/app/pages/config/taxaentrega/taxa-entrega.service.ts");
var listar_pedidocomponent_1 = __webpack_require__("./src/app/pages/pedido/listar/listar-pedidocomponent.ts");
var create_pedido_component_1 = __webpack_require__("./src/app/pages/pedido/create/create-pedido.component.ts");
var update_pedido_component_1 = __webpack_require__("./src/app/pages/pedido/update/update-pedido.component.ts");
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

/***/ "./src/app/pages/pedido/pedido.service.ts":
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

/***/ "./src/app/pages/pedido/update/update-pedido.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-1\"></div>\r\n    <div class=\"col-sm-10\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Pedido</strong>\r\n          <small> - alteração de pedido</small>\r\n        </div>\r\n  \r\n        <div class=\"card-block\">\r\n          <form [formGroup]=\"formulario\" class=\"form-horizontal \">\r\n  \r\n            <div class=\"form-group row\" formGroupName=\"cliente\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Cliente:</label>\r\n              <div class=\"col-md-10\">\r\n                <input type=\"text\" formControlName=\"nmPessoa\" name=\"nmPessoa\" class=\"form-control input-sm cursor-hands\" readonly placeholder=\"clique para selecionar um cliente\"\r\n                  (click)=\"modalCliente.show()\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" formGroupName=\"cliente\" *ngIf=\"exibirProduto\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Produtos:</label>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"from-group row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"card\">\r\n                      <div class=\"card-header\">\r\n                        <strong>Produtos</strong>\r\n                        <div class=\"card-actions\">\r\n                          <button type=\"button\" (click)=\"modalProduto.show()\" class=\"cursor-hands\">\r\n                            <i class=\"icon-plus\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card-block\" *ngIf=\"pedido.itens?.length > 0\">\r\n                        <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <th style=\"width:65%;\" class=\"text-left\">Produto</th>\r\n                            <th style=\"width:10%;\" class=\"text-left\">Quantidade</th>\r\n                            <th style=\"width:10%;\" class=\"text-right\">Valor</th>\r\n                            <th style=\"width:05%\" class=\"text-left\">Ação</th>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of pedido.itens\">\r\n                              <td class=\"text-left\">\r\n                                <strong>{{item?.produto?.nmProduto}}</strong>\r\n                                <div *ngIf=\"item?.adicionais?.length > 0\" style=\"padding-left:5%\">\r\n                                  <div *ngFor=\"let ad of item?.adicionais\">{{ad.nmProduto}}</div>\r\n                                </div>\r\n                              </td>\r\n                              <td class=\"text-left\" class=\"coluna\">\r\n                                <i class=\"fa fa-minus-circle fa-lg mt-0 cursor-hands\" style=\"color: red\" (click)=\"decreaseQuantity(item)\"></i>\r\n                                <strong>&nbsp;&nbsp; {{item.qtItem}}&nbsp;&nbsp; </strong>\r\n                                <i class=\"fa fa-plus-circle fa-lg mt-0  cursor-hands\" style=\"color: blue\" (click)=\"increaseQuantity(item)\"></i>\r\n                              </td>\r\n                              <td class=\"text-left\" class=\"coluna\">\r\n                                <strong>{{item.qtItem * item.produto.vlVenda | currency:'BRL':true}}</strong>\r\n                              </td>\r\n                              <td class=\"text-left\" class=\"coluna\">\r\n                                <i class=\"fa fa-trash fa-lg mt-0 cursor-hands\" style=\"color:red\" (click)=\"removeItem(item)\"></i>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n  \r\n                      </div>\r\n                      <div class=\"card-footer\" *ngIf=\"pedido.itens?.length > 0\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-7\"></div>\r\n                          <div class=\"col-md-3 text-align-right\">\r\n                            <strong>Taxa Entrega:</strong>\r\n                          </div>\r\n                          <div class=\"col-md-2 text-align-right\">\r\n                            <strong>{{pedido.vlTaxaEntrega | currency:'BRL':true}}</strong>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"pedido.vlDesconto >0\">\r\n                          <div class=\"col-md-7\"></div>\r\n                          <div class=\"col-md-3 text-align-right\">\r\n                            <strong>Descontos:</strong>\r\n                          </div>\r\n                          <div class=\"col-md-2 text-align-right\">\r\n                            <strong>{{pedido.vlDesconto | currency:'BRL':true}}</strong>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-7\"></div>\r\n                          <div class=\"col-md-3 text-align-right\">\r\n                            <strong>Totalização:</strong>\r\n                          </div>\r\n                          <div class=\"col-md-2 text-align-right\">\r\n                            <strong>{{pedido.vlPedido | currency:'BRL':true}}</strong>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  \r\n  \r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Descontos</label>\r\n              <div class=\"col-md-2\">\r\n                <input type=\"text\" currencyMask [options]=\"{ prefix: '', thousands: '.', decimal: ',' }\" class=\"form-control input\"\r\n                  name=\"vlDesconto\" maxlength=\"10\" formControlName=\"vlDesconto\" [ngClass]=\"aplicarCssForm(formulario.get('vlDesconto'))\"\r\n                  (blur)=\"atualizarValorDesconto($event.target.value)\"\r\n                  >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Endereco de entrega:</label>\r\n              <div class=\"col-md-10\">\r\n                <select class=\"form-control\" id=\"enderecoEntrega\" formControlName=\"enderecoEntrega\">\r\n                  <option *ngFor=\"let endr of enderecos\" value=\"{{endr.id}}\">\r\n                    {{endr.dsEndereco }} - {{endr.dsLogradouro}} - {{endr.nrNumero }} - {{endr.dsComplemento}} {{endr.nmCidade}} - {{endr.ufCidade}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Taxa de entrega:</label>\r\n              <div class=\"col-md-4\">\r\n                <select class=\"form-control\" formControlName=\"taxaEntrega\" id=\"taxaEntrega\" (ngModelChange)=\"selecionarTaxaEntrega($event)\">\r\n                  <option *ngFor=\"let te of taxaEntregas\" value=\"{{te.id}}\">{{te.nmTaxaEntrega}} - {{te.vlTaxaEntrega | currency:'BRL':true}} </option>\r\n                </select>\r\n              </div>\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\" *ngIf=\"exibirServicoEntrega\">Servico de entrega:</label>\r\n              <div class=\"col-md-4\">\r\n                <select class=\"form-control\" formControlName=\"servicoEntrega\" id=\"servicoEntrega\" *ngIf=\"exibirServicoEntrega\">\r\n                  <option *ngFor=\"let se of servicoEntregas\" value=\"{{se.id}}\">{{se.nmServicoEntrega}} - {{se.nrTelefone | telefone}} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" *ngIf=\"exibirDadosPedido\">\r\n              <label class=\"col-md-2 form-control-label text-align-right-center\">Pagamento:</label>\r\n              <div class=\"col-md-4\">\r\n                <select class=\"form-control\" id=\"formaPagamento\" formControlName=\"formaPagamento\">\r\n                  <option *ngFor=\"let fp of formaPagmentos\" value=\"{{fp.id}}\">{{fp.nmFormaPagamento}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class=\"card-footer\">\r\n            <div style=\"float: right;\">\r\n              <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n                <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n              </button>\r\n              <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmPedido.show();\">\r\n                <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <confirm-popup-modal #modalConfirmPedido popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n      <strong>Confirma a inclusão do pedido?</strong>\r\n    </confirm-popup-modal>\r\n  \r\n    <pesquisar-cliente-popup-modal #modalCliente (onClickConfirm)=\"selecionarCliente($event)\"> </pesquisar-cliente-popup-modal>\r\n    <pesquisar-produto-popup-modal #modalProduto (onClickConfirm)=\"adicionarProduto($event)\"> </pesquisar-produto-popup-modal>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/pedido/update/update-pedido.component.scss":
/***/ (function(module, exports) {

module.exports = ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 10%; }\n\n.table th, .table td {\n  padding: 0.20rem; }\n\n.coluna {\n  vertical-align: middle;\n  text-align: center; }\n\n.nolinebreak {\n  float: left;\n  padding-right: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/pedido/update/update-pedido.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var abstract_pedido_component_1 = __webpack_require__("./src/app/pages/pedido/abstract-pedido.component.ts");
var pedido_service_1 = __webpack_require__("./src/app/pages/pedido/pedido.service.ts");
var taxa_entrega_service_1 = __webpack_require__("./src/app/pages/config/taxaentrega/taxa-entrega.service.ts");
var forma_pagamento_service_1 = __webpack_require__("./src/app/pages/config/formapagamento/forma-pagamento.service.ts");
var servico_entrega_service_1 = __webpack_require__("./src/app/pages/config/servicoentrega/servico-entrega.service.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
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
        template: __webpack_require__("./src/app/pages/pedido/update/update-pedido.component.html"),
        styles: [__webpack_require__("./src/app/pages/pedido/update/update-pedido.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof forma_pagamento_service_1.FormaPagamentoService !== "undefined" && forma_pagamento_service_1.FormaPagamentoService) === "function" && _b || Object, typeof (_c = typeof taxa_entrega_service_1.TaxaEntregaService !== "undefined" && taxa_entrega_service_1.TaxaEntregaService) === "function" && _c || Object, typeof (_d = typeof servico_entrega_service_1.ServicoEntregaService !== "undefined" && servico_entrega_service_1.ServicoEntregaService) === "function" && _d || Object, typeof (_e = typeof pedido_service_1.PedidoService !== "undefined" && pedido_service_1.PedidoService) === "function" && _e || Object, typeof (_f = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _f || Object, typeof (_g = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _g || Object, typeof (_h = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _h || Object])
], UpdatePedidoComponent);
exports.UpdatePedidoComponent = UpdatePedidoComponent;
var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/update-pedido.component.js.map

/***/ })

});
//# sourceMappingURL=pedido.module.chunk.js.map