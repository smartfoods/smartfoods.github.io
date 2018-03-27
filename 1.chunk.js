webpackJsonp([1,4,16],{

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var perfil_cliente_component_1 = __webpack_require__(805);
var consulta_cep_service_1 = __webpack_require__(151);
var cliente_popup_modal_component_1 = __webpack_require__(813);
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
var cliente_routing_module_1 = __webpack_require__(812);
var storage_service_1 = __webpack_require__(65);
var listar_cliente_component_1 = __webpack_require__(804);
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

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var taxa_entrega_service_1 = __webpack_require__(803);
var create_pedido_component_1 = __webpack_require__(832);
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(25);
var forms_1 = __webpack_require__(18);
var http_1 = __webpack_require__(20);
var angular2_ladda_1 = __webpack_require__(278);
var modal_1 = __webpack_require__(103);
var shared_component_module_1 = __webpack_require__(78);
var popup_modal_module_1 = __webpack_require__(147);
var pedido_routing_module_1 = __webpack_require__(852);
var angular2_text_mask_1 = __webpack_require__(104);
var tabs_1 = __webpack_require__(152);
var listar_pedidocomponent_1 = __webpack_require__(833);
var pedido_service_1 = __webpack_require__(834);
var storage_service_1 = __webpack_require__(65);
var cliente_module_1 = __webpack_require__(788);
var forma_pagamento_service_1 = __webpack_require__(801);
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
            cliente_module_1.ClienteModule
        ],
        declarations: [
            listar_pedidocomponent_1.ListarPedidoComponent,
            create_pedido_component_1.CreatePedidoComponent,
        ],
        providers: [
            pedido_service_1.PedidoService,
            forma_pagamento_service_1.FormaPagamentoService,
            taxa_entrega_service_1.TaxaEntregaService,
            storage_service_1.StorageService
        ]
    })
], PedidoModule);
exports.PedidoModule = PedidoModule;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/pedido.module.js.map

/***/ }),

/***/ 801:
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

/***/ 803:
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

/***/ 804:
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
var event_emitter_services_1 = __webpack_require__(27);
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
        template: __webpack_require__(817),
        styles: [__webpack_require__(814)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ListarClienteComponent);
exports.ListarClienteComponent = ListarClienteComponent;
var _a, _b;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-cliente.component.js.map

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
var abstract_base_component_1 = __webpack_require__(102);
var trata_error_service_1 = __webpack_require__(32);
var event_emitter_services_1 = __webpack_require__(27);
var cliente_service_1 = __webpack_require__(148);
var consulta_cep_service_1 = __webpack_require__(151);
var api_config_1 = __webpack_require__(34);
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
        this.urlFoto = this.urlClienteAvatar;
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
        template: __webpack_require__(818),
        styles: [__webpack_require__(815)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _b || Object, typeof (_c = typeof consulta_cep_service_1.ConsultaCEPService !== "undefined" && consulta_cep_service_1.ConsultaCEPService) === "function" && _c || Object])
], PerfilClienteComponent);
exports.PerfilClienteComponent = PerfilClienteComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/perfil-cliente.component.js.map

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var perfil_cliente_component_1 = __webpack_require__(805);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var listar_cliente_component_1 = __webpack_require__(804);
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

/***/ 813:
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
var cliente_service_1 = __webpack_require__(148);
var consulta_cep_service_1 = __webpack_require__(151);
var api_config_1 = __webpack_require__(34);
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
        this.urlFoto = this.urlClienteAvatar;
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
        template: __webpack_require__(819),
        styles: [__webpack_require__(816)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _b || Object, typeof (_c = typeof consulta_cep_service_1.ConsultaCEPService !== "undefined" && consulta_cep_service_1.ConsultaCEPService) === "function" && _c || Object])
], ClientePopupModalComponent);
exports.ClientePopupModalComponent = ClientePopupModalComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/cliente-popup-modal.component.js.map

