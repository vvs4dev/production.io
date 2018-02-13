"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./settings-company.component.scss.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/forms");
var i3 = require("@angular/common");
var i4 = require("./settings-company.component");
var i5 = require("../../_services/user.service");
var i6 = require("@angular/router");
var i7 = require("../../_services/alert.service");
var i8 = require("../settings.service");
var i9 = require("../../app.component");
var styles_SettingsCompanyComponent = [i0.styles];
var RenderType_SettingsCompanyComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SettingsCompanyComponent, data: {} });
exports.RenderType_SettingsCompanyComponent = RenderType_SettingsCompanyComponent;
function View_SettingsCompanyComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["id", "validation-error"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Invalid Name"]))], null, null); }
function View_SettingsCompanyComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["id", "validation-error"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Organisation already Exists"]))], null, null); }
function View_SettingsCompanyComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "button", [["class", "uk-button uk-width-1-1 uk-button-primary"], ["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Submit "]))], null, null); }
function View_SettingsCompanyComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "button", [["class", "uk-button uk-width-1-1 uk-button-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Logging In "])), (_l()(), i1.ɵeld(2, 0, null, null, 2, "span", [["style", "float:right;"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A0"])), (_l()(), i1.ɵeld(4, 0, null, null, 0, "i", [["class", "fa fa-circle-o-notch fa-spin"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
function View_SettingsCompanyComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 141, "div", [["class", "uk-width-1-1@s uk-width-1-2@m uk-width-1-2@l uk-align-center"], ["uk-grid", ""]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(2, 0, null, null, 138, "div", [["class", "login-frame"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "h3", [["class", "align-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Organisation"])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵeld(11, 0, null, null, 127, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("submit" === en)) {
        var pd_2 = (_co.addOrganisationData(_co.myOrganisationForm.value) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(12, 16384, null, 0, i2.ɵbf, [], null, null), i1.ɵdid(13, 540672, null, 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]), i1.ɵdid(15, 16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i1.ɵted(-1, null, ["\n          "])), (_l()(), i1.ɵeld(17, 0, null, null, 119, "fieldset", [["class", "uk-fieldset"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵeld(19, 0, null, null, 16, "div", [["class", "uk-margin"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(21, 0, null, null, 7, "input", [["autofocus", ""], ["class", "uk-input"], ["formControlName", "name"], ["name", "name"], ["placeholder", "Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_co.genOrganisationCode(_co.myOrganisationForm.controls["name"].value) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(22, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(23, { "uk-form-danger": 0 }), i1.ɵdid(24, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(26, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(28, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SettingsCompanyComponent_1)), i1.ɵdid(31, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SettingsCompanyComponent_2)), i1.ɵdid(34, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵeld(37, 0, null, null, 12, "div", [["class", "uk-margin"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(39, 0, null, null, 9, "input", [["class", "uk-input"], ["formControlName", "website"], ["maxlength", "30"], ["name", "website"], ["placeholder", "website"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 42)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 42).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 42)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 42)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(40, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(41, { "uk-form-danger": 0 }), i1.ɵdid(42, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(43, 540672, null, 0, i2.MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), i1.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i2.MaxLengthValidator]), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(46, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(48, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵeld(51, 0, null, null, 12, "div", [["class", "uk-margin"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵeld(53, 0, null, null, 9, "input", [["class", "uk-input"], ["formControlName", "location"], ["maxlength", "30"], ["name", "location"], ["placeholder", "location"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 56)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 56).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 56)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 56)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(54, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(55, { "uk-form-danger": 0 }), i1.ɵdid(56, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(57, 540672, null, 0, i2.MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), i1.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i2.MaxLengthValidator]), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(60, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(62, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵeld(65, 0, null, null, 64, "div", [["formGroupName", "address"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), i1.ɵdid(66, 212992, null, 0, i2.FormGroupName, [[3, i2.ControlContainer], [8, null], [8, null]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupName]), i1.ɵdid(68, 16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵeld(70, 0, null, null, 10, "div", [["class", "uk-margin"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                    "])), (_l()(), i1.ɵeld(72, 0, null, null, 7, "input", [["class", "uk-input"], ["formControlName", "po"], ["name", "po"], ["placeholder", "PO"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 73)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 73).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 73)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 73)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(73, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(74, 16384, null, 0, i2.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i2.RequiredValidator]), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(77, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(79, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵeld(82, 0, null, null, 10, "div", [["class", "uk-margin"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                    "])), (_l()(), i1.ɵeld(84, 0, null, null, 7, "input", [["class", "uk-input"], ["formControlName", "street"], ["name", "street"], ["placeholder", "street"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 85)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 85).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 85)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 85)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(85, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(86, 16384, null, 0, i2.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i2.RequiredValidator]), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(89, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(91, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵeld(94, 0, null, null, 10, "div", [["class", "uk-margin"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                    "])), (_l()(), i1.ɵeld(96, 0, null, null, 7, "input", [["class", "uk-input"], ["formControlName", "city"], ["name", "city"], ["placeholder", "City"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 97)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 97).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 97)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 97)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(97, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(98, 16384, null, 0, i2.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i2.RequiredValidator]), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(101, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(103, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵeld(106, 0, null, null, 10, "div", [["class", "uk-margin"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                    "])), (_l()(), i1.ɵeld(108, 0, null, null, 7, "input", [["class", "uk-input"], ["formControlName", "state"], ["name", "state"], ["placeholder", "State"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 109)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 109).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 109)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 109)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(109, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(110, 16384, null, 0, i2.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i2.RequiredValidator]), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(113, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(115, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵeld(118, 0, null, null, 10, "div", [["class", "uk-margin"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                    "])), (_l()(), i1.ɵeld(120, 0, null, null, 7, "input", [["class", "uk-input"], ["formControlName", "pincode"], ["name", "pincode"], ["placeholder", "PinCode"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 121)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 121).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 121)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 121)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(121, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(122, 16384, null, 0, i2.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i2.RequiredValidator]), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(125, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(127, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SettingsCompanyComponent_3)), i1.ɵdid(132, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SettingsCompanyComponent_4)), i1.ɵdid(135, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n          "])), (_l()(), i1.ɵted(-1, null, ["\n          "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["    \n      "])), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.myOrganisationForm; _ck(_v, 13, 0, currVal_7); var currVal_15 = "uk-input"; var currVal_16 = _ck(_v, 23, 0, ((!_co.myOrganisationForm.controls["name"].valid && _co.myOrganisationForm.controls["name"].touched) && ((_co.myOrganisationForm.controls["name"].errors == null) ? null : _co.myOrganisationForm.controls["name"].errors.email))); _ck(_v, 22, 0, currVal_15, currVal_16); var currVal_17 = "name"; _ck(_v, 26, 0, currVal_17); var currVal_18 = ((!_co.myOrganisationForm.controls["name"].valid && _co.myOrganisationForm.controls["name"].touched) && ((_co.myOrganisationForm.controls["name"].errors == null) ? null : _co.myOrganisationForm.controls["name"].errors.name)); _ck(_v, 31, 0, currVal_18); var currVal_19 = !_co.organisationName.available; _ck(_v, 34, 0, currVal_19); var currVal_28 = "uk-input"; var currVal_29 = _ck(_v, 41, 0, ((!_co.myOrganisationForm.controls["website"].valid && _co.myOrganisationForm.controls["website"].touched) && ((_co.myOrganisationForm.controls["website"].errors == null) ? null : _co.myOrganisationForm.controls["website"].errors.rangeLength))); _ck(_v, 40, 0, currVal_28, currVal_29); var currVal_30 = "30"; _ck(_v, 43, 0, currVal_30); var currVal_31 = "website"; _ck(_v, 46, 0, currVal_31); var currVal_40 = "uk-input"; var currVal_41 = _ck(_v, 55, 0, ((!_co.myOrganisationForm.controls["website"].valid && _co.myOrganisationForm.controls["website"].touched) && ((_co.myOrganisationForm.controls["website"].errors == null) ? null : _co.myOrganisationForm.controls["website"].errors.rangeLength))); _ck(_v, 54, 0, currVal_40, currVal_41); var currVal_42 = "30"; _ck(_v, 57, 0, currVal_42); var currVal_43 = "location"; _ck(_v, 60, 0, currVal_43); var currVal_51 = "address"; _ck(_v, 66, 0, currVal_51); var currVal_60 = ""; _ck(_v, 74, 0, currVal_60); var currVal_61 = "po"; _ck(_v, 77, 0, currVal_61); var currVal_70 = ""; _ck(_v, 86, 0, currVal_70); var currVal_71 = "street"; _ck(_v, 89, 0, currVal_71); var currVal_80 = ""; _ck(_v, 98, 0, currVal_80); var currVal_81 = "city"; _ck(_v, 101, 0, currVal_81); var currVal_90 = ""; _ck(_v, 110, 0, currVal_90); var currVal_91 = "state"; _ck(_v, 113, 0, currVal_91); var currVal_100 = ""; _ck(_v, 122, 0, currVal_100); var currVal_101 = "pincode"; _ck(_v, 125, 0, currVal_101); var currVal_102 = !_co.loading; _ck(_v, 132, 0, currVal_102); var currVal_103 = _co.loading; _ck(_v, 135, 0, currVal_103); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 15).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 15).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 15).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 15).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 15).ngClassValid; var currVal_5 = i1.ɵnov(_v, 15).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = i1.ɵnov(_v, 28).ngClassUntouched; var currVal_9 = i1.ɵnov(_v, 28).ngClassTouched; var currVal_10 = i1.ɵnov(_v, 28).ngClassPristine; var currVal_11 = i1.ɵnov(_v, 28).ngClassDirty; var currVal_12 = i1.ɵnov(_v, 28).ngClassValid; var currVal_13 = i1.ɵnov(_v, 28).ngClassInvalid; var currVal_14 = i1.ɵnov(_v, 28).ngClassPending; _ck(_v, 21, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_20 = (i1.ɵnov(_v, 43).maxlength ? i1.ɵnov(_v, 43).maxlength : null); var currVal_21 = i1.ɵnov(_v, 48).ngClassUntouched; var currVal_22 = i1.ɵnov(_v, 48).ngClassTouched; var currVal_23 = i1.ɵnov(_v, 48).ngClassPristine; var currVal_24 = i1.ɵnov(_v, 48).ngClassDirty; var currVal_25 = i1.ɵnov(_v, 48).ngClassValid; var currVal_26 = i1.ɵnov(_v, 48).ngClassInvalid; var currVal_27 = i1.ɵnov(_v, 48).ngClassPending; _ck(_v, 39, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_32 = (i1.ɵnov(_v, 57).maxlength ? i1.ɵnov(_v, 57).maxlength : null); var currVal_33 = i1.ɵnov(_v, 62).ngClassUntouched; var currVal_34 = i1.ɵnov(_v, 62).ngClassTouched; var currVal_35 = i1.ɵnov(_v, 62).ngClassPristine; var currVal_36 = i1.ɵnov(_v, 62).ngClassDirty; var currVal_37 = i1.ɵnov(_v, 62).ngClassValid; var currVal_38 = i1.ɵnov(_v, 62).ngClassInvalid; var currVal_39 = i1.ɵnov(_v, 62).ngClassPending; _ck(_v, 53, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_44 = i1.ɵnov(_v, 68).ngClassUntouched; var currVal_45 = i1.ɵnov(_v, 68).ngClassTouched; var currVal_46 = i1.ɵnov(_v, 68).ngClassPristine; var currVal_47 = i1.ɵnov(_v, 68).ngClassDirty; var currVal_48 = i1.ɵnov(_v, 68).ngClassValid; var currVal_49 = i1.ɵnov(_v, 68).ngClassInvalid; var currVal_50 = i1.ɵnov(_v, 68).ngClassPending; _ck(_v, 65, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50); var currVal_52 = (i1.ɵnov(_v, 74).required ? "" : null); var currVal_53 = i1.ɵnov(_v, 79).ngClassUntouched; var currVal_54 = i1.ɵnov(_v, 79).ngClassTouched; var currVal_55 = i1.ɵnov(_v, 79).ngClassPristine; var currVal_56 = i1.ɵnov(_v, 79).ngClassDirty; var currVal_57 = i1.ɵnov(_v, 79).ngClassValid; var currVal_58 = i1.ɵnov(_v, 79).ngClassInvalid; var currVal_59 = i1.ɵnov(_v, 79).ngClassPending; _ck(_v, 72, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59); var currVal_62 = (i1.ɵnov(_v, 86).required ? "" : null); var currVal_63 = i1.ɵnov(_v, 91).ngClassUntouched; var currVal_64 = i1.ɵnov(_v, 91).ngClassTouched; var currVal_65 = i1.ɵnov(_v, 91).ngClassPristine; var currVal_66 = i1.ɵnov(_v, 91).ngClassDirty; var currVal_67 = i1.ɵnov(_v, 91).ngClassValid; var currVal_68 = i1.ɵnov(_v, 91).ngClassInvalid; var currVal_69 = i1.ɵnov(_v, 91).ngClassPending; _ck(_v, 84, 0, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69); var currVal_72 = (i1.ɵnov(_v, 98).required ? "" : null); var currVal_73 = i1.ɵnov(_v, 103).ngClassUntouched; var currVal_74 = i1.ɵnov(_v, 103).ngClassTouched; var currVal_75 = i1.ɵnov(_v, 103).ngClassPristine; var currVal_76 = i1.ɵnov(_v, 103).ngClassDirty; var currVal_77 = i1.ɵnov(_v, 103).ngClassValid; var currVal_78 = i1.ɵnov(_v, 103).ngClassInvalid; var currVal_79 = i1.ɵnov(_v, 103).ngClassPending; _ck(_v, 96, 0, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79); var currVal_82 = (i1.ɵnov(_v, 110).required ? "" : null); var currVal_83 = i1.ɵnov(_v, 115).ngClassUntouched; var currVal_84 = i1.ɵnov(_v, 115).ngClassTouched; var currVal_85 = i1.ɵnov(_v, 115).ngClassPristine; var currVal_86 = i1.ɵnov(_v, 115).ngClassDirty; var currVal_87 = i1.ɵnov(_v, 115).ngClassValid; var currVal_88 = i1.ɵnov(_v, 115).ngClassInvalid; var currVal_89 = i1.ɵnov(_v, 115).ngClassPending; _ck(_v, 108, 0, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89); var currVal_92 = (i1.ɵnov(_v, 122).required ? "" : null); var currVal_93 = i1.ɵnov(_v, 127).ngClassUntouched; var currVal_94 = i1.ɵnov(_v, 127).ngClassTouched; var currVal_95 = i1.ɵnov(_v, 127).ngClassPristine; var currVal_96 = i1.ɵnov(_v, 127).ngClassDirty; var currVal_97 = i1.ɵnov(_v, 127).ngClassValid; var currVal_98 = i1.ɵnov(_v, 127).ngClassInvalid; var currVal_99 = i1.ɵnov(_v, 127).ngClassPending; _ck(_v, 120, 0, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99); }); }
exports.View_SettingsCompanyComponent_0 = View_SettingsCompanyComponent_0;
function View_SettingsCompanyComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-settings-company", [], null, null, null, View_SettingsCompanyComponent_0, RenderType_SettingsCompanyComponent)), i1.ɵdid(1, 114688, null, 0, i4.SettingsCompanyComponent, [i5.UserService, i6.Router, i6.ActivatedRoute, i7.AlertService, i8.SettingsService, i9.AppComponent], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SettingsCompanyComponent_Host_0 = View_SettingsCompanyComponent_Host_0;
var SettingsCompanyComponentNgFactory = i1.ɵccf("app-settings-company", i4.SettingsCompanyComponent, View_SettingsCompanyComponent_Host_0, {}, {}, []);
exports.SettingsCompanyComponentNgFactory = SettingsCompanyComponentNgFactory;
//# sourceMappingURL=settings-company.component.ngfactory.js.map