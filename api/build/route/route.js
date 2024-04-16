"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers/controllers");
const router = (0, express_1.Router)();
router.post("/createUser", controllers_1.createUser);
router.get("/get", controllers_1.getData);
exports.default = router;