/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".table th, .table td {\n  padding: 0.20rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"clienteModal.show()\">\r\n    <i class=\"icon-plus\"></i> Novo</button>\r\n\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de clientes\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 5%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th style=\"width: 45%\">Nome</th>\r\n                    <th class=\"text-center\"style=\"width: 20%\">CPF</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Situação</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td class=\"text-center\">\r\n                        <div class=\"avatar\">\r\n                            <foto-uri id=\"{{item.id}}\" modulo=\"CLI\" classCss=\"img-avatar\" alt=\"Avatar\"></foto-uri>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        {{item.nmPessoa | uppercase}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        {{item.nrCpf | cpfMask}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <status status={{item.status}}></status>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"cursor:pointer\" (click)=\"clienteModal.showAlteracao(item)\">\r\n                            <i class=\"fa fa fa-edit\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"cursor:pointer\" (click)=\"selecionarItem(item)\">\r\n                            <i class=\"fa fa-eraser\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-warning\" style=\"cursor:pointer\" (click)=\"selecionarItemChangeStatus(item)\">\r\n                            <i class=\"fa fa-exclamation\"> </i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>\r\n\r\n<confirm-popup-modal #excluirModal popupStyle=\"danger\" (onClickConfirm)=\"excluir()\">\r\n    <strong>Deseja excluir a cliente?</strong>\r\n</confirm-popup-modal>\r\n\r\n<confirm-popup-modal #changeStatusModal popupStyle=\"danger\" (onClickConfirm)=\"changeStatus()\">\r\n    <strong>Deseja alterar o status do cliente?</strong>\r\n</confirm-popup-modal>\r\n\r\n<cliente-popup-modal #clienteModal (onClickConfirm)=\"carregarTodos()\"></cliente-popup-modal>"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Perfil</strong>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 col-md-4\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <strong>Imagens do produto</strong>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                  <div class=\"row\">\r\n                    <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                  <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n                    (onSelecionarImagem)=\"mudarImage($event)\">\r\n                  </upload-imagem>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--/.col-->\r\n\r\n            <div class=\"col-md-8 col-sm-8\">\r\n              <alert-mensagem [mostrarErro]=\"isErro\" titulo=\"Erro:\" [mensagem]=\"errorMensagem\"></alert-mensagem>\r\n              <form [formGroup]=\"formulario\" novalidade (ngSubmit)=\"confirmar()\">\r\n                  <tabset>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-list\"></i> Dados Pessoais &nbsp;\r\n                      </ng-template>\r\n                      <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmPessoa'))\">\r\n                        <div class=\"col-sm-12\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Nome</label>\r\n                          <input #campoNome upper type=\"text\" formControlName=\"nmPessoa\" class=\"form-control input-sm\" name=\"nmPessoa\" maxlength=\"120\"\r\n                            [readonly]=\"formulario.get('emAlteracao').value\">\r\n                          <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmPessoa'))\" titulo=\"Erro:\" mensagem=\"o campo Nome ter entre 5 a 120 caracteres\">\r\n                          </alert-mensagem>\r\n                        </div>\r\n          \r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('nrCpf'))\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">CPF</label>\r\n                          <input type=\"text\" formControlName=\"nrCpf\" class=\"form-control input-sm\" name=\"nrCpf\" [textMask]=\"{mask: maskCPF}\" (blur)=\"consultarCpf($event.target.value)\"\r\n                            [readonly]=\"formulario.get('emAlteracao').value\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('dtNascimento'))\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Data de Nascimento</label>\r\n                          <input type=\"text\" formControlName=\"dtNascimento\" class=\"form-control input-sm\" name=\"dtNascimento\" [textMask]=\"{mask: maskData}\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\" formGroupName=\"fone\">\r\n                        <div class=\"col-sm-6\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Celular/Whatsapp</label>\r\n                          <input type=\"text\" formControlName=\"nrFoneCelular\" class=\"form-control input-sm\" name=\"nrFoneCelular\" [textMask]=\"{mask: maskFoneCelular}\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                          <label class=\"form-control-label\" for=\"input-small\">Residencial</label>\r\n                          <input type=\"text\" formControlName=\"nrFoneResidencial\" class=\"form-control input-sm\" name=\"nrFoneResidencial\" [textMask]=\"{mask: maskFoneResidencial}\">\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"icon-list\"></i> Endereços &nbsp;\r\n                      </ng-template>\r\n                      <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                          <strong>Lista de endereços</strong>\r\n                          <div class=\"card-actions\">\r\n                              <button type=\"button\" (click)=\"cepPopuModal.show()\">\r\n                                  <i class=\"icon-plus\"></i>\r\n                                </button>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-block\" *ngIf=\"enderecos?.length > 0\">\r\n                          <div class=\"row\">\r\n          \r\n                            <table class=\"table table-striped\">\r\n                              <thead>\r\n                                <th class=\"text-left\">Descrição</th>\r\n                                <th class=\"text-right\">Cep</th>\r\n                                <th class=\"text-right\">Logradouro</th>\r\n                                <th class=\"text-right\">Cidade</th>\r\n                                <th class=\"text-right\">UF</th>\r\n                                <th class=\"text-right\">Ação</th>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngFor=\"let item of enderecos\">\r\n                                  <td class=\"text-left\">\r\n                                    <div>{{item.dsEndereco}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.nrCep | cepMask}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.dsLogradouro}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.nmCidade}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <div>{{item.ufCidade}}</div>\r\n                                  </td>\r\n                                  <td class=\"text-right\">\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"cursor:pointer\" (click)=\"cepPopuModal.showAlteracao(item)\">\r\n                                      <i class=\"fa fa fa-edit\"> </i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"cursor:pointer\" (click)=\"excluirEndereco(item)\">\r\n                                      <i class=\"fa fa-eraser\"> </i>\r\n                                    </button>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </tab>\r\n                  </tabset>\r\n                </form>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div style=\"float: right;\">\r\n              <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"modalConfirmPerfil.show();\">\r\n                <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <cep-popup-modal #cepPopuModal (onClickConfirm)=\"confirmarEndereco($event)\">\r\n  </cep-popup-modal>\r\n</div>\r\n\r\n<confirm-popup-modal #modalConfirmPerfil popupStyle=\"primary\" (onClickConfirm)=\"btnConfirmar(formulario.value)\">\r\n    <strong>Confirma a alteraçdo do Perfil?</strong>\r\n  </confirm-popup-modal>"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<base-popup-modal [nomePopup]=\"nomeJanePopup\" #modalConfirm  modalSize=\"lg\" [titulo]=\"titulo\" (onClickBaseConfirm)=\"btnConfirmar(formulario.value)\"\r\n  [desabilitarBtnConfirmar]=\"!formulario.valid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Imagem da categoria</strong>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <img [src]=\"urlFoto\" class=\"img-avatar-160 center-block \" alt=\"avatar\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <upload-imagem altura=\"140\" largura=\"140\" botaoIcone=\"fa fa-save\" botaoTitulo=\"Alterar imagem\" botaoCss=\"btn btn-md btn-primary btn-block\"\r\n            (onSelecionarImagem)=\"mudarImage($event)\">\r\n          </upload-imagem>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-md-8 col-sm-8\">\r\n      <alert-mensagem [mostrarErro]=\"isErro\" titulo=\"Erro:\" [mensagem]=\"errorMensagem\"></alert-mensagem>\r\n      <form [formGroup]=\"formulario\" novalidade (ngSubmit)=\"confirmar()\">\r\n        <tabset>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-list\"></i> Dados Pessoais &nbsp;\r\n            </ng-template>\r\n            <div [ngClass]=\"aplicarCssGroupRow(formulario.get('nmPessoa'))\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Nome</label>\r\n                <input #campoNome upper type=\"text\" formControlName=\"nmPessoa\" class=\"form-control input-sm\" name=\"nmPessoa\" maxlength=\"120\"\r\n                  [readonly]=\"formulario.get('emAlteracao').value\">\r\n                <alert-mensagem [mostrarErro]=\"isInvalido(formulario.get('nmPessoa'))\" titulo=\"Erro:\" mensagem=\"o campo Nome ter entre 5 a 120 caracteres\">\r\n                </alert-mensagem>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('nrCpf'))\">\r\n                <label class=\"form-control-label\" for=\"input-small\">CPF</label>\r\n                <input type=\"text\" formControlName=\"nrCpf\" class=\"form-control input-sm\" name=\"nrCpf\" [textMask]=\"{mask: maskCPF}\" (blur)=\"consultarCpf($event.target.value)\"\r\n                  [readonly]=\"formulario.get('emAlteracao').value\">\r\n              </div>\r\n              <div class=\"col-sm-6\" [ngClass]=\"aplicarCssGroup(formulario.get('dtNascimento'))\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Data de Nascimento</label>\r\n                <input type=\"text\" formControlName=\"dtNascimento\" class=\"form-control input-sm\" name=\"dtNascimento\" [textMask]=\"{mask: maskData}\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" formGroupName=\"fone\">\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Celular/Whatsapp</label>\r\n                <input type=\"text\" formControlName=\"nrFoneCelular\" class=\"form-control input-sm\" name=\"nrFoneCelular\" [textMask]=\"{mask: maskFoneCelular}\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"form-control-label\" for=\"input-small\">Residencial</label>\r\n                <input type=\"text\" formControlName=\"nrFoneResidencial\" class=\"form-control input-sm\" name=\"nrFoneResidencial\" [textMask]=\"{mask: maskFoneResidencial}\">\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-list\"></i> Endereços &nbsp;\r\n            </ng-template>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <strong>Lista de endereços</strong>\r\n                <div class=\"card-actions\">\r\n                    <button type=\"button\" (click)=\"cepPopuModal.show()\">\r\n                        <i class=\"icon-plus\"></i>\r\n                      </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-block\" *ngIf=\"enderecos?.length > 0\">\r\n                <div class=\"row\">\r\n\r\n                  <table class=\"table table-striped\">\r\n                    <thead>\r\n                      <th class=\"text-left\">Descrição</th>\r\n                      <th class=\"text-right\">Cep</th>\r\n                      <th class=\"text-right\">Logradouro</th>\r\n                      <th class=\"text-right\">Cidade</th>\r\n                      <th class=\"text-right\">UF</th>\r\n                      <th class=\"text-right\">Ação</th>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of enderecos\">\r\n                        <td class=\"text-left\">\r\n                          <div>{{item.dsEndereco}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.nrCep | cepMask}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.dsLogradouro}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.nmCidade}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <div>{{item.ufCidade}}</div>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"cursor:pointer\" (click)=\"cepPopuModal.showAlteracao(item)\">\r\n                            <i class=\"fa fa fa-edit\"> </i>\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"cursor:pointer\" (click)=\"excluirEndereco(item)\">\r\n                            <i class=\"fa fa-eraser\"> </i>\r\n                          </button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n\r\n          <!-- \r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-calculator\"></i> Endereço &nbsp;\r\n            </ng-template>\r\n            <div class=\"form-group\" formGroupName=\"endereco\">\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"endCep\">CEP</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"cep\" placeholder=\"CEP\" formControlName=\"cep\" (blur)=\"consultarCEP($event.target.value)\"\r\n                    [textMask]=\"{mask: maskCEP}\">\r\n                </div>\r\n                <div class=\"form-group col-sm-8\">\r\n                  <label for=\"logradouro\">Endereço</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"logradouro\" placeholder=\"rua\" formControlName=\"logradouro\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-2\">\r\n                  <label for=\"numero\">Número</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"numero\" placeholder=\"número\" formControlName=\"numero\">\r\n                </div>\r\n                <div class=\"form-group col-sm-6\">\r\n                  <label for=\"complemento\">Complemento</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"complemento\" placeholder=\"Complemento\" formControlName=\"complemento\">\r\n                </div>\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"bairro\">Bairro</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"bairro\" placeholder=\"Bairro\" formControlName=\"bairro\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"sgUF\">Estado</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"uf\" placeholder=\"estado\" formControlName=\"uf\" [disableControl]=\"true\">\r\n                </div>\r\n                <div class=\"form-group col-sm-8\">\r\n                  <label for=\"cidade\">Cidade</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" formControlName=\"cidade\" [disableControl]=\"true\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab [disabled]=\"isAlteracao\">\r\n            <ng-template tabHeading>\r\n              <i class=\"icon-pie-chart\"></i> Acesso\r\n            </ng-template>\r\n            <div formGroupName=\"usuario\">\r\n\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <label class=\"form-control-label\" for=\"input-small\">email</label>\r\n                  <input type=\"text\" formControlName=\"email\" class=\"form-control input-sm\" name=\"email\" lower>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Login</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"text\" formControlName=\"login\" class=\"form-control input-sm\" name=\"login\" maxlength=\"40\" lower>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Senha</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"password\" formControlName=\"senha\" class=\"form-control input-sm\" name=\"senha\" maxlength=\"8\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\" for=\"input-small\">Confirmação</label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"password\" formControlName=\"senhaConfirmacao\" class=\"form-control input-sm\" name=\"senhaConfirmacao\" maxlength=\"8\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n-->\r\n        </tabset>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</base-popup-modal>\r\n<cep-popup-modal #cepPopuModal (onClickConfirm)=\"confirmarEndereco($event)\">\r\n</cep-popup-modal>"

