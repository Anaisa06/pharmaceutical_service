"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medsRoutes = void 0;
const express_1 = __importDefault(require("express"));
exports.medsRoutes = (0, express_1.default)();
exports.medsRoutes.get('/', (_, res) => {
    res.send('Hola desde meds');
});
