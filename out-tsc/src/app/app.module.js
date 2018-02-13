"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var ng2_device_detector_1 = require("ng2-device-detector");
var forms_1 = require("@angular/forms");
var ng4_validators_1 = require("ng4-validators");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var auth_interceptor_1 = require("./_services/auth.interceptor");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/filter");
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
var ngxf_uploader_1 = require("ngxf-uploader");
var core_2 = require("@ngx-progressbar/core");
var http_client_1 = require("@ngx-progressbar/http-client");
var router_1 = require("@ngx-progressbar/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./base/home/home.component");
var about_component_1 = require("./base/about/about.component");
var material_1 = require("@angular/material");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var login_component_1 = require("./base/login/login.component");
var register_component_1 = require("./base/register/register.component");
// Base Components
var header_component_1 = require("./partials/header/header.component");
var footer_component_1 = require("./partials/footer/footer.component");
var sidebar_component_1 = require("./partials/sidebar/sidebar.component");
// Dash Component
var dash_component_1 = require("./dash/dash.component");
var operations_sales_order_component_1 = require("./operations/operations-sales-order/operations-sales-order.component");
var operations_production_component_1 = require("./operations/operations-production/operations-production.component");
var operations_job_order_component_1 = require("./operations/operations-job-order/operations-job-order.component");
var operations_service_1 = require("./operations/operations.service");
// Presets Component Start
var presets_component_1 = require("./presets/presets.component");
var presets_items_component_1 = require("./presets/presets-items/presets-items.component");
var presets_process_component_1 = require("./presets/presets-process/presets-process.component");
var presets_clients_component_1 = require("./presets/presets-clients/presets-clients.component");
var presets_service_1 = require("./presets/presets.service");
// Presets Component End
// Settings Component Start
var settings_component_1 = require("./settings/settings.component");
var settings_company_component_1 = require("./settings/settings-company/settings-company.component");
var settings_branches_component_1 = require("./settings/settings-branches/settings-branches.component");
var settings_department_component_1 = require("./settings/settings-department/settings-department.component");
var settings_service_1 = require("./settings/settings.service");
// Settings Component End
var user_service_1 = require("./_services/user.service");
var auth_guard_1 = require("./_guards/auth.guard");
var auth_service_1 = require("./_services/auth.service");
var alert_component_1 = require("./_directives/alert/alert.component");
var alert_service_1 = require("./_services/alert.service");
var app_config_provider_1 = require("./app-config.provider");
var pager_service_1 = require("./_services/pager.service");
var dash_service_1 = require("./dash/dash.service");
var excel_service_1 = require("./_services/excel.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        home_component_1.HomeComponent,
                        about_component_1.AboutComponent,
                        header_component_1.HeaderComponent,
                        footer_component_1.FooterComponent,
                        login_component_1.LoginComponent,
                        dash_component_1.DashComponent,
                        alert_component_1.AlertComponent,
                        register_component_1.RegisterComponent,
                        sidebar_component_1.SidebarComponent,
                        operations_sales_order_component_1.OperationsSalesOrderComponent,
                        operations_job_order_component_1.OperationsJobOrderComponent,
                        operations_production_component_1.OperationsProductionComponent,
                        presets_component_1.PresetsComponent,
                        presets_items_component_1.PresetsItemsComponent,
                        presets_process_component_1.PresetsProcessComponent,
                        presets_clients_component_1.PresetsClientsComponent,
                        settings_component_1.SettingsComponent,
                        settings_company_component_1.SettingsCompanyComponent,
                        settings_branches_component_1.SettingsBranchesComponent,
                        settings_department_component_1.SettingsDepartmentComponent,
                        operations_production_component_1.OperationsProductionComponent,
                        operations_job_order_component_1.OperationsJobOrderComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule.withServerTransition({ appId: 'bekycg' }),
                        animations_1.BrowserAnimationsModule,
                        ng2_device_detector_1.Ng2DeviceDetectorModule.forRoot(),
                        ngxf_uploader_1.NgxfUploaderModule.forRoot(),
                        app_routing_module_1.AppRoutingModule,
                        material_1.MatListModule, material_1.MatToolbarModule,
                        forms_1.FormsModule, forms_1.ReactiveFormsModule,
                        ng4_validators_1.CustomFormsModule,
                        http_1.HttpClientModule,
                        core_2.NgProgressModule.forRoot(),
                        http_client_1.NgProgressHttpClientModule,
                        router_1.NgProgressRouterModule,
                        ng2_charts_1.ChartsModule
                    ],
                    providers: [
                        user_service_1.UserService,
                        auth_service_1.AuthService,
                        { provide: http_2.HTTP_INTERCEPTORS, useClass: auth_interceptor_1.AuthInterceptor, multi: true },
                        auth_guard_1.AuthGuard,
                        alert_service_1.AlertService,
                        app_config_provider_1.AppConfigProvider,
                        material_1.MatIconRegistry,
                        pager_service_1.PagerService,
                        dash_service_1.DashService,
                        presets_service_1.PresetsService,
                        settings_service_1.SettingsService,
                        operations_service_1.OperationsService,
                        excel_service_1.ExcelService
                    ],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map