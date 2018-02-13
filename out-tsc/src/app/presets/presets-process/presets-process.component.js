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
var PresetsProcessComponent = /** @class */ (function () {
    function PresetsProcessComponent(appComponent, presetsService, alert, pagerService, router, appConfig) {
        this.appComponent = appComponent;
        this.presetsService = presetsService;
        this.alert = alert;
        this.pagerService = pagerService;
        this.router = router;
        this.appConfig = appConfig;
        this.myBreadCrumb = {};
        this.processes = {};
        // array of all processes to be paged
        this.allProcesses = [];
        // pager object
        this.pager = {};
        // paged processes
        this.pagedProcesses = [];
        this.myBreadCrumb.crumbs = [
            { 'menu': 'Presets', 'routerLink': '/presets' }
        ];
        this.myBreadCrumb.active = 'Processes';
        this.noOfProcessesinPage = 5;
        this.fetchAllProcesses();
        this.processes.res = {};
        this.processes.validation = {};
        this.viewForm = false;
    }
    PresetsProcessComponent.prototype.ngOnInit = function () {
        // Form Settings
        this.myProcessForm = new forms_1.FormGroup({
            'id': new forms_1.FormControl(''),
            'processCode': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([2, 30])])),
            'processName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([3, 50])])),
            'machineName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([1, 50])])),
            'machineCapacity': new forms_1.FormControl('', forms_1.Validators.compose([ng4_validators_1.CustomValidators.rangeLength([5, 300])])),
        });
    };
    PresetsProcessComponent.prototype.resetProcessModal = function () {
        this.myProcessForm.reset();
        this.presetsService.setActiveProcessToEdit(null);
        this.viewForm = true;
    };
    PresetsProcessComponent.prototype.fetchAllProcesses = function () {
        var _this = this;
        this.loading = 'getProcesses';
        this.presetsService.getAllProcesses()
            .subscribe(function (res) {
            // console.log('getAllProcesses-Response', res);
            // console.log('getAllProcesses-Response', res);
            _this.processes.res = res;
            _this.loading = '';
            _this.allProcesses = res;
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
    PresetsProcessComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allProcesses.length, page, this.noOfProcessesinPage);
        // get current page of processes
        this.pagedProcesses = this.allProcesses.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // console.log('pagedProcesses', this.pagedProcesses);
    };
    PresetsProcessComponent.prototype.validateProcessCode = function (code) {
        var _this = this;
        // console.log('code', code);
        this.presetsService.validateMaster('process', code)
            .subscribe(function (res) {
            // console.log('validateProcessCode', res);
            // console.log('validateProcessCode', res);
            _this.processes.validation = res;
        }, function (err) {
            // console.log('validateProcessCode', err);
        });
        this.myProcessForm.controls.processCode.setValue(code);
    };
    PresetsProcessComponent.prototype.addProcess = function (process) {
        var _this = this;
        this.myProcessForm.disable();
        this.loading = 'postProcess';
        // console.log('process', process);
        this.presetsService.updateProcess(process)
            .subscribe(function (res) {
            _this.myProcessForm.reset();
            _this.viewForm = false;
            _this.myProcessForm.enable();
            // console.log('postProcess-Response', res);
            // console.log('postProcess-Response', res);
            _this.loading = '';
            _this.fetchAllProcesses();
            if (!_this.presetsService.getActiveProcessToEdit()) {
                _this.alert.success('Process ' + process.processCode + ' Created Successfully');
            }
            else {
                _this.alert.success('Process ' + process.processCode + ' Updated Successfully');
            }
        }, function (err) {
            _this.myProcessForm.enable();
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
    PresetsProcessComponent.prototype.editProcess = function (process) {
        // console.log('editProcess', process);
        this.viewForm = true;
        delete process['createdDate'];
        delete process['createdBy'];
        delete process['lastModifiedDate'];
        delete process['lastModifiedBy'];
        this.presetsService.setActiveProcessToEdit(process);
        this.myProcessForm.setValue(process);
    };
    PresetsProcessComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-presets-process',
                    templateUrl: './presets-process.component.html',
                    styleUrls: ['./presets-process.component.scss']
                },] },
    ];
    /** @nocollapse */
    PresetsProcessComponent.ctorParameters = function () { return [
        { type: app_component_1.AppComponent, },
        { type: presets_service_1.PresetsService, },
        { type: alert_service_1.AlertService, },
        { type: pager_service_1.PagerService, },
        { type: router_1.Router, },
        { type: app_config_provider_1.AppConfigProvider, },
    ]; };
    return PresetsProcessComponent;
}());
exports.PresetsProcessComponent = PresetsProcessComponent;
//# sourceMappingURL=presets-process.component.js.map