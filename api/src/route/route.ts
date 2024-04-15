import { Router } from "express";

import createUser from "../controllers/controllers";
const router = Router();

router.post("/createUser", createUser);

export default router;
