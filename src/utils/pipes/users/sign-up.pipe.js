"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpPipe = void 0;
const express_validator_1 = require("express-validator");
const validation_error_1 = require("../../error-handling/validation-error");
const common_1 = require("./common");
exports.signUpPipe = [
    (0, express_validator_1.body)('name')
        .notEmpty()
        .withMessage('Please provide a name')
        .isLength({ max: 32 })
        .withMessage('Name must be less than 32 characters'),
    common_1.validateEmailFormat.custom(common_1.checkEmailUniqueness),
    common_1.validatePasswordComplexity,
    validation_error_1.handleValidationErrorsMiddleware,
];
