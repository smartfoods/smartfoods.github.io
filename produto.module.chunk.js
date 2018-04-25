webpackJsonp(["produto.module"],{

/***/ "./src/app/pages/cadastros/produto/abstract-produto.component.ts":
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
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var abstract_base_component_1 = __webpack_require__("./src/config/core/abstract-base.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
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
            nmProduto: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(50)]],
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
        this.formulario.patchValue({
            id: produto.id,
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
        if (value != null && value.id != null) {
            prod.id = value.id;
        }
        prod.nmProduto = value.nmProduto;
        prod.vlVenda = value.vlVenda;
        prod.vlCompra = value.vlCompra;
        prod.qtAcompanhamento = value.qtAcompanhamento;
        prod.status = 'A';
        prod.urlImagem = this.urlFoto;
        if (value.categoria != null && value.categoria[0].id != null) {
            prod.categoria = { id: value.categoria[0].id, nmCategoria: value.categoria[0].text };
        }
        if (value.unidadeVenda != null && value.unidadeVenda != null && value.unidadeVenda[0].id != null) {
            prod.unidadeVenda = { id: value.unidadeVenda[0].id, nmUnidadeMedida: value.unidadeVenda[0].text };
        }
        prod.qtMinimaEstoque = value.qtMinimaEstoque;
        prod.nrCodigoBarra = value.nrCodigoBarra;
        prod.dsUrlBlog = value.dsUrlBlog;
        prod.dsInfoComplementar = value.dsInfoComplementar;
        if (value.emCada != '' && value.emCada != null && value.emCada[0].id != null) {
            prod.emCada = { id: value.emCada[0].id, nmUnidadeMedida: value.emCada[0].text };
            prod.qtEmcada = value.qtEmcada;
        }
        prod.composicoes = this.produtosComposicoes;
        prod.infoNutricionais = this.produtosInfoNutricionais;
        return prod;
    };
    return AbstractProdutoComponent;
}(abstract_base_component_1.AbstractBaseComponent));
exports.AbstractProdutoComponent = AbstractProdutoComponent;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/abstract-produto.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/produto/create/create-produto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Produto</strong>\r\n        <small> - inclusão de um novo produto</small>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 col-md-4\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <strong>Imagens do produto</strong>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                  <div class=\"row\">\r\n                    <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                  <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n                    (onSelecionarImagem)=\"mudarImage($event)\">\r\n                  </upload-imagem>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--/.col-->\r\n\r\n            <div class=\"col-md-8 col-sm-8\">\r\n              <form [formGroup]=\"formulario\">\r\n                <tabset>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"icon-list\"></i> Dados &nbsp;\r\n                    </ng-template>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmProduto'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Nome</label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input [autofoco]=\"true\" type=\"text\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('nmProduto'))\" name=\"nmProduto\"\r\n                          maxlength=\"50\" placeholder=\"Digite o nome o produto\" formControlName=\"nmProduto\">\r\n                        <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmProduto'))\" titulo=\"Erro:\" mensagem=\"o campo Nome do produto deve ter entre 4 a 50 caracteres\">\r\n                        </alert-mensagem>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('categoria'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Categoria</label>\r\n                      <div class=\"col-sm-4\" >\r\n                        <ng-select [multiple]=\"false\" formControlName=\"categoria\" [items]=\"comboCategorias\" placeholder=\"{{label.selecione}}\" >\r\n                        </ng-select>\r\n                      </div>\r\n                    </div>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('unidadeVenda'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Unid. de venda </label>\r\n                      <div class=\"col-sm-4\">\r\n                        <ng-select [multiple]=\"false\" formControlName=\"unidadeVenda\" [items]=\"comboUnidades\" placeholder=\"{{label.selecione}}\">\r\n                        </ng-select>\r\n                      </div>\r\n                    </div>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('vlVenda'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Valor venda</label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('vlVenda'))\"\r\n                          name=\"vlVenda\" maxlength=\"10\" formControlName=\"vlVenda\">\r\n                      </div>\r\n                    </div>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('vlCompra'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Valor compra</label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('vlCompra'))\"\r\n                          name=\"vlCompra\" maxlength=\"10\" formControlName=\"vlCompra\" [ngClass]=\"aplicarCssForm(formulario.get('vlCompra'))\">\r\n                      </div>\r\n                    </div>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtMinimaEstoque'))\">\r\n                      <label class=\"col-sm-3 form-control-label\">Qtd minima em estoque</label>\r\n                      <div class=\"col-sm-3\">\r\n                        <input numberOnly type=\"text\" formControlName=\"qtMinimaEstoque\" class=\"form-control input-sm\" name=\"qtMinimaEstoque\" formControlName=\"qtMinimaEstoque\"\r\n                          maxlength=\"4\" [ngClass]=\"aplicarCssForm(formulario.get('qtMinimaEstoque'))\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtAcompanhamento'))\">\r\n                      <label class=\"col-sm-3 form-control-label\">Qtd acompanhamentos</label>\r\n                      <div class=\"col-sm-3\">\r\n                        <input numberOnly type=\"text\" formControlName=\"qtAcompanhamento\" class=\"form-control input-sm\" name=\"qtAcompanhamento\" formControlName=\"qtAcompanhamento\"\r\n                          maxlength=\"2\" [ngClass]=\"aplicarCssForm(formulario.get('qtAcompanhamento'))\">\r\n                      </div>\r\n                    </div>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nrCodigoBarra'))\">\r\n                      <label class=\"col-sm-3 form-control-label\">Cód barra</label>\r\n                      <div class=\"col-sm-3\">\r\n                        <input numberOnly type=\"text\" formControlName=\"nrCodigoBarra\" class=\"form-control input\" name=\"codigoBarra\" formControlName=\"nrCodigoBarra\"\r\n                          maxlength=\"13\" [ngClass]=\"aplicarCssForm(formulario.get('nrCodigoBarra'))\">\r\n                      </div>\r\n                    </div>\r\n\r\n                  </tab>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"icon-calculator\"></i> Composição &nbsp;\r\n                    </ng-template>\r\n                    <div class=\"from-group row\">\r\n\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"card\">\r\n                          <div class=\"card-header\">\r\n                            <strong>Composição do produto</strong>\r\n                            <div class=\"card-actions\">\r\n                              <button type=\"button\" (click)=\"composicaoModal.show()\">\r\n                                <i class=\"icon-plus\"></i>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-block\" *ngIf=\"produtosComposicoes?.length > 0\">\r\n                            <div class=\"row\">\r\n\r\n                              <table class=\"table table-striped\">\r\n                                <thead>\r\n                                  <th class=\"text-left\">Produto</th>\r\n                                  <th class=\"text-right\">Quantidade</th>\r\n                                  <th class=\"text-center\">Mostrar</th>\r\n                                  <th class=\"text-right\">Ação</th>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr *ngFor=\"let item of produtosComposicoes\">\r\n                                    <td class=\"text-left\">\r\n                                      <div>{{item.nmProdutoComposicao}}</div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                      {{item?.qtUtilizada}} - {{item.nmUnidadeMedida}}\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                      <simnao valor={{item.mostrarUnidade}}></simnao>\r\n                                    </td>\r\n\r\n\r\n                                    <td class=\"text-right\">\r\n                                      <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"composicaoModal.showAlteracao(item)\">\r\n                                        <i class=\"fa fa fa-edit\"> </i>\r\n                                      </button>\r\n                                      <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"excluirItem(item)\">\r\n                                        <i class=\"fa fa-eraser\"> </i>\r\n                                      </button>\r\n                                    </td>\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </tab>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"icon-pie-chart\"></i> Inf. adicionais\r\n                    </ng-template>\r\n                    <div [ngClass]=\"aplicarCssGroup(formulario.get('dsUrlBlog'))\">\r\n                      <label for=\"nome\">Url blog de receitas</label>\r\n                      <input #campoNome type=\"text\" [ngClass]=\"aplicarCssForm(formulario.get('dsUrlBlog'))\" name=\"urlBlog\" maxlength=\"120\" placeholder=\"url do blog\"\r\n                        formControlName=\"dsUrlBlog\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"dsInfoComplementar\">Informações extra</label>\r\n                      <textarea type=\"textarea\" maxlength=\"200\" rows=\"7\" [ngClass]=\"aplicarCssForm(formulario.get('dsInfoComplementar'))\" name=\"dsInfoComplementar\"\r\n                        placeholder=\"Digite as informações extra sobre o produto\" formControlName=\"dsInfoComplementar\"></textarea>\r\n                    </div>\r\n                  </tab>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"icon-pie-chart\"></i> Inf nutricionais\r\n                    </ng-template>\r\n                    <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtEmcada'))\">\r\n                      <label class=\"col-sm-2 form-control-label\">Quantidade</label>\r\n                      <div class=\"col-sm-2\">\r\n                        <input numberOnly type=\"text\" formControlName=\"qtEmcada\" class=\"form-control input\" name=\"qtEmcada\" formControlName=\"qtEmcada\"\r\n                          maxlength=\"3\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\">\r\n                        <ng-select [multiple]=\"false\" formControlName=\"emCada\" [items]=\"comboUnidadesEmCasa\" placeholder=\"{{label.selecione}}\">\r\n                        </ng-select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card\">\r\n                      <div class=\"card-header\">\r\n                        <strong>Tabela nutricional</strong>\r\n                        <div class=\"card-actions\">\r\n                          <button type=\"button\" (click)=\"InfoNutricionalModal.show()\">\r\n                            <i class=\"icon-plus\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card-block\" *ngIf=\"produtosInfoNutricionais?.length > 0\">\r\n                        <div class=\"row\">\r\n\r\n                          <table class=\"table table-striped\">\r\n                            <thead>\r\n                              <th class=\"text-left\">Descrição</th>\r\n                              <th class=\"text-right\">Quantidade</th>\r\n                              <th class=\"text-right\">Ação</th>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr *ngFor=\"let item of produtosInfoNutricionais\">\r\n                                <td class=\"text-left\">\r\n                                  <div>{{item.dsInfoNutricional}}</div>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                  {{item?.qtUtilizada}} - {{item.sgUnidadeMedida}}\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                  <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"InfoNutricionalModal.showAlteracao(item)\">\r\n                                    <i class=\"fa fa fa-edit\"> </i>\r\n                                  </button>\r\n                                  <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"excluirItemInfoNutriciobnal(item)\">\r\n                                    <i class=\"fa fa-eraser\"> </i>\r\n                                  </button>\r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </tab>\r\n                </tabset>\r\n              </form>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div style=\"float: right;\">\r\n              <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n                <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n              </button>\r\n              <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmProduto.show();\">\r\n                <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <confirm-popup-modal #modalConfirmProduto popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n    <strong>Confirma a inclusão do Produto?</strong>\r\n  </confirm-popup-modal>\r\n\r\n  <composicao-produto-popup-modal #composicaoModal (onClickConfirm)=\"confirmarCompProd($event)\"></composicao-produto-popup-modal>\r\n  <info-nutricional-produto-popup-modal #InfoNutricionalModal (onClickConfirm)=\"confirmarInfoNutricional($event)\"></info-nutricional-produto-popup-modal>\r\n  <!-- \r\n  -->\r\n</div>"

