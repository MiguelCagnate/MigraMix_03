import { Router } from "express";
import { validateSchemaRequest } from "../middleware/validator.requestBody.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import { organizerSchema } from "../schemas/organizer.schemas.js";
import { newOrganizer,getPerfilOrganizer } from "../controllers/organizer.controller.js";
const router = Router();

router.post(
  "/organizer",
  authenticateToken,
  validateSchemaRequest(organizerSchema),
  newOrganizer
);
router.get("/organizer",authenticateToken,getPerfilOrganizer);
export default router;
