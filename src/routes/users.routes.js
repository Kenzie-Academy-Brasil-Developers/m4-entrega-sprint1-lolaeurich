import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deletUser.controller";
import listUserController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmmiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();


router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.get("",verifyAuthTokenMiddleware,verifyIsAdmmiddleware,listUserController);
router.get("/profile",verifyAuthTokenMiddleware, listUserController)
router.put("/:uuid", verifyAuthTokenMiddleware,verifyIsAdmmiddleware, updateUserController);
router.delete("/:uuid", verifyAuthTokenMiddleware, deleteUserController);
export default router;
