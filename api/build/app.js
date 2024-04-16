"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8085;
app.use(express_1.default.json());
const cors_1 = __importDefault(require("cors"));
const corsOptions = {
    origin: ["http://localhost:8000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use((0, cors_1.default)(corsOptions));
const route_1 = __importDefault(require("./route/route"));
app.listen(port, () => {
    console.log("server on");
});
app.use(route_1.default);
