import { Router } from "express";

import {createUser,getData} from "../controllers/controllers";
const router = Router();

router.post("/createUser", createUser);
router.get("/get",getData)

export default router;
