"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var user_service_1 = require("./../_services/user.service");
var alert_service_1 = require("./../_services/alert.service");
require("rxjs/add/operator/map");
var app_config_provider_1 = require("./../app-config.provider");
var OperationsService = /** @class */ (function () {
    function OperationsService(user, http, router, aRoute, alert, appConfig) {
        this.user = user;
        this.http = http;
        this.router = router;
        this.aRoute = aRoute;
        this.alert = alert;
        this.appConfig = appConfig;
        this.aSalesOrderToEdit = {};
        this.aJobOrderToEdit = {};
        this.aProductToEdit = {};
        this.aProductionToEdit = {};
        this.aProcessToEdit = {};
    }
    // ================================================ Master =================================================
    // ================================================ Master =================================================
    OperationsService.prototype.formatDate = 
    // ================================================ Master =================================================
    function (dateString) {
        this.dateToFormat = new Date(dateString);
        var month = this.dateToFormat.getMonth() + 1;
        var date = this.dateToFormat.getDate();
        month = (month < 10) ? ('0' + month) : month;
        date = (date < 10) ? ('0' + date) : date;
        // console.log('formatDate', this.dateToFormat.getFullYear() + '-' +  month + '-' + date);
        return this.dateToFormat.getFullYear() + '-' + month + '-' + date;
    };
    OperationsService.prototype.countMaster = function (master) {
        return this.http.get(this.appConfig.apiEndpoint + '/cmaster/count/' + master);
    };
    OperationsService.prototype.validateMaster = function (master, code) {
        return this.http.get(this.appConfig.apiEndpoint + '/cmaster/validate/' + master + '/' + code);
    };
    OperationsService.prototype.getMaster = function (master, code) {
        return this.http.get(this.appConfig.apiEndpoint + '/cmaster/get/' + master + '/' + code);
    };
    // ================================================ SalesOrders =================================================
    // ================================================ SalesOrders =================================================
    OperationsService.prototype.getAllSalesOrders = 
    // ================================================ SalesOrders =================================================
    function () {
        return this.http.get(this.appConfig.apiEndpoint + '/salesorder');
    };
    OperationsService.prototype.setActiveSalesOrderToEdit = function (salesOrder) {
        this.aSalesOrderToEdit = salesOrder;
    };
    OperationsService.prototype.getActiveSalesOrderToEdit = function () {
        return this.aSalesOrderToEdit;
    };
    OperationsService.prototype.updateSalesOrder = function (salesOrder) {
        // console.log('SalesOrderwork', SalesOrderwork);
        if (this.aSalesOrderToEdit) {
            // console.log('Put');
            return this.http.put(this.appConfig.apiEndpoint + '/salesorder', salesOrder);
        }
        else {
            // console.log('Post');
            return this.http.post(this.appConfig.apiEndpoint + '/salesorder', salesOrder);
        }
    };
    // ================================================ JobOrder =================================================
    // ================================================ JobOrder =================================================
    OperationsService.prototype.getAllJobOrders = 
    // ================================================ JobOrder =================================================
    function () {
        return this.http.get(this.appConfig.apiEndpoint + '/joborder');
    };
    OperationsService.prototype.setActiveJobOrderToEdit = function (joborder) {
        this.aJobOrderToEdit = joborder;
    };
    OperationsService.prototype.getActiveJobOrderToEdit = function () {
        return this.aJobOrderToEdit;
    };
    OperationsService.prototype.updateJobOrder = function (joborder) {
        // console.log('aJobOrderToEdit', aJobOrderToEdit);
        if (this.aJobOrderToEdit) {
            // console.log('Put');
            return this.http.put(this.appConfig.apiEndpoint + '/joborder', joborder);
        }
        else {
            // console.log('Post');
            return this.http.post(this.appConfig.apiEndpoint + '/joborder', joborder);
        }
    };
    // ================================================ Process =================================================
    // ================================================ Process =================================================
    OperationsService.prototype.getAllProcesses = 
    // ================================================ Process =================================================
    function () {
        return this.http.get(this.appConfig.apiEndpoint + '/masterprocess');
    };
    OperationsService.prototype.setActiveProcessToEdit = function (style) {
        this.aProcessToEdit = style;
    };
    OperationsService.prototype.getActiveProcessToEdit = function () {
        return this.aProcessToEdit;
    };
    OperationsService.prototype.updateProcess = function (process) {
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
    // ================================================ Production =================================================
    // ================================================ Production =================================================
    OperationsService.prototype.getAllProduction = 
    // ================================================ Production =================================================
    function () {
        return this.http.get(this.appConfig.apiEndpoint + '/production');
    };
    OperationsService.prototype.setActiveProductionToEdit = function (production) {
        this.aProductionToEdit = production;
    };
    OperationsService.prototype.getActiveProductionToEdit = function () {
        return this.aProductionToEdit;
    };
    OperationsService.prototype.updateProduction = function (production) {
        // console.log('process', process);
        if (this.aProductionToEdit) {
            // console.log('Put');
            return this.http.put(this.appConfig.apiEndpoint + '/production', production);
        }
        else {
            // console.log('Post');
            return this.http.post(this.appConfig.apiEndpoint + '/production', production);
        }
    };
    OperationsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    OperationsService.ctorParameters = function () { return [
        { type: user_service_1.UserService, },
        { type: http_1.HttpClient, },
        { type: router_1.Router, },
        { type: router_1.ActivatedRoute, },
        { type: alert_service_1.AlertService, },
        { type: app_config_provider_1.AppConfigProvider, },
    ]; };
    return OperationsService;
}());
exports.OperationsService = OperationsService;
//# sourceMappingURL=operations.service.js.map