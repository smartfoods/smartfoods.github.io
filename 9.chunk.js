webpackJsonp([9,17],{

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var modal_1 = __webpack_require__(103);
var storage_service_1 = __webpack_require__(65);
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(25);
var forms_1 = __webpack_require__(18);
var http_1 = __webpack_require__(20);
var popup_modal_module_1 = __webpack_require__(148);
var categoria_service_1 = __webpack_require__(150);
var shared_component_module_1 = __webpack_require__(78);
var categoria_routing_module_1 = __webpack_require__(848);
var listar_categoria_component_1 = __webpack_require__(831);
var categoria_popup_modal_component_1 = __webpack_require__(849);
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

/***/ 831:
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
var categoria_service_1 = __webpack_require__(150);
var abstract_base_component_1 = __webpack_require__(102);
var router_1 = __webpack_require__(43);
var ListarCategoriaComponent = (function (_super) {
    __extends(ListarCategoriaComponent, _super);
    function ListarCategoriaComponent(categoriaService, router) {
        var _this = _super.call(this) || this;
        _this.categoriaService = categoriaService;
        _this.router = router;
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
        template: __webpack_require__(888),
        styles: [__webpack_require__(867)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof categoria_service_1.CategoriaService !== "undefined" && categoria_service_1.CategoriaService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ListarCategoriaComponent);
exports.ListarCategoriaComponent = ListarCategoriaComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-categoria.component.js.map

/***/ }),

/***/ 848:
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
var listar_categoria_component_1 = __webpack_require__(831);
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

/***/ 849:
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
var categoria_service_1 = __webpack_require__(150);
var forms_1 = __webpack_require__(18);
var core_1 = __webpack_require__(1);
var abstract_popup_component_1 = __webpack_require__(64);
var image_service_1 = __webpack_require__(79);
var CategoriaPopupModalComponent = (function (_super) {
    __extends(CategoriaPopupModalComponent, _super);
    function CategoriaPopupModalComponent(categoriaService, image, fb) {
        var _this = _super.call(this, "categoriasPoup") || this;
        _this.categoriaService = categoriaService;
        _this.image = image;
        _this.fb = fb;
        _this.checkExibir = false;
        _this.desabilitarCampos = false;
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
        categoria.urlImagem = this.urlFoto;
        this.acao(categoria, this.categoriaService);
    };
    CategoriaPopupModalComponent.prototype.mudarImage = function (evento) {
        this.atualizarFoto(evento.foto);
    };
    CategoriaPopupModalComponent.prototype.alterarCheckExibir = function (valor) {
        this.formulario.patchValue({
            exibirConsulta: valor ? 'S' : 'N'
        });
    };
    CategoriaPopupModalComponent.prototype.alterarForm = function (categoria) {
        var _this = this;
        this.image.getImageFromBucket(categoria.id, 'CAT')
            .subscribe(function (res) { return _this.urlFoto = _this.image.getImage(categoria.id, 'CAT'); }, function (error) { return _this.urlFoto = _this.urlFotoAvatar; });
        this.formulario.patchValue({
            id: categoria.id,
            nmCategoria: categoria.nmCategoria,
            exibirConsulta: categoria.exibirConsulta,
            status: categoria.status,
            dsComentario: categoria.dsComentario,
            urlImagem: categoria.urlImagem,
            emAlteracao: true
        });
        this.desabilitarCampos = categoria.id == '1';
        this.checkExibir = categoria.exibirConsulta == 'S';
        this.urlFoto = categoria.urlImagem;
    };
    CategoriaPopupModalComponent.prototype.criarForm = function () {
        this.urlFoto = this.urlFotoAvatar;
        this.formulario = this.fb.group({
            id: [],
            nmCategoria: ['', forms_1.Validators.required],
            dsComentario: [''],
            exibirConsulta: ['S'],
            status: ['A'],
            foto: [''],
            emAlteracao: [false]
        });
        this.desabilitarCampos = false;
    };
    CategoriaPopupModalComponent.prototype.atualizarFoto = function (foto) {
        this.urlFoto = foto;
    };
    return CategoriaPopupModalComponent;
}(abstract_popup_component_1.AbstractPopupComponent));
CategoriaPopupModalComponent = __decorate([
    core_1.Component({
        selector: 'categoria-popup-modal',
        template: __webpack_require__(889),
        styles: [__webpack_require__(868)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof categoria_service_1.CategoriaService !== "undefined" && categoria_service_1.CategoriaService) === "function" && _a || Object, typeof (_b = typeof image_service_1.ImageService !== "undefined" && image_service_1.ImageService) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object])
], CategoriaPopupModalComponent);
exports.CategoriaPopupModalComponent = CategoriaPopupModalComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/categoria-popup-modal.component.js.map

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"categoriaModal.show()\">\r\n    <i class=\"icon-plus\"></i> Novo</button>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de categorias\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 10%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th style=\"width: 40%\">Categorias</th>\r\n                    <th class=\"text-center\" style=\"width: 25%\">Situação</th>\r\n                    <th class=\"text-center\" style=\"width: 25%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td class=\"text-center\">\r\n                        <div class=\"avatar\">\r\n                            <foto-uri id=\"{{item.id}}\" modulo=\"CAT\" classCss=\"img-avatar\" alt=\"Avatar\"></foto-uri>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div>{{item.nmCategoria}}</div>\r\n                        <div class=\"small text-muted\">\r\n                            {{item.dsComentario}}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <status status={{item.status}}></status>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <form-buttons \r\n                            (onClickBtnEditar)=\"categoriaModal.showAlteracao(item)\"\r\n                            (onClickBtnExcluir)=\"selecionarItem(item)\" \r\n                            [ocultarBtnExcluir]=\"item.id <3\"\r\n                            [ocultarBtnAlterarStatus]=\"item.id <3\"\r\n                            (onClickBtnAlterarStatus)=\"selecionarItemChangeStatus(item)\">\r\n                        </form-buttons>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<confirm-popup-modal #excluirModal popupStyle=\"primary\" (onClickConfirm)=\"excluir()\">\r\n    <strong>Deseja excluir a categoria?</strong>\r\n</confirm-popup-modal>\r\n\r\n<confirm-popup-modal #changeSatusModal popupStyle=\"primary\" (onClickConfirm)=\"changeStatus()\">\r\n    <strong>Deseja alterar o status da categoria?</strong>\r\n</confirm-popup-modal>\r\n\r\n\r\n<categoria-popup-modal #categoriaModal (onClickConfirm)=\"carregarTodos()\"></categoria-popup-modal>"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<base-popup-modal [nomePopup]=\"nomeJanePopup\" #modalConfirm [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formulario.value)\"\r\n  [desabilitarBtnConfirmar]=\"!formulario.valid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Imagem da categoria</strong>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n            (onSelecionarImagem)=\"mudarImage($event)\">\r\n          </upload-imagem>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-md-8 col-sm-8\">\r\n      <form [formGroup]=\"formulario\" novalidade>\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Descrição</strong>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <div [ngClass]=\"aplicarCssGroup(formulario.get('nmCategoria'))\">\r\n              <label for=\"nmCategoria\">Nome da categoria</label>\r\n              <input #campoNome type=\"text\" [ngClass]=\"aplicarCssForm(formulario.get('nmCategoria'))\" name=\"nmCategoria\" maxlength=\"25\"\r\n                [disableControl]=\"desabilitarCampos\" placeholder=\"Digite o nome da categoria\" formControlName=\"nmCategoria\">\r\n              <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmCategoria'))\" titulo=\"Erro:\" mensagem=\"o campo Nome da categoria deve ter entre 5 a 25 caracteres\">\r\n              </alert-mensagem>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"dsComentario\">Descrição da categoria</label>\r\n              <textarea type=\"textarea\" maxlength=\"100\" rows=\"7\" [ngClass]=\"aplicarCssForm(formulario.get('dsComentario'))\" name=\"dsComentario\"\r\n                placeholder=\"Digite o texto descritivo da categoria\" formControlName=\"dsComentario\"></textarea>\r\n            </div>\r\n\r\n            <div class=\"from-group row\" *ngIf=\"!desabilitarCampos\">\r\n              <label class=\"col-sm-6 form-control-label\">Exibir categoria na consulta?</label>\r\n              <div class=\"col-sm-3\">\r\n                <label class=\"switch switch-lg switch-text switch-primary\">\r\n                  <input #chkUsoInterno type=\"checkbox\" class=\"switch-input\" [checked]=\"checkExibir\" (change)=\"alterarCheckExibir(checkExibir.checked)\"\r\n                  />\r\n                  <span class=\"switch-label\" data-on=\"sim\" data-off=\"não\"></span>\r\n                  <span class=\"switch-handle\"></span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</base-popup-modal>"

/***/ })

});
//# sourceMappingURL=9.chunk.js.map