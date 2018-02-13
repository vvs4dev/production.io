"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./app.component.scss.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../../node_modules/@ngx-progressbar/core/ngx-progressbar-core.ngfactory");
var i3 = require("@ngx-progressbar/core");
var i4 = require("@angular/common");
var i5 = require("./_directives/alert/alert.component.ngfactory");
var i6 = require("./_directives/alert/alert.component");
var i7 = require("./_services/alert.service");
var i8 = require("@angular/router");
var i9 = require("./app.component");
var i10 = require("ng2-device-detector");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "uk-alert-danger"], ["style", "text-align:center;"], ["uk-alert", ""]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Internet Connectivity is Lost, Please Connect to internet"])), (_l()(), i1.ɵted(-1, null, ["\n  "]))], null, null); }
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "ng-progress", [], null, null, null, i2.View_ɵa_0, i2.RenderType_ɵa)), i1.ɵdid(1, 573440, null, 0, i3.ɵa, [i3.NgProgress], { color: [0, "color"], thick: [1, "thick"] }, null), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵeld(3, 0, null, null, 10, "div", [["class", "uk-align-center"], ["style", "margin:0px;z-index:1000000;position:fixed;width:100%;"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵand(16777216, null, null, 2, null, View_AppComponent_1)), i1.ɵdid(6, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), i1.ɵpid(131072, i4.AsyncPipe, [i1.ChangeDetectorRef]), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "app-alert", [], null, null, null, i5.View_AlertComponent_0, i5.RenderType_AlertComponent)), i1.ɵdid(11, 114688, null, 0, i6.AlertComponent, [i7.AlertService], null, null), (_l()(), i1.ɵted(-1, null, ["    \n  "])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n\n"])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵeld(16, 0, null, null, 4, "div", [["class", "wrapper"], ["style", "min-height: 100vh;"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(18, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(19, 212992, null, 0, i8.RouterOutlet, [i8.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵted(-1, null, ["    \n"])), (_l()(), i1.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "red"; var currVal_1 = true; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = (i1.ɵunv(_v, 6, 0, i1.ɵnov(_v, 7).transform(_co.online$)) ? false : true); _ck(_v, 6, 0, currVal_2); _ck(_v, 11, 0); _ck(_v, 19, 0); }, null); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 49152, null, 0, i9.AppComponent, [i10.Ng2DeviceService], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i9.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;
//# sourceMappingURL=app.component.ngfactory.js.map