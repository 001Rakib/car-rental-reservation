"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const globalErrorHandlers_1 = __importDefault(require("./app/middleware/globalErrorHandlers"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: ["http://localhost:5173", "*"], credentials: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
//application routes
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
//global error handler
app.use(globalErrorHandlers_1.default);
//not found
app.use(notFound_1.default);
exports.default = app;
