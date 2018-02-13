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
var PresetsItemsComponent = /** @class */ (function () {
    function PresetsItemsComponent(appComponent, presetsService, alert, pagerService, router, appConfig) {
        this.appComponent = appComponent;
        this.presetsService = presetsService;
        this.alert = alert;
        this.pagerService = pagerService;
        this.router = router;
        this.appConfig = appConfig;
        this.myBreadCrumb = {};
        this.items = {};
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        this.myBreadCrumb.crumbs = [
            { 'menu': 'Presets', 'routerLink': '/presets' }
        ];
        this.myBreadCrumb.active = 'Items';
        this.noOfItemsinPage = 5;
        this.fetchAllItems();
        this.items.res = {};
        this.items.validation = {};
        this.viewForm = false;
    }
    PresetsItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Form Settings
        this.myItemForm = new forms_1.FormGroup({
            'id': new forms_1.FormControl(''),
            'itemTypeCode': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'itemTypeName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'itemCode': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([2, 30])])),
            'itemName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([3, 50])])),
            'itemUnitOfMeasure': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng4_validators_1.CustomValidators.rangeLength([1, 50])])),
            'itemDescription': new forms_1.FormControl('', forms_1.Validators.compose([ng4_validators_1.CustomValidators.rangeLength([5, 300])])),
        });
        this.itemType = new forms_1.FormControl();
        this.itemType.valueChanges
            .subscribe(function (term) {
            // console.log('term', term);
            term = JSON.parse(term);
            _this.myItemForm.controls['itemTypeCode'].setValue(term.code);
            _this.myItemForm.controls['itemTypeName'].setValue(term.name);
        });
    };
    PresetsItemsComponent.prototype.resetItemModal = function () {
        this.myItemForm.reset();
        this.presetsService.setActiveItemToEdit(null);
        this.viewForm = true;
    };
    PresetsItemsComponent.prototype.fetchAllItems = function () {
        var _this = this;
        this.loading = 'getItems';
        this.presetsService.getAllItems()
            .subscribe(function (res) {
            // console.log('getAllItems-Response', res);
            // console.log('getAllItems-Response', res);
            _this.items.res = res;
            _this.loading = '';
            _this.allItems = res;
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
    PresetsItemsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page, this.noOfItemsinPage);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // console.log('pagedItems', this.pagedItems);
    };
    PresetsItemsComponent.prototype.validateItemCode = function (code) {
        var _this = this;
        // console.log('code', code);
        this.presetsService.validateMaster('item', code)
            .subscribe(function (res) {
            // console.log('validateItemCode', res);
            // console.log('validateItemCode', res);
            _this.items.validation = res;
        }, function (err) {
            // console.log('validateItemCode', err);
        });
        this.myItemForm.controls.itemCode.setValue(code);
    };
    PresetsItemsComponent.prototype.addItem = function (item) {
        var _this = this;
        this.myItemForm.disable();
        this.loading = 'postItem';
        // console.log('item', item);
        this.presetsService.updateItem(item)
            .subscribe(function (res) {
            _this.myItemForm.reset();
            _this.viewForm = false;
            _this.myItemForm.enable();
            // console.log('postItem-Response', res);
            // console.log('postItem-Response', res);
            _this.loading = '';
            _this.fetchAllItems();
            if (!_this.presetsService.getActiveItemToEdit()) {
                _this.alert.success('Item ' + item.itemCode + ' Created Successfully');
            }
            else {
                _this.alert.success('Item ' + item.itemCode + ' Updated Successfully');
            }
        }, function (err) {
            _this.myItemForm.enable();
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
    PresetsItemsComponent.prototype.editItem = function (item) {
        // console.log('editItem', item);
        this.viewForm = true;
        delete item['createdDate'];
        delete item['createdBy'];
        delete item['lastModifiedDate'];
        delete item['lastModifiedBy'];
        this.presetsService.setActiveItemToEdit(item);
        this.myItemForm.setValue(item);
    };
    PresetsItemsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-presets-items',
                    templateUrl: './presets-items.component.html',
                    styleUrls: ['./presets-items.component.scss']
                },] },
    ];
    /** @nocollapse */
    PresetsItemsComponent.ctorParameters = function () { return [
        { type: app_component_1.AppComponent, },
        { type: presets_service_1.PresetsService, },
        { type: alert_service_1.AlertService, },
        { type: pager_service_1.PagerService, },
        { type: router_1.Router, },
        { type: app_config_provider_1.AppConfigProvider, },
    ]; };
    return PresetsItemsComponent;
}());
exports.PresetsItemsComponent = PresetsItemsComponent;
//# sourceMappingURL=presets-items.component.js.map