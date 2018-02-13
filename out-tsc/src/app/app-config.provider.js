"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppConfigProvider = /** @class */ (function () {
    function AppConfigProvider() {
        this.apiEndpoint = 'https://bepp.herokuapp.com';
        // apiEndpoint = 'http://localhost:5000';
        this.docsBase = '/_docs';
        this.dropMenu = {
            dash: [
                {
                    'icon': 'icofont icofont-speed-meter',
                    'type': 'parent',
                    'parent': 'Dashboard',
                    'routerLink': '/',
                }
            ],
            profile: [
                // {
                //   'icon': 'icon-user',
                //   'type': 'parent',
                //   'parent' : 'Profile',
                //   'routerLink' : '/',
                // },
                {
                    'icon': 'icofont icofont-settings',
                    'type': 'parent',
                    'parent': 'Settings',
                    'routerLink': '/settings',
                },
                {
                    'icon': 'icofont icofont-logout',
                    'type': 'parent',
                    'parent': 'Logout',
                    'routerLink': '/login',
                }
            ],
            operations: [
                {
                    'icon': 'icofont icofont-delivery-time',
                    'type': 'parent',
                    'parent': 'Sales Order',
                    'routerLink': '/operations/salesorder',
                },
                {
                    'icon': 'icofont icofont-recycle-alt',
                    'type': 'parent',
                    'parent': 'Job Order',
                    'routerLink': '/operations/joborder',
                },
                {
                    'icon': 'icofont icofont-worker',
                    'type': 'parent',
                    'parent': 'Production',
                    'routerLink': '/operations/production',
                }
            ],
            presets: [
                {
                    'icon': 'icofont icofont-cubes',
                    'type': 'parent',
                    'parent': 'Items',
                    'routerLink': '/presets/items',
                    'hasSubMenu': false,
                },
                {
                    'icon': 'icofont icofont-recycle',
                    'type': 'parent',
                    'parent': 'Process',
                    'routerLink': '/presets/process',
                    'hasSubMenu': false,
                },
                {
                    'icon': 'icofont icofont-people',
                    'type': 'parent',
                    'parent': 'Clients',
                    'routerLink': '/presets/clients',
                    'hasSubMenu': false,
                }
            ]
        };
        this.itemTypes = [
            {
                'code': 'rm',
                'name': 'Raw Material'
            },
            {
                'code': 'pk',
                'name': 'Packing Material'
            },
            {
                'code': 'acc',
                'name': 'Accessories'
            },
            {
                'code': 'con',
                'name': 'Consumables'
            },
            {
                'code': 'fg',
                'name': 'Finished Goods'
            },
            {
                'code': 'ot',
                'name': 'Others'
            }
        ];
    }
    AppConfigProvider.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AppConfigProvider.ctorParameters = function () { return []; };
    return AppConfigProvider;
}());
exports.AppConfigProvider = AppConfigProvider;
//# sourceMappingURL=app-config.provider.js.map