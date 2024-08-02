"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router_js_1 = require("./Router.js");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/', Router_js_1.routes);
app.listen(PORT, () => {
    console.log('App running in port ', PORT);
});