/***/ }),

/***/ "./src/app/pages/cadastros/produto/create/create-produto.component.scss":
/***/ (function(module, exports) {

module.exports = ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 10%; }\n\n.table th, .table td {\n  padding: 0.20rem; }\n"

/***/ }),

/***/ "./src/app/pages/cadastros/produto/create/create-produto.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var produto_service_1 = __webpack_require__("./src/app/pages/cadastros/produto/produto.service.ts");
var categoria_service_1 = __webpack_require__("./src/app/pages/config/categoria/categoria.service.ts");
var abstract_produto_component_1 = __webpack_require__("./src/app/pages/cadastros/produto/abstract-produto.component.ts");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var unidade_medida_service_1 = __webpack_require__("./src/app/pages/config/unidademedida/unidade-medida.service.ts");
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
        template: __webpack_require__("./src/app/pages/cadastros/produto/create/create-produto.component.html"),
        styles: [__webpack_require__("./src/app/pages/cadastros/produto/create/create-produto.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof categoria_service_1.CategoriaService !== "undefined" && categoria_service_1.CategoriaService) === "function" && _c || Object, typeof (_d = typeof unidade_medida_service_1.UnidadeMedidaService !== "undefined" && unidade_medida_service_1.UnidadeMedidaService) === "function" && _d || Object, typeof (_e = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _e || Object, typeof (_f = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _f || Object])
], CreateProdutoComponent);
exports.CreateProdutoComponent = CreateProdutoComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/create-produto.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/produto/edit/edit-produtos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Produto</strong>\r\n          <small> - alteração do produto</small>\r\n        </div>\r\n  \r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4 col-md-4\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <strong>Imagens do produto</strong>\r\n                  </div>\r\n                  <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                      <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n                    </div>\r\n  \r\n                  </div>\r\n                  <div class=\"card-footer\">\r\n                    <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n                      (onSelecionarImagem)=\"mudarImage($event)\">\r\n                    </upload-imagem>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!--/.col-->\r\n  \r\n              <div class=\"col-md-8 col-sm-8\">\r\n                <form [formGroup]=\"formulario\">\r\n                  <tabset>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-list\"></i> Dados &nbsp;\r\n                      </ng-template>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmProduto'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Nome</label>\r\n                        <div class=\"col-sm-10\">\r\n                          <input [autofoco]=\"true\" type=\"text\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('nmProduto'))\" name=\"nmProduto\"\r\n                            maxlength=\"50\" placeholder=\"Digite o nome o produto\" formControlName=\"nmProduto\">\r\n                          <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmProduto'))\" titulo=\"Erro:\" mensagem=\"o campo Nome do produto deve ter entre 4 a 50 caracteres\">\r\n                          </alert-mensagem>\r\n                        </div>\r\n                      </div>\r\n  \r\n  \r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('categoria'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Categoria</label>\r\n                        <div class=\"col-sm-4\" >\r\n                          <ng-select [multiple]=\"false\" formControlName=\"categoria\" [items]=\"comboCategorias\" placeholder=\"{{label.selecione}}\" >\r\n                          </ng-select>\r\n                        </div>\r\n                      </div>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('unidadeVenda'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Unid. de venda </label>\r\n                        <div class=\"col-sm-4\">\r\n                          <ng-select [multiple]=\"false\" formControlName=\"unidadeVenda\" [items]=\"comboUnidades\" placeholder=\"{{label.selecione}}\">\r\n                          </ng-select>\r\n                        </div>\r\n                      </div>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('vlVenda'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Valor venda</label>\r\n                        <div class=\"col-sm-4\">\r\n                          <input type=\"text\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('vlVenda'))\"\r\n                            name=\"vlVenda\" maxlength=\"10\" formControlName=\"vlVenda\">\r\n                        </div>\r\n                      </div>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('vlCompra'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Valor compra</label>\r\n                        <div class=\"col-sm-4\">\r\n                          <input type=\"text\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control input\" [ngClass]=\"aplicarCssForm(formulario.get('vlCompra'))\"\r\n                            name=\"vlCompra\" maxlength=\"10\" formControlName=\"vlCompra\" [ngClass]=\"aplicarCssForm(formulario.get('vlCompra'))\">\r\n                        </div>\r\n                      </div>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtMinimaEstoque'))\">\r\n                        <label class=\"col-sm-3 form-control-label\">Qtd minima em estoque</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input numberOnly type=\"text\" formControlName=\"qtMinimaEstoque\" class=\"form-control input-sm\" name=\"qtMinimaEstoque\" formControlName=\"qtMinimaEstoque\"\r\n                            maxlength=\"4\" [ngClass]=\"aplicarCssForm(formulario.get('qtMinimaEstoque'))\">\r\n                        </div>\r\n                      </div>\r\n  \r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtAcompanhamento'))\">\r\n                        <label class=\"col-sm-3 form-control-label\">Qtd acompanhamentos</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input numberOnly type=\"text\" formControlName=\"qtAcompanhamento\" class=\"form-control input-sm\" name=\"qtAcompanhamento\" formControlName=\"qtAcompanhamento\"\r\n                            maxlength=\"2\" [ngClass]=\"aplicarCssForm(formulario.get('qtAcompanhamento'))\">\r\n                        </div>\r\n                      </div>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nrCodigoBarra'))\">\r\n                        <label class=\"col-sm-3 form-control-label\">Cód barra</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input numberOnly type=\"text\" formControlName=\"nrCodigoBarra\" class=\"form-control input\" name=\"codigoBarra\" formControlName=\"nrCodigoBarra\"\r\n                            maxlength=\"13\" [ngClass]=\"aplicarCssForm(formulario.get('nrCodigoBarra'))\">\r\n                        </div>\r\n                      </div>\r\n  \r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-calculator\"></i> Composição &nbsp;\r\n                      </ng-template>\r\n                      <div class=\"from-group row\">\r\n  \r\n                        <div class=\"col-sm-12\">\r\n                          <div class=\"card\">\r\n                            <div class=\"card-header\">\r\n                              <strong>Composição do produto</strong>\r\n                              <div class=\"card-actions\">\r\n                                <button type=\"button\" (click)=\"composicaoModal.show()\">\r\n                                  <i class=\"icon-plus\"></i>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"card-block\" *ngIf=\"produtosComposicoes?.length > 0\">\r\n                              <div class=\"row\">\r\n  \r\n                                <table class=\"table table-striped\">\r\n                                  <thead>\r\n                                    <th class=\"text-left\">Produto</th>\r\n                                    <th class=\"text-right\">Quantidade</th>\r\n                                    <th class=\"text-center\">Mostrar</th>\r\n                                    <th class=\"text-right\">Ação</th>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                    <tr *ngFor=\"let item of produtosComposicoes\">\r\n                                      <td class=\"text-left\">\r\n                                        <div>{{item.nmProdutoComposicao}}</div>\r\n                                      </td>\r\n                                      <td class=\"text-right\">\r\n                                        {{item?.qtUtilizada}} - {{item.nmUnidadeMedida}}\r\n                                      </td>\r\n                                      <td class=\"text-center\">\r\n                                        <simnao valor={{item.mostrarUnidade}}></simnao>\r\n                                      </td>\r\n  \r\n  \r\n                                      <td class=\"text-right\">\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"composicaoModal.showAlteracao(item)\">\r\n                                          <i class=\"fa fa fa-edit\"> </i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"excluirItem(item)\">\r\n                                          <i class=\"fa fa-eraser\"> </i>\r\n                                        </button>\r\n                                      </td>\r\n                                    </tr>\r\n                                  </tbody>\r\n                                </table>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-pie-chart\"></i> Inf. adicionais\r\n                      </ng-template>\r\n                      <div [ngClass]=\"aplicarCssGroup(formulario.get('dsUrlBlog'))\">\r\n                        <label for=\"nome\">Url blog de receitas</label>\r\n                        <input #campoNome type=\"text\" [ngClass]=\"aplicarCssForm(formulario.get('dsUrlBlog'))\" name=\"urlBlog\" maxlength=\"120\" placeholder=\"url do blog\"\r\n                          formControlName=\"dsUrlBlog\">\r\n                      </div>\r\n  \r\n                      <div class=\"form-group\">\r\n                        <label for=\"dsInfoComplementar\">Informações extra</label>\r\n                        <textarea type=\"textarea\" maxlength=\"200\" rows=\"7\" [ngClass]=\"aplicarCssForm(formulario.get('dsInfoComplementar'))\" name=\"dsInfoComplementar\"\r\n                          placeholder=\"Digite as informações extra sobre o produto\" formControlName=\"dsInfoComplementar\"></textarea>\r\n                      </div>\r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-pie-chart\"></i> Inf nutricionais\r\n                      </ng-template>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('qtEmcada'))\">\r\n                        <label class=\"col-sm-2 form-control-label\">Quantidade</label>\r\n                        <div class=\"col-sm-2\">\r\n                          <input numberOnly type=\"text\" formControlName=\"qtEmcada\" class=\"form-control input\" name=\"qtEmcada\" formControlName=\"qtEmcada\"\r\n                            maxlength=\"3\">\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                          <ng-select [multiple]=\"false\" formControlName=\"emCada\" [items]=\"comboUnidadesEmCasa\" placeholder=\"{{label.selecione}}\">\r\n                          </ng-select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                          <strong>Tabela nutricional</strong>\r\n                          <div class=\"card-actions\">\r\n                            <button type=\"button\" (click)=\"InfoNutricionalModal.show()\">\r\n                              <i class=\"icon-plus\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-block\" *ngIf=\"produtosInfoNutricionais?.length > 0\">\r\n                          <div class=\"row\">\r\n  \r\n                            <table class=\"table table-striped\">\r\n                              <thead>\r\n                                <th class=\"text-left\">Descrição</th>\r\n                                <th class=\"text-right\">Quantidade</th>\r\n                                <th class=\"text-right\">Ação</th>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngFor=\"let item of produtosInfoNutricionais\">\r\n                                  <td class=\"text-left\">\r\n                                    <div>{{item.dsInfoNutricional}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    {{item?.qtUtilizada}} - {{item.sgUnidadeMedida}}\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"InfoNutricionalModal.showAlteracao(item)\">\r\n                                      <i class=\"fa fa fa-edit\"> </i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"excluirItemInfoNutriciobnal(item)\">\r\n                                      <i class=\"fa fa-eraser\"> </i>\r\n                                    </button>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                  </tabset>\r\n                </form>\r\n  \r\n              </div>\r\n  \r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div style=\"float: right;\">\r\n                <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n                  <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n                </button>\r\n                <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmProduto.show();\">\r\n                  <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <confirm-popup-modal #modalConfirmProduto popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n      <strong>Confirma a inclusão do Produto?</strong>\r\n    </confirm-popup-modal>\r\n  \r\n    <composicao-produto-popup-modal #composicaoModal (onClickConfirm)=\"confirmarCompProd($event)\"></composicao-produto-popup-modal>\r\n    <info-nutricional-produto-popup-modal #InfoNutricionalModal (onClickConfirm)=\"confirmarInfoNutricional($event)\"></info-nutricional-produto-popup-modal>\r\n    <!-- \r\n    -->\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/cadastros/produto/edit/edit-produtos.component.scss":
/***/ (function(module, exports) {

module.exports = ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 10%; }\n\n.table th, .table td {\n  padding: 0.20rem; }\n"

/***/ }),

