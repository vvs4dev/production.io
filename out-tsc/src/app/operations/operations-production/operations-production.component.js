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
var excel_service_1 = require("../../_services/excel.service");
var json2xlsx_export_1 = require("json2xlsx-export");
var OperationsProductionComponent = /** @class */ (function () {
    function OperationsProductionComponent(appComponent, excelService, presetsService, operationsService, alert, pagerService, router, appConfig) {
        this.appComponent = appComponent;
        this.excelService = excelService;
        this.presetsService = presetsService;
        this.operationsService = operationsService;
        this.alert = alert;
        this.pagerService = pagerService;
        this.router = router;
        this.appConfig = appConfig;
        this.myBreadCrumb = {};
        this.production = {};
        this.jobOrders = [];
        this.productions = [];
        // array of all Production to be paged
        this.allProduction = [];
        // pager object
        this.pager = {};
        // paged Production
        this.pagedProduction = [];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Process 1', 'Process 1', 'Process 1', 'Process 1', 'Process 1', 'Process 1'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
        ];
        this.myBreadCrumb.crumbs = [
            { 'menu': 'Operations', 'routerLink': '/operations' }
        ];
        this.myBreadCrumb.active = 'Production';
        this.noOfProductioninPage = 5;
        this.today = new Date();
        this.fetchAllProduction();
        this.fetchDependents();
        this.productions.res = {};
        this.productions.validation = {};
        this.viewForm = false;
    }
    OperationsProductionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Form Settings
        this.myProductionForm = new forms_1.FormGroup({
            'id': new forms_1.FormControl(''),
            'jobOrderId': new forms_1.FormControl(''),
            'jobOrder': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([2, 30])])),
            'productionDate': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'completed': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'productionData': new forms_1.FormArray([])
        });
        this.myProductionForm.controls['productionDate'].setValue(this.operationsService.formatDate(this.today));
        this.jobOrderId = new forms_1.FormControl();
        this.jobOrderId.valueChanges
            .subscribe(function (jobOrder) {
            // console.log('jobOrder', JSON.parse(jobOrder));
            if (_this.aJobOrder) {
                // console.log('ifCase');
                while (_this.myProductionForm.controls.productionData.value.length !== 0) {
                    _this.myProductionForm.get('productionData').removeAt(0);
                }
                _this.aJobOrder = JSON.parse(jobOrder);
                _this.prepareaJobOrder();
            }
            else {
                // console.log('elseCase');
                // console.log('elseCase');
                _this.aJobOrder = JSON.parse(jobOrder);
                _this.prepareaJobOrder();
            }
        });
    };
    OperationsProductionComponent.prototype.prepareaJobOrder = function () {
        this.myProductionForm.controls['jobOrder'].setValue(this.aJobOrder.jobOrderNumber);
        this.myProductionForm.controls['jobOrderId'].setValue(this.aJobOrder.id);
        this.fillJobOrder(this.aJobOrder.process);
    };
    OperationsProductionComponent.prototype.fillJobOrder = function (aJobOrderProcess) {
        var _this = this;
        // console.log('aJobOrderProcess', aJobOrderProcess);
        aJobOrderProcess.forEach(function (item, index) {
            // console.log('index');
            // console.log('add', index, aJobOrderProcess.length);
            // console.log('index');
            // console.log('add', index, aJobOrderProcess.length);
            _this.addProductionGroup();
        });
        this.myProductionForm.controls['productionData'].setValue(this.aJobOrder.process);
    };
    // ===================================Items Group Start===========================================
    // ===================================Items Group Start===========================================
    OperationsProductionComponent.prototype.buildProductionGroup = 
    // ===================================Items Group Start===========================================
    function () {
        return new forms_1.FormGroup({
            'order': new forms_1.FormControl(),
            'processCode': new forms_1.FormControl(),
            'processDescription': new forms_1.FormControl(),
            'quantityManufactured': new forms_1.FormControl()
        });
    };
    OperationsProductionComponent.prototype.addProductionGroup = function () {
        this.myProductionForm.get('productionData').push(this.buildProductionGroup());
    };
    OperationsProductionComponent.prototype.removeProductionGroup = function (i, item) {
        this.myProductionForm.get('productionData').removeAt(i);
        // console.log('removedItem', item);
    };
    // ===================================Items Group End===========================================
    // ===================================Items Group End===========================================
    OperationsProductionComponent.prototype.resetProductionModal = 
    // ===================================Items Group End===========================================
    function () {
        this.myProductionForm.reset();
        this.operationsService.setActiveProductionToEdit(null);
        this.viewForm = true;
    };
    OperationsProductionComponent.prototype.fetchAllProduction = function () {
        var _this = this;
        // this.loading = 'getProduction';
        this.operationsService.getAllProduction()
            .subscribe(function (res) {
            // console.log('getProduction-Response', res);
            // console.log('getProduction-Response', res);
            _this.productions.res = res;
            // this.prepareQuantityChart();
            // this.prepareQuantityChart();
            _this.loading = '';
            _this.allProduction = res;
            _this.setPage(1);
        }, function (err) {
            _this.loading = false;
            // console.log('getProduction-Response', err);
            // console.log('getProduction-Response', err);
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
    OperationsProductionComponent.prototype.fetchDependents = function () {
        var _this = this;
        this.operationsService.getAllJobOrders()
            .subscribe(function (res) {
            // console.log('getAllJobOrders-Response', res);
            // console.log('getAllJobOrders-Response', res);
            _this.jobOrders = res;
        }, function (err) {
            // console.log('getAllJobOrders-Response', err);
        });
    };
    OperationsProductionComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allProduction.length, page, this.noOfProductioninPage);
        // get current page of Production
        this.pagedProduction = this.allProduction.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // console.log('pagedProduction', this.pagedProduction);
    };
    OperationsProductionComponent.prototype.addProductionData = function (production) {
        var _this = this;
        this.myProductionForm.disable();
        this.loading = 'postProduction';
        // console.log('production', production);
        this.operationsService.updateProduction(production)
            .subscribe(function (res) {
            _this.myProductionForm.reset();
            _this.viewForm = false;
            _this.myProductionForm.enable();
            // console.log('postProduction-Response', res);
            // console.log('postProduction-Response', res);
            _this.loading = '';
            _this.fetchAllProduction();
            if (!_this.operationsService.getActiveProductionToEdit()) {
                _this.alert.success('Production ' + production.productionNumber + ' Created Successfully');
            }
            else {
                _this.alert.success('Production ' + production.productionNumber + ' Updated Successfully');
            }
        }, function (err) {
            _this.myProductionForm.enable();
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
    OperationsProductionComponent.prototype.editProduction = function (Production) {
        // console.log('editProduction', Production);
        this.viewForm = true;
        delete Production['createdDate'];
        delete Production['createdBy'];
        delete Production['lastModifiedDate'];
        delete Production['lastModifiedBy'];
        this.operationsService.setActiveProductionToEdit(Production);
        this.myProductionForm.setValue(Production);
    };
    OperationsProductionComponent.prototype.exportData = function () {
        console.log('exportData', this.allProduction);
        // this.excelService.exportAsExcelFile(this.productions, 'ProductionData');
        var config = {
            filename: 'AwesomeFile',
            sheet: {
                data: [this.allProduction]
            }
        };
        json2xlsx_export_1.default(config);
    };
    OperationsProductionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-operations-production',
                    templateUrl: './operations-production.component.html',
                    styleUrls: ['./operations-production.component.scss']
                },] },
    ];
    /** @nocollapse */
    OperationsProductionComponent.ctorParameters = function () { return [
        { type: app_component_1.AppComponent, },
        { type: excel_service_1.ExcelService, },
        { type: presets_service_1.PresetsService, },
        { type: operations_service_1.OperationsService, },
        { type: alert_service_1.AlertService, },
        { type: pager_service_1.PagerService, },
        { type: router_1.Router, },
        { type: app_config_provider_1.AppConfigProvider, },
    ]; };
    return OperationsProductionComponent;
}());
exports.OperationsProductionComponent = OperationsProductionComponent;
//# sourceMappingURL=operations-production.component.js.map