"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupExpressApp = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const _404_exception_1 = require("./utils/exceptions/404.exception");
const handle_exception_1 = require("./utils/exceptions/handle.exception");
const auth_router_1 = require("./routers/auth.router");
const setupExpressApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, morgan_1.default)('dev'));
    app.use('/auth', auth_router_1.router);
    app.use(_404_exception_1.notFoundException);
    app.use(handle_exception_1.handleException);
    return app;
};
exports.setupExpressApp = setupExpressApp;