/***/ "./src/app/pages/cadastros/produto/edit/edit-produtos.component.ts":
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
var image_service_1 = __webpack_require__("./src/services/image.service.ts");
var unidade_medida_service_1 = __webpack_require__("./src/app/pages/config/unidademedida/unidade-medida.service.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var produto_service_1 = __webpack_require__("./src/app/pages/cadastros/produto/produto.service.ts");
var categoria_service_1 = __webpack_require__("./src/app/pages/config/categoria/categoria.service.ts");
var abstract_produto_component_1 = __webpack_require__("./src/app/pages/cadastros/produto/abstract-produto.component.ts");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
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
                    .subscribe(function (res) { return _this.urlFoto = _this.image.getImage(produto.id, 'PRD'); }, function (error) { return _this.urlFoto = _this.urlFotoAvatar; });
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
        template: __webpack_require__("./src/app/pages/cadastros/produto/edit/edit-produtos.component.html"),
        styles: [__webpack_require__("./src/app/pages/cadastros/produto/edit/edit-produtos.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, typeof (_d = typeof categoria_service_1.CategoriaService !== "undefined" && categoria_service_1.CategoriaService) === "function" && _d || Object, typeof (_e = typeof unidade_medida_service_1.UnidadeMedidaService !== "undefined" && unidade_medida_service_1.UnidadeMedidaService) === "function" && _e || Object, typeof (_f = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _f || Object, typeof (_g = typeof image_service_1.ImageService !== "undefined" && image_service_1.ImageService) === "function" && _g || Object, typeof (_h = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _h || Object])
], EditProdutosComponent);
exports.EditProdutosComponent = EditProdutosComponent;
var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/edit-produtos.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/produto/listar/listar-produtos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/produtos/novo']\">\r\n    <i class=\"icon-plus\"></i> Novo\r\n</button>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <div class=\"col-md-4\">\r\n            <i class=\"fa fa-align-justify\"></i> Listagem de produtos\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2 col md-4\">Categorias:</div>\r\n                <div class=\"col-sm-4 col-md-2\" *ngFor=\"let item of categorias\">\r\n                    <input type=\"checkbox\" id=\"checkbox1\" name=\"checkbox1\" (click)=\"selecionarCheck($event.target.checked, item)\"> {{item.nmCategoria}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 5%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th>\r\n                        <div style=\"width: 40%\">\r\n                            Descrição do produto\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div style=\"width: 10%\" class=\"hidden-md-down\">\r\n                            Categoria\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div style=\"width: 10%\" class=\"hidden-md-down\" >\r\n                            Situação\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div style=\"width: 10%\" >\r\n                            Preço\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div style=\"width: 15%\">\r\n                            Ação\r\n                        </div>\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td >\r\n                        <div class=\"avatar\">\r\n                            <foto-uri id=\"{{item.id}}\" modulo=\"PRD\" classCss=\"img-avatar\" alt=\"Avatar\"></foto-uri>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-left\">\r\n                        <div class=\"margin-top\">{{item.nmProduto}}</div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"margin-top hidden-md-down\" >\r\n                            {{item?.categoria?.nmCategoria}}\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"margin-top hidden-md-down\">\r\n                            <status status={{item.status}}></status>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-right \">\r\n                        <div class=\"margin-top\">{{item.vlVenda | currency:'BRL':true}}</div>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <form-buttons (onClickBtnEditar)=\"alterarProduto(item)\" (onClickBtnExcluir)=\"selecionarItem(item)\" (onClickBtnAlterarStatus)=\"selecionarItemChangeStatus(item)\">\r\n                        </form-buttons>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<confirm-popup-modal #modalExcluirProduto popupStyle=\"danger\" (onClickConfirm)=\"excluirCategoria()\">\r\n    <strong>Deseja excluir o produto?</strong>\r\n</confirm-popup-modal>\r\n\r\n<confirm-popup-modal #modalChangeSatusProduto popupStyle=\"danger\" (onClickConfirm)=\"changeStatus()\">\r\n    <strong>Deseja alterar o status do produto?</strong>\r\n</confirm-popup-modal>"

/***/ }),

