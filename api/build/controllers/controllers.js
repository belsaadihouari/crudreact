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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.createUser = void 0;
const validationzod_1 = require("../util/validationzod");
const prismaClient_1 = __importDefault(require("../util/prismaClient"));
const hachPassword_1 = require("../util/hachPassword");
const validationzodsignin_1 = require("../util/validationzodsignin");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, cpassword, isAdmin } = req.body;
    try {
        const validation = validationzod_1.validationzod.safeParse(req.body);
        console.log(validation);
        if (!validation.success) {
            return res.json({ validator: "error validation of inputs" });
        }
        const user = yield prismaClient_1.default.user.findMany({
            where: {
                email: req.body.email,
            },
        });
        if (user.length > 0) {
            return res.json({ message: "email already exist" });
        }
        if (req.body.password !== req.body.cpassword) {
            return res.json({ cpass: "erreur confirm password" });
        }
        const hach = yield (0, hachPassword_1.hachPassword)(password);
        const newUser = yield prismaClient_1.default.user.create({
            data: {
                username: username,
                email: email,
                password: hach,
                isAdmin: isAdmin,
            },
        });
        return res.json({ response: "user added successfuly" });
    }
    catch (_a) {
        res.status(500).json("error");
    }
});
exports.createUser = createUser;
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prismaClient_1.default.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                isAdmin: true,
            },
        });
        return res.json(data);
    }
    catch (error) { }
});
exports.getData = getData;
const authUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validation = validationzodsignin_1.validationzodsignin.safeParse(req.body);
        if (!validation.success) {
            return res.json({ validator: "error validation input" });
        }
        const user = yield prismaClient_1.default.user.findMany({
            where: {
                email: req.body.email,
            },
        });
        if (user.length < 1) {
            return res.json({ users: "error email or password" });
        }
    }
    catch (error) { }
});
