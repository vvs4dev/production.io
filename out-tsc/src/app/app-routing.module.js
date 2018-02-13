"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Non Auth Components Start
var about_component_1 = require("./base/about/about.component");
var login_component_1 = require("./base/login/login.component");
var register_component_1 = require("./base/register/register.component");
// Non Auth Components End
//  Auth Components Start
var dash_component_1 = require("./dash/dash.component");
var operations_sales_order_component_1 = require("./operations/operations-sales-order/operations-sales-order.component");
var operations_production_component_1 = require("./operations/operations-production/operations-production.component");
var operations_job_order_component_1 = require("./operations/operations-job-order/operations-job-order.component");
// Settings Component Start
var settings_component_1 = require("./settings/settings.component");
var settings_company_component_1 = require("./settings/settings-company/settings-company.component");
var settings_branches_component_1 = require("./settings/settings-branches/settings-branches.component");
var settings_department_component_1 = require("./settings/settings-department/settings-department.component");
// Settings Component End
// Presets Start
var presets_component_1 = require("./presets/presets.component");
var presets_items_component_1 = require("./presets/presets-items/presets-items.component");
var presets_process_component_1 = require("./presets/presets-process/presets-process.component");
var presets_clients_component_1 = require("./presets/presets-clients/presets-clients.component");
var auth_guard_1 = require("./_guards/auth.guard");
var routes = [
    {
        path: '',
        canActivate: [auth_guard_1.AuthGuard],
        component: dash_component_1.DashComponent
    },
    {
        path: 'about',
        canActivate: [auth_guard_1.AuthGuard],
        component: about_component_1.AboutComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'operations/salesorder',
        canActivate: [auth_guard_1.AuthGuard],
        component: operations_sales_order_component_1.OperationsSalesOrderComponent
    },
    {
        path: 'operations/joborder',
        canActivate: [auth_guard_1.AuthGuard],
        component: operations_job_order_component_1.OperationsJobOrderComponent
    },
    {
        path: 'operations/production',
        canActivate: [auth_guard_1.AuthGuard],
        component: operations_production_component_1.OperationsProductionComponent
    },
    {
        path: 'presets',
        canActivate: [auth_guard_1.AuthGuard],
        component: presets_component_1.PresetsComponent
    },
    {
        path: 'presets/items',
        canActivate: [auth_guard_1.AuthGuard],
        component: presets_items_component_1.PresetsItemsComponent
    },
    {
        path: 'presets/process',
        canActivate: [auth_guard_1.AuthGuard],
        component: presets_process_component_1.PresetsProcessComponent
    },
    {
        path: 'presets/clients',
        canActivate: [auth_guard_1.AuthGuard],
        component: presets_clients_component_1.PresetsClientsComponent
    },
    {
        path: 'settings',
        canActivate: [auth_guard_1.AuthGuard],
        component: settings_component_1.SettingsComponent
    },
    {
        path: 'settings/company/:action/:id',
        canActivate: [auth_guard_1.AuthGuard],
        component: settings_company_component_1.SettingsCompanyComponent
    },
    {
        path: 'settings/:company/branch/:action/:id',
        canActivate: [auth_guard_1.AuthGuard],
        component: settings_branches_component_1.SettingsBranchesComponent
    },
    {
        path: 'settings/:company/:branch/department/:action/:id',
        canActivate: [auth_guard_1.AuthGuard],
        component: settings_department_component_1.SettingsDepartmentComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
                    exports: [router_1.RouterModule]
                },] },
    ];
    /** @nocollapse */
    AppRoutingModule.ctorParameters = function () { return []; };
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map