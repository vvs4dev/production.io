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
var OperationsJobOrderComponent = /** @class */ (function () {
    function OperationsJobOrderComponent(appComponent, presetsService, operationsService, alert, pagerService, router, appConfig) {
        this.appComponent = appComponent;
        this.presetsService = presetsService;
        this.operationsService = operationsService;
        this.alert = alert;
        this.pagerService = pagerService;
        this.router = router;
        this.appConfig = appConfig;
        this.myBreadCrumb = {};
        this.jobOrders = {};
        this.salesOrders = [];
        this.processes = [];
        // array of all jobOrders to be paged
        this.allJobOrders = [];
        // pager object
        this.pager = {};
        // paged jobOrders
        this.pagedJobOrders = [];
        this.myBreadCrumb.crumbs = [
            { 'menu': 'Operations', 'routerLink': '/operations' }
        ];
        this.myBreadCrumb.active = 'Job Order';
        this.noOfJobOrdersinPage = 5;
        this.today = new Date();
        this.fetchAllJobOrders();
        this.fetchDependents();
        this.jobOrders.res = {};
        this.jobOrders.validation = {};
        this.viewForm = false;
    }
    OperationsJobOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Form Settings
        this.myJobOrderForm = new forms_1.FormGroup({
            'id': new forms_1.FormControl(''),
            'salesOrderNumber': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([2, 30])])),
            'jobOrderNumber': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([2, 30])])),
            'client': new forms_1.FormControl(''),
            'productCode': new forms_1.FormControl(),
            'orderQuantity': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'orderDate': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'deliveryDate': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'process': new forms_1.FormArray([]),
            'completed': new forms_1.FormArray([])
        });
        this.salesOrderId = new forms_1.FormControl();
        this.salesOrderId.valueChanges
            .subscribe(function (term) {
            // console.log('term', term);
            // console.log('term', term);
            _this.myJobOrderForm.controls['salesOrderNumber'].setValue(JSON.parse(term).salesOrderNumber);
            _this.myJobOrderForm.controls['productCode'].setValue(JSON.parse(term).product.itemCode);
            _this.myJobOrderForm.controls['orderQuantity'].setValue(JSON.parse(term).orderQuantity);
            _this.myJobOrderForm.controls['deliveryDate'].setValue(JSON.parse(term).deliveryDate);
            _this.myJobOrderForm.controls['orderDate'].setValue(JSON.parse(term).orderDate);
            _this.myJobOrderForm.controls['client'].setValue(JSON.parse(term).customer);
        });
    };
    OperationsJobOrderComponent.prototype.callFunctionOnChange = function (i, processId) {
        // console.log('i', i, 'processId.value', processId.value);
        // this.myJobOrderForm.controls.process.controls[0].controls['processCode'].setValue(JSON.parse(processId.value).processCode);
    };
    // ===================================Items Group Start===========================================
    // ===================================Items Group Start===========================================
    OperationsJobOrderComponent.prototype.buildProcessGroup = 
    // ===================================Items Group Start===========================================
    function () {
        return new forms_1.FormGroup({
            'order': new forms_1.FormControl(),
            'processCode': new forms_1.FormControl(),
            'processDescription': new forms_1.FormControl(),
            'quantityManufactured': new forms_1.FormControl()
        });
    };
    OperationsJobOrderComponent.prototype.addProcessGroup = function () {
        this.myJobOrderForm.get('process').push(this.buildProcessGroup());
    };
    OperationsJobOrderComponent.prototype.removeProcessGroup = function (i, item) {
        this.myJobOrderForm.get('process').removeAt(i);
        // console.log('removedItem', item);
    };
    // ===================================Items Group End===========================================
    // ===================================Items Group End===========================================
    OperationsJobOrderComponent.prototype.resetJobOrderModal = 
    // ===================================Items Group End===========================================
    function () {
        this.myJobOrderForm.reset();
        this.operationsService.setActiveJobOrderToEdit(null);
        this.viewForm = true;
    };
    OperationsJobOrderComponent.prototype.fetchAllJobOrders = function () {
        var _this = this;
        this.loading = 'getJobOrders';
        this.operationsService.getAllJobOrders()
            .subscribe(function (res) {
            // console.log('getJobOrders-Response', res);
            // console.log('getJobOrders-Response', res);
            _this.jobOrders.res = res;
            _this.loading = '';
            _this.allJobOrders = res;
            _this.setPage(1);
        }, function (err) {
            _this.loading = false;
            // console.log('getJobOrders-Response', err);
            // console.log('getJobOrders-Response', err);
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
    OperationsJobOrderComponent.prototype.fetchDependents = function () {
        var _this = this;
        this.operationsService.getAllSalesOrders()
            .subscribe(function (res) {
            // console.log('getAllSalesOrders-Response', res);
            // console.log('getAllSalesOrders-Response', res);
            _this.salesOrders = res;
        }, function (err) {
            // console.log('getAllSalesOrders-Response', err);
        });
        this.presetsService.getAllProcesses()
            .subscribe(function (res) {
            // console.log('getAllProcesses-Response', res);
            // console.log('getAllProcesses-Response', res);
            _this.processes = res;
        }, function (err) {
            // console.log('getAllProcesses-Response', err);
        });
    };
    OperationsJobOrderComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allJobOrders.length, page, this.noOfJobOrdersinPage);
        // get current page of jobOrders
        this.pagedJobOrders = this.allJobOrders.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // console.log('pagedJobOrders', this.pagedJobOrders);
    };
    OperationsJobOrderComponent.prototype.validateJobOrderCode = function (code) {
        var _this = this;
        // console.log('code', code);
        this.operationsService.validateMaster('jobOrder', code)
            .subscribe(function (res) {
            // console.log('validateJobOrderCode', res);
            // console.log('validateJobOrderCode', res);
            _this.jobOrders.validation = res;
        }, function (err) {
            // console.log('validateJobOrderCode', err);
        });
        this.myJobOrderForm.controls.jobOrderNumber.setValue(code);
    };
    OperationsJobOrderComponent.prototype.addJobOrder = function (jobOrder) {
        var _this = this;
        this.myJobOrderForm.disable();
        this.loading = 'postJobOrder';
        // console.log('jobOrder', jobOrder);
        this.operationsService.updateJobOrder(jobOrder)
            .subscribe(function (res) {
            _this.myJobOrderForm.reset();
            _this.viewForm = false;
            _this.myJobOrderForm.enable();
            // console.log('postJobOrder-Response', res);
            // console.log('postJobOrder-Response', res);
            _this.loading = '';
            _this.fetchAllJobOrders();
            if (!_this.operationsService.getActiveJobOrderToEdit()) {
                _this.alert.success('JobOrder ' + jobOrder.jobOrderNumber + ' Created Successfully');
            }
            else {
                _this.alert.success('JobOrder ' + jobOrder.jobOrderNumber + ' Updated Successfully');
            }
        }, function (err) {
            _this.myJobOrderForm.enable();
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
    OperationsJobOrderComponent.prototype.editJobOrder = function (jobOrder) {
        // console.log('editJobOrder', jobOrder);
        this.viewForm = true;
        delete jobOrder['createdDate'];
        delete jobOrder['createdBy'];
        delete jobOrder['lastModifiedDate'];
        delete jobOrder['lastModifiedBy'];
        this.operationsService.setActiveJobOrderToEdit(jobOrder);
        this.myJobOrderForm.setValue(jobOrder);
    };
    OperationsJobOrderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-operations-job-order',
                    templateUrl: './operations-job-order.component.html',
                    styleUrls: ['./operations-job-order.component.scss']
                },] },
    ];
    /** @nocollapse */
    OperationsJobOrderComponent.ctorParameters = function () { return [
        { type: app_component_1.AppComponent, },
        { type: presets_service_1.PresetsService, },
        { type: operations_service_1.OperationsService, },
        { type: alert_service_1.AlertService, },
        { type: pager_service_1.PagerService, },
        { type: router_1.Router, },
        { type: app_config_provider_1.AppConfigProvider, },
    ]; };
    return OperationsJobOrderComponent;
}());
exports.OperationsJobOrderComponent = OperationsJobOrderComponent;
//# sourceMappingURL=operations-job-order.component.js.map