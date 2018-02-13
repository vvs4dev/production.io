"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var ng4_validators_1 = require("ng4-validators");
var alert_service_1 = require("./../../_services/alert.service");
var app_component_1 = require("./../../app.component");
var core_1 = require("@angular/core");
var presets_service_1 = require("./../../presets/presets.service");
var operations_service_1 = require("./../operations.service");
var pager_service_1 = require("./../../_services/pager.service");
var router_1 = require("@angular/router");
var app_config_provider_1 = require("../../app-config.provider");
var OperationsSalesOrderComponent = /** @class */ (function () {
    function OperationsSalesOrderComponent(appComponent, presetsService, operationsService, alert, pagerService, router, appConfig) {
        this.appComponent = appComponent;
        this.presetsService = presetsService;
        this.operationsService = operationsService;
        this.alert = alert;
        this.pagerService = pagerService;
        this.router = router;
        this.appConfig = appConfig;
        this.myBreadCrumb = {};
        this.salesOrders = {};
        this.products = [];
        this.customers = [];
        // array of all salesOrders to be paged
        this.allSalesOrders = [];
        // pager object
        this.pager = {};
        // paged salesOrders
        this.pagedSalesOrders = [];
        this.myBreadCrumb.crumbs = [
            { 'menu': 'Operations', 'routerLink': '/operations' }
        ];
        this.myBreadCrumb.active = 'Sales Order';
        this.noOfSalesOrdersinPage = 5;
        this.today = new Date();
        this.fetchAllSalesOrders();
        this.fetchPresets();
        this.salesOrders.res = {};
        this.salesOrders.validation = {};
        this.viewForm = false;
    }
    OperationsSalesOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Form Settings
        this.mySalesOrderForm = new forms_1.FormGroup({
            'id': new forms_1.FormControl(''),
            'salesOrderNumber': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([2, 30])])),
            'salesOrderDate': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'customer': new forms_1.FormGroup({
                'clientBrand': new forms_1.FormControl(),
                'clientName': new forms_1.FormControl(),
                'clientPlaceofSupply': new forms_1.FormGroup({
                    'PO': new forms_1.FormControl(),
                    'street': new forms_1.FormControl(),
                    'city': new forms_1.FormControl(),
                    'state': new forms_1.FormControl(),
                    'country': new forms_1.FormControl(),
                    'zipcode': new forms_1.FormControl()
                })
            }),
            'product': new forms_1.FormControl(),
            'orderQuantity': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'deliveryDate': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'orderDescription': new forms_1.FormControl('', forms_1.Validators.compose([ng4_validators_1.CustomValidators.rangeLength([5, 300])]))
        });
        this.customerId = new forms_1.FormControl();
        this.productId = new forms_1.FormControl();
        this.customerId.valueChanges
            .subscribe(function (term) {
            // console.log('term', term);
            term = JSON.parse(term);
            delete term['id'];
            _this.mySalesOrderForm.controls['customer'].setValue(term);
        });
        this.productId.valueChanges
            .subscribe(function (term) {
            // console.log('term', term);
            term = JSON.parse(term);
            delete term['id'];
            _this.mySalesOrderForm.controls['product'].setValue(term);
        });
    };
    OperationsSalesOrderComponent.prototype.resetSalesOrderModal = function () {
        this.mySalesOrderForm.reset();
        this.operationsService.setActiveSalesOrderToEdit(null);
        this.viewForm = true;
        this.mySalesOrderForm.controls['salesOrderDate'].setValue(this.operationsService.formatDate(this.today));
    };
    OperationsSalesOrderComponent.prototype.fetchAllSalesOrders = function () {
        var _this = this;
        this.loading = 'getSalesOrders';
        this.operationsService.getAllSalesOrders()
            .subscribe(function (res) {
            // console.log('getAllSalesOrders-Response', res);
            // console.log('getAllSalesOrders-Response', res);
            _this.salesOrders.res = res;
            _this.loading = '';
            _this.allSalesOrders = res;
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
    OperationsSalesOrderComponent.prototype.fetchPresets = function () {
        var _this = this;
        this.presetsService.getAllClients()
            .subscribe(function (res) {
            // console.log('getAllClients', res);
            // console.log('getAllClients', res);
            _this.customers = res;
        }, function (err) {
            // console.log('getAllClients', err);
        });
        this.presetsService.getMaster('items', 'fg')
            .subscribe(function (res) {
            // console.log('getMaster-fg', res);
            // console.log('getMaster-fg', res);
            _this.products = res;
        }, function (err) {
            // console.log('getMaster-fg', err);
        });
    };
    OperationsSalesOrderComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allSalesOrders.length, page, this.noOfSalesOrdersinPage);
        // get current page of salesOrders
        this.pagedSalesOrders = this.allSalesOrders.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // console.log('pagedSalesOrders', this.pagedSalesOrders);
    };
    OperationsSalesOrderComponent.prototype.validateSalesOrderCode = function (code) {
        var _this = this;
        // console.log('code', code);
        this.operationsService.validateMaster('salesOrder', code)
            .subscribe(function (res) {
            // console.log('validateSalesOrderCode', res);
            // console.log('validateSalesOrderCode', res);
            _this.salesOrders.validation = res;
        }, function (err) {
            // console.log('validateSalesOrderCode', err);
        });
        this.mySalesOrderForm.controls.salesOrderNumber.setValue(code);
    };
    OperationsSalesOrderComponent.prototype.addSalesOrder = function (salesOrder) {
        var _this = this;
        this.mySalesOrderForm.disable();
        this.loading = 'postSalesOrder';
        // console.log('salesOrder', salesOrder);
        this.operationsService.updateSalesOrder(salesOrder)
            .subscribe(function (res) {
            _this.mySalesOrderForm.reset();
            _this.viewForm = false;
            _this.mySalesOrderForm.enable();
            // console.log('postSalesOrder-Response', res);
            // console.log('postSalesOrder-Response', res);
            _this.loading = '';
            _this.fetchAllSalesOrders();
            if (!_this.operationsService.getActiveSalesOrderToEdit()) {
                _this.alert.success('SalesOrder ' + salesOrder.salesOrderNumber + ' Created Successfully');
            }
            else {
                _this.alert.success('SalesOrder ' + salesOrder.salesOrderNumber + ' Updated Successfully');
            }
        }, function (err) {
            _this.mySalesOrderForm.enable();
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
    OperationsSalesOrderComponent.prototype.editSalesOrder = function (salesOrder) {
        // console.log('editSalesOrder', salesOrder);
        this.viewForm = true;
        delete salesOrder['createdDate'];
        delete salesOrder['createdBy'];
        delete salesOrder['lastModifiedDate'];
        delete salesOrder['lastModifiedBy'];
        this.operationsService.setActiveSalesOrderToEdit(salesOrder);
        this.mySalesOrderForm.setValue(salesOrder);
    };
    OperationsSalesOrderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-operations-sales-order',
                    templateUrl: './operations-sales-order.component.html',
                    styleUrls: ['./operations-sales-order.component.scss']
                },] },
    ];
    /** @nocollapse */
    OperationsSalesOrderComponent.ctorParameters = function () { return [
        { type: app_component_1.AppComponent, },
        { type: presets_service_1.PresetsService, },
        { type: operations_service_1.OperationsService, },
        { type: alert_service_1.AlertService, },
        { type: pager_service_1.PagerService, },
        { type: router_1.Router, },
        { type: app_config_provider_1.AppConfigProvider, },
    ]; };
    return OperationsSalesOrderComponent;
}());
exports.OperationsSalesOrderComponent = OperationsSalesOrderComponent;
//# sourceMappingURL=operations-sales-order.component.js.map