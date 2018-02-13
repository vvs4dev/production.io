"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../_services/user.service");
var dash_service_1 = require("./dash.service");
var presets_service_1 = require("../presets/presets.service");
// SEO
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("../app.component");
var operations_service_1 = require("../operations/operations.service");
var DashComponent = /** @class */ (function () {
    function DashComponent(meta, title, user, presetsService, dashService, router, appComponent, operationsService) {
        this.user = user;
        this.presetsService = presetsService;
        this.dashService = dashService;
        this.router = router;
        this.appComponent = appComponent;
        this.operationsService = operationsService;
        this.activeUser = this.user.getActiveUser();
        // SEO Config
        title.setTitle('My Dashboard');
        meta.addTags([
            { name: 'author', content: 'BE-PP' },
            { name: 'keywords', content: 'Production Planning Dashboard' },
            { name: 'description', content: 'View the Progress of the Company' }
        ]);
        this.today = new Date();
    }
    DashComponent.prototype.ngOnInit = function () {
        this.getJobOrders();
    };
    DashComponent.prototype.getJobOrders = function () {
        var _this = this;
        this.operationsService.getAllJobOrders()
            .subscribe(function (res) {
            // console.log('getAllJobOrders', res);
            // console.log('getAllJobOrders', res);
            _this.jobOrders = res;
        }, function (err) {
            // console.log('getAllJobOrders', err);
        });
    };
    DashComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-dash',
                    templateUrl: './dash.component.html',
                    styleUrls: ['./dash.component.scss']
                },] },
    ];
    /** @nocollapse */
    DashComponent.ctorParameters = function () { return [
        { type: platform_browser_1.Meta, },
        { type: platform_browser_1.Title, },
        { type: user_service_1.UserService, },
        { type: presets_service_1.PresetsService, },
        { type: dash_service_1.DashService, },
        { type: router_1.Router, },
        { type: app_component_1.AppComponent, },
        { type: operations_service_1.OperationsService, },
    ]; };
    return DashComponent;
}());
exports.DashComponent = DashComponent;
//# sourceMappingURL=dash.component.js.map