/***/ }),

/***/ 832:
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
var taxa_entrega_service_1 = __webpack_require__(803);
var forma_pagamento_service_1 = __webpack_require__(801);
var abstract_base_component_1 = __webpack_require__(102);
var trata_error_service_1 = __webpack_require__(32);
var forms_1 = __webpack_require__(18);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(43);
var common_1 = __webpack_require__(25);
var CreatePedidoComponent = (function (_super) {
    __extends(CreatePedidoComponent, _super);
    function CreatePedidoComponent(fb, pagService, taxaService, location, router) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.pagService = pagService;
        _this.taxaService = taxaService;
        _this.location = location;
        _this.router = router;
        _this.pedidoItens = [];
        _this.exibirProduto = false;
        _this.vlTaxaEntrega = 0;
        _this.subtotal = 0;
        _this.formaPagmentos = [];
        _this.taxaEntregas = [];
        return _this;
    }
    CreatePedidoComponent.prototype.ngOnInit = function () {
        this.criarFormulario();
        this.carregarCombos();
        this.produtofake();
        this.clientefake();
    };
    CreatePedidoComponent.prototype.selecionarCliente = function (cliente) {
        this.exibirProduto = true;
        this.formulario.patchValue({
            cliente: {
                id: cliente.id,
                nmPessoa: cliente.nmPessoa
            }
        });
        this.pedidoItens = [];
        this.enderecos = cliente.enderecos;
    };
    CreatePedidoComponent.prototype.selecionarProduto = function (pedidoItem) {
        this.pedidoItens.push(pedidoItem);
        this.totalizar();
    };
    CreatePedidoComponent.prototype.confirmar = function (value) {
    };
    CreatePedidoComponent.prototype.criarFormulario = function () {
        this.exibirProduto = true;
        this.formulario = this.fb.group({
            cliente: this.fb.group({
                id: [],
                nmPessoa: ['']
            }),
            taxaEntrega: ['']
        });
    };
    CreatePedidoComponent.prototype.totalItem = function (item) {
        return item.qtItem * item.produto.vlVenda;
    };
    CreatePedidoComponent.prototype.decreaseQuantity = function (item) {
        item.qtItem--;
        if (item.qtItem == 0) {
            this.removeItem(item);
        }
        this.totalizar();
    };
    CreatePedidoComponent.prototype.increaseQuantity = function (item) {
        item.qtItem++;
        this.totalizar();
    };
    CreatePedidoComponent.prototype.removeItem = function (item) {
        this.pedidoItens = this.pedidoItens.filter(function (it) { return it.produto.id != item.produto.id; });
        this.totalizar();
    };
    CreatePedidoComponent.prototype.totalizar = function () {
        this.subtotal = 0;
        for (var _i = 0, _a = this.pedidoItens; _i < _a.length; _i++) {
            var item = _a[_i];
            var total = item.qtItem * item.produto.vlVenda;
            this.subtotal += total;
        }
        this.subtotal += this.vlTaxaEntrega;
    };
    CreatePedidoComponent.prototype.selecionarTaxaEntrega = function (te) {
        for (var _i = 0, _a = this.taxaEntregas; _i < _a.length; _i++) {
            var tx = _a[_i];
            if (tx.id == te) {
                this.vlTaxaEntrega = tx.vlTaxaEntrega;
                this.totalizar();
                break;
            }
        }
    };
    CreatePedidoComponent.prototype.produtofake = function () {
        var x = { "qtItem": 1, "produto": { "id": 4, "idEmpresa": 1, "nmProduto": "Lazanha a bolonhesa", "vlVenda": 13, "vlCompra": 10, "stProdutoComposto": "N", "status": "A", "categoria": { "id": 2, "nmCategoria": "Refeições", "dsComentario": "refeições saúdave", "status": "A", "exibirConsulta": "S", "urlImagem": null, "statusEnum": "A", "exibirConsultaEnum": "S" }, "urlImagem": null, "unidadeVenda": { "id": 1, "nmUnidadeMedida": "Unidade", "sgUnidadeMedida": "UN", "status": "A", "emAlteracao": false }, "qtAcompanhamento": 2, "qtMinimaEstoque": 10, "dsUrlBlog": "http://blog.paladarfit.com.br/#lasanhafit", "qtEmcada": 100, "emCada": { "id": 4, "nmUnidadeMedida": "Gramas", "sgUnidadeMedida": "GR", "status": "A", "emAlteracao": false }, "nrCodigoBarra": "0314654654654655456", "dsInfoComplementar": "produto de teste", "composicoes": [{ "idProduto": 4, "idProdutoComposicao": 1, "nmProdutoComposicao": "carne moida", "idUnidadeMedida": 4, "nmUnidadeMedida": "GR", "qtUtilizada": 100, "mostrarUnidade": "S" }, { "idProduto": 4, "idProdutoComposicao": 2, "nmProdutoComposicao": "macarrão integral", "idUnidadeMedida": 4, "nmUnidadeMedida": "GR", "qtUtilizada": 300, "mostrarUnidade": "S" }, { "idProduto": 4, "idProdutoComposicao": 3, "nmProdutoComposicao": "tomate organicos", "idUnidadeMedida": 1, "nmUnidadeMedida": "UN", "qtUtilizada": 2, "mostrarUnidade": "N" }], "infoNutricionais": [{ "idProduto": 4, "idInfoNutricional": 1, "dsInfoNutricional": "caboidrato", "idUnidadeMedida": 1, "nmUnidadeMedida": "Unidade", "sgUnidadeMedida": "UN", "qtUtilizada": 10 }, { "idProduto": 4, "idInfoNutricional": 2, "dsInfoNutricional": "gordura", "idUnidadeMedida": 1, "nmUnidadeMedida": "Unidade", "sgUnidadeMedida": "UN", "qtUtilizada": 10 }, { "idProduto": 4, "idInfoNutricional": 3, "dsInfoNutricional": "teste", "idUnidadeMedida": 1, "nmUnidadeMedida": "Unidade", "sgUnidadeMedida": "UN", "qtUtilizada": 10 }] }, "adicionais": [{ "id": 1, "idCategoria": 2, "nmCategoria": "Refeições", "idProduto": 1, "nmProduto": "carne moida", "idUnidadeMedida": 1, "nmUnidadeMedida": "UN", "qtUtilizada": 100, "status": "A", "vlAdicional": 0.33, "selecionado": true }, { "id": 2, "idCategoria": 2, "nmCategoria": "Refeições", "idProduto": 2, "nmProduto": "macarrão integral", "idUnidadeMedida": 4, "nmUnidadeMedida": "GR", "qtUtilizada": 100, "status": "A", "vlAdicional": 0.33, "selecionado": true }] };
        this.pedidoItens.push(x);
    };
    CreatePedidoComponent.prototype.clientefake = function () {
        var x = { "id": 1, "nmPessoa": "Daniel Rodrigues Aguiar", "dtNascimento": "12/10/1974", "nrCpf": "65847580100", "fone": { "id": 1, "nrFoneResidencial": "(61) 3605-1086", "nrFoneCelular": "61996863636", "nrFoneWhatsapp": "61996863636" }, "usuario": null, "status": "A", "urlImagem": null, "enderecos": [{ "id": 21, "idPessoa": 1, "dsEndereco": "casa 15", "dsLogradouro": "SQ 15", "nrNumero": "12", "dsComplemento": "Casa 92", "dsReferencia": null, "nmBairro": "israel tecidos", "nrCep": "72880576", "nmCidade": "Cidade Ocidental", "ufCidade": "GO" }] };
        this.cliente = x;
        this.enderecos = x.enderecos;
    };
    CreatePedidoComponent.prototype.carregarCombos = function () {
        var _this = this;
        this.pagService.findAllAtivo().subscribe(function (res) { return _this.formaPagmentos = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
        this.taxaService.findAllAtivo().subscribe(function (res) { return _this.taxaEntregas = res; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
    };
    return CreatePedidoComponent;
}(abstract_base_component_1.AbstractBaseComponent));
CreatePedidoComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(888),
        styles: [__webpack_require__(867)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof forma_pagamento_service_1.FormaPagamentoService !== "undefined" && forma_pagamento_service_1.FormaPagamentoService) === "function" && _b || Object, typeof (_c = typeof taxa_entrega_service_1.TaxaEntregaService !== "undefined" && taxa_entrega_service_1.TaxaEntregaService) === "function" && _c || Object, typeof (_d = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object])
], CreatePedidoComponent);
exports.CreatePedidoComponent = CreatePedidoComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/create-pedido.component.js.map

/***/ }),

/***/ 833:
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
var pedido_service_1 = __webpack_require__(834);
var cliente_service_1 = __webpack_require__(148);
var event_emitter_services_1 = __webpack_require__(27);
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
        //this.carregarTodos()
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
        this.pedidoService.findAll().subscribe(function (response) { _this.items = response; }, function (error) { return trata_error_service_1.TrataErrorService.tratarError(error); });
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
        template: __webpack_require__(889),
        styles: [__webpack_require__(868)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _a || Object, typeof (_b = typeof pedido_service_1.PedidoService !== "undefined" && pedido_service_1.PedidoService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ListarPedidoComponent);
exports.ListarPedidoComponent = ListarPedidoComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/paladar-fit/frontend-angular/src/listar-pedidocomponent.js.map

/***/ }),

/***/ 834:
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
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(20);
var abstract_service_1 = __webpack_require__(55);
//import { catchError, retry } from 'rxjs/operators';
var PedidoService = (function (_super) {
    __extends(PedidoService, _super);
    function PedidoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = api_config_1.API_CONFIG.baseUrl + "/pedidos";
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

/***/ 852:
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
var listar_pedidocomponent_1 = __webpack_require__(833);
var create_pedido_component_1 = __webpack_require__(832);
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

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".img-avatar-160 {\n  height: 160px;\n  width: 160px;\n  margin: 20px auto 10px;\n  border-radius: 50em; }\n\n.modal-dialog {\n  padding-top: 10%; }\n\n.table th, .table td {\n  padding: 0.20rem; }\n\n.coluna {\n  vertical-align: middle;\n  text-align: center; }\n\n.nolinebreak {\n  float: left;\n  padding-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".table th, .table td {\n  padding: 0.20rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-1\"></div>\r\n  <div class=\"col-sm-10\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Pedido</strong>\r\n        <small> - inclusão de um novo pedido</small>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <form [formGroup]=\"formulario\" class=\"form-horizontal \">\r\n\r\n          <div class=\"form-group row\" formGroupName=\"cliente\">\r\n            <label class=\"col-md-2 form-control-label\">Cliente</label>\r\n            <div class=\"col-md-10\">\r\n              <input type=\"text\" formControlName=\"nmPessoa\" name=\"nmPessoa\" class=\"form-control input-sm\" readonly placeholder=\"clique para selecionar um cliente\"\r\n                (click)=\"modalCliente.show()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" formGroupName=\"cliente\" *ngIf=\"exibirProduto\">\r\n            <label class=\"col-md-2 form-control-label\">Produtos</label>\r\n            <div class=\"col-md-10\">\r\n              <div class=\"from-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                      <strong>Produtos</strong>\r\n                      <div class=\"card-actions\">\r\n                        <button type=\"button\" (click)=\"modalProduto.show()\" class=\"cursor-hands\">\r\n                          <i class=\"icon-plus\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-block\" *ngIf=\"pedidoItens?.length > 0\">\r\n                      <table class=\"table table-striped\">\r\n                        <thead>\r\n                          <th style=\"width:65%;\" class=\"text-left\">Produto</th>\r\n                          <th style=\"width:10%;\" class=\"text-left\">Quantidade</th>\r\n                          <th style=\"width:10%;\" class=\"text-left\">Valor</th>\r\n                          <th style=\"width:5%\" class=\"text-left\">Ação</th>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of pedidoItens\">\r\n                            <td class=\"text-left\">\r\n                              <strong>{{item?.produto?.nmProduto}}</strong>\r\n                              <div *ngIf=\"item?.adicionais?.length > 0\" style=\"padding-left:5%\">\r\n                                <div *ngFor=\"let ad of item?.adicionais\">{{ad.nmProduto}}</div>\r\n                              </div>\r\n                            </td>\r\n                            <td class=\"text-left\" class=\"coluna\">\r\n                              <i class=\"fa fa-minus-circle fa-lg mt-0 cursor-hands\" style=\"color: red\"  (click)=\"decreaseQuantity(item)\"></i>\r\n                              <strong>&nbsp;&nbsp; {{item.qtItem}}&nbsp;&nbsp; </strong>\r\n                              <i class=\"fa fa-plus-circle fa-lg mt-0  cursor-hands\" style=\"color: blue\" (click)=\"increaseQuantity(item)\"></i>\r\n                            </td>\r\n                            <td class=\"text-left\" class=\"coluna\">\r\n                              <strong>{{item.qtItem * item.produto.vlVenda | currency:'BRL':true}}</strong>\r\n                            </td>\r\n                            <td class=\"text-left\" class=\"coluna\">\r\n                              <i class=\"fa fa-trash fa-lg mt-0 cursor-hands\" style=\"color:red\" (click)=\"removeItem(item)\"></i>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n\r\n                    </div>\r\n                    <div class=\"card-footer\" *ngIf=\"pedidoItens?.length > 0\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-8\"></div>\r\n                        <div class=\"col-md-2 text-align-right\"><strong>Taxa Entrega:</strong></div>\r\n                        <div class=\"col-md-2 text-align-right\">\r\n                          <strong>{{vlTaxaEntrega | currency:'BRL':true}}</strong>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-8\"></div>\r\n                        <div class=\"col-md-2 text-align-right\" ><strong>Totalização:</strong></div>\r\n                        <div class=\"col-md-2 text-align-right\" >\r\n                          <strong>{{subtotal | currency:'BRL':true}}</strong>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\" formGroupName=\"cliente\" *ngIf=\"exibirProduto\">\r\n            <label class=\"col-md-2 form-control-label\">Endereco de entrega</label>\r\n            <div class=\"col-md-10\">\r\n              <select class=\"form-control\" id=\"endEntregas\">\r\n                <option>{{label.selecione}}</option>\r\n                <option> Entrega balcão</option>\r\n                <option *ngFor=\"let endr of enderecos\" value=\"{{endr.id}}\">\r\n                  {{endr.dsEndereco }} - {{endr.dsLogradouro}} - {{endr.nrNumero }} - {{endr.dsComplemento}} {{endr.nmCidade}} - {{endr.ufCidade}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"exibirProduto\">\r\n            <label class=\"col-md-2 form-control-label\">Taxa de entrega</label>\r\n            <div class=\"col-md-4\">\r\n              <select  class=\"form-control\" formControlName=\"taxaEntrega\" (ngModelChange)=\"selecionarTaxaEntrega($event)\">\r\n                <option [ngValue]=\"0\">{{label.selecione}}</option>\r\n                <option *ngFor=\"let te of taxaEntregas\" [ngValue]=\"te.id\" >{{te.nmTaxaEntrega}} - {{te.vlTaxaEntrega | currency:'BRL':true}} </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"exibirProduto\">\r\n            <label class=\"col-md-2 form-control-label\">Pagamento</label>\r\n            <div class=\"col-md-4\">\r\n              <select class=\"form-control\" id=\"formPgto\">\r\n                <option>{{label.selecione}}</option>\r\n                <option *ngFor=\"let fp of formaPagmentos\" value=\"{{fp.id}}\">{{fp.nmFormaPagamento}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n        </form>\r\n        <div class=\"card-footer\">\r\n          <div style=\"float: right;\">\r\n            <button class=\"btn btn-md btn-default\" (click)=\"voltar()\">\r\n              <i class=\"fa fa-history\"></i> {{btn.btnVoltar}}\r\n            </button>\r\n            <button type=\"button\" [disabled]=\"!formulario.valid\" class=\"btn btn-md btn-success\" (click)=\"showPopup.show();\">\r\n              <i class=\"fa fa-save\"> </i> {{btn.btnSalvar}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <confirm-popup-modal #modalConfirmPedido popupStyle=\"primary\" (onClickConfirm)=\"confirmar(formulario.value)\">\r\n    <strong>Confirma a inclusão do Produto?</strong>\r\n  </confirm-popup-modal>\r\n\r\n  <pesquisar-cliente-popup-modal #modalCliente (onClickConfirm)=\"selecionarCliente($event)\"> </pesquisar-cliente-popup-modal>\r\n  <pesquisar-produto-popup-modal #modalProduto (onClickConfirm)=\"selecionarProduto($event)\"> </pesquisar-produto-popup-modal>\r\n</div>"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\"></div>\r\n<button type=\"button\" class=\"btn btn-success\" style=\"cursor:pointer\" [routerLink]=\"['/pedidos/novo']\">\r\n    <i class=\"icon-plus\"></i> Novo\r\n</button>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Listagem de usuários\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" style=\"width: 5%\">\r\n                        <i class=\"icon-people\"></i>\r\n                    </th>\r\n                    <th class=\"text-left\"   style=\"width: 40%\">Cliente</th>\r\n                    <th class=\"text-left\"   style=\"width: 15%\">CPF</th>\r\n                    <th class=\"text-left\"   style=\"width: 15%\">Telefone</th>\r\n                    <th class=\"text-center\" style=\"width: 15%\">Situação</th>\r\n                    <th class=\"text-center\" style=\"width: 10%\">Ação</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of items\">\r\n                    <td class=\"text-center\">\r\n                        <div class=\"avatar\">\r\n                            <foto-uri id=\"{{item.id}}\" modulo=\"CLI\" classCss=\"img-avatar\" alt=\"Avatar\"></foto-uri>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        {{item.nrCpf | cpfMask}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        {{item.nrCpf | cpfMask}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <status status={{item.status}}></status>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-primary cursor-hands\"  (click)=\"clienteModal.showAlteracao(item)\">\r\n                            <i class=\"fa fa fa-edit\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger cursor-hands\"  (click)=\"selecionarItem(item)\">\r\n                            <i class=\"fa fa-eraser\"> </i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-warning cursor-hands\" (click)=\"selecionarItemChangeStatus(item)\">\r\n                            <i class=\"fa fa-exclamation\"> </i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>\r\n\r\n<confirm-popup-modal #excluirModal popupStyle=\"danger\" (onClickConfirm)=\"excluir()\">\r\n    <strong>Deseja excluir a pedido?</strong>\r\n</confirm-popup-modal>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map