/***/ "./src/app/pages/cadastros/produto/listar/listar-produtos.component.scss":
/***/ (function(module, exports) {

module.exports = ".table th, .table td {\n  padding: 0.25rem; }\n"

/***/ }),

/***/ "./src/app/pages/cadastros/produto/listar/listar-produtos.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var api_config_1 = __webpack_require__("./src/config/core/api.config.ts");
var produto_service_1 = __webpack_require__("./src/app/pages/cadastros/produto/produto.service.ts");
var abstract_base_component_1 = __webpack_require__("./src/config/core/abstract-base.component.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var categoria_service_1 = __webpack_require__("./src/app/pages/config/categoria/categoria.service.ts");
var ListarProdutosComponent = (function (_super) {
    __extends(ListarProdutosComponent, _super);
    function ListarProdutosComponent(produtoService, categoriaService, router) {
        var _this = _super.call(this) || this;
        _this.produtoService = produtoService;
        _this.categoriaService = categoriaService;
        _this.router = router;
        _this.bucketUrl = api_config_1.API_CONFIG.bucketBaseUrl;
        _this.categorias = [];
        _this.categoraisSelecionada = [];
        return _this;
    }
    ListarProdutosComponent.prototype.ngOnInit = function () {
        this.carregarDados();
    };
    ListarProdutosComponent.prototype.selecionarCheck = function (acao, item) {
        if (acao) {
            this.categoraisSelecionada.push(item.id);
        }
        else {
            this.categoraisSelecionada = this.categoraisSelecionada.filter(function (cat) { return cat != item.id; });
        }
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
    ListarProdutosComponent.prototype.carregarDados = function () {
        var _this = this;
        this.categoriaService.findAll()
            .subscribe(function (res) {
            _this.categorias = res;
            //for (let x of this.categorias) {
            //this.categoraisSelecionada.push(x.id);
            //}
            _this.carregarProdutos();
        });
    };
    ListarProdutosComponent.prototype.carregarProdutos = function () {
        var _this = this;
        this.produtoService.findByCategorias(this.categoraisSelecionada)
            .subscribe(function (res) { return _this.items = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    ;
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
        template: __webpack_require__("./src/app/pages/cadastros/produto/listar/listar-produtos.component.html"),
        styles: [__webpack_require__("./src/app/pages/cadastros/produto/listar/listar-produtos.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _a || Object, typeof (_b = typeof categoria_service_1.CategoriaService !== "undefined" && categoria_service_1.CategoriaService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ListarProdutosComponent);
exports.ListarProdutosComponent = ListarProdutosComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-produtos.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/produto/popup/composicao-produto-popup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<base-popup-modal [nomePopup]=\"nomeJanePopup\" #modalConfirm modalSize=\"md\" [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formProdComp.value)\"\r\n        [desabilitarBtnConfirmar]=\"!formProdComp.valid\">\r\n\r\n        <form [formGroup]=\"formProdComp\" >\r\n                <div [ngClass]=\"aplicarCssGroupRow(formProdComp.get('produtoComp'))\">\r\n                        <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Produto</label>\r\n                        <div class=\"col-sm-10\">\r\n                                <ng-select *ngIf=\"!formProdComp.get('emAlteracao').value\" [multiple]=\"false\" formControlName=\"produtoComp\" [items]=\"comboCompProdutos\"\r\n                                        placeholder=\"{{label.selecione}}\"></ng-select>\r\n                                <input *ngIf=\"formProdComp.get('emAlteracao').value\" type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\"\r\n                                        placeholder=\"Disabled\" disabled=\"\" value=\"{{formProdComp.get('produtoComp').value[0].text}}\">\r\n                        </div>\r\n                </div>\r\n                <div [ngClass]=\"aplicarCssGroupRow(formProdComp.get('qtUtilizada'))\">\r\n                        <label class=\"col-sm-2 form-control-label\" for=\"input-normal\">Quantidade</label>\r\n                        <div class=\"col-sm-4\">\r\n                                <input #campoNome numberOnly type=\"text\" formControlName=\"qtUtilizada\" class=\"form-control input-sm\" name=\"qtUtilizada\" formControlName=\"qtUtilizada\"\r\n                                        maxlength=\"4\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                                <ng-select formControlName=\"unidade\" [items]=\"comboCompUnidades\" placeholder=\"{{label.selecione}}\"></ng-select>\r\n                        </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 form-control-label\">Mostrar</label>\r\n                        <div class=\"col-sm-8\">\r\n                                <label class=\"switch switch-lg switch-text switch-primary\">\r\n                                        <input #checkMostrar type=\"checkbox\" class=\"switch-input\" [checked]=\"checkMostrar\" (change)=\"compProdCheckMostrar(checkMostrar.checked)\"\r\n                                        />\r\n                                        <span class=\"switch-label\" data-on=\"sim\" data-off=\"não\"></span>\r\n                                        <span class=\"switch-handle\"></span>\r\n                                </label>\r\n                        </div>\r\n                </div>\r\n        </form>\r\n</base-popup-modal>"

/***/ }),

/***/ "./src/app/pages/cadastros/produto/popup/composicao-produto-popup-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal-dialog {\n  padding-top: 10%; }\n"

/***/ }),

/***/ "./src/app/pages/cadastros/produto/popup/composicao-produto-popup-modal.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var produto_service_1 = __webpack_require__("./src/app/pages/cadastros/produto/produto.service.ts");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var abstract_popup_component_1 = __webpack_require__("./src/config/core/abstract-popup.component.ts");
var unidade_medida_service_1 = __webpack_require__("./src/app/pages/config/unidademedida/unidade-medida.service.ts");
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
        styles: [__webpack_require__("./src/app/pages/cadastros/produto/popup/composicao-produto-popup-modal.component.scss")],
        template: __webpack_require__("./src/app/pages/cadastros/produto/popup/composicao-produto-popup-modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof unidade_medida_service_1.UnidadeMedidaService !== "undefined" && unidade_medida_service_1.UnidadeMedidaService) === "function" && _b || Object, typeof (_c = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _c || Object])
], ComposicaoProdutoPopupModalComponent);
exports.ComposicaoProdutoPopupModalComponent = ComposicaoProdutoPopupModalComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/composicao-produto-popup-modal.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/produto/popup/info-nutricional-produto-popup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<base-popup-modal [nomePopup]=\"nomeJanePopup\" #modalConfirm modalSize=\"md\" [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formProdInfo.value)\"\r\n        [desabilitarBtnConfirmar]=\"!formProdInfo.valid\">\r\n\r\n        <form [formGroup]=\"formProdInfo\" >\r\n                \r\n                <div [ngClass]=\"aplicarCssGroupRow(formProdInfo.get('infoNutricional'))\">\r\n                        <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Informação</label>\r\n                        <div class=\"col-sm-10\">\r\n                                <ng-select *ngIf=\"!formProdInfo.get('emAlteracao').value\" [multiple]=\"false\" formControlName=\"infoNutricional\" [items]=\"comboInfoNutriciais\"\r\n                                placeholder=\"{{label.selecione}}\"></ng-select>\r\n                                <input *ngIf=\"formProdInfo.get('emAlteracao').value\" type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\"\r\n                                placeholder=\"Disabled\" disabled=\"\" value=\"{{formProdInfo.get('infoNutricional').value[0].text}}\">\r\n                        </div>\r\n                </div>\r\n                <div [ngClass]=\"aplicarCssGroupRow(formProdInfo.get('qtUtilizada'))\">\r\n                        <label class=\"col-sm-2 form-control-label\" for=\"input-normal\">Quantidade</label>\r\n                        <div class=\"col-sm-4\">\r\n                                <input #campoNome numberOnly type=\"text\" formControlName=\"qtUtilizada\" class=\"form-control input-sm\" name=\"qtUtilizada\" formControlName=\"qtUtilizada\"\r\n                                maxlength=\"4\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                                <ng-select formControlName=\"unidade\" [items]=\"comboCompUnidades\" placeholder=\"{{label.selecione}}\"></ng-select>\r\n                        </div>\r\n                </div>\r\n        </form>\r\n</base-popup-modal>"

/***/ }),

/***/ "./src/app/pages/cadastros/produto/popup/info-nutricional-produto-popup-modal.component.ts":
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
var info_nutricional_service_1 = __webpack_require__("./src/app/pages/config/infonutricional/info-nutricional.service.ts");
var trata_error_service_1 = __webpack_require__("./src/services/trata-error.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var event_emitter_services_1 = __webpack_require__("./src/app/shared/event/event-emitter.services.ts");
var abstract_popup_component_1 = __webpack_require__("./src/config/core/abstract-popup.component.ts");
var unidade_medida_service_1 = __webpack_require__("./src/app/pages/config/unidademedida/unidade-medida.service.ts");
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
        template: __webpack_require__("./src/app/pages/cadastros/produto/popup/info-nutricional-produto-popup-modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof unidade_medida_service_1.UnidadeMedidaService !== "undefined" && unidade_medida_service_1.UnidadeMedidaService) === "function" && _b || Object, typeof (_c = typeof info_nutricional_service_1.InfoNutricionalService !== "undefined" && info_nutricional_service_1.InfoNutricionalService) === "function" && _c || Object])
], InfoNutricionalProdutoPopupModalComponent);
exports.InfoNutricionalProdutoPopupModalComponent = InfoNutricionalProdutoPopupModalComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/info-nutricional-produto-popup-modal.component.js.map

/***/ }),

