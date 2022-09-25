import userLoginController from "../controllers/userLogin.controller";
import { Router } from "express";

const router = Router()

router.post("", userLoginController) //gera um TOKEN JWT recebendo email e senha no corpo da req como JSON


export default router
