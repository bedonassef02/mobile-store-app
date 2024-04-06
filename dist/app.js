"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupExpressApp = void 0;
const express_1 = __importDefault(require("express"));
// import morgan from 'morgan';
const _404_exception_1 = require("./utils/exceptions/404.exception");
const handle_exception_1 = require("./utils/exceptions/handle.exception");
const setupExpressApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    // app.use(morgan('dev'));
    // app.use('/auth', require('./routers/user.router'));
    app.use(_404_exception_1.notFoundException);
    app.use(handle_exception_1.handleException);
    return app;
};
exports.setupExpressApp = setupExpressApp;
