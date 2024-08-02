"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const meds_routes_js_1 = require("./routes/meds.routes.js");
exports.routes = (0, express_1.default)();
exports.routes.use('/meds', meds_routes_js_1.medsRoutes);
