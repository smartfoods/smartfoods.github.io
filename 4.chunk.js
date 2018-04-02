webpackJsonp([4,17],{

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var perfil_cliente_component_1 = __webpack_require__(808);
var consulta_cep_service_1 = __webpack_require__(151);
var cliente_popup_modal_component_1 = __webpack_require__(817);
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
var cliente_routing_module_1 = __webpack_require__(816);
var storage_service_1 = __webpack_require__(65);
var listar_cliente_component_1 = __webpack_require__(807);
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
        template: __webpack_require__(821),
        styles: [__webpack_require__(818)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ListarClienteComponent);
exports.ListarClienteComponent = ListarClienteComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-cliente.component.js.map

/***/ }),

/***/ 808:
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
        template: __webpack_require__(822),
        styles: [__webpack_require__(819)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _b || Object, typeof (_c = typeof consulta_cep_service_1.ConsultaCEPService !== "undefined" && consulta_cep_service_1.ConsultaCEPService) === "function" && _c || Object])
], PerfilClienteComponent);
exports.PerfilClienteComponent = PerfilClienteComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/perfil-cliente.component.js.map

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var perfil_cliente_component_1 = __webpack_require__(808);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var listar_cliente_component_1 = __webpack_require__(807);
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
        template: __webpack_require__(823),
        styles: [__webpack_require__(820)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _b || Object, typeof (_c = typeof consulta_cep_service_1.ConsultaCEPService !== "undefined" && consulta_cep_service_1.ConsultaCEPService) === "function" && _c || Object])
], ClientePopupModalComponent);
exports.ClientePopupModalComponent = ClientePopupModalComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cliente-popup-modal.component.js.map

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".table th, .table td {\n  padding: 0.20rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"clienteModal.show()\">\r\n    <i class=\"icon-plus\"></i> Novo</button>\r\n\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de clientes\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 5%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th style=\"width: 45%\">Nome</th>\r\n                    <th class=\"text-center\"style=\"width: 20%\">CPF</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Situação</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td class=\"text-center\">\r\n                        <div class=\"avatar\">\r\n                            <foto-uri id=\"{{item.id}}\" modulo=\"CLI\" classCss=\"img-avatar\" alt=\"Avatar\"></foto-uri>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        {{item.nmPessoa | uppercase}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        {{item.nrCpf | cpfMask}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <status status={{item.status}}></status>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"clienteModal.showAlteracao(item)\">\r\n                            <i class=\"fa fa fa-edit\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"selecionarItem(item)\">\r\n                            <i class=\"fa fa-eraser\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-warning cursor-hands\" (click)=\"selecionarItemChangeStatus(item)\">\r\n                            <i class=\"fa fa-exclamation\"> </i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>\r\n\r\n<confirm-popup-modal #excluirModal popupStyle=\"danger\" (onClickConfirm)=\"excluir()\">\r\n    <strong>Deseja excluir a cliente?</strong>\r\n</confirm-popup-modal>\r\n\r\n<confirm-popup-modal #changeStatusModal popupStyle=\"danger\" (onClickConfirm)=\"changeStatus()\">\r\n    <strong>Deseja alterar o status do cliente?</strong>\r\n</confirm-popup-modal>\r\n\r\n<cliente-popup-modal #clienteModal (onClickConfirm)=\"carregarTodos()\"></cliente-popup-modal>"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Perfil</strong>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 col-md-4\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <strong>Imagens do produto</strong>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                  <div class=\"row\">\r\n                    <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                  <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n                    (onSelecionarImagem)=\"mudarImage($event)\">\r\n                  </upload-imagem>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--/.col-->\r\n\r\n            <div class=\"col-md-8 col-sm-8\">\r\n              <alert-mensagem [mostrarErro]=\"isErro\" titulo=\"Erro:\" [mensagem]=\"errorMensagem\"></alert-mensagem>\r\n              <form [formGroup]=\"formulario\" novalidade (ngSubmit)=\"confirmar()\">\r\n                  <tabset>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-list\"></i> Dados Pessoais &nbsp;\r\n                      </ng-template>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmPessoa'))\">\r\n                        <div class=\"col-sm-12\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Nome</label>\r\n                          <input #campoNome upper type=\"text\" formControlName=\"nmPessoa\" class=\"form-control input-sm\" name=\"nmPessoa\" maxlength=\"120\"\r\n                            [readonly]=\"formulario.get('emAlteracao').value\">\r\n                          <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmPessoa'))\" titulo=\"Erro:\" mensagem=\"o campo Nome ter entre 5 a 120 caracteres\">\r\n                          </alert-mensagem>\r\n                        </div>\r\n          \r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('nrCpf'))\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">CPF</label>\r\n                          <input type=\"text\" formControlName=\"nrCpf\" class=\"form-control input-sm\" name=\"nrCpf\" [textMask]=\"{mask: maskCPF}\" (blur)=\"consultarCpf($event.target.value)\"\r\n                            [readonly]=\"formulario.get('emAlteracao').value\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('dtNascimento'))\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Data de Nascimento</label>\r\n                          <input type=\"text\" formControlName=\"dtNascimento\" class=\"form-control input-sm\" name=\"dtNascimento\" [textMask]=\"{mask: maskData}\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\" formGroupName=\"fone\">\r\n                        <div class=\"col-sm-6\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Celular/Whatsapp</label>\r\n                          <input type=\"text\" formControlName=\"nrFoneCelular\" class=\"form-control input-sm\" name=\"nrFoneCelular\" [textMask]=\"{mask: maskFoneCelular}\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Residencial</label>\r\n                          <input type=\"text\" formControlName=\"nrFoneResidencial\" class=\"form-control input-sm\" name=\"nrFoneResidencial\" [textMask]=\"{mask: maskFoneResidencial}\">\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-list\"></i> Endereços &nbsp;\r\n                      </ng-template>\r\n                      <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                          <strong>Lista de endereços</strong>\r\n                          <div class=\"card-actions\">\r\n                              <button type=\"button\" (click)=\"cepPopuModal.show()\">\r\n                                  <i class=\"icon-plus\"></i>\r\n                                </button>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-block\" *ngIf=\"enderecos?.length > 0\">\r\n                          <div class=\"row\">\r\n          \r\n                            <table class=\"table table-striped\">\r\n                              <thead>\r\n                                <th class=\"text-left\">Descrição</th>\r\n                                <th class=\"text-right\">Cep</th>\r\n                                <th class=\"text-right\">Logradouro</th>\r\n                                <th class=\"text-right\">Cidade</th>\r\n                                <th class=\"text-right\">UF</th>\r\n                                <th class=\"text-right\">Ação</th>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngFor=\"let item of enderecos\">\r\n                                  <td class=\"text-left\">\r\n                                    <div>{{item.dsEndereco}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.nrCep | cepMask}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.dsLogradouro}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.nmCidade}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.ufCidade}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"cepPopuModal.showAlteracao(item)\">\r\n                                      <i class=\"fa fa fa-edit\"> </i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"excluirEndereco(item)\">\r\n                                      <i class=\"fa fa-eraser\"> </i>\r\n                                    </button>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                  </tabset>\r\n                </form>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div style=\"float: right;\">\r\n              <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmPerfil.show();\">\r\n                <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <cep-popup-modal #cepPopuModal (onClickConfirm)=\"confirmarEndereco($event)\">\r\n  </cep-popup-modal>\r\n</div>\r\n\r\n<confirm-popup-modal #modalConfirmPerfil popupStyle=\"primary\" (onClickConfirm)=\"btnConfirmar(formulario.value)\">\r\n    <strong>Confirma a alteraçdo do Perfil?</strong>\r\n  </confirm-popup-modal>"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<base-popup-modal [nomePopup]=\"nomeJanePopup\" #modalConfirm  modalSize=\"lg\" [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formulario.value)\"\r\n  [desabilitarBtnConfirmar]=\"!formulario.valid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Imagem da categoria</strong>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n            (onSelecionarImagem)=\"mudarImage($event)\">\r\n          </upload-imagem>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-md-8 col-sm-8\">\r\n      <alert-mensagem [mostrarErro]=\"isErro\" titulo=\"Erro:\" [mensagem]=\"errorMensagem\"></alert-mensagem>\r\n      <form [formGroup]=\"formulario\" novalidade (ngSubmit)=\"confirmar()\">\r\n        <tabset>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-list\"></i> Dados Pessoais &nbsp;\r\n            </ng-template>\r\n            <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmPessoa'))\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Nome</label>\r\n                <input #campoNome upper type=\"text\" formControlName=\"nmPessoa\" class=\"form-control input-sm\" name=\"nmPessoa\" maxlength=\"120\"\r\n                  [readonly]=\"formulario.get('emAlteracao').value\">\r\n                <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmPessoa'))\" titulo=\"Erro:\" mensagem=\"o campo Nome ter entre 5 a 120 caracteres\">\r\n                </alert-mensagem>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('nrCpf'))\">\r\n                <label class=\"form-control-label\" for=\"input-small\">CPF</label>\r\n                <input type=\"text\" formControlName=\"nrCpf\" class=\"form-control input-sm\" name=\"nrCpf\" [textMask]=\"{mask: maskCPF}\" (blur)=\"consultarCpf($event.target.value)\"\r\n                  [readonly]=\"formulario.get('emAlteracao').value\">\r\n              </div>\r\n              <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('dtNascimento'))\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Data de Nascimento</label>\r\n                <input type=\"text\" formControlName=\"dtNascimento\" class=\"form-control input-sm\" name=\"dtNascimento\" [textMask]=\"{mask: maskData}\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" formGroupName=\"fone\">\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Celular/Whatsapp</label>\r\n                <input type=\"text\" formControlName=\"nrFoneCelular\" class=\"form-control input-sm\" name=\"nrFoneCelular\" [textMask]=\"{mask: maskFoneCelular}\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Residencial</label>\r\n                <input type=\"text\" formControlName=\"nrFoneResidencial\" class=\"form-control input-sm\" name=\"nrFoneResidencial\" [textMask]=\"{mask: maskFoneResidencial}\">\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-list\"></i> Endereços &nbsp;\r\n            </ng-template>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <strong>Lista de endereços</strong>\r\n                <div class=\"card-actions\">\r\n                    <button type=\"button\" (click)=\"cepPopuModal.show()\">\r\n                        <i class=\"icon-plus\"></i>\r\n                      </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-block\" *ngIf=\"enderecos?.length > 0\">\r\n                <div class=\"row\">\r\n\r\n                  <table class=\"table table-striped\">\r\n                    <thead>\r\n                      <th class=\"text-left\">Descrição</th>\r\n                      <th class=\"text-right\">Cep</th>\r\n                      <th class=\"text-right\">Logradouro</th>\r\n                      <th class=\"text-right\">Cidade</th>\r\n                      <th class=\"text-right\">UF</th>\r\n                      <th class=\"text-right\">Ação</th>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of enderecos\">\r\n                        <td class=\"text-left\">\r\n                          <div>{{item.dsEndereco}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.nrCep | cepMask}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.dsLogradouro}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.nmCidade}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.ufCidade}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\" (click)=\"cepPopuModal.showAlteracao(item)\">\r\n                            <i class=\"fa fa fa-edit\"> </i>\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"excluirEndereco(item)\">\r\n                            <i class=\"fa fa-eraser\"> </i>\r\n                          </button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n\r\n          <!-- \r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-calculator\"></i> Endereço &nbsp;\r\n            </ng-template>\r\n            <div class=\"form-group\" formGroupName=\"endereco\">\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"endCep\">CEP</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"cep\" placeholder=\"CEP\" formControlName=\"cep\" (blur)=\"consultarCEP($event.target.value)\"\r\n                    [textMask]=\"{mask: maskCEP}\">\r\n                </div>\r\n                <div class=\"form-group col-sm-8\">\r\n                  <label for=\"logradouro\">Endereço</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"logradouro\" placeholder=\"rua\" formControlName=\"logradouro\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-2\">\r\n                  <label for=\"numero\">Número</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"numero\" placeholder=\"número\" formControlName=\"numero\">\r\n                </div>\r\n                <div class=\"form-group col-sm-6\">\r\n                  <label for=\"complemento\">Complemento</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"complemento\" placeholder=\"Complemento\" formControlName=\"complemento\">\r\n                </div>\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"bairro\">Bairro</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"bairro\" placeholder=\"Bairro\" formControlName=\"bairro\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"sgUF\">Estado</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"uf\" placeholder=\"estado\" formControlName=\"uf\" [disableControl]=\"true\">\r\n                </div>\r\n                <div class=\"form-group col-sm-8\">\r\n                  <label for=\"cidade\">Cidade</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" formControlName=\"cidade\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab [disabled]=\"isAlteracao\">\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-pie-chart\"></i> Acesso\r\n            </ng-template>\r\n            <div formGroupName=\"usuario\">\r\n\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <label class=\"form-control-label\" for=\"input-small\">email</label>\r\n                  <input type=\"text\" formControlName=\"email\" class=\"form-control input-sm\" name=\"email\" lower>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Login</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"text\" formControlName=\"login\" class=\"form-control input-sm\" name=\"login\" maxlength=\"40\" lower>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Senha</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"password\" formControlName=\"senha\" class=\"form-control input-sm\" name=\"senha\" maxlength=\"8\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Confirmação</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"password\" formControlName=\"senhaConfirmacao\" class=\"form-control input-sm\" name=\"senhaConfirmacao\" maxlength=\"8\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n-->\r\n        </tabset>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</base-popup-modal>\r\n<cep-popup-modal #cepPopuModal (onClickConfirm)=\"confirmarEndereco($event)\">\r\n</cep-popup-modal>"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map