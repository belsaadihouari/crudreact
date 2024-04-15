"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationzod = void 0;
const zod_1 = require("zod");
exports.validationzod = zod_1.z.object({
    username: zod_1.z.string(),
    email: zod_1.z.string().email("invalid Email"),
    password: zod_1.z.string(),
    cpassword: zod_1.z.string(),
    isAdmin: zod_1.z.boolean().optional(),
});
