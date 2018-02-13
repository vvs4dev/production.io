"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var user_service_1 = require("./../_services/user.service");
var alert_service_1 = require("./../_services/alert.service");
require("rxjs/add/operator/map");
var app_config_provider_1 = require("./../app-config.provider");
var PresetsService = /** @class */ (function () {
    function PresetsService(user, http, router, aRoute, alert, appConfig) {
        this.user = user;
        this.http = http;
        this.router = router;
        this.aRoute = aRoute;
        this.alert = alert;
        this.appConfig = appConfig;
        this.aItemToEdit = {};
        this.aProductToEdit = {};
        this.aProcessToEdit = {};
        this.aClientToEdit = {};
    }
    // ================================================ Master =================================================
    // ================================================ Master =================================================
    PresetsService.prototype.countMaster = 
    // ================================================ Master =================================================
    function (master) {
        return this.http.get(this.appConfig.apiEndpoint + '/cmaster/count/' + master);
    };
    PresetsService.prototype.validateMaster = function (master, code) {
        return this.http.get(this.appConfig.apiEndpoint + '/cmaster/validate/' + master + '/' + code);
    };
    PresetsService.prototype.getMaster = function (master, code) {
        return this.http.get(this.appConfig.apiEndpoint + '/cmaster/get/' + master + '/' + code);
    };
    // ================================================ Items =================================================
    // ================================================ Items =================================================
    PresetsService.prototype.getAllItems = 
    // ================================================ Items =================================================
    function () {
        return this.http.get(this.appConfig.apiEndpoint + '/masteritems');
    };
    PresetsService.prototype.setActiveItemToEdit = function (item) {
        this.aItemToEdit = item;
    };
    PresetsService.prototype.getActiveItemToEdit = function () {
        return this.aItemToEdit;
    };
    PresetsService.prototype.updateItem = function (item) {
        // console.log('Itemwork', Itemwork);
        if (this.aItemToEdit) {
            // console.log('Put');
            return this.http.put(this.appConfig.apiEndpoint + '/masteritems', item);
        }
        else {
            // console.log('Post');
            return this.http.post(this.appConfig.apiEndpoint + '/masteritems', item);
        }
    };
    // ================================================ Products =================================================
    // ================================================ Products =================================================
    PresetsService.prototype.getAllProducts = 
    // ================================================ Products =================================================
    function () {
        return this.http.get(this.appConfig.apiEndpoint + '/masterproduct');
    };
    PresetsService.prototype.setActiveProductToEdit = function (style) {
        this.aProductToEdit = style;
    };
    PresetsService.prototype.getActiveProductToEdit = function () {
        return this.aProductToEdit;
    };
    PresetsService.prototype.updateProduct = function (product) {
        // console.log('Productwork', Productwork);
        if (this.aProductToEdit) {
            // console.log('Put');
            return this.http.put(this.appConfig.apiEndpoint + '/masterproduct', product);
        }
        else {
            // console.log('Post');
            return this.http.post(this.appConfig.apiEndpoint + '/masterproduct', product);
        }
    };
    // ================================================ Process =================================================
    // ================================================ Process =================================================
    PresetsService.prototype.getAllProcesses = 
    // ================================================ Process =================================================
    function () {
        return this.http.get(this.appConfig.apiEndpoint + '/masterprocess');
    };
    PresetsService.prototype.setActiveProcessToEdit = function (style) {
        this.aProcessToEdit = style;
    };
    PresetsService.prototype.getActiveProcessToEdit = function () {
        return this.aProcessToEdit;
    };
    PresetsService.prototype.updateProcess = function (process) {
        // console.log('process', process);
        if (this.aProcessToEdit) {
            // console.log('Put');
            return this.http.put(this.appConfig.apiEndpoint + '/masterprocess', process);
        }
        else {
            // console.log('Post');
            return this.http.post(this.appConfig.apiEndpoint + '/masterprocess', process);
        }
    };
    // ================================================ Clients =================================================
    // ================================================ Clients =================================================
    PresetsService.prototype.getAllClients = 
    // ================================================ Clients =================================================
    function () {
        return this.http.get(this.appConfig.apiEndpoint + '/masterclients');
    };
    PresetsService.prototype.setActiveClientToEdit = function (client) {
        this.aClientToEdit = client;
    };
    PresetsService.prototype.getActiveClientToEdit = function () {
        return this.aClientToEdit;
    };
    PresetsService.prototype.updateClient = function (client) {
        // console.log('process', process);
        if (this.aClientToEdit) {
            // console.log('Put');
            return this.http.put(this.appConfig.apiEndpoint + '/masterclients', client);
        }
        else {
            // console.log('Post');
            return this.http.post(this.appConfig.apiEndpoint + '/masterclients', client);
        }
    };
    PresetsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PresetsService.ctorParameters = function () { return [
        { type: user_service_1.UserService, },
        { type: http_1.HttpClient, },
        { type: router_1.Router, },
        { type: router_1.ActivatedRoute, },
        { type: alert_service_1.AlertService, },
        { type: app_config_provider_1.AppConfigProvider, },
    ]; };
    return PresetsService;
}());
exports.PresetsService = PresetsService;
//# sourceMappingURL=presets.service.js.map