"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundException = void 0;
const notFoundException = (req, res) => {
    res.status(404).send({ message: 'Not Found' });
};
exports.notFoundException = notFoundException;
