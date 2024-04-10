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
const category_router_1 = require("./routers/category.router");
const product_router_1 = require("./routers/product.router");
const wishlist_router_1 = require("./routers/wishlist.router");
const cart_router_1 = require("./routers/cart.router");
const order_router_1 = require("./routers/order.router");
const payment_router_1 = require("./routers/payment.router");
const user_router_1 = require("./routers/user.router");
const node_path_1 = __importDefault(require("node:path"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const code_1 = require("./utils/db-seed/code");
const SESSION_SECRET = process.env.SESSION_SECRET || '';
const setupExpressApp = () => {
    const app = (0, express_1.default)();
    (0, code_1.seedDatabase)();
    app.use((0, express_session_1.default)({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    }));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, morgan_1.default)('dev'));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    const parentDir = node_path_1.default.resolve(__dirname, '..');
    app.use(express_1.default.static(node_path_1.default.join(parentDir, 'public')));
    app.use('/auth', auth_router_1.router);
    app.use('/categories', category_router_1.router);
    app.use('/products', product_router_1.router);
    app.use('/wishlist', wishlist_router_1.router);
    app.use('/cart', cart_router_1.router);
    app.use('/orders', order_router_1.router);
    app.use('/payment', payment_router_1.router);
    app.use('/user', user_router_1.router);
    app.use(_404_exception_1.notFoundException);
    app.use(handle_exception_1.handleException);
    return app;
};
exports.setupExpressApp = setupExpressApp;
