import { Router } from "express";

import createUserController from "../controllers/createUser.controller"
import deleteUserController from "../controllers/deletUser.controller"
import listUserController from "../controllers/listUsers.controller"
import updateUserController from "../controllers/updateUser.controller"

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware"
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware"
import verifyIsAdmmiddleware from "../middlewares/verifyIsAdm.middleware"

const router = Router();


router.post("", verifyEmailAvailabilityMiddleware, createUserController) //cria meu usuário
router.get("",verifyAuthTokenMiddleware,verifyIsAdmmiddleware,listUserController) //lista todos os usuários
router.get("/profile",verifyAuthTokenMiddleware, listUserController) //retorna os dados do usuário logado
router.patch("/:uuid", verifyAuthTokenMiddleware, updateUserController) //atualiza os dados de um usuário
router.delete("/:uuid", verifyAuthTokenMiddleware, deleteUserController) //deleta usuários do banco
export default router;
