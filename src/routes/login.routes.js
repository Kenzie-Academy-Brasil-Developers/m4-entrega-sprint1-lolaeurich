import userLoginController from "../controllers/userLogin.controller";
import { Router } from "express";

const router = Router()

router.post("", userLoginController)


export default router
