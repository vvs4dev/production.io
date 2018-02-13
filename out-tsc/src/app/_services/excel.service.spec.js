"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var excel_service_1 = require("./excel.service");
describe('ExcelService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [excel_service_1.ExcelService]
        });
    });
    it('should be created', testing_1.inject([excel_service_1.ExcelService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=excel.service.spec.js.map