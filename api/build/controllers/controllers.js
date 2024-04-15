"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const validationzod_1 = require("../util/validationzod");
const prisma = new client_1.PrismaClient();
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, cpassword, isAdmin } = req.body;
    try {
        const validation = validationzod_1.validationzod.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json(validation);
        }
        const newUser = yield prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password,
                isAdmin: isAdmin,
            },
        });
        res.status(201).json(newUser);
    }
    catch (_a) {
        res.status(500).json("error");
    }
});
exports.default = createUser;