/***/ "./src/app/pages/cadastros/produto/produto-routing.module.ts":
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
var listar_produtos_component_1 = __webpack_require__("./src/app/pages/cadastros/produto/listar/listar-produtos.component.ts");
var create_produto_component_1 = __webpack_require__("./src/app/pages/cadastros/produto/create/create-produto.component.ts");
var edit_produtos_component_1 = __webpack_require__("./src/app/pages/cadastros/produto/edit/edit-produtos.component.ts");
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

/***/ "./src/app/pages/cadastros/produto/produto.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var info_nutricional_service_1 = __webpack_require__("./src/app/pages/config/infonutricional/info-nutricional.service.ts");
var composicao_produto_popup_modal_component_1 = __webpack_require__("./src/app/pages/cadastros/produto/popup/composicao-produto-popup-modal.component.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var ng2_select_1 = __webpack_require__("./node_modules/ng2-select/index.js");
var angular2_ladda_1 = __webpack_require__("./node_modules/angular2-ladda/module/module.js");
var modal_1 = __webpack_require__("./node_modules/ng2-bootstrap/modal/index.js");
var popup_modal_module_1 = __webpack_require__("./src/app/shared/popup/popup-modal.module.ts");
var produto_service_1 = __webpack_require__("./src/app/pages/cadastros/produto/produto.service.ts");
var categoria_service_1 = __webpack_require__("./src/app/pages/config/categoria/categoria.service.ts");
var shared_component_module_1 = __webpack_require__("./src/app/shared/shared-component.module.ts");
var produto_routing_module_1 = __webpack_require__("./src/app/pages/cadastros/produto/produto-routing.module.ts");
var listar_produtos_component_1 = __webpack_require__("./src/app/pages/cadastros/produto/listar/listar-produtos.component.ts");
var create_produto_component_1 = __webpack_require__("./src/app/pages/cadastros/produto/create/create-produto.component.ts");
var edit_produtos_component_1 = __webpack_require__("./src/app/pages/cadastros/produto/edit/edit-produtos.component.ts");
var storage_service_1 = __webpack_require__("./src/services/storage.service.ts");
var angular2_text_mask_1 = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
var ng2_currency_mask_1 = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
var unidade_medida_service_1 = __webpack_require__("./src/app/pages/config/unidademedida/unidade-medida.service.ts");
var tabs_1 = __webpack_require__("./node_modules/ng2-bootstrap/tabs/index.js");
var info_nutricional_produto_popup_modal_component_1 = __webpack_require__("./src/app/pages/cadastros/produto/popup/info-nutricional-produto-popup-modal.component.ts");
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

/***/ })

});
//# sourceMappingURL=produto.module.chunk.js.map