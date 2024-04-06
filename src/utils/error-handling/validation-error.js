"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationErrorsMiddleware = void 0;
const express_validator_1 = require("express-validator");
// Middleware to handle validation errors
const handleValidationErrorsMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
exports.handleValidationErrorsMiddleware = handleValidationErrorsMiddleware;
