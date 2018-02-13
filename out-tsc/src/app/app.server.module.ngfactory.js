"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./app.server.module");
var i2 = require("./app.component");
var i3 = require("./dash/dash.component.ngfactory");
var i4 = require("./base/about/about.component.ngfactory");
var i5 = require("./base/login/login.component.ngfactory");
var i6 = require("./base/register/register.component.ngfactory");
var i7 = require("./operations/operations-sales-order/operations-sales-order.component.ngfactory");
var i8 = require("./operations/operations-job-order/operations-job-order.component.ngfactory");
var i9 = require("./operations/operations-production/operations-production.component.ngfactory");
var i10 = require("./presets/presets.component.ngfactory");
var i11 = require("./presets/presets-items/presets-items.component.ngfactory");
var i12 = require("./presets/presets-process/presets-process.component.ngfactory");
var i13 = require("./presets/presets-clients/presets-clients.component.ngfactory");
var i14 = require("./settings/settings.component.ngfactory");
var i15 = require("./settings/settings-company/settings-company.component.ngfactory");
var i16 = require("./settings/settings-branches/settings-branches.component.ngfactory");
var i17 = require("./settings/settings-department/settings-department.component.ngfactory");
var i18 = require("./app.component.ngfactory");
var i19 = require("@angular/http");
var i20 = require("@angular/platform-server");
var i21 = require("@angular/common/http");
var i22 = require("@angular/common");
var i23 = require("./_services/user.service");
var i24 = require("@ngx-progressbar/http-client");
var i25 = require("./_services/auth.interceptor");
var i26 = require("@ngx-progressbar/core");
var i27 = require("@angular/platform-browser");
var i28 = require("@angular/animations/browser");
var i29 = require("@angular/platform-browser/animations");
var i30 = require("@angular/animations");
var i31 = require("@angular/router");
var i32 = require("@angular/cdk/bidi");
var i33 = require("@angular/cdk/platform");
var i34 = require("@angular/forms");
var i35 = require("ng2-device-detector");
var i36 = require("ngxf-uploader");
var i37 = require("./_services/alert.service");
var i38 = require("./app-config.provider");
var i39 = require("./_services/auth.service");
var i40 = require("./_guards/auth.guard");
var i41 = require("@angular/material/icon");
var i42 = require("./_services/pager.service");
var i43 = require("./dash/dash.service");
var i44 = require("./presets/presets.service");
var i45 = require("./settings/settings.service");
var i46 = require("./operations/operations.service");
var i47 = require("./_services/excel.service");
var i48 = require("./dash/dash.component");
var i49 = require("./base/about/about.component");
var i50 = require("./base/login/login.component");
var i51 = require("./base/register/register.component");
var i52 = require("./operations/operations-sales-order/operations-sales-order.component");
var i53 = require("./operations/operations-job-order/operations-job-order.component");
var i54 = require("./operations/operations-production/operations-production.component");
var i55 = require("./presets/presets.component");
var i56 = require("./presets/presets-items/presets-items.component");
var i57 = require("./presets/presets-process/presets-process.component");
var i58 = require("./presets/presets-clients/presets-clients.component");
var i59 = require("./settings/settings.component");
var i60 = require("./settings/settings-company/settings-company.component");
var i61 = require("./settings/settings-branches/settings-branches.component");
var i62 = require("./settings/settings-department/settings-department.component");
var i63 = require("./app-routing.module");
var i64 = require("@angular/material/core");
var i65 = require("@angular/material/list");
var i66 = require("@angular/material/toolbar");
var i67 = require("ng4-validators");
var i68 = require("@ngx-progressbar/router");
var i69 = require("ng2-charts/charts/charts");
var i70 = require("./app.module");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.DashComponentNgFactory, i4.AboutComponentNgFactory, i5.LoginComponentNgFactory, i6.RegisterComponentNgFactory, i7.OperationsSalesOrderComponentNgFactory, i8.OperationsJobOrderComponentNgFactory, i9.OperationsProductionComponentNgFactory, i10.PresetsComponentNgFactory, i11.PresetsItemsComponentNgFactory, i12.PresetsProcessComponentNgFactory, i13.PresetsClientsComponentNgFactory, i14.SettingsComponentNgFactory, i15.SettingsCompanyComponentNgFactory, i16.SettingsBranchesComponentNgFactory, i17.SettingsDepartmentComponentNgFactory, i18.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i19.BrowserXhr, i20.ɵd, []), i0.ɵmpd(4608, i19.ResponseOptions, i19.BaseResponseOptions, []), i0.ɵmpd(4608, i19.XSRFStrategy, i20.ɵe, []), i0.ɵmpd(4608, i19.XHRBackend, i19.XHRBackend, [i19.BrowserXhr, i19.ResponseOptions, i19.XSRFStrategy]), i0.ɵmpd(4608, i19.RequestOptions, i19.BaseRequestOptions, []), i0.ɵmpd(5120, i19.Http, i20.ɵf, [i19.XHRBackend, i19.RequestOptions]), i0.ɵmpd(4608, i21.HttpXsrfTokenExtractor, i21.ɵg, [i22.DOCUMENT, i0.PLATFORM_ID, i21.ɵe]), i0.ɵmpd(4608, i21.ɵh, i21.ɵh, [i21.HttpXsrfTokenExtractor, i21.ɵf]), i0.ɵmpd(4608, i23.UserService, i23.UserService, []), i0.ɵmpd(5120, i21.HTTP_INTERCEPTORS, function (p0_0, p1_0, p2_0) { return [p0_0, new i24.ɵa(p1_0), new i25.AuthInterceptor(p2_0)]; }, [i21.ɵh, i26.NgProgress, i23.UserService]), i0.ɵmpd(4608, i21.XhrFactory, i20.ɵd, []), i0.ɵmpd(4608, i21.HttpXhrBackend, i21.HttpXhrBackend, [i21.XhrFactory]), i0.ɵmpd(6144, i21.HttpBackend, null, [i21.HttpXhrBackend]), i0.ɵmpd(5120, i21.HttpHandler, i20.ɵg, [i21.HttpBackend, [2, i21.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i21.HttpClient, i21.HttpClient, [i21.HttpHandler]), i0.ɵmpd(4608, i21.ɵd, i21.ɵd, []), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i22.NgLocalization, i22.NgLocaleLocalization, [i0.LOCALE_ID, [2, i22.ɵa]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i27.DomSanitizer, i27.ɵe, [i22.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i27.DomSanitizer]), i0.ɵmpd(4608, i27.HAMMER_GESTURE_CONFIG, i27.HammerGestureConfig, []), i0.ɵmpd(5120, i27.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i27.ɵDomEventsPlugin(p0_0, p0_1), new i27.ɵKeyEventsPlugin(p1_0), new i27.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i22.DOCUMENT, i0.NgZone, i22.DOCUMENT, i22.DOCUMENT, i27.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i27.EventManager, i27.EventManager, [i27.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i27.ɵDomSharedStylesHost, i27.ɵDomSharedStylesHost, [i22.DOCUMENT]), i0.ɵmpd(4608, i27.ɵDomRendererFactory2, i27.ɵDomRendererFactory2, [i27.EventManager, i27.ɵDomSharedStylesHost]), i0.ɵmpd(5120, i28.AnimationDriver, i29.ɵc, []), i0.ɵmpd(5120, i28.ɵAnimationStyleNormalizer, i29.ɵd, []), i0.ɵmpd(4608, i28.ɵAnimationEngine, i29.ɵb, [i28.AnimationDriver, i28.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i29.ɵe, [i27.ɵDomRendererFactory2, i28.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4608, i20.ɵc, i20.ɵc, [i27.DOCUMENT, [2, i27.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i27.ɵSharedStylesHost, null, [i20.ɵc]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i27.Meta, i27.Meta, [i22.DOCUMENT]), i0.ɵmpd(4608, i27.Title, i27.Title, [i22.DOCUMENT]), i0.ɵmpd(4608, i30.AnimationBuilder, i29.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i27.DOCUMENT]), i0.ɵmpd(4608, i20.ɵServerRendererFactory2, i20.ɵServerRendererFactory2, [i0.NgZone, i27.DOCUMENT, i27.ɵSharedStylesHost]), i0.ɵmpd(5120, i31.ActivatedRoute, i31.ɵf, [i31.Router]), i0.ɵmpd(4608, i31.NoPreloading, i31.NoPreloading, []), i0.ɵmpd(6144, i31.PreloadingStrategy, null, [i31.NoPreloading]), i0.ɵmpd(135680, i31.RouterPreloader, i31.RouterPreloader, [i31.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i31.PreloadingStrategy]), i0.ɵmpd(4608, i31.PreloadAllModules, i31.PreloadAllModules, []), i0.ɵmpd(5120, i31.ROUTER_INITIALIZER, i31.ɵi, [i31.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i31.ROUTER_INITIALIZER]), i0.ɵmpd(6144, i32.DIR_DOCUMENT, null, [i22.DOCUMENT]), i0.ɵmpd(4608, i32.Directionality, i32.Directionality, [[2, i32.DIR_DOCUMENT]]), i0.ɵmpd(4608, i33.Platform, i33.Platform, []), i0.ɵmpd(4608, i34.ɵi, i34.ɵi, []), i0.ɵmpd(4608, i34.FormBuilder, i34.FormBuilder, []), i0.ɵmpd(4608, i35.ReTree, i35.ReTree, []), i0.ɵmpd(4608, i35.Ng2DeviceService, i35.Ng2DeviceService, []), i0.ɵmpd(4608, i36.NgxfUploaderService, i36.NgxfUploaderService, [i21.HttpClient]), i0.ɵmpd(4608, i37.AlertService, i37.AlertService, [i31.Router]), i0.ɵmpd(4608, i38.AppConfigProvider, i38.AppConfigProvider, []), i0.ɵmpd(4608, i39.AuthService, i39.AuthService, [i23.UserService, i21.HttpClient, i31.Router, i31.ActivatedRoute, i37.AlertService, i38.AppConfigProvider]), i0.ɵmpd(4608, i40.AuthGuard, i40.AuthGuard, [i23.UserService, i31.Router]), i0.ɵmpd(4608, i41.MatIconRegistry, i41.MatIconRegistry, [[2, i21.HttpClient], i27.DomSanitizer]), i0.ɵmpd(4608, i42.PagerService, i42.PagerService, []), i0.ɵmpd(4608, i43.DashService, i43.DashService, [i23.UserService, i21.HttpClient, i31.Router, i31.ActivatedRoute, i37.AlertService, i38.AppConfigProvider]), i0.ɵmpd(4608, i44.PresetsService, i44.PresetsService, [i23.UserService, i21.HttpClient, i31.Router, i31.ActivatedRoute, i37.AlertService, i38.AppConfigProvider]), i0.ɵmpd(4608, i45.SettingsService, i45.SettingsService, [i23.UserService, i21.HttpClient, i31.Router, i31.ActivatedRoute, i37.AlertService, i38.AppConfigProvider]), i0.ɵmpd(4608, i46.OperationsService, i46.OperationsService, [i23.UserService, i21.HttpClient, i31.Router, i31.ActivatedRoute, i37.AlertService, i38.AppConfigProvider]), i0.ɵmpd(4608, i47.ExcelService, i47.ExcelService, []), i0.ɵmpd(512, i19.HttpModule, i19.HttpModule, []), i0.ɵmpd(512, i21.HttpClientXsrfModule, i21.HttpClientXsrfModule, []), i0.ɵmpd(512, i21.HttpClientModule, i21.HttpClientModule, []), i0.ɵmpd(512, i22.CommonModule, i22.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i27.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i31.ɵb()]; }, []), i0.ɵmpd(512, i31.ɵg, i31.ɵg, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "bekycg", []), i0.ɵmpd(2048, i27.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i27.ɵh(p0_0), i31.ɵh(p1_0), i27.ɵf(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i31.ɵg, i27.ɵTRANSITION_ID, i22.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i27.BrowserModule, i27.BrowserModule, [[3, i27.BrowserModule]]), i0.ɵmpd(512, i29.NoopAnimationsModule, i29.NoopAnimationsModule, []), i0.ɵmpd(512, i20.ServerModule, i20.ServerModule, []), i0.ɵmpd(512, i29.BrowserAnimationsModule, i29.BrowserAnimationsModule, []), i0.ɵmpd(512, i35.Ng2DeviceDetectorModule, i35.Ng2DeviceDetectorModule, []), i0.ɵmpd(512, i36.NgxfUploaderModule, i36.NgxfUploaderModule, []), i0.ɵmpd(1024, i31.ɵa, i31.ɵd, [[3, i31.Router]]), i0.ɵmpd(512, i31.UrlSerializer, i31.DefaultUrlSerializer, []), i0.ɵmpd(512, i31.ChildrenOutletContexts, i31.ChildrenOutletContexts, []), i0.ɵmpd(256, i31.ROUTER_CONFIGURATION, { useHash: true }, []), i0.ɵmpd(1024, i22.LocationStrategy, i31.ɵc, [i22.PlatformLocation, [2, i22.APP_BASE_HREF], i31.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i22.Location, i22.Location, [i22.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i31.ROUTES, function () { return [[{ path: "", canActivate: [i40.AuthGuard], component: i48.DashComponent }, { path: "about", canActivate: [i40.AuthGuard], component: i49.AboutComponent }, { path: "login", component: i50.LoginComponent }, { path: "register", component: i51.RegisterComponent }, { path: "operations/salesorder", canActivate: [i40.AuthGuard], component: i52.OperationsSalesOrderComponent }, { path: "operations/joborder", canActivate: [i40.AuthGuard], component: i53.OperationsJobOrderComponent }, { path: "operations/production", canActivate: [i40.AuthGuard], component: i54.OperationsProductionComponent }, { path: "presets", canActivate: [i40.AuthGuard], component: i55.PresetsComponent }, { path: "presets/items", canActivate: [i40.AuthGuard], component: i56.PresetsItemsComponent }, { path: "presets/process", canActivate: [i40.AuthGuard], component: i57.PresetsProcessComponent }, { path: "presets/clients", canActivate: [i40.AuthGuard], component: i58.PresetsClientsComponent }, { path: "settings", canActivate: [i40.AuthGuard], component: i59.SettingsComponent }, { path: "settings/company/:action/:id", canActivate: [i40.AuthGuard], component: i60.SettingsCompanyComponent }, { path: "settings/:company/branch/:action/:id", canActivate: [i40.AuthGuard], component: i61.SettingsBranchesComponent }, { path: "settings/:company/:branch/department/:action/:id", canActivate: [i40.AuthGuard], component: i62.SettingsDepartmentComponent }]]; }, []), i0.ɵmpd(1024, i31.Router, i31.ɵe, [i0.ApplicationRef, i31.UrlSerializer, i31.ChildrenOutletContexts, i22.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i31.ROUTES, i31.ROUTER_CONFIGURATION, [2, i31.UrlHandlingStrategy], [2, i31.RouteReuseStrategy]]), i0.ɵmpd(512, i31.RouterModule, i31.RouterModule, [[2, i31.ɵa], [2, i31.Router]]), i0.ɵmpd(512, i63.AppRoutingModule, i63.AppRoutingModule, []), i0.ɵmpd(512, i32.BidiModule, i32.BidiModule, []), i0.ɵmpd(256, i64.MATERIAL_SANITY_CHECKS, true, []), i0.ɵmpd(512, i64.MatCommonModule, i64.MatCommonModule, [[2, i64.MATERIAL_SANITY_CHECKS]]), i0.ɵmpd(512, i64.MatLineModule, i64.MatLineModule, []), i0.ɵmpd(512, i33.PlatformModule, i33.PlatformModule, []), i0.ɵmpd(512, i64.MatRippleModule, i64.MatRippleModule, []), i0.ɵmpd(512, i64.MatPseudoCheckboxModule, i64.MatPseudoCheckboxModule, []), i0.ɵmpd(512, i65.MatListModule, i65.MatListModule, []), i0.ɵmpd(512, i66.MatToolbarModule, i66.MatToolbarModule, []), i0.ɵmpd(512, i34.ɵba, i34.ɵba, []), i0.ɵmpd(512, i34.FormsModule, i34.FormsModule, []), i0.ɵmpd(512, i34.ReactiveFormsModule, i34.ReactiveFormsModule, []), i0.ɵmpd(512, i67.CustomFormsModule, i67.CustomFormsModule, []), i0.ɵmpd(512, i26.NgProgressModule, i26.NgProgressModule, []), i0.ɵmpd(512, i24.NgProgressHttpClientModule, i24.NgProgressHttpClientModule, []), i0.ɵmpd(512, i26.NgProgress, i26.NgProgress, []), i0.ɵmpd(512, i68.NgProgressRouterModule, i68.NgProgressRouterModule, [i31.Router, i26.NgProgress]), i0.ɵmpd(512, i69.ChartsModule, i69.ChartsModule, []), i0.ɵmpd(512, i70.AppModule, i70.AppModule, []), i0.ɵmpd(512, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i21.ɵe, "XSRF-TOKEN", []), i0.ɵmpd(256, i21.ɵf, "X-XSRF-TOKEN", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;
//# sourceMappingURL=app.server.module.ngfactory.js.map