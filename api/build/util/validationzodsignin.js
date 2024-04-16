"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationzodsignin = void 0;
const zod_1 = require("zod");
exports.validationzodsignin = zod_1.z.object({
    email: zod_1.z.string().email("invalid Email"),
    password: zod_1.z.string(),
    cpassword: zod_1.z.string(),
});
