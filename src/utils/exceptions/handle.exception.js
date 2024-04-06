"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleException = void 0;
const handleException = (err, req, res) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something broke!' });
};
exports.handleException = handleException;
