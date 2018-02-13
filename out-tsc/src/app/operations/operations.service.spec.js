"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var operations_service_1 = require("./operations.service");
describe('OperationsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [operations_service_1.OperationsService]
        });
    });
    it('should be created', testing_1.inject([operations_service_1.OperationsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=operations.service.spec.js.map