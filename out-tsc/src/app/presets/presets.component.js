"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("../app.component");
var router_1 = require("@angular/router");
var user_service_1 = require("../_services/user.service");
var presets_service_1 = require("./presets.service");
var alert_service_1 = require("../_services/alert.service");
var PresetsComponent = /** @class */ (function () {
    function PresetsComponent(appComponent, alertService, userService, presetsService, router) {
        this.appComponent = appComponent;
        this.alertService = alertService;
        this.userService = userService;
        this.presetsService = presetsService;
        this.router = router;
        this.myBreadCrumb = {};
        this.presets = [];
        this.master = {};
        this.myBreadCrumb.active = 'Presets';
        this.myBreadCrumb.crumbs = [];
        this.master.items = [];
        this.master.res = {};
        this.master.count = [];
        this.master.items = ['buyer', 'vendor', 'style', 'fabric', 'treatment', 'job', 'accessory', 'packer'];
    }
    PresetsComponent.prototype.ngOnInit = function () {
        // this.countMasters();
        this.presets = [
            {
                'master': 'Raw Materials',
                'val': '20',
                'theme': 'side-box bg-primary',
                'icon': 'icofont icofont-cubes',
                'tag': 'items',
                'tagTheme': 'label label-primary',
                'routerLink': '/presets/items'
            },
            {
                'master': 'Packing Materials',
                'val': '12',
                'theme': 'side-box bg-primary',
                'icon': 'icofont icofont-cubes',
                'tag': 'items',
                'tagTheme': 'label label-primary',
                'routerLink': '/presets/items'
            },
            {
                'master': 'Accessories',
                'val': '20',
                'theme': 'side-box bg-primary',
                'icon': 'icofont icofont-cubes',
                'tag': 'items',
                'tagTheme': 'label label-primary',
                'routerLink': '/presets/items'
            },
            {
                'master': 'Consumables',
                'val': '12',
                'theme': 'side-box bg-primary',
                'icon': 'icofont icofont-cubes',
                'tag': 'items',
                'tagTheme': 'label label-primary',
                'routerLink': '/presets/items'
            },
            {
                'master': 'Finished Goods',
                'val': '20',
                'theme': 'side-box bg-primary',
                'icon': 'icofont icofont-cubes',
                'tag': 'items',
                'tagTheme': 'label label-primary',
                'routerLink': '/presets/items'
            },
            {
                'master': 'Others',
                'val': '12',
                'theme': 'side-box bg-primary',
                'icon': 'icofont icofont-cubes',
                'tag': 'items',
                'tagTheme': 'label label-primary',
                'routerLink': '/presets/items'
            },
            {
                'master': 'Process',
                'val': '12',
                'theme': 'side-box bg-warning',
                'icon': 'icofont icofont-chart-flow-alt-2',
                'tag': 'process',
                'tagTheme': 'label label-warning',
                'routerLink': '/presets/process'
            },
            {
                'master': 'Clients',
                'val': '12',
                'theme': 'side-box bg-success',
                'icon': 'icofont icofont-people',
                'tag': 'Contacts',
                'tagTheme': 'label label-success',
                'routerLink': '/presets/clients'
            }
        ];
    };
    // countMasters() {
    //   this.master.items.forEach((element, index) => {
    //     // console.log(element, index);
    //     this.presetsService.countMaster(element)
    //       .subscribe(
    //         res => {
    //           // console.log('element',element, 'res', res);
    //           this.master.res = res;
    //           this.master.count.push(this.master.res.val);
    //           // console.log('masterVal', 'element', this.masterVal);
    //         },
    //         err => {
    //           this.alertService.error('Error Fetching Data');
    //           // console.log('element',element, 'error', err)
    //         }
    //       );
    //   });
    // }
    // countMasters() {
    //   this.master.items.forEach((element, index) => {
    //     // console.log(element, index);
    //     this.presetsService.countMaster(element)
    //       .subscribe(
    //         res => {
    //           // console.log('element',element, 'res', res);
    //           this.master.res = res;
    //           this.master.count.push(this.master.res.val);
    //           // console.log('masterVal', 'element', this.masterVal);
    //         },
    //         err => {
    //           this.alertService.error('Error Fetching Data');
    //           // console.log('element',element, 'error', err)
    //         }
    //       );
    //   });
    // }
    PresetsComponent.prototype.navigateTo = 
    // countMasters() {
    //   this.master.items.forEach((element, index) => {
    //     // console.log(element, index);
    //     this.presetsService.countMaster(element)
    //       .subscribe(
    //         res => {
    //           // console.log('element',element, 'res', res);
    //           this.master.res = res;
    //           this.master.count.push(this.master.res.val);
    //           // console.log('masterVal', 'element', this.masterVal);
    //         },
    //         err => {
    //           this.alertService.error('Error Fetching Data');
    //           // console.log('element',element, 'error', err)
    //         }
    //       );
    //   });
    // }
    function (link) {
        // console.log('navigateTo', link)
        this.router.navigate([link]);
    };
    PresetsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-presets',
                    templateUrl: './presets.component.html',
                    styleUrls: ['./presets.component.scss']
                },] },
    ];
    /** @nocollapse */
    PresetsComponent.ctorParameters = function () { return [
        { type: app_component_1.AppComponent, },
        { type: alert_service_1.AlertService, },
        { type: user_service_1.UserService, },
        { type: presets_service_1.PresetsService, },
        { type: router_1.Router, },
    ]; };
    return PresetsComponent;
}());
exports.PresetsComponent = PresetsComponent;
//# sourceMappingURL=presets.component.js.map