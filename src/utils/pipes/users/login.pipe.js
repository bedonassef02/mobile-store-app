"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../../error-handling/validation-error");
const common_1 = require("./common");
exports.signInPipe = [common_1.validateEmailFormat, common_1.validatePasswordComplexity, validation_error_1.handleValidationErrorsMiddleware];
