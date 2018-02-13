"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var ng4_validators_1 = require("ng4-validators");
var alert_service_1 = require("./../../_services/alert.service");
var app_component_1 = require("./../../app.component");
var core_1 = require("@angular/core");
var presets_service_1 = require("./../presets.service");
var pager_service_1 = require("./../../_services/pager.service");
var router_1 = require("@angular/router");
var app_config_provider_1 = require("../../app-config.provider");
var PresetsClientsComponent = /** @class */ (function () {
    function PresetsClientsComponent(appComponent, presetsService, alert, pagerService, router, appConfig) {
        this.appComponent = appComponent;
        this.presetsService = presetsService;
        this.alert = alert;
        this.pagerService = pagerService;
        this.router = router;
        this.appConfig = appConfig;
        this.myBreadCrumb = {};
        this.clients = {};
        // array of all clients to be paged
        this.allClients = [];
        // pager object
        this.pager = {};
        // paged clients
        this.pagedClients = [];
        this.myBreadCrumb.crumbs = [
            { 'menu': 'Presets', 'routerLink': '/presets' }
        ];
        this.myBreadCrumb.active = 'Clients';
        this.noOfClientsinPage = 5;
        this.fetchAllClients();
        this.clients.res = {};
        this.clients.validation = {};
        this.viewForm = false;
    }
    PresetsClientsComponent.prototype.ngOnInit = function () {
        // Form Settings
        this.myClientForm = new forms_1.FormGroup({
            'id': new forms_1.FormControl(''),
            'clientName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([2, 30])])),
            'clientBrand': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([3, 50])])),
            'clientPlaceofSupply': new forms_1.FormGroup({
                'PO': new forms_1.FormControl(),
                'street': new forms_1.FormControl(),
                'city': new forms_1.FormControl(),
                'state': new forms_1.FormControl(),
                'country': new forms_1.FormControl(),
                'zipcode': new forms_1.FormControl()
            })
        });
    };
    PresetsClientsComponent.prototype.resetClientModal = function () {
        this.myClientForm.reset();
        this.presetsService.setActiveClientToEdit(null);
        this.viewForm = true;
    };
    PresetsClientsComponent.prototype.fetchAllClients = function () {
        var _this = this;
        this.loading = 'getClients';
        this.presetsService.getAllClients()
            .subscribe(function (res) {
            // console.log('getAllClients-Response', res);
            // console.log('getAllClients-Response', res);
            _this.clients.res = res;
            _this.loading = '';
            _this.allClients = res;
            _this.setPage(1);
        }, function (err) {
            _this.loading = false;
            // console.log('err', err);
            // console.log('err', err);
            _this.loading = '';
            // Defining the Error Messages
            switch (err.status) {
                case 401:
                    _this.alert.error('Invalid Username Or Password');
                    break;
                default:
                    _this.alert.error('Some Error Occured');
                    break;
            }
        });
    };
    PresetsClientsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allClients.length, page, this.noOfClientsinPage);
        // get current page of clients
        this.pagedClients = this.allClients.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // console.log('pagedClients', this.pagedClients);
    };
    PresetsClientsComponent.prototype.validateClientCode = function (code) {
        var _this = this;
        // console.log('code', code);
        this.presetsService.validateMaster('client', code)
            .subscribe(function (res) {
            // console.log('validateClientCode', res);
            // console.log('validateClientCode', res);
            _this.clients.validation = res;
        }, function (err) {
            // console.log('validateClientCode', err);
        });
        this.myClientForm.controls.clientCode.setValue(code);
    };
    PresetsClientsComponent.prototype.addClient = function (client) {
        var _this = this;
        this.myClientForm.disable();
        this.loading = 'postClient';
        // console.log('client', client);
        this.presetsService.updateClient(client)
            .subscribe(function (res) {
            _this.myClientForm.reset();
            _this.viewForm = false;
            _this.myClientForm.enable();
            // console.log('postClient-Response', res);
            // console.log('postClient-Response', res);
            _this.loading = '';
            _this.fetchAllClients();
            if (!_this.presetsService.getActiveClientToEdit()) {
                _this.alert.success('Client ' + client.clientCode + ' Created Successfully');
            }
            else {
                _this.alert.success('Client ' + client.clientCode + ' Updated Successfully');
            }
        }, function (err) {
            _this.myClientForm.enable();
            _this.loading = false;
            // console.log('err', err);
            // console.log('err', err);
            _this.loading = '';
            // Defining the Error Messages
            switch (err.status) {
                case 401:
                    _this.alert.error('Fields Required');
                    break;
                case 422:
                    _this.alert.error('Please Fill All The Required Fields');
                    break;
                default:
                    _this.alert.error('Some Error Occured');
                    break;
            }
        });
    };
    PresetsClientsComponent.prototype.editClient = function (client) {
        // console.log('editClient', client);
        this.viewForm = true;
        delete client['createdDate'];
        delete client['createdBy'];
        delete client['lastModifiedDate'];
        delete client['lastModifiedBy'];
        this.presetsService.setActiveClientToEdit(client);
        this.myClientForm.setValue(client);
    };
    PresetsClientsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-presets-clients',
                    templateUrl: './presets-clients.component.html',
                    styleUrls: ['./presets-clients.component.scss']
                },] },
    ];
    /** @nocollapse */
    PresetsClientsComponent.ctorParameters = function () { return [
        { type: app_component_1.AppComponent, },
        { type: presets_service_1.PresetsService, },
        { type: alert_service_1.AlertService, },
        { type: pager_service_1.PagerService, },
        { type: router_1.Router, },
        { type: app_config_provider_1.AppConfigProvider, },
    ]; };
    return PresetsClientsComponent;
}());
exports.PresetsClientsComponent = PresetsClientsComponent;
//# sourceMappingURL=presets-clients.component.js.map