import { Router } from "express";
import { validateSchemaRequest } from "../middleware/validator.requestBody.js";
import { signUpSchema } from "../schemas/auth.schemas.js";
import { signUp, signIn, getUsers,logout } from "../controllers/auth.controller.js";
const router = Router();

router.post("/sign-up", validateSchemaRequest(signUpSchema), signUp);
router.post("/sign-in", signIn);
router.get("/getUsersInfo", getUsers);
router.post("/logout", logout);


export default router;
