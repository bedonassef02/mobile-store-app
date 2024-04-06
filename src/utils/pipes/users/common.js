"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmailUniqueness = exports.validatePasswordComplexity = exports.validateEmailFormat = void 0;
const user_service_1 = require("../../../services/user.service");
const { body } = require('express-validator');
const userService = new user_service_1.UserService();
// Validate email format and normalize it
exports.validateEmailFormat = body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();
// Validate password complexity
exports.validatePasswordComplexity = body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long');
// Check if the email is unique
const checkEmailUniqueness = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield userService.findByEmail(email);
    if (existingUser) {
        throw new Error(`Email address ${email} is already in use`);
    }
    return true;
});
exports.checkEmailUniqueness = checkEmailUniqueness